import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, db, collection, query, orderBy, onSnapshot, deleteDoc, doc, User, isConfigValid } from '../firebase';
import { Submission } from '../types';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { LogOut, Trash2, ShieldCheck, Lock, Mail, Info } from 'lucide-react';

const ALLOWED_ADMINS = [
  'proffessional22@gmail.com',
  'bookingforkarinej@gmail.com'
];

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    if (!isConfigValid || !auth) {
      setLoading(false);
      // Load from localStorage for demo
      const existing = JSON.parse(localStorage.getItem('demo_submissions') || '[]');
      setSubmissions(existing);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isConfigValid && db && user && ALLOWED_ADMINS.includes(user.email || '')) {
      const q = query(collection(db, 'submissions'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Submission));
        setSubmissions(docs);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleLogin = async () => {
    if (!auth) return;
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login");
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    toast.success("Logged out");
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      if (isConfigValid && db) {
        await deleteDoc(doc(db, 'submissions', deleteId));
      } else {
        // Local delete
        const existing = JSON.parse(localStorage.getItem('demo_submissions') || '[]');
        const updated = existing.filter((s: any) => s.id !== deleteId);
        localStorage.setItem('demo_submissions', JSON.stringify(updated));
        setSubmissions(updated);
      }
      toast.success("Lead deleted permanently");
      setIsDeleteDialogOpen(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete lead");
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-luxury-ivory">Loading...</div>;
  }

  // If not configured, allow viewing demo data without login
  if (!isConfigValid) {
    return (
      <div className="py-12 bg-luxury-ivory min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-luxury-gold/10 border border-luxury-gold/20 p-4 rounded-2xl mb-8 flex items-center space-x-3">
            <Info className="text-luxury-gold w-5 h-5" />
            <p className="text-sm text-luxury-blue">
              <strong>Demo Mode:</strong> Firebase is not yet configured. You are viewing leads saved in your browser's local storage.
            </p>
          </div>
          <AdminDashboard 
            submissions={submissions} 
            user={null} 
            onLogout={() => {}} 
            onDeleteClick={(id) => {
              setDeleteId(id);
              setIsDeleteDialogOpen(true);
            }} 
          />
        </div>
        <DeleteDialog 
          isOpen={isDeleteDialogOpen} 
          onOpenChange={setIsDeleteDialogOpen} 
          onConfirm={handleDelete} 
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-ivory p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-luxury-gold/10 text-center max-w-md w-full"
        >
          <Lock className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
          <h1 className="text-3xl font-heading font-bold text-luxury-blue mb-4">Admin Access</h1>
          <p className="text-luxury-charcoal/60 mb-8">Please sign in with an authorized Google account to access the dashboard.</p>
          <Button onClick={handleLogin} className="w-full py-6 rounded-xl bg-luxury-blue text-luxury-ivory font-bold flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>Sign in with Google</span>
          </Button>
        </motion.div>
      </div>
    );
  }

  if (!ALLOWED_ADMINS.includes(user.email || '')) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-ivory p-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-red-100 text-center max-w-md w-full">
          <ShieldCheck className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-heading font-bold text-luxury-blue mb-4">Access Denied</h1>
          <p className="text-luxury-charcoal/60 mb-8">Your account ({user.email}) is not authorized to access this page.</p>
          <Button onClick={handleLogout} variant="outline" className="w-full py-6 rounded-xl border-luxury-blue/20 text-luxury-blue font-bold">
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-luxury-ivory min-h-screen">
      <div className="container mx-auto px-4">
        <AdminDashboard 
          submissions={submissions} 
          user={user} 
          onLogout={handleLogout} 
          onDeleteClick={(id) => {
            setDeleteId(id);
            setIsDeleteDialogOpen(true);
          }} 
        />
      </div>
      <DeleteDialog 
        isOpen={isDeleteDialogOpen} 
        onOpenChange={setIsDeleteDialogOpen} 
        onConfirm={handleDelete} 
      />
    </div>
  );
}

function AdminDashboard({ submissions, user, onLogout, onDeleteClick }: any) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-luxury-blue">Admin Dashboard</h1>
          <p className="text-luxury-charcoal/60">Manage all client leads and submissions.</p>
        </div>
        {user && (
          <div className="flex items-center space-x-4 bg-white p-3 rounded-2xl border border-luxury-gold/10 shadow-sm">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-luxury-blue">{user.displayName}</div>
              <div className="text-xs text-luxury-charcoal/50">{user.email}</div>
            </div>
            <Button onClick={onLogout} variant="ghost" size="icon" className="text-luxury-charcoal/60 hover:text-red-500">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-luxury-gold/10 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-luxury-blue/5">
              <TableRow>
                <TableHead className="font-bold text-luxury-blue">Date</TableHead>
                <TableHead className="font-bold text-luxury-blue">Client</TableHead>
                <TableHead className="font-bold text-luxury-blue">Type</TableHead>
                <TableHead className="font-bold text-luxury-blue">Details</TableHead>
                <TableHead className="font-bold text-luxury-blue">Status</TableHead>
                <TableHead className="text-right font-bold text-luxury-blue">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-luxury-charcoal/40 italic">No submissions found.</TableCell>
                </TableRow>
              ) : (
                submissions.map((sub: any) => (
                  <TableRow key={sub.id} className="hover:bg-luxury-ivory/30 transition-colors">
                    <TableCell className="text-xs text-luxury-charcoal/60">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="font-bold text-luxury-blue">{sub.fullName}</div>
                      <div className="text-xs text-luxury-charcoal/50">{sub.email}</div>
                      <div className="text-xs text-luxury-charcoal/50">{sub.phone}</div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-luxury-blue/10 text-luxury-blue">
                        {sub.type ? sub.type.replace('-', ' ') : 'credit repair'}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="text-xs space-y-1">
                        <div>Score: <span className="font-bold">{sub.creditScoreRange || 'N/A'}</span></div>
                        <div className="truncate">Goal: {sub.primaryGoal || 'N/A'}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 text-[10px] font-bold uppercase tracking-widest">
                        Active
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => onDeleteClick(sub.id)}
                        className="text-luxury-charcoal/40 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

function DeleteDialog({ isOpen, onOpenChange, onConfirm }: any) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl border-luxury-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-luxury-blue">Confirm Deletion</DialogTitle>
          <DialogDescription className="text-luxury-charcoal/70 pt-2">
            Are you sure you want to permanently delete this info? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-3 sm:gap-0 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-xl border-luxury-blue/10">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold">
            Permanently Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

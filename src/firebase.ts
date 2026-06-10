import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User, Auth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, onSnapshot, Firestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
const googleProvider = new GoogleAuthProvider();

// Check if config is valid (not placeholders)
const isConfigValid = firebaseConfig.apiKey && firebaseConfig.apiKey !== 'placeholder';

if (isConfigValid) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
}

export { 
  app, 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot,
  isConfigValid
};
export type { User };

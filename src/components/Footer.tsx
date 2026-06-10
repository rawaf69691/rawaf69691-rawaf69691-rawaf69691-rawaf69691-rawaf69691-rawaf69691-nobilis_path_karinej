import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-luxury-ivory py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-luxury-ivory/10 pb-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 tracking-wider text-luxury-gold">NOBILIS PATH ADVISORY</h3>
            <p className="text-sm text-luxury-ivory/60 max-w-sm leading-relaxed">
              Premium strategic compliance planning and credit portfolio review services meticulously curated for discerning professionals.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-luxury-gold">Services & Solutions</h4>
            <ul className="space-y-3 text-sm text-luxury-ivory/60">
              <li><Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/credit-repair" className="hover:text-luxury-gold transition-colors">Take Roadmap Quiz</Link></li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-luxury-gold">Regulatory Compliance & Legal</h4>
              <Link to="/admin" className="text-luxury-ivory/20 hover:text-luxury-gold transition-colors" title="Secure Administration Portal">
                <ShieldCheck className="w-4 h-4" />
              </Link>
            </div>
            <ul className="space-y-3 text-sm text-luxury-ivory/60">
              <li><Link to="/privacy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-luxury-gold transition-colors">Terms of Service & Engagement</Link></li>
              <li><Link to="/consumer-rights" className="hover:text-luxury-gold transition-colors">Consumer Bill of Rights (FCRA)</Link></li>
              <li><Link to="/complaint-policy" className="hover:text-luxury-gold transition-colors">Complaint Resolution Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Meticulous Luxury Compliance Disclaimer */}
        <div className="mt-12 text-xs text-luxury-ivory/50 leading-relaxed space-y-4">
          <p>
            <strong>Important Legal Notice & Consumer Protection Act (FCRA) Disclosures:</strong> Nobilis Path Advisory is a strategic consulting, strategic planning, and document preparation support firm. We are not a credit repair organization. We do not provide “credit repair,” “credit restoration,” or “credit fix” services. We do not promise, guarantee, or represent that our support services will improve your credit score, rectify accurate credit histories, or guarantee access to loans, premium financing, or bank funding.
          </p>
          <p>
            Under the federal Fair Credit Reporting Act (FCRA) and similar state laws, consumers have the legal right to inspect, review, and dispute any inaccurate, misleading, or unverifiable item on their credit reports directly with the credit reporting bureaus (Experian, TransUnion, and Equifax) on their own behalf independently and at no cost.
          </p>
          <p>
            All strategic materials and advisory resources provided by Nobilis Path Advisory are for informational purposes only and do not constitute formal legal, tax, or professional investment service advice. All customer results and strategic outcomes vary based on individual financial facts, reporting accuracy, and external creditor actions.
          </p>
        </div>

        <div className="pt-8 mt-8 border-t border-luxury-ivory/5 text-center text-xs text-luxury-ivory/40">
          © {new Date().getFullYear()} Nobilis Path Advisory. All rights reserved. Registered Consulting & Financial Document Support services.
        </div>
      </div>
    </footer>
  );
}

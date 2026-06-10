import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-luxury-ivory min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-luxury-gold/10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.2em]">Compliance & Safety</span>
          </div>

          <h1 className="text-4xl font-heading font-bold text-luxury-blue mb-2">Privacy Policy</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-luxury-charcoal/50 mb-10 border-b border-luxury-gold/10 pb-6">
            <div><strong>Effective Date:</strong> January 25, 2026</div>
            <div className="hidden sm:block text-luxury-gold">•</div>
            <div><strong>Last Updated:</strong> May 25, 2026</div>
          </div>

          <div className="prose prose-luxury max-w-none text-luxury-charcoal/80 space-y-8 text-sm leading-relaxed">
            <p>
              Nobilis Path Advisory (“we,” “us,” or “our”) is committed to protecting the privacy and confidentiality of our clients’ personal and financial information. This Privacy Policy outlines how we collect, use, maintain, protect, and disclose information gathered through our website (<a href="https://nobilispathadvisory.com" className="text-luxury-gold hover:underline font-medium">https://nobilispathadvisory.com</a>) and during the course of providing our professional credit repair, profile optimization, and financial consulting services.
            </p>
            <p>
              As a provider of financial consulting services, our data collection and protection practices comply with applicable federal and state consumer privacy laws, including the Gramm-Leach-Bliley Act (GLBA) regarding the protection of non-public personal information.
            </p>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">1.</span> Information We Collect
              </h2>
              <p>
                To accurately review your credit history and prepare legal challenges against inaccurate reporting, we must collect non-public personal information (NPI) about you. This data is collected directly from you via our secure website forms, intake questionnaires, secure portals, or during phone consultations.
              </p>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Personal Identifiers:</strong> Full name, Social Security Number (SSN), date of birth, mailing address, email address, and phone number.
                </li>
                <li>
                  <strong>Credit & Financial Profile Data:</strong> Consumer credit reports from the major credit bureaus (Equifax, Experian, TransUnion), credit monitoring login credentials (provided by you to pull reports), dispute correspondence histories, collection notices, and creditor letters.
                </li>
                <li>
                  <strong>Identification Verification Documents:</strong> Copies of your driver’s license, state ID, utility bills, or passport, which are legally required by credit bureaus and creditors to verify your identity during the dispute process.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card numbers, debit card numbers, or bank account details used exclusively to process your service fees through our secure, high-risk compliant payment processors.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">2.</span> How We Use Your Information
              </h2>
              <p>
                We use the information we collect to fulfill our contractual obligations to you and run our consulting operations securely. Specifically, we use your data to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Conduct a comprehensive audit and analysis of your consumer credit reports.</li>
                <li>Identify inaccurate, outdated, incomplete, or unverified negative items.</li>
                <li>Prepare and transmit formal dispute letters and challenges to credit bureaus, data furnishers, and creditors on your behalf.</li>
                <li>Communicate with you regarding updates to your credit file, bureau responses, or billing.</li>
                <li>Process authorized payments for services rendered in arrears.</li>
              </ul>
              <p className="font-semibold text-luxury-blue bg-luxury-blue/5 p-4 rounded-xl border border-luxury-blue/10">
                We do not sell, rent, lease, or share your personal data, credit reports, or contact information with third-party marketers or lead-generation companies under any circumstances.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">3.</span> Disclosure and Sharing of Information
              </h2>
              <p>
                We only share your non-public personal information with third parties in the following strictly limited scenarios:
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>Credit Bureaus & Creditors:</strong> With consumer reporting agencies (Equifax, Experian, TransUnion) and individual creditors or data furnishers solely for the purpose of disputing inaccurate records on your behalf.
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted software partners who assist us in operating our business (such as dedicated credit repair CRM platforms, secure document storage portals, and secure payment gateways). These providers are bound by strict contractual confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, such as to comply with a valid subpoena, court order, or regulatory audit by official governing bodies.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">4.</span> Data Security & Retention
              </h2>
              <p>
                The security of your sensitive personal data and identity documents is our absolute priority. We implement robust physical, electronic, and procedural safeguards designed to protect your information, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure, encrypted data transmission protocols (HTTPS/SSL) across our entire domain.</li>
                <li>Multi-factor authentication (MFA) on all internal platforms containing client records or identity documents.</li>
                <li>Restricted access to data, limited strictly to authorized personnel who require that information to manage your account.</li>
              </ul>
              <p>
                We retain your personal records and dispute files for as long as necessary to comply with our legal obligations, resolve disputes, and maintain accurate business records in line with financial regulations.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">5.</span> Your Rights and Choices
              </h2>
              <p>
                Depending on your state of residence, you have specific rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to request access to the personal records we hold about you.</li>
                <li>The right to request corrections to inaccurate personal details.</li>
                <li>The right to terminate our services and request the deletion of your account files (subject to regulatory document retention laws).</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="p-6 rounded-2xl bg-luxury-blue/5 border border-luxury-blue/10 space-y-4">
              <h2 className="text-base font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">6.</span> Contact Information
              </h2>
              <p className="text-xs">
                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <strong className="text-luxury-blue font-semibold block uppercase tracking-wider mb-1">Company Details</strong>
                  <span className="text-luxury-charcoal/70 block">Company Name: NOBILIS PATH ADVISORY</span>
                  <span className="block text-luxury-charcoal/70">Website: <a href="https://nobilispathadvisory.com" className="text-luxury-gold hover:underline">nobilispathadvisory.com</a></span>
                </div>
                <div>
                  <strong className="text-luxury-blue font-semibold block uppercase tracking-wider mb-1">Secure Contact Desk</strong>
                  <span className="text-luxury-charcoal/70 block">Phone: <a href="tel:18332280181" className="text-luxury-gold hover:underline font-bold">1-833-228-0181</a></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

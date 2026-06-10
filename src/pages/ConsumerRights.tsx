import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Landmark, FileCheck2, Info, UserCheck } from 'lucide-react';

export default function ConsumerRights() {
  return (
    <div className="bg-luxury-ivory min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-luxury-gold/10 space-y-12"
        >
          {/* Header */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.2em]">Consumer Defense</span>
            </div>

            <h1 className="text-4xl font-heading font-bold text-luxury-blue mb-2">Consumer Credit File Rights</h1>
            <p className="text-sm text-luxury-charcoal/60 uppercase tracking-wider mb-4">Under State and Federal Law</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-luxury-charcoal/50 border-b border-luxury-gold/10 pb-6">
              <div><strong>Effective Date:</strong> January 25, 2025</div>
              <div className="hidden sm:block text-luxury-gold">•</div>
              <div><strong>Last Updated:</strong> May 25, 2026</div>
            </div>
          </div>

          {/* Intro Disclaimer / Warnings */}
          <div className="prose prose-luxury max-w-none text-luxury-charcoal/80 space-y-6 text-sm leading-relaxed">
            <div className="p-6 rounded-2xl bg-luxury-gold/5 border-l-4 border-luxury-gold space-y-3">
              <p className="font-semibold text-luxury-blue">Important Federal Disclosure:</p>
              <p className="text-xs leading-relaxed">
                You have a right to dispute inaccurate information in your credit file by contacting the credit bureau directly. However, neither you nor any "credit repair" company or credit repair organization has the right to have accurate, current, and verifiable information removed from your credit report. The credit bureau must delete any information that is inaccurate or incomplete. If it finds that the information is accurate and verifiable, it can keep it on your report.
              </p>
              <p className="text-xs leading-relaxed text-luxury-charcoal/60">
                The Federal Trade Commission (FTC) and the Consumer Financial Protection Bureau (CFPB) regulate credit bureaus and credit repair organizations. For more information, visit <a href="https://consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="text-luxury-blue underline hover:text-luxury-gold">consumerfinance.gov</a> or <a href="https://ftc.gov" target="_blank" rel="noopener noreferrer" className="text-luxury-blue underline hover:text-luxury-gold">ftc.gov</a>.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <Landmark className="w-5 h-5 text-luxury-gold shrink-0" />
                1. Your Rights Under the Fair Credit Reporting Act (FCRA)
              </h2>
              <p>
                The federal Fair Credit Reporting Act (FCRA) promotes the accuracy, fairness, and privacy of information in the files of consumer reporting agencies. You have specific legal rights under this act, which include:
              </p>
              <ul className="space-y-4 pl-0">
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">A.</span>
                  <div>
                    <strong>You must be told if information in your file has been used against you.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">Anyone who uses a credit report or another type of consumer report to deny your application for credit, insurance, or employment must tell you, and must give you the name, address, and phone number of the agency that provided the information.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">B.</span>
                  <div>
                    <strong>You have the right to know what is in your file.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">You may request and obtain all the information about you in the files of a consumer reporting agency. You are entitled to a free annual disclosure of your credit file from each of the three nationwide credit bureaus (Equifax, Experian, and TransUnion) via <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline font-semibold">AnnualCreditReport.com</a>.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">C.</span>
                  <div>
                    <strong>You have the right to ask for a credit score.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">You may request a credit score from consumer reporting agencies that create scores or distribute scores used in residential real property loans, though you may have to pay for it.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">D.</span>
                  <div>
                    <strong>You have the right to dispute incomplete or inaccurate information.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">If you identify information in your file that is incomplete or inaccurate, and you report it to the consumer reporting agency, the agency must investigate unless your dispute is frivolous.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">E.</span>
                  <div>
                    <strong>Consumer reporting agencies must correct or delete inaccurate, incomplete, or unverifiable information.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">Inaccurate, incomplete, or unverifiable information must be removed or corrected, usually within 30 days of receiving your dispute notice.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">F.</span>
                  <div>
                    <strong>Consumer reporting agencies may not report outdated negative information.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">In most cases, a consumer reporting agency may not report negative information that is more than seven (7) years old, or bankruptcies that are more than ten (10) years old.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">G.</span>
                  <div>
                    <strong>Access to your file is limited.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">A consumer reporting agency may provide information about you only to people with a valid need—usually to consider an application with a creditor, insurer, employer, landlord, or other business.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-luxury-gold font-body font-bold mt-0.5">H.</span>
                  <div>
                    <strong>You have the right to place a "Security Freeze" on your credit report.</strong>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">A security freeze prohibits a credit reporting agency from releasing any information from your credit report without your written authorization. This is designed to prevent credit, loans, and services from being approved in your name without your consent.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-4 border-t border-luxury-gold/10">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-luxury-gold shrink-0" />
                2. Your Rights Under the Credit Repair Organizations Act (CROA)
              </h2>
              <p>
                When engaging the services of a professional consulting firm like Nobilis Path Advisory, you are fully protected under the federal Credit Repair Organizations Act (CROA):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 border border-luxury-gold/10 rounded-2xl bg-luxury-blue/[0.01]">
                  <strong className="text-luxury-blue font-heading block mb-1">No Upfront Fees</strong>
                  <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
                    We are legally prohibited from charging or receiving any money before the agreed-upon services are fully performed. All billing occurs retrospectively (in arrears) for work completed.
                  </p>
                </div>
                <div className="p-5 border border-luxury-gold/10 rounded-2xl bg-luxury-blue/[0.01]">
                  <strong className="text-luxury-blue font-heading block mb-1">Written Contract Required</strong>
                  <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
                    You must be provided with a detailed, written contract that outlines the exact services to be performed, the total cost of those services, any guarantees offered, and the estimated timeline for completion.
                  </p>
                </div>
                <div className="p-5 border border-luxury-gold/10 rounded-2xl bg-luxury-blue/[0.01]">
                  <strong className="text-luxury-blue font-heading block mb-1">3-Day Right to Cancel</strong>
                  <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
                    You have a statutory right to cancel your contract with us, for any reason, within three (3) business days from the date you signed it. You can cancel without any penalties or obligations.
                  </p>
                </div>
                <div className="p-5 border border-luxury-gold/10 rounded-2xl bg-luxury-blue/[0.01]">
                  <strong className="text-luxury-blue font-heading block mb-1">Protection Against Misrepresentation</strong>
                  <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
                    We cannot legally make any false, misleading, or exaggerated statements regarding what our services can achieve, your current credit standing, or your legal rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pt-4 border-t border-luxury-gold/10">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-luxury-gold shrink-0" />
                3. Acknowledgment of Independent Rights
              </h2>
              <p>
                By providing this disclosure, Nobilis Path Advisory reminds all consumers that you are not required to hire a third party to clean up or manage your credit file. You possess the legal framework to review your credit files, communicate directly with credit repositories, and submit formal disputes independently at no financial cost to you.
              </p>
              <p>
                If you choose to retain Nobilis Path Advisory, you are hiring our independent consulting professionals to perform this labor, manage the document tracking, and draft these challenges on your behalf as an authorized advocate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

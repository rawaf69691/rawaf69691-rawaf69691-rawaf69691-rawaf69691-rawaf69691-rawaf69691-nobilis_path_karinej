import React from 'react';
import { motion } from 'motion/react';
import { Scale, CheckCircle2, History, Ban, ShieldCheck } from 'lucide-react';

export default function TermsOfService() {
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
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.2em]">Agreement & Policies</span>
            </div>

            <h1 className="text-4xl font-heading font-bold text-luxury-blue mb-2">Terms of Service</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-luxury-charcoal/50 border-b border-luxury-gold/10 pb-6">
              <div><strong>Effective Date:</strong> January 25, 2026</div>
              <div className="hidden sm:block text-luxury-gold">•</div>
              <div><strong>Last Updated:</strong> May 25, 2026</div>
            </div>
          </div>

          {/* Terms Section */}
          <div className="prose prose-luxury max-w-none text-luxury-charcoal/80 space-y-8 text-sm leading-relaxed">
            <p className="italic">
              Welcome to Nobilis Path Advisory. Please read these Terms of Service (“Terms,” “Agreement”) carefully before using our website (<a href="https://nobilispathadvisory.com" className="text-luxury-gold hover:underline">https://nobilispathadvisory.com</a>) or engaging our credit portfolio review, profile optimization, and consulting services.
            </p>
            <p>
              By accessing our website, filling out an intake form, or choosing to purchase our support plans, you agree to be bound by these Terms, our Privacy Policy, and the terms of your individual written Service Agreement.
            </p>

            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">1.</span> Professional Services Offered
              </h2>
              <p>
                Nobilis Path Advisory provides professional credit file auditing, accurate information dispute preparation, and financial literacy consulting. We assist consumers in reviewing their credit reports for inaccurate, unfair, unverified, or outdated negative items and preparing formal challenges to be sent to credit bureaus and data furnishers on their own behalf.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/20">
              <h2 className="text-sm font-bold uppercase tracking-wider text-luxury-blue mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                2. Federal Compliance (CROA Notice)
              </h2>
              <div className="space-y-3 text-xs leading-relaxed">
                <p className="font-bold">In strict compliance with the Credit Repair Organizations Act (CROA), Nobilis Path Advisory explicitly states:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    You have a statutory consumer right to dispute inaccurate, misleading, or unverifiable items on your credit report independently, for free, directly with the consumer reporting bureaus.
                  </li>
                  <li>
                    You have the right to cancel your written contract with any credit repair organization for any reason within three (3) business days from the date you sign it, without penalty or obligation.
                  </li>
                  <li>
                    We cannot and do not charge you any fees before professional services are fully performed. All billing occurs on a strictly "post-performance" or retrospective monthly model for work completed during the prior cycle, or through flat-fee strategic modules billed clearly behind individual delivery benchmarks.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">3.</span> Client Responsibilities & Credit Monitoring
              </h2>
              <p>
                To successfully optimize your credit profile reviews, active participation and document stewardship are required.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Active Credit Monitoring:</strong> You are required to maintain an active, uninterrupted third-party credit monitoring service throughout your time with us so our team can pull updated reports and track changes. Failure to maintain monitoring may result in the suspension of support services.
                </li>
                <li>
                  <strong>Document Forwarding:</strong> You agree to forward all correspondence, letters, or updated credit reports received from the credit bureaus (Equifax, Experian, TransUnion) or creditors to us within five (5) business days of receipt.
                </li>
                <li>
                  <strong>Financial Conduct:</strong> You understand that building a strong credit profile requires you to practice positive financial habits. Nobilis Path Advisory is not responsible for drops in your credit score caused by you opening new lines of credit, incurring missing payments, or increasing credit card utilization independently during the service period.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-luxury-blue flex items-center gap-2">
                <span className="text-luxury-gold font-body">4.</span> Limitation of Liability & No Outcomes Guaranteed
              </h2>
              <p>
                <strong>No Promised Scores:</strong> Nobilis Path Advisory utilizes specialized industry expertise to organize and challenge inaccurate information, but we do not guarantee a specific FICO score increase, a specific timeline, or the absolute removal of any accurate, verified negative item. Credit bureaus determine final report adjustments based on federal verification guidelines.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> Our maximum financial liability for any operational errors, gaps, or omissions is strictly limited to the total amount of service fees paid by the client to Nobilis Path Advisory under their contract.
              </p>
            </div>
          </div>

          <div className="border-t border-luxury-gold/20 pt-12 space-y-6">
            <div className="flex items-center space-x-3 text-luxury-blue font-heading font-bold text-2xl">
              <History className="w-6 h-6 text-luxury-gold" />
              <h2>Refund & Cancellation Policy</h2>
            </div>

            <div className="prose prose-luxury max-w-none text-luxury-charcoal/80 space-y-6 text-sm leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-luxury-blue">1. Statutory 3-Day Right to Cancel</h3>
                <p>
                  In accordance with federal law, you may cancel your service agreement without any penalty or obligation within three (3) business days from the date the contract is signed and executed.
                </p>
                <p>
                  If any initial enrollment fees or setup deposits were processed during this window, a 100% full refund will be issued immediately to your original payment method, provided no professional auditing work has been initiated.
                </p>
              </div>

              <div className="space-y-3 p-6 bg-luxury-blue/5 rounded-2xl border border-luxury-blue/10">
                <h3 className="font-heading font-bold text-luxury-blue flex items-center gap-2">
                  <span className="text-luxury-gold font-body">2.</span> 90-Day Money-Back Performance Guarantee
                </h3>
                <p className="text-xs">
                  We stand behind the quality of our dispute preparation and consumer advocacy work. If you are enrolled in our credit optimization program and meet all the eligibility criteria below, we offer a performance-based guarantee:
                </p>
                <p className="text-xs py-2 px-3 border-l-2 border-luxury-gold bg-white font-medium text-luxury-blue">
                  <strong>The Guarantee:</strong> If you remain an active client for ninety (90) consecutive days from your initial onboarding, and Nobilis Path Advisory has been unable to secure the removal, correction, update, or positive modification of any inaccurate negative item on your credit profile across the three major bureaus, you are entitled to a full refund of all service fees paid during that 90-day timeframe.
                </p>
                <div>
                  <strong className="text-xs text-luxury-blue block mb-2 uppercase tracking-wide">Client Eligibility Requirements:</strong>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-luxury-charcoal/70">
                    <li>Maintained an active credit monitoring subscription throughout the entire 90 days with no lapse in portal credentials or billing access.</li>
                    <li>Promptly uploaded and forwarded all bureau responses, letters, or creditor correspondence to our team within 5 business days of receipt.</li>
                    <li>Did not incur any new late payments, public record filings, charge-offs, collection actions, or excessive hard inquiries on your profile during the 90-day period.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-bold text-luxury-blue">3. How to Cancel After 3 Days</h3>
                <p>
                  After the initial 3-day window, you can cancel your ongoing service at any time. Because we bill in arrears (meaning you pay after a package lifecycle or cycle of dispute work is completed), when you cancel, you will only remain responsible for paying for the specific month of dispute preparation work currently in progress. No further invoice cycles will be run.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-luxury-gold/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-bold text-luxury-blue text-xs uppercase tracking-wider mb-1">Need to file a Cancellation or Refund Request?</h4>
                  <p className="text-xs text-luxury-charcoal/60">Our dispatch desk is available to assist you promptly.</p>
                </div>
                <div className="space-y-1 shrink-0 text-left sm:text-right">
                  <a href="tel:18332280181" className="block text-sm font-bold text-luxury-blue hover:text-luxury-gold font-mono">1 833 228 0181</a>
                  <a href="https://nobilispathadvisory.com" className="block text-xs text-luxury-gold hover:underline">nobilispathadvisory.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

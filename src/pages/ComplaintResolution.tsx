import React from 'react';
import { motion } from 'motion/react';
import { 
  FileCheck, 
  ShieldAlert, 
  HelpCircle, 
  Mail, 
  Calendar, 
  Search, 
  Scale, 
  Clock, 
  Users, 
  Sparkles 
} from 'lucide-react';

export default function ComplaintResolution() {
  return (
    <div className="bg-luxury-ivory min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Document-style Header Accent */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-luxury-charcoal/40 uppercase tracking-widest border-b border-luxury-gold/20 pb-4 mb-8">
          <div className="font-semibold text-center md:text-left">
            NOBILIS PATH ADVISORY | Complaint Resolution Policy
          </div>
          <div className="text-center md:text-right mt-1 md:mt-0 font-mono">
            support@nobilispathadvisory.com | Confidential &amp; Proprietary
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-luxury-gold/10 space-y-12"
        >
          {/* Header section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.2em]">Compliance Framework</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-luxury-blue mb-2 uppercase">
              COMPLAINT RESOLUTION POLICY
            </h1>
            <p className="text-sm font-semibold text-luxury-gold uppercase tracking-wider mb-6">
              Nobilis Path Advisory
            </p>
            <div className="text-xs text-luxury-charcoal/50 font-mono flex flex-wrap gap-4 items-center">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                Effective Date: 2025
              </span>
              <span className="text-luxury-gold/30">•</span>
              <span>Applies Nationwide</span>
            </div>
          </div>

          <div className="prose prose-luxury max-w-none text-luxury-charcoal/80 space-y-8 text-sm leading-relaxed">
            
            {/* 1. Purpose */}
            <div className="space-y-3">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                1. Purpose of This Policy
              </h2>
              <p>
                Nobilis Path Advisory is a nationwide credit restoration firm committed to protecting the rights of every client we serve. This Complaint Resolution Policy establishes a uniform, time-bound, and fully documented framework for addressing all client concerns in strict accordance with:
              </p>
              <ul className="space-y-1.5 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>The Credit Repair Organizations Act (CROA), 15 U.S.C. § 1679 et seq.</li>
                <li>The Consumer Financial Protection Act (CFPA)</li>
                <li>Applicable state consumer protection statutes in all jurisdictions we serve</li>
                <li>Our internal ethical and operational standards</li>
              </ul>
              <p>
                Our objectives are to deliver prompt and thorough resolutions, maintain clear communication, uphold high ethical standards, and protect every client’s rights with diligence and full transparency.
              </p>
            </div>

            {/* 2. Definition of a Complaint */}
            <div className="space-y-3">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                2. Definition of a Complaint
              </h2>
              <p>
                A complaint is any expression of dissatisfaction—written, verbal, or electronic—pertaining to any aspect of our credit restoration services, including but not limited to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                {[
                  "Service performance or unmet expectations",
                  "Timeliness of work, disputes, or responses",
                  "Billing concerns, fee disclosures, or contract terms",
                  "Cancellation requests or refund disputes",
                  "Professional conduct or communication issues",
                  "Any perceived violation of consumer rights under CROA or applicable law"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-xs text-luxury-charcoal/70 bg-luxury-blue/[0.01] p-2.5 rounded-xl border border-luxury-gold/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs italic text-luxury-charcoal/60 mt-2">
                All complaints, regardless of severity or channel, are formally logged and processed under this policy.
              </p>
            </div>

            {/* 3. How to Submit a Complaint */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                3. How to Submit a Complaint
              </h2>
              <p>
                Clients may submit complaints through any of the following official channels:
              </p>
              
              <div className="space-y-4 pl-1">
                <div>
                  <h4 className="font-heading font-bold text-luxury-blue text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="text-luxury-gold text-sm font-bold">A.</span> Email
                  </h4>
                  <p className="text-xs text-luxury-charcoal/70 mt-1 pl-4">
                    Send a written description of your concern, along with any supporting documents, to our compliance team at{' '}
                    <a href="mailto:support@nobilispathadvisory.com" className="text-luxury-gold hover:underline font-semibold">
                      support@nobilispathadvisory.com
                    </a>.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-luxury-blue text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="text-luxury-gold text-sm font-bold">B.</span> Phone
                  </h4>
                  <p className="text-xs text-luxury-charcoal/70 mt-1 pl-4">
                    Call our client support line. All verbal complaints are recorded and logged internally within the same business day they are received.
                  </p>
                </div>

                {/* Subheader Accent Line */}
                <div className="flex flex-col gap-2 my-4 bg-luxury-ivory/30 p-4 rounded-xl text-[10px] text-luxury-charcoal/40 uppercase tracking-widest font-mono border border-luxury-gold/5">
                  <div>NOBILIS PATH ADVISORY | Complaint Resolution Policy</div>
                  <div>support@nobilispathadvisory.com | Confidential &amp; Proprietary</div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-luxury-blue text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="text-luxury-gold text-sm font-bold">C.</span> Online Submission
                  </h4>
                  <p className="text-xs text-luxury-charcoal/70 mt-1 pl-4">
                    Use any designated form or client portal on our website to submit your concern electronically.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-luxury-blue text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="text-luxury-gold text-sm font-bold">D.</span> Written Mail
                  </h4>
                  <p className="text-xs text-luxury-charcoal/70 mt-1 pl-4">
                    Mail a written letter with full complaint details and any supporting documentation to our principal business address.
                  </p>
                </div>
              </div>

              <p className="text-xs font-semibold text-luxury-blue bg-luxury-gold/10 p-4 rounded-xl flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-luxury-gold shrink-0" />
                Regardless of submission method, all complaints are entered into our secure complaint tracking system within one (1) business day of receipt.
              </p>
            </div>

            {/* 4. Acknowledgment Timeline */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                4. Acknowledgment Timeline
              </h2>
              <p>
                Every complaint receives a formal acknowledgment within one (1) business day of receipt. The acknowledgment will include:
              </p>
              <ul className="space-y-2 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>Confirmation that the complaint has been received and logged</li>
                <li>The name and direct contact information of the assigned Case Specialist</li>
                <li>A clear explanation of next steps and applicable timelines</li>
                <li>A reminder of the client’s rights under CROA, including the right to cancel services within three (3) business days of signing any contract</li>
              </ul>
            </div>

            {/* 5. CROA Rights & Cancellation Complaints */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                5. CROA Rights &amp; Cancellation Complaints
              </h2>
              <p>
                As a Credit Repair Organization operating under CROA (15 U.S.C. § 1679 et seq.), Nobilis Path Advisory upholds the following client rights in all complaint handling:
              </p>
              <ul className="space-y-2 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>Clients have the right to cancel any service contract within three (3) business days of signing, without penalty or obligation, per CROA § 1679e.</li>
                <li>Cancellation complaints and refund requests are treated as high-priority and are escalated immediately to our Compliance Team upon receipt.</li>
                <li>Clients are never required to waive any right afforded under CROA as a condition of service.</li>
                <li>Any complaint alleging a violation of CROA or consumer protection law is escalated to senior compliance review within one (1) business day.</li>
              </ul>
              <p>
                Our refund policy governs all disputes related to fees paid. Clients who submit a refund-related complaint will receive a written determination of eligibility within the five (5) business day resolution window.
              </p>
            </div>

            {/* 6. Investigation Procedure */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                6. Investigation Procedure
              </h2>
              <p>
                Each complaint undergoes a structured, documented investigation conducted by a trained Compliance or Client Relations Specialist. The investigation may include:
              </p>
              <ul className="space-y-2 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>Reviewing client records, signed agreements, and service logs</li>
                <li>Verifying all dispute actions submitted to credit bureaus or creditors</li>
                <li>Examining call recordings, emails, and prior interactions</li>
                <li>Interviewing internal team members involved in the matter</li>
                <li>Confirming adherence to CROA and all applicable consumer protection laws</li>
              </ul>
              <p>
                Every investigation follows a standardized compliance checklist to ensure impartiality and thoroughness. All findings are documented in our secure complaint management system.
              </p>
            </div>

            {/* Subheader Accent Line */}
            <div className="flex flex-col gap-2 my-8 bg-luxury-ivory/30 p-4 rounded-xl text-[10px] text-luxury-charcoal/40 uppercase tracking-widest font-mono border border-luxury-gold/5">
              <div>NOBILIS PATH ADVISORY | Complaint Resolution Policy</div>
              <div>support@nobilispathadvisory.com | Confidential &amp; Proprietary</div>
            </div>

            {/* 7. Resolution Timeline - Five (5) Business Days */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                7. Resolution Timeline — Five (5) Business Days
              </h2>
              <p>
                Nobilis Path Advisory requires that all complaints are fully resolved within five (5) business days of receipt. Resolution may include:
              </p>
              <ul className="space-y-1.5 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>Correcting an error or service oversight</li>
                <li>Providing written clarification or additional information</li>
                <li>Adjusting or updating dispute actions on the client’s behalf</li>
                <li>Issuing a refund determination consistent with our refund policy</li>
                <li>Delivering a final written resolution with complete findings</li>
              </ul>
              <p>
                If a complaint involves external third parties (such as creditors or credit bureaus) and requires information beyond our direct control, we still issue a formal internal resolution within five (5) business days, which includes:
              </p>
              <ul className="space-y-1.5 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>A completed internal investigation and summary of findings</li>
                <li>An explanation of any pending third-party steps</li>
                <li>Clear expected timelines for those steps</li>
                <li>A named point of contact for follow-up</li>
              </ul>
              <p className="font-semibold text-luxury-blue">
                No client will ever be left without a formal written resolution within the five (5) business day window.
              </p>
            </div>

            {/* 8. Escalation Process */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                8. Escalation Process
              </h2>
              <p>
                If a client is not satisfied with the initial resolution provided by their assigned Case Specialist, they may request a formal escalation. Escalated complaints are reviewed by Nobilis Path Advisory’s Compliance Team directly.
              </p>
              <p>
                To escalate, clients should contact:
                <br />
                <strong className="text-luxury-blue block mt-2 text-xs uppercase tracking-wide">
                  Nobilis Path Advisory — Compliance Team
                </strong>
                <a href="mailto:support@nobilispathadvisory.com" className="text-luxury-gold hover:underline font-bold text-xs mt-1 block">
                  support@nobilispathadvisory.com
                </a>
              </p>
              <p>
                Escalated complaints receive a senior compliance review and a final written determination within three (3) business days of escalation. The Compliance Team’s determination represents Nobilis Path Advisory’s final internal resolution.
              </p>
            </div>

            {/* 9. Client Communication Throughout Resolution */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                9. Client Communication Throughout Resolution
              </h2>
              <p>
                Throughout the resolution process, clients receive proactive updates via their preferred method of communication. Every written resolution includes:
              </p>
              <ul className="space-y-1.5 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>A clear summary of the complaint as received</li>
                <li>A description of the investigation conducted</li>
                <li>Findings and conclusions reached</li>
                <li>Actions taken or corrective measures implemented</li>
                <li>Final confirmation of case closure or next steps</li>
              </ul>
            </div>

            {/* 10. External Complaint Rights */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                10. External Complaint Rights
              </h2>
              <p>
                Nobilis Path Advisory fully supports every client’s right to seek external resolution if they remain unsatisfied after exhausting our internal process. Clients may file complaints with:
              </p>
              <ul className="space-y-2 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>
                  The Consumer Financial Protection Bureau (CFPB) at{' '}
                  <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline font-semibold">
                    consumerfinance.gov/complaint
                  </a>
                </li>
                <li>
                  The Federal Trade Commission (FTC) at{' '}
                  <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline font-semibold">
                    reportfraud.ftc.gov
                  </a>
                </li>
                <li>The Attorney General’s office of their state of residence</li>
                <li>Any applicable state consumer protection agency</li>
              </ul>
              <p>
                Directing a client to an external agency will never result in adverse treatment, service changes, or retaliation of any kind. We actively encourage clients to exercise all available rights.
              </p>
            </div>

            {/* 11. Documentation & Recordkeeping */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                11. Documentation &amp; Recordkeeping
              </h2>
              <p>
                All complaints and resolutions are retained in our secure compliance system for a minimum of three (3) years, consistent with CROA recordkeeping standards, and include:
              </p>
              <ul className="space-y-1.5 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>Full complaint details and submission method</li>
                <li>All investigation notes and findings</li>
                <li>All client and internal communications</li>
                <li>Outcome documentation and corrective actions taken</li>
                <li>Any escalation records and final determinations</li>
              </ul>
              <p>
                These records are subject to periodic quality assurance review and internal audit.
              </p>
            </div>

            {/* Subheader Accent Line */}
            <div className="flex flex-col gap-2 my-8 bg-luxury-ivory/30 p-4 rounded-xl text-[10px] text-luxury-charcoal/40 uppercase tracking-widest font-mono border border-luxury-gold/5">
              <div>NOBILIS PATH ADVISORY | Complaint Resolution Policy</div>
              <div>support@nobilispathadvisory.com | Confidential &amp; Proprietary</div>
            </div>

            {/* 12. Continuous Improvement */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-heading font-bold text-luxury-blue border-l-2 border-luxury-gold pl-3">
                12. Continuous Improvement
              </h2>
              <p>
                Nobilis Path Advisory treats every complaint as an opportunity to strengthen our services. Patterns or recurring concerns identified through the complaint process trigger:
              </p>
              <ul className="space-y-1.5 pl-5 list-disc text-luxury-charcoal/70 text-xs">
                <li>Internal operational audits</li>
                <li>Staff retraining and compliance refreshers</li>
                <li>Policy revisions and process enhancements</li>
                <li>Service quality improvements</li>
              </ul>
              <p>
                Our goal is to continuously raise the standard of service and minimize the likelihood of future client concerns.
              </p>
            </div>

            {/* Footer Call to Action */}
            <div className="pt-8 border-t border-luxury-gold/25 text-center space-y-6">
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto text-luxury-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-md font-heading font-bold text-luxury-blue">
                Questions about this policy? Contact our Compliance Team at{' '}
                <a href="mailto:support@nobilispathadvisory.com" className="text-luxury-gold hover:underline font-semibold block sm:inline mt-1 sm:mt-0">
                  support@nobilispathadvisory.com
                </a>
              </h3>
              
              <div className="text-xs text-luxury-charcoal/50 uppercase tracking-widest font-semibold flex items-center justify-center gap-6">
                <span>Ethical</span>
                <span className="text-luxury-gold">•</span>
                <span>Transparent</span>
                <span className="text-luxury-gold">•</span>
                <span>Results-Driven</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Target, 
  FileSearch, 
  Compass, 
  Mail, 
  CheckCircle2, 
  Scale, 
  ShieldAlert, 
  Award, 
  UserCheck 
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-luxury-ivory min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Subtle Document-style Header Accent */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-luxury-charcoal/40 uppercase tracking-widest border-b border-luxury-gold/20 pb-4 mb-8">
          <div className="font-semibold text-center md:text-left">
            NOBILIS PATH ADVISORY | About Us — Credit Restoration Division
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
          {/* Main Title Headings */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.2em]">Practice Profile</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-luxury-blue mb-2">ABOUT US</h1>
            <p className="text-sm font-semibold text-luxury-gold uppercase tracking-wider mb-6">
              Nobilis Path Advisory — Credit Restoration Division
            </p>
            <div className="text-lg font-serif italic text-luxury-blue/90 border-l-2 border-luxury-gold pl-4 py-1">
              Ethical. Transparent. Results-Driven.
            </div>
          </div>

          {/* Division Mandate Intro */}
          <div className="prose prose-luxury max-w-none text-luxury-charcoal/80 space-y-6 text-sm leading-relaxed">
            <p>
              At Nobilis Path Advisory, our Credit Restoration Division operates as a highly specialized practice area dedicated to ethical, transparent, and results-driven credit improvement. We function with a singular mandate: to help clients reclaim financial stability by addressing inaccurate, outdated, unverifiable, and misleading information that appears on their consumer credit reports.
            </p>
            <p>
              Our division is built on disciplined procedures, regulatory compliance, and rigorous documentation standards that ensure every action we take is both lawful and strategically sound. We operate nationwide, and every service we provide adheres strictly to the Credit Repair Organizations Act (CROA), the Fair Credit Reporting Act (FCRA), and all applicable federal and state consumer protection laws.
            </p>

            <div className="p-6 rounded-2xl bg-luxury-gold/5 border-l-4 border-luxury-gold my-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-luxury-blue mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-luxury-gold" />
                Important Notice
              </p>
              <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
                Consumers have the right to dispute inaccuracies on their own credit reports at no cost directly through the credit bureaus. Nobilis Path Advisory provides professional expertise, strategic dispute analysis, and compliance-driven advocacy for those who choose professional support.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-4 pt-4 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue flex items-center gap-2">
                <Target className="w-5 h-5 text-luxury-gold shrink-0" />
                Our Mission
              </h2>
              <p>
                Our mission is to empower consumers with clean, accurate, and verifiable credit profiles by applying methodical credit restoration strategies, advanced dispute analysis, and individualized advisory support. We believe that creditworthiness is not just a number—it is a foundation of financial opportunity, leverage, and long-term stability.
              </p>
            </div>

            {/* What We Do */}
            <div className="space-y-6 pt-6 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-luxury-gold shrink-0" />
                What We Do
              </h2>
              <p>
                The Credit Restoration Division provides a comprehensive suite of services designed to rehabilitate and strengthen personal credit profiles. This includes:
              </p>

              <div className="space-y-6 pl-2">
                <div className="flex gap-4">
                  <div className="text-luxury-gold font-bold font-heading text-lg mt-0.5">1.</div>
                  <div>
                    <h3 className="font-heading font-bold text-luxury-blue text-sm uppercase tracking-wide">Full Credit File Auditing</h3>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">
                      We conduct line-by-line audits of all three major credit bureau reports, identifying inaccuracies, obsolete data, unauthorized accounts, and reporting anomalies that may be harming credit scores. Our evaluation incorporates regulatory frameworks such as the FCRA, the Fair Debt Collection Practices Act (FDCPA), and other consumer protection standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-luxury-gold font-bold font-heading text-lg mt-0.5">2.</div>
                  <div>
                    <h3 className="font-heading font-bold text-luxury-blue text-sm uppercase tracking-wide">Dispute Strategy Development</h3>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">
                      We design tailored dispute strategies for each client. Instead of relying on automated templates, our team builds customized dispute pathways, ensuring every challenge is grounded in verifiable procedural rights, compliance requirements, and documented evidence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-luxury-gold font-bold font-heading text-lg mt-0.5">3.</div>
                  <div>
                    <h3 className="font-heading font-bold text-luxury-blue text-sm uppercase tracking-wide">Creditor &amp; Bureau Communications</h3>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">
                      Our specialists manage all formal correspondence with credit bureaus, data furnishers, and creditors. Each communication is prepared with precise detail, citation of consumer rights, and strict adherence to dispute timelines. This includes:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs text-luxury-charcoal/70 list-disc pl-5">
                      <li>Bureau-level disputes</li>
                      <li>Creditor-direct disputes</li>
                      <li>Reinsertion monitoring</li>
                      <li>Validation and verification requests</li>
                    </ul>
                  </div>
                </div>

                {/* Separating documents block info from 4 & 5 */}
                <div className="flex flex-col gap-2 my-4 bg-luxury-ivory/30 p-4 rounded-xl text-[10px] text-luxury-charcoal/40 uppercase tracking-widest font-mono border border-luxury-gold/5">
                  <div>NOBILIS PATH ADVISORY | About Us — Credit Restoration Division</div>
                  <div>support@nobilispathadvisory.com | Confidential &amp; Proprietary</div>
                </div>

                <div className="flex gap-4">
                  <div className="text-luxury-gold font-bold font-heading text-lg mt-0.5">4.</div>
                  <div>
                    <h3 className="font-heading font-bold text-luxury-blue text-sm uppercase tracking-wide">Itemized Progress Tracking</h3>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">
                      Clients receive clear, structured updates on dispute stages, response timelines, outcomes, and next steps. Our internal monitoring systems allow us to track each dispute cycle and ensure timely follow-ups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-luxury-gold font-bold font-heading text-lg mt-0.5">5.</div>
                  <div>
                    <h3 className="font-heading font-bold text-luxury-blue text-sm uppercase tracking-wide">Ongoing Advisory &amp; Credit Wellness Strategy</h3>
                    <p className="text-xs text-luxury-charcoal/70 mt-1">
                      We guide clients on optimal credit behaviors, account structuring, revolving utilization, debt-to-limit ratios, and strategies to maintain long-term credit health even after restoration is complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Fee Structure */}
            <div className="space-y-4 pt-6 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue flex items-center gap-2">
                <Scale className="w-5 h-5 text-luxury-gold shrink-0" />
                Our Fee Structure &amp; Compliance Commitment
              </h2>
              <p>
                In full compliance with CROA, Nobilis Path Advisory does not collect fees before services are performed. Our fee structure is straightforward, disclosed in writing before any agreement is signed, and aligned with the work completed on your behalf. Clients also have the right to cancel any service agreement within three (3) business days of signing, without penalty or obligation.
              </p>
              <p>
                We believe transparency in pricing is just as important as transparency in process. You will always know what you are paying for, when, and why.
              </p>
            </div>

            {/* Operational Standards */}
            <div className="space-y-4 pt-6 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-luxury-gold shrink-0" />
                Our Operational Standards
              </h2>
              <p>
                Our division upholds meticulous operational protocols to ensure the highest level of professionalism:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Zero-shortcut policy", desc: "No automated dispute mills or generic mass-mail templates." },
                  { title: "Documentation integrity", desc: "All dispute actions are generated from real inaccuracies and verifiable issues." },
                  { title: "Client confidentiality", desc: "All client data is secured with strict privacy controls and encrypted systems." },
                  { title: "Compliance-driven workflow", desc: "Every step adheres to CROA, FCRA, FDCPA, and applicable state laws." },
                  { title: "Transparent communication", desc: "Clients have full visibility into processes, timelines, and outcomes." },
                  { title: "No advance fees", desc: "Services are rendered before fees are collected, in strict accordance with federal law." }
                ].map((std, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start p-4 bg-luxury-blue/[0.01] border border-luxury-gold/10 rounded-2xl">
                    <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-luxury-blue">{std.title}</strong>
                      <span className="text-[11px] text-luxury-charcoal/70 mt-0.5 block leading-relaxed">{std.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Expertise */}
            <div className="space-y-4 pt-6 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue flex items-center gap-2">
                <Award className="w-5 h-5 text-luxury-gold shrink-0" />
                Our Expertise
              </h2>
              <p>
                Our team consists of credit specialists trained in regulatory compliance, credit scoring models, creditor reporting behaviors, investigative dispute procedures, and consumer rights enforcement. This interdisciplinary approach allows us to resolve complex credit issues with precision and authority.
              </p>
              <p>
                We stay current with changes to federal and state credit laws, bureau procedures, and creditor reporting standards—so our clients always benefit from strategies that are both cutting-edge and fully compliant.
              </p>
            </div>

            {/* Why Clients Trust Us */}
            <div className="space-y-4 pt-6 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-luxury-gold shrink-0" />
                Why Clients Trust Us
              </h2>
              <p>
                Clients rely on our Credit Restoration Division because we prioritize accuracy, compliance, and sustainability above all else. Here is what sets Nobilis Path Advisory apart:
              </p>
              <ul className="space-y-3.5 pl-0 mt-3">
                {[
                  "We build individualized dispute strategies—no templates, no shortcuts",
                  "We operate under a compliance-first framework rooted in CROA, FCRA, and FDCPA",
                  "We are transparent about what we can and cannot do—no inflated promises",
                  "We document every action taken on your behalf for full accountability",
                  "We serve clients nationwide with the same standard of care regardless of location"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-luxury-gold text-sm font-bold font-body">•</span>
                    <span className="text-sm text-luxury-charcoal/80 leading-relaxed font-body">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Mid-document page line accent */}
              <div className="flex flex-col gap-2 my-6 bg-luxury-ivory/30 p-4 rounded-xl text-[10px] text-luxury-charcoal/40 uppercase tracking-widest font-mono border border-luxury-gold/5">
                <div>NOBILIS PATH ADVISORY | About Us — Credit Restoration Division</div>
                <div>support@nobilispathadvisory.com | Confidential &amp; Proprietary</div>
              </div>

              <p className="text-sm text-luxury-charcoal/80 leading-relaxed font-serif italic border-l-2 border-luxury-gold pl-4 py-2 mt-4 bg-luxury-gold/[0.02]">
                "We don’t 'fix credit'—we correct it, improve it, and support clients in maintaining it. Our work is structured, documented, and executed with the highest level of professional integrity."
              </p>
            </div>

            {/* Our Commitment */}
            <div className="space-y-4 pt-6 border-t border-luxury-gold/10">
              <h2 className="text-xl font-heading font-bold text-luxury-blue">Our Commitment</h2>
              <p>
                We are committed to being a dependable partner in our clients’ financial journey. Every restoration plan is handled with care, attention to detail, and an unwavering commitment to accuracy and consumer protection. Our goal is to ensure each client leaves with not only a stronger credit profile, but also a deeper understanding of how to protect and grow it for the future.
              </p>
            </div>

            {/* Footer Call to Action */}
            <div className="pt-8 border-t border-luxury-gold/25 text-center space-y-6">
              <h3 className="text-lg font-heading font-bold text-luxury-blue">
                Ready to take control of your credit? Schedule your complimentary credit file review today.
              </h3>
              
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 py-4 w-full">
                <a 
                  href="mailto:support@nobilispathadvisory.com" 
                  className="px-8 py-4 rounded-full bg-luxury-gold text-luxury-blue text-xs font-bold uppercase tracking-widest hover:bg-luxury-blue hover:text-luxury-ivory transition-all shadow-md flex items-center gap-2 shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact us at support@nobilispathadvisory.com</span>
                </a>
              </div>
              
              <div className="text-xs text-luxury-charcoal/50 uppercase tracking-widest font-semibold flex items-center justify-center gap-6">
                <span>No obligation.</span>
                <span className="text-luxury-gold">•</span>
                <span>No pressure.</span>
                <span className="text-luxury-gold">•</span>
                <span>Just clarity.</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

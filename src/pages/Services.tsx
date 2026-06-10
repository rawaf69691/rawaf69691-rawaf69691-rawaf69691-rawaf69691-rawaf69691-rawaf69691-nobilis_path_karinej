import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Copy, Check } from 'lucide-react';
import trustSealTransparentImg from '../assets/images/trust_seal_gold_blue_dark_bg_1780250592996.png';

export default function Services() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('support@nobilispathadvisory.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-luxury-ivory min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold text-luxury-blue mb-6"
          >
            Strategic Partnerships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-luxury-charcoal/70 leading-relaxed"
          >
            We offer structured, compliance-first advisory programs designed for high-performing professionals seeking a premium partner in consumer reporting accuracy and file audit management.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto mb-20 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex flex-col items-center p-8 md:p-12 rounded-3xl border border-luxury-gold/20 shadow-[0_15px_50px_rgba(32,51,92,0.08)] bg-white overflow-hidden text-center"
          >
            {/* Elegant visual backdrop accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />
            
            <div className="w-20 h-20 rounded-full bg-luxury-blue/5 border border-luxury-gold/20 flex items-center justify-center mb-8">
              <ShieldCheck className="w-10 h-10 text-luxury-gold" />
            </div>

            <h2 className="text-3xl font-heading font-bold text-luxury-blue mb-4">
              Begin Your Premium Advisory File Evaluation
            </h2>
            
            <p className="text-luxury-charcoal/70 text-base max-w-xl mb-10 leading-relaxed font-serif italic">
              Address complex discrepancies and protect your financial status. Access our secure client intake portal to generate custom-styled verification request packages.
            </p>

            <div className="w-full max-w-md space-y-4 mb-10 text-left bg-luxury-ivory/30 p-6 rounded-2xl border border-luxury-gold/10">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-luxury-blue">Secure, Compliant Data Transmission</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-luxury-blue">Comprehensive TransUnion, Equifax, & Experian Review Structure</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-luxury-blue">Statutory Acknowledgment under FCRA Reporting Protections</span>
              </div>
            </div>

            <Button 
              asChild
              className="w-full max-w-md py-8 rounded-xl bg-luxury-blue text-luxury-ivory hover:bg-luxury-blue/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 font-bold text-lg group cursor-pointer relative overflow-hidden"
            >
              <a href="https://nobilispathadvisory.getcredithelpnow.com/start">
                To Get Started, Click Here
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <p className="text-[11px] text-luxury-charcoal/40 uppercase tracking-widest mt-4 font-semibold">
              90-Day Satisfaction Guarantee • Safe Portal Access
            </p>
          </motion.div>
        </div>

        {/* Flexible Custom Payment Plans Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-luxury-gold/25 shadow-xl text-center mb-16"
        >
          <div className="w-14 h-14 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-luxury-gold">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-luxury-blue mb-4">Inquire About Flexible Payment Options</h3>
          <p className="text-sm text-luxury-charcoal/70 leading-relaxed max-w-2xl mx-auto mb-8 font-serif italic">
            "We believe premium credit advisory and strategic file protection should adapt to your personal cash flow requirements."
          </p>
          <p className="text-sm text-luxury-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Nobilis Path Advisory offers customizable installment schedules and tailored monthly billing options. To coordinate a flexible payment plan suited exactly to your strategic needs, simply reach out to our secure accounts desk.
          </p>
          <div className="flex flex-col items-center justify-center space-y-2">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 text-luxury-gold hover:text-luxury-blue bg-transparent hover:bg-luxury-gold/10 px-5 py-2.5 rounded-full border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all cursor-pointer font-semibold tracking-wide text-sm"
              title="Click to copy email address"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>support@nobilispathadvisory.com</span>
              <div className="pl-2 border-l border-luxury-gold/10 flex items-center justify-center">
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </div>
            </button>
            <span className="text-[11px] text-luxury-charcoal/40 uppercase tracking-wider font-medium">
              {copied ? "Copied address successfully!" : "Click to copy email"}
            </span>

            {/* Trust Seal row inside payment notice card */}
            <div className="pt-6 mt-4 border-t border-luxury-gold/10 w-full max-w-sm flex flex-col items-center">
              <div className="h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-2 border-luxury-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center bg-[#20335c] hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                  src={trustSealTransparentImg} 
                  alt="Licensed, Insured & Bonded" 
                  className="h-full w-full object-cover scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meticulous Disclosures */}
        <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-luxury-gold/10 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-heading font-bold text-luxury-blue mb-4">Disclosures & Transparency Accord</h2>
          </div>
          <div className="text-sm text-luxury-charcoal/70 leading-relaxed space-y-4">
            <p>
              <strong>Outcome Disclaimer:</strong> Nobilis Path Advisory offers organizational and strategic documentation and audit-support program plans. All program files are preliminary and do not guarantee specific credit rating increases, removals of authentic negative data, or financial underwriting outcomes. Credit profiles fluctuate based on numerous personal creditor factors outside our consulting scope.
            </p>
            <p>
              <strong>Consumer Rights & Independent Resolution:</strong> Under the federal Fair Credit Reporting Act (FCRA), you are not required to hire or contract with a third-party company to dispute inaccurate report information. You maintain a lifetime legal right to dispute any reporting discrepancies directly and completely free of charge on your own behalf with Equifax, Experian, TransUnion, and individual data furnishers. Our advisory programs exist purely to offer research templates, administrative organization, and strategic consumer file guidance.
            </p>
            <p>
              <strong>CROA 3-Day Right to Cancel:</strong> You have a statutory legal right to cancel your service agreement without any penalty or obligation within three (3) business days from the date the agreement is executed. All cancellation requests submitted within this window are processed with a 100% full refund of any initial setup or enrollment fees, provided no professional advisory or disputing labor has been performed.
            </p>
            <p>
              <strong>Arrears & Post-Performance Billing Disclosure:</strong> In absolute compliance with federal consumer guidance and the Credit Repair Organizations Act (CROA), Nobilis Path Advisory never charges advance or upfront fees before professional consulting and documentation services are performed. All recurring program invoicing is executed strictly in arrears (post-performance) for labor and tracking completed dynamically during the prior billing cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

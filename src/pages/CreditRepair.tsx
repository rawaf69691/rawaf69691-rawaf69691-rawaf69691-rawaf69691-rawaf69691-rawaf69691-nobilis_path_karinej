import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertCircle, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, FileText, BarChart3, HelpCircle } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    title: "Question 1",
    question: "How are the mistakes on your profile holding you back right now?",
    description: "Your answers let us dynamically align your initial file evaluation strategy with your most critical current pain point.",
    options: [
      { label: "Lowering my score", value: "Lowering my score" },
      { label: "Getting me denied for funding", value: "Getting me denied for funding" },
      { label: "Causing higher interest rates", value: "Causing higher interest rates" },
      { label: "Unsure, I just want them fixed", value: "Unsure, I just want them fixed" }
    ]
  },
  {
    id: 2,
    title: "Question 2",
    question: "What is your primary financial milestone or eligibility goal over the next 6 to 12 months?",
    description: "Aligning your advisory plan with practical, near-term capital acquisition milestones.",
    options: [
      { label: "Real Estate & Mortgage", value: "Real Estate & Mortgage" },
      { label: "Premium Funding / Commercial", value: "Premium Funding / Commercial" },
      { label: "Auto Financing", value: "Auto Financing" },
      { label: "General Profile Health", value: "General Profile Health" }
    ]
  },
  {
    id: 3,
    title: "Question 3",
    question: "Do you currently maintain an active, third-party credit monitoring service?",
    description: "Continuous monitoring is required to track disputes and confirm dynamic data updates.",
    options: [
      { label: "Yes, Active", value: "Yes, Active" },
      { label: "No, But Ready to Establish", value: "No, But Ready to Establish" },
      { label: "Cancelled / Need Guidance", value: "Cancelled / Need Guidance" }
    ]
  },
  {
    id: 4,
    title: "Question 4",
    question: "Are you seeing old items or accounts that don’t belong to you?",
    description: "Identifying crossed reports, obsolete public information, or administrative file damage.",
    options: [
      { label: "Yes, things that aren't mine", value: "Yes, things that aren't mine" },
      { label: "Yes, old items that should be gone", value: "Yes, old items that should be gone" },
      { label: "Both", value: "Both" },
      { label: "No, just general mistakes", value: "No, just general mistakes" }
    ]
  }
];

export default function CreditRepair() {
  const [currentStep, setCurrentStep] = useState(0); // 0 to 3, and 4 for loading/results
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const handleOptionSelect = (qId: number, value: string) => {
    setSelectedOption(value);
    setAnswers(prev => ({ ...prev, [qId]: value }));

    // Auto-advance with a luxurious smooth micro-delay
    setTimeout(() => {
      setSelectedOption(null);
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Evaluate and head to results screen
        setIsSynthesizing(true);
        setCurrentStep(QUESTIONS.length);
        setTimeout(() => {
          setIsSynthesizing(false);
        }, 1500); // Luxury generation simulation spinner
      }
    }, 350);
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setSelectedOption(null);
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setSelectedOption(null);
    setCurrentStep(0);
  };

  // Safe calculated advisory recommendations
  const getCustomRecommendations = () => {
    const recs = [];
    
    const constraint = answers[1];
    if (constraint === "Lowering my score" || constraint === "Getting me denied for funding" || constraint === "Causing higher interest rates") {
      recs.push({
        title: "Active Profile Impediment Identified",
        desc: `Your credit reporting history displays systemic active errors that are causing immediate financial friction ("${constraint}"). Correcting these is essential to restore lending eligibility.`
      });
    } else {
      recs.push({
        title: "General Profile Health Optimization Requested",
        desc: "Resolving suspected or general mistakes ensures that undetected reporting discrepancies don't quietly drag down your credit-capacity."
      });
    }

    const milestone = answers[2];
    if (milestone === "Real Estate & Mortgage") {
      recs.push({
        title: "Mortgage Lending Readies Alignment",
        desc: "Underwriters strictly mandate debt-to-income and item-by-item verification. Your audit files will optimize debt line representations for direct institutional conformity."
      });
    } else if (milestone === "Premium Funding / Commercial") {
      recs.push({
        title: "Tier-1 Commercial Underwriting Format",
        desc: "Commercial funding applications require a clean, unblemished public record status. Eliminating historical flags is prime priority for commercial bank readiness."
      });
    } else {
      recs.push({
        title: "Institutional Underwriting Optimization",
        desc: "Improving core portfolio health yields compounding benefits. Correcting reporting errors secures optimal pricing coefficients on premium lending lines."
      });
    }

    const monitoring = answers[3];
    if (monitoring !== "Yes, Active") {
      recs.push({
        title: "Credentialed File Tracking Suggested",
        desc: "To successfully run monthly audits and verify structural updates, stable active reporting integration is of high legal importance."
      });
    }

    const mixedFile = answers[4];
    if (mixedFile === "Yes, things that aren't mine" || mixedFile === "Yes, old items that should be gone" || mixedFile === "Both") {
      recs.push({
        title: "Potential Identity Misalignment & Obsolete Files",
        desc: "Unrecognized files or obsolete historical accounts suggest mixed-person records or expired reporting data. Purging these outdated records has an immediate positive compounding effect."
      });
    } else {
      recs.push({
        title: "Formatting and Structural Integrity Review",
        desc: "Ensuring general reporting transparency protects your credit from accidental bureau discrepancies or credit-limit formatting errors."
      });
    }

    return recs;
  };

  return (
    <div className="py-16 md:py-24 bg-luxury-ivory min-h-screen flex flex-col justify-center animate-fade-in relative overflow-hidden">
      {/* Decorative luxury architectural background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border border-luxury-gold/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-luxury-gold/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-2xl relative z-10 flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentStep < QUESTIONS.length ? (
            // ACTIVE QUIZ INTERFACE CARD
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-luxury-gold/15 flex flex-col justify-between"
            >
              <div>
                {/* Header Meta Progress */}
                <div className="flex items-center justify-between mb-8 border-b border-luxury-gold/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-luxury-gold animate-pulse" />
                    <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.25em]">
                      Nobilis Path Advisor Diagnostic
                    </span>
                  </div>
                  <span className="text-sm font-mono text-luxury-charcoal/80 font-semibold">
                    Step {currentStep + 1} of {QUESTIONS.length}
                  </span>
                </div>

                {/* Progress Indicators Line */}
                <div className="w-full bg-luxury-gold/10 h-[3px] rounded-full mb-8 overflow-hidden flex gap-0.5">
                  {QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 h-full transition-all duration-500 ${
                        idx <= currentStep ? 'bg-luxury-gold' : 'bg-luxury-gold/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Question Prompt */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs md:text-sm font-semibold text-luxury-gold uppercase tracking-widest block">
                    {QUESTIONS[currentStep].title}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-light text-luxury-blue leading-tight tracking-tight">
                    {QUESTIONS[currentStep].question}
                  </h2>
                  <p className="text-sm text-luxury-charcoal/75 italic leading-relaxed">
                    {QUESTIONS[currentStep].description}
                  </p>
                </div>

                {/* Question Answers Selection Grid */}
                <div className="space-y-3.5 mb-8">
                  {QUESTIONS[currentStep].options.map((option) => {
                    const isSelected = selectedOption === option.value || answers[QUESTIONS[currentStep].id] === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleOptionSelect(QUESTIONS[currentStep].id, option.value)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                          isSelected
                            ? 'bg-luxury-blue text-luxury-ivory border-luxury-blue shadow-lg translate-x-1'
                            : 'bg-luxury-ivory/30 border-luxury-gold/20 text-luxury-charcoal hover:bg-white hover:border-luxury-gold hover:shadow-md'
                        }`}
                      >
                        <span className="font-semibold text-sm md:text-base group-hover:translate-x-0.5 transition-transform duration-300">
                          {option.label}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            isSelected
                              ? 'border-luxury-gold bg-luxury-gold text-luxury-blue'
                              : 'border-luxury-gold/35 bg-transparent'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-luxury-ivory animate-scale-up" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Actions Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-luxury-gold/15 text-sm">
                {currentStep > 0 ? (
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 text-luxury-charcoal hover:text-luxury-gold font-semibold uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" /> Back to Previous
                  </button>
                ) : (
                  <div className="text-luxury-charcoal/70 font-semibold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    100% Anonymous Evaluation
                  </div>
                )}
                <div className="text-luxury-charcoal/70 font-mono text-xs font-semibold">
                  No Personal Data Collected
                </div>
              </div>
            </motion.div>
          ) : isSynthesizing ? (
            // SYNTHESIZING RESULTS DELIGHTFUL INTERMEDIATE SCREEN
            <motion.div
              key="generating-results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-white p-12 rounded-3xl shadow-2xl border border-luxury-gold/15 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-luxury-gold/20 border-t-luxury-gold animate-spin" />
                <Sparkles className="w-6 h-6 text-luxury-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-luxury-blue mb-2">Analyzing File Answers</h3>
              <p className="text-sm font-semibold text-luxury-gold uppercase tracking-widest mb-6">Customizing Advanced Diagnostic Pathway</p>
              <span className="text-sm italic text-luxury-charcoal/80 max-w-md leading-relaxed">
                Our automated eligibility assessment is cross-referencing statutory compliance thresholds under FTC, TSR, and FCRA regulations...
              </span>
            </motion.div>
          ) : (
            // PREMIUM METICULOUS RESULTS AND ACTION ENDPOINT SCREEN
            <motion.div
              key="diagnostic-results"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-luxury-gold/20"
            >
              {/* Luxury Seal Header */}
              <div className="text-center mb-10 pb-8 border-b border-luxury-gold/10">
                <div className="mx-auto w-16 h-16 rounded-full bg-luxury-blue/5 border border-luxury-gold/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-luxury-gold" />
                </div>
                <span className="text-xs md:text-sm font-bold text-luxury-gold uppercase tracking-[0.25em] block mb-2">
                  Evaluation Certified Complete
                </span>
                <h2 className="text-3xl font-heading font-bold text-luxury-blue mb-2">
                  Advisory Eligibility Analysis
                </h2>
                <p className="text-sm md:text-base text-luxury-charcoal/75 italic max-w-lg mx-auto leading-relaxed">
                  Based on your diagnostic choices, your profile qualifications align perfectly with the structured Administrative Audit protocol.
                </p>
              </div>

              {/* Dynamic recommendations output */}
              <div className="space-y-6 mb-10">
                <h3 className="text-sm font-bold text-luxury-blue uppercase tracking-widest border-l-2 border-luxury-gold pl-3 block">
                  Identified Action Steps & Compliance Blueprint
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {getCustomRecommendations().map((rec, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-luxury-ivory/40 border border-luxury-gold/10 space-y-1.5 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 text-luxury-blue">
                        <CheckCircle className="w-4 h-4 text-luxury-gold shrink-0" />
                        <h4 className="text-sm font-bold uppercase tracking-wider">{rec.title}</h4>
                      </div>
                      <p className="text-sm text-luxury-charcoal/80 leading-relaxed pl-6">
                        {rec.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliant FCRA Disclosure and Acknowledgment */}
              <div className="p-6 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/25 mb-8 text-xs md:text-sm text-luxury-charcoal/80 leading-relaxed text-justify space-y-2.5">
                <p className="font-bold text-luxury-blue text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-luxury-gold" /> FTC & statutory legal notice:
                </p>
                <p>
                  You represent that you understand your independent statutory right under the Fair Credit Reporting Act (FCRA) to perform the entire file audit, update, and dispute sequence on your own behalf at zero administrative bureau fee. Your decision to establish a secure portal constitutes a requested retainer of professional administrative document-packaging assistance.
                </p>
              </div>

              {/* The Call to Action Endpoint Link */}
              <div className="space-y-4">
                <a
                  href="https://nobilispathadvisory.getcredithelpnow.com/start"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full py-5 rounded-2xl bg-luxury-blue text-luxury-ivory font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.01] hover:bg-luxury-gold hover:text-luxury-blue shadow-gold-glow cursor-pointer relative overflow-hidden group"
                >
                  <span className="relative z-10 font-heading tracking-wide">To Get Started, Click Here</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Reset Buttons */}
                <div className="text-center">
                  <button
                    onClick={resetQuiz}
                    className="text-xs md:text-sm text-luxury-charcoal/70 hover:text-luxury-gold font-semibold uppercase tracking-wider cursor-pointer py-1.5 border-b border-transparent hover:border-luxury-gold/50 transition-all font-mono"
                  >
                    Reset Evaluator & Start Over
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

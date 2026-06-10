import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Quote, Star, BookOpen, Briefcase, FileText, CheckCircle } from 'lucide-react';
import executiveAdvisorImg from '../assets/images/office_professional_smiling_1779736664855.png';
import trustSealTransparentImg from '../assets/images/trust_seal_gold_blue_dark_bg_1780250592996.png';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-16 sm:py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={executiveAdvisorImg} 
            alt="Nobilis Path Executive Advisor" 
            className="w-full h-full object-cover brightness-[0.45]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-blue/30 via-luxury-blue/15 to-luxury-ivory/10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold block mb-4"
          >
            A Wealth Advisory & Strategic Planning Parlor
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-light text-luxury-ivory max-w-5xl mx-auto mb-6 tracking-tight leading-tight"
          >
            The Art of <span className="text-luxury-gold font-bold font-heading">Financial Planning</span> and Credit Portfolio Guidance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-luxury-ivory/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Compliant strategic financial planning and rigorous consumer report review and analysis services curated for high-performing professionals.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <Link to="/credit-repair">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-8 py-4 rounded-full bg-luxury-gold text-luxury-blue font-bold text-sm tracking-widest uppercase shadow-gold-glow hover:bg-luxury-ivory hover:text-luxury-blue transition-all cursor-pointer"
              >
                Take Roadmap Quiz
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-8 py-4 rounded-full bg-luxury-blue text-luxury-ivory font-bold text-sm tracking-widest uppercase border border-luxury-gold/30 hover:bg-luxury-gold hover:text-luxury-blue transition-all cursor-pointer"
              >
                Begin Evaluation
              </motion.button>
            </Link>
          </div>

          {/* Trust Seal Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center mb-8 mt-2"
          >
            <div className="h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-2 border-luxury-gold/40 shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center bg-[#20335c] hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img 
                src={trustSealTransparentImg} 
                alt="Licensed, Insured & Bonded Trust Seal" 
                className="h-full w-full object-cover scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] text-luxury-ivory/60 tracking-wider max-w-xl mx-auto italic"
          >
            Nobilis Path values transparency. We do not provide credit modification or guaranteed score fixes. Consumers may dispute reporting inaccuracies independently at no cost.
          </motion.div>
        </div>
      </section>

      {/* Compliance Trust Section */}
      <section className="py-12 bg-luxury-blue text-luxury-ivory border-y border-luxury-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="text-luxury-gold font-heading uppercase tracking-widest text-xs font-bold">I. Uncompromising Regulation</div>
              <p className="text-xs text-luxury-ivory/70 leading-relaxed">Compliance-first practices that integrate seamlessly with high-end merchant underwriting guidelines.</p>
            </div>
            <div className="space-y-2">
              <div className="text-luxury-gold font-heading uppercase tracking-widest text-xs font-bold">II. Transparent Disclosures</div>
              <p className="text-xs text-luxury-ivory/70 leading-relaxed">Strict adherence to FTC, CROA, and TSR guidelines. Zero misleading promises or artificial claims.</p>
            </div>
            <div className="space-y-2">
              <div className="text-luxury-gold font-heading uppercase tracking-widest text-xs font-bold">III. Professional Discretion</div>
              <p className="text-xs text-luxury-ivory/70 leading-relaxed">Dedicated administrative support and document structuring constructed for elite consumer standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Services / Pillars of Advisory */}
      <section className="py-24 bg-luxury-ivory overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-luxury-gold">Consolidated Frameworks</span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-luxury-blue mt-3 mb-6">Our Core Strategic Pillars</h2>
            <p className="text-luxury-charcoal/70 text-sm leading-relaxed">
              We approach personal and corporate documentation with the precision of an elite consultation boutique. Experience financial structures designed for longevity and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Eligibility Quiz */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white border border-luxury-gold/10 shadow-lg flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mb-6 text-luxury-gold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-luxury-blue mb-3">Take Roadmap Quiz</h3>
              <p className="text-xs text-luxury-charcoal/70 leading-relaxed mb-6 flex-grow">
                Complete a zero-friction, 100% anonymous diagnostic evaluation to assess bureau discrepancies, reporting inaccuracies, and dynamic file status.
              </p>
              <Link to="/credit-repair" className="text-xs font-bold tracking-widest uppercase text-luxury-gold hover:text-luxury-blue transition-colors">
                Start Quiz →
              </Link>
            </motion.div>

            {/* Pillar 2: Financial Profile Strategy */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white border border-luxury-gold/10 shadow-lg flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mb-6 text-luxury-gold">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-luxury-blue mb-3">Profile Strategy</h3>
              <p className="text-xs text-luxury-charcoal/70 leading-relaxed mb-6 flex-grow">
                This structured consulting program provides professional administrative support in reviewing, auditing, and organizing credit portfolio reporting histories.
              </p>
              <Link to="/services" className="text-xs font-bold tracking-widest uppercase text-luxury-gold hover:text-luxury-blue transition-colors">
                Enquire Now →
              </Link>
            </motion.div>

            {/* Pillar 3: Financial Profile Optimization */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white border border-luxury-gold/10 shadow-lg flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mb-6 text-luxury-gold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-luxury-blue mb-3">Profile Optimization</h3>
              <p className="text-xs text-luxury-charcoal/70 leading-relaxed mb-6 flex-grow">
                An elevated advisory consulting partnership providing expanded documentation preparation tools for strategic report tracking.
              </p>
              <Link to="/services" className="text-xs font-bold tracking-widest uppercase text-luxury-gold hover:text-luxury-blue transition-colors">
                Explore Program →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Informational Section (Credit Reporting) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Credit Portfolio Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <span className="text-xs font-bold text-luxury-gold uppercase tracking-[0.25em]">Informed Verification</span>
              <h2 className="text-3xl md:text-4xl font-heading text-luxury-blue font-light">Compliant Audit and Verification Frameworks</h2>
              <p className="text-sm text-luxury-charcoal/75 leading-relaxed">
                A strong credit file represents a powerful personal asset. Rather than using legacy "credit repair" hacks or offering score-increase guarantees, Nobilis Path utilizes clean, document-based auditing frameworks to help you address discrepancies on your credit report.
              </p>
              <p className="text-sm text-luxury-charcoal/75 leading-relaxed">
                Our advisory plans guide you on drafting clear verification requests under FCRA compliance rules, giving you a structured pathway to holding credit bureaus accountable for reporting accuracy.
              </p>
              <div className="pt-4">
                <Link to="/credit-repair">
                  <span className="text-xs font-bold uppercase tracking-widest text-luxury-blue border-b-2 border-luxury-gold pb-1 hover:text-luxury-gold transition-colors">Start Review File →</span>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 border border-luxury-gold/15 rounded-3xl -z-10 -translate-x-3 translate-y-3" />
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop" 
                alt="Elite Financial Consulting Discussion" 
                className="rounded-3xl shadow-xl w-full h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Focus Banner (CROA/FCRA/TSR Principles) */}
      <section className="py-20 bg-luxury-blue/5 border-y border-luxury-gold/10">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-8">
          <FileText className="w-12 h-12 text-luxury-gold mx-auto" />
          <h2 className="text-3xl font-heading text-luxury-blue font-light">The Nobilis Path Compliance Commitment</h2>
          <div className="text-sm text-luxury-charcoal/85 max-w-3xl mx-auto space-y-4 leading-relaxed">
            <p>
              We believe elite luxury and legal diligence go hand-in-hand. For that reason, Nobilis Path Advisory maintains a strict <strong>compliance-first billing and engagement philosophy</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-6">
              <div className="p-5 rounded-2xl bg-white border border-luxury-gold/5 flex gap-4">
                <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <p className="text-xs text-luxury-charcoal/70"><strong>Zero Outcome-Based Hyping:</strong> We provide structured program timelines and strategic plans. No artificial score-boost promises, or fast funding guarantees are ever tolerated.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-luxury-gold/5 flex gap-4">
                <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <p className="text-xs text-luxury-charcoal/70"><strong>No Upfront Fees for Credit Repair:</strong> We do not offer high-risk credit repair services. Our programs represent pre-determined, structured document compilation packages for data review.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-luxury-gold/5 flex gap-4">
                <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <p className="text-xs text-luxury-charcoal/70"><strong>FCRA Acknowledgment:</strong> We proactively inform every strategic partner of their statutory right to dispute credit bureaus independently at no cost under the Fair Credit Reporting Act.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-luxury-gold/5 flex gap-4">
                <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <p className="text-xs text-luxury-charcoal/70"><strong>TSR Compliance Standards:</strong> We do not make phone-pressure sales calls, implement coercive book-now techniques, or promote misleading debt relief structures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-gold block mb-2">Advisory Legates</span>
            <h2 className="text-3xl md:text-4xl font-heading text-luxury-blue font-light">Discerning Partner Reflections</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The strategic approach to my corporate structure and business compliance was a true asset to my business. Truly a consulting partner that pays for itself.",
                author: "James R.",
                role: "Tech Founder",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              },
              {
                text: "Reviewing my credit portfolio for home acquisition was handled with absolute professionalism, compliance-focused diligence, and total discretion.",
                author: "Sarah L.",
                role: "Real Estate Investor",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              },
              {
                text: "Nobilis Path provides more than templates; they deliver structured financial roadmap modeling and top-tier consumer support.",
                author: "Michael T.",
                role: "Corporate Executive",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-luxury-ivory/50 border border-luxury-gold/10 relative flex flex-col h-full"
              >
                <Quote className="w-10 h-10 text-luxury-gold/20 absolute top-6 right-6" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold" />)}
                </div>
                <p className="text-luxury-charcoal/80 mb-8 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold/30 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-luxury-blue text-sm">{testimonial.author}</div>
                    <div className="text-[11px] text-luxury-gold uppercase tracking-wider font-semibold">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance-Friendly FAQ Section */}
      <section className="py-24 bg-luxury-ivory border-t border-luxury-gold/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-gold block mb-2">Advisory Clarifications</span>
            <h2 className="text-3xl md:text-4xl font-heading text-luxury-blue font-light">Frequently Answered Disclosures</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How does the Nobilis Path advisory process work?",
                a: "Our process begins with an intake review of your current corporate structure and consumer filing documentation. We systematically identify reporting gaps, calculate compliance misalignments on reports, and build a strategic document map for you to review and verify."
              },
              {
                q: "Do you guarantee outcomes, score increases, or loan approvals?",
                a: "No. Nobilis Path maintains an absolute outcome disclaimer. No compliance consulting company can ethically guarantee score improvements or credit deletions. Credit scores are dynamic and influenced exclusively by personal credit card balances, payment timeliness, and banking choices outside our advisory control."
              },
              {
                q: "Can I dispute inaccurate reporting information myself?",
                a: "Yes. Every consumer has a legal right to inspect, challenge, and dispute inaccurate entries on their credit profile directly with federal credit bureaus on their own behalf for free. Nobilis Path acts as an administrative support consultant and dispute analyst if you prefer organized, professional assistance."
              },
              {
                q: "How long does your review process typically take?",
                a: "Our initial file optimization audit and document compilations are drafted within the first few weeks of matching with an advisor. Long-term progression reporting and strategic guidance programs follow our client development cycles."
              },
              {
                q: "What types of documentation will I be expected to provide?",
                a: "To construct a safe, accurate file audit, we require formal government-issued identity verification, current utility verification to check physical address consistency, and secure digital transcripts of your core credit bureau histories."
              },
              {
                q: "How are advisory services billed?",
                a: "All services are billed completely transparently behind fixed, flat-rate strategic program packages. We also offer flexible monthly payment options for your convenience. We do not participate in hourly billing pressure or charge ongoing, open-ended subscription fees for credit repair."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white border border-luxury-gold/5 shadow-md space-y-3"
              >
                <h3 className="text-base font-semibold text-luxury-blue font-heading flex gap-2">
                  <span className="text-luxury-gold font-bold">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-luxury-charcoal/75 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

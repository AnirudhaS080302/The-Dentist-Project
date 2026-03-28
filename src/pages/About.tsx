import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useAnimation, useInView } from 'motion/react';
import { Link } from 'react-router-dom';

function AnimatedCounter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <main className="pt-24">
      {/* Breadcrumb Title Bar */}
      <header className="bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex items-center gap-2 mb-4 text-sm font-medium text-on-surface-variant">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">About Caninus</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-[-0.04em] text-primary"
          >
            Redefining the Dental Experience.
          </motion.h1>
        </div>
      </header>

      {/* Intro Section: Editorial Layout */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Modern dental clinic interior" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkq_H2doiuMD7w1XR5Jt3k_7CMFYCNNPvq-vHL7LDJ1ynp4zJpFxLeu4zCIIM2qsp4wZ5YF-TjtzblXUjuKcgHTpj_1KqLDPhPLnrOpkVv0CN3DagSVCy7l3t4Rdlx-WbVBqY6VHaqWsPjFmGMID8N6dt321zf-OgGugZHJ6qsB1zuIZROIl6OhDsC3fn5Sd_90k3BsJD1pZUULkurt2OBK_BUkXojamKzEnzrbLMEYGbxJP6SvOdVMoq8S2vXpQIKw1mUps6eQhI"
              />
            </div>
            {/* Floating Design Element */}
            <div className="absolute -bottom-8 -right-8 bg-primary-container p-8 rounded-xl text-white hidden md:block max-w-xs shadow-xl">
              <p className="text-lg font-light leading-relaxed italic">"Our mission is to blend clinical excellence with the tranquility of a premium wellness retreat."</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-2">Our Philosophy</span>
              <h2 className="text-4xl font-bold leading-[1.1] text-primary">Precision care, curated for your comfort.</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              At Caninus, we believe dentistry should be an editorial experience—meticulously designed, expertly executed, and entirely focused on the individual. Our studio discards the sterile atmosphere of traditional clinics in favor of a warm, sophisticated environment.
            </p>
            {/* Milestone Stats */}
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-outline-variant/30">
              <div>
                <div className="text-4xl font-extrabold text-secondary"><AnimatedCounter end={15} suffix="+" /></div>
                <div className="text-sm font-semibold text-on-surface-variant mt-1 uppercase tracking-wider">Years Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-secondary"><AnimatedCounter end={12} suffix="k" /></div>
                <div className="text-sm font-semibold text-on-surface-variant mt-1 uppercase tracking-wider">Healthy Smiles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us: Accordion Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">Why Caninus</span>
            <h2 className="text-4xl font-bold text-primary">The Editorial Standard of Care</h2>
          </div>
          <AccordionGroup />
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">The Experts</span>
            <h2 className="text-4xl font-bold text-primary leading-tight">Meet the visionaries behind your smile.</h2>
          </div>
          <button className="text-secondary font-bold flex items-center gap-2 hover:opacity-70 transition-opacity">
            View Full Directory <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember 
            name="Dr. Julianne Vane"
            role="Chief Surgeon & Founder"
            description="Specializing in aesthetic reconstruction and implantology with over 15 years of clinical practice."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkFf7caDIN7zLK4NakqwNEFtDg-5eKGbSRPsgUNB30K-f8P9J5SK2ftoMiW-cxMxIZSwaC_5fZCQcOhaNJt44EmaSs4cTzo_ZmKBSXSzj60LolWwDOk1jmg8YE0pKWLGQFwXoty6Ri-aJsxubpRqN6_uxE5uNNdTmdY4H01KYHLLCY2Snzlr4QKEddriS0Nb99po8dnWsL1cN_VLCcSr8OqdlqQ75h7F4uBEkgcY0psREB69J9-ilOMmRN2LQOPNqdq5TuJO_i5k"
            delay={0.1}
          />
          <TeamMember 
            name="Dr. Marcus Thorne"
            role="Restorative Specialist"
            description="Focused on minimally invasive restorative techniques and digital smile design."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBGvhpqD4j6ne8sjCAoVVR7rszUo-gvRCqJKs-SUGKVaPg8yeloK7-IBoa1rCFDnX_SGwM8sIfDpGugk9MCndmeW5Qei5fsXX6oJdI12MKDZU0VXgW1bjGQGlC0tcu1FvRb_DlxiHQkI5BqHfGtCtDu29nxaQQuYHXdyJQHAq-2W2i9rfCkAcgxvs4euSIWAAqt3f249B2rxa9ToXRFreDttlL5zfmrkSa-Q9xb2uLPmm2M5Doiq_TCPTIUoVsxNdWWonQSLw_VmvQ"
            delay={0.2}
          />
          <TeamMember 
            name="Dr. Elena Rostova"
            role="Periodontal Lead"
            description="Expert in gum health and oral system biology, ensuring a healthy foundation for every procedure."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ovlUsBQ83kThB63zzOaozs3XfAoG7R53MraoskJmN2d-37ivRXT0AfAoe-M0n1tpbgq0hx-Ed4Lp6pDy8tKGz9Wu2zK4Oe2NCP56_t9-PrHHvRYvEo0qKk6oraKbDUzfnlhyCZrftRKh6snT0j21LdCo_mmsjzN6p0sQ8xGcLaMsHGeEOLXVeZuehNdlFdMzfopYNV3-wEgLmJuTknLWIaLiDf13NIQoEeUT43t34gHpik8XKOx893sL2pyj0LvowpyyWSlMl0A"
            delay={0.3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary-container rounded-xl p-12 md:p-20 relative overflow-hidden text-center md:text-left"
        >
          {/* Background texture/gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-40"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to elevate your dental journey?</h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">Schedule your private consultation and experience the Caninus difference first-hand.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointment" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all inline-block">Book Appointment</Link>
              <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">Contact Us</button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function AccordionGroup() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Advanced Digital Diagnostics",
      content: "We utilize 3D imaging and AI-driven diagnostics to ensure the highest level of precision. Every treatment plan is a collaboration between technology and human expertise."
    },
    {
      title: "Bespoke Comfort Suite",
      content: "Experience dental care in an environment designed for peace. From noise-canceling headsets to aromatherapy, we prioritize your nervous system's calm."
    },
    {
      title: "Biocompatible Materials",
      content: "We use only the safest, most durable materials that harmonize with your body's natural biology."
    }
  ];

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void, key?: number | string }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full px-8 py-6 flex justify-between items-center text-left"
      >
        <span className="text-xl font-bold text-primary">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="text-secondary w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-on-surface-variant leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TeamMember({ name, role, description, image, delay }: { name: string, role: string, description: string, image: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-surface-container-highest">
        <img 
          className="w-full h-full object-cover" 
          alt={name} 
          src={image}
        />
      </div>
      <h3 className="text-2xl font-bold text-primary">{name}</h3>
      <p className="text-secondary font-medium mb-4">{role}</p>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

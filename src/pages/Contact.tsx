import React from 'react';
import { ChevronRight, MapPin, Phone, Clock, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="pt-24 pb-20">
      {/* Breadcrumb Title Bar */}
      <header className="bg-surface-container-low py-12 mb-16">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex items-center gap-2 mb-4 text-sm font-medium text-on-surface-variant">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">Contact</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-[-0.04em] text-primary"
          >
            Get In Touch
          </motion.h1>
        </div>
      </header>

      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-[1.1] mb-8">
            Experience the gold standard in dental wellness.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Whether you're seeking a routine check-up or a comprehensive clinical consultation, our team is ready to provide you with bespoke care.
          </p>
        </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Details Column (Asymmetric Editorial Style) */}
        <div className="lg:col-span-4 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-low p-10 rounded-xl space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Visit Us</span>
              </div>
              <p className="text-primary font-bold text-xl leading-snug">
                24 Clinical Parkway, <br />Suite 400, <br />Medical District, NY 10012
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Call Directly</span>
              </div>
              <p className="text-primary font-bold text-xl leading-snug">
                +1 (555) 942-0182<br />
                +1 (555) 942-0183
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Office Hours</span>
              </div>
              <div className="space-y-2 text-on-surface-variant font-medium">
                <div className="flex justify-between">
                  <span>Mon — Fri</span>
                  <span>8:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM — 4:00 PM</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Image - Editorial Inset */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(19,29,41,0.06)] aspect-[4/5]"
          >
            <img 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
              alt="Modern high-end dental office lobby with minimalist white furniture, large windows, and warm ambient lighting in a clinical setting" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg7fgcQsiWK8cBWDJckVy_P2MA8pjBMhE8or3sJNcGjPhuXW1VryVbRNsAWONDmLr5ZHgy_rPTs4ZQoxzc6r5wp0x__0rnK_D4K5e-3cyTiUOjgVr62-lyFNiWdv7V5_ii7dabf3IxLGxIA3KiJD0o0-gXRr2c5uSuG1PdJx3KXLUADK4dLW1gRzzG51Ijro6DJymXcolG9_m-ZmB6rXx7-fIjKJz6FVtyg1EB_89iaB8ILAQPj2ue8af95MQPuHiGOvwjbna9V-M"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest mb-1">Clinic Atmosphere</p>
              <p className="text-xs opacity-80">Designed for your comfort.</p>
            </div>
          </motion.div>
        </div>

        {/* Form & Map Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(19,29,41,0.04)]"
          >
            <h2 className="text-3xl font-bold text-primary tracking-tight mb-8">Send an Inquiry</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Full Name</label>
                <input 
                  className="w-full px-6 py-4 bg-surface-container-lowest border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" 
                  placeholder="John Doe" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Email Address</label>
                <input 
                  className="w-full px-6 py-4 bg-surface-container-lowest border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" 
                  placeholder="john@example.com" 
                  type="email"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Select Service</label>
                <select className="w-full px-6 py-4 bg-surface-container-lowest border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all">
                  <option>Clinical Consultation</option>
                  <option>Cosmetic Enhancement</option>
                  <option>Restorative Dentistry</option>
                  <option>Emergency Care</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Your Message</label>
                <textarea 
                  className="w-full px-6 py-4 bg-surface-container-lowest border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" 
                  placeholder="Tell us how we can help you..." 
                  rows={5}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="button"
                  className="w-full md:w-auto bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(19,29,41,0.06)] bg-surface-container-high"
          >
            <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
              <img 
                className="w-full h-full object-cover" 
                alt="Overhead satellite view map of an urban medical district with clean streets and modern architecture in soft pastel tones" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnLFSzjDErjwRmDeCV4v2CUw2OBC5lVfEqJETV_wuoHPJT7PRqVP-JnJ36a5iceyfyX5oOaAJqIa54f24KdX-Mo39NGlxWWwEYB8zPieeXMkEqhLGb9RVTajZVdM3g1zvo-Xw5oM0gN9JloGVXHE8JSUXZklG1VSume8G8uBdGwg5axATo5YcYtBOFBe9TDXl8Cmh3ZsaoDI6Gw2eI1U04U4lnVKDek7WUqPxbHXoqo74y_UwU-X3CSwTd_LKNVnNYa-9h3d-ptLA"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Map Pin Mockup */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                <div className="absolute -top-12 -left-20 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold shadow-2xl">
                  CANINUS CLINIC
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                </div>
                <div className="w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Map Controls Overlay */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-primary hover:bg-surface-container-low">
                <Plus className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-primary hover:bg-surface-container-low">
                <Minus className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </main>
  );
}

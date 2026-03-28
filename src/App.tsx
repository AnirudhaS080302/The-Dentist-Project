import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  SmilePlus,
  Menu,
  Play,
  Sparkles,
  Stethoscope,
  Activity,
  Microscope,
  ArrowRight,
  ChevronRight,
  ChevronsLeftRight,
  Flower2,
  Crosshair,
  Quote,
  Globe,
  Mail,
  ArrowLeft,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';
import { cn } from './lib/utils';
import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

// --- Components ---

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'a' ||
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') || 
                          target.closest('button');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-black rounded-full" />
    </motion.div>
  );
}

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-24">
        <Link to="/" className="flex items-center gap-2">
          <SmilePlus className="text-secondary w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight text-primary-container">
            Caninus
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'About', 'Our Services', 'Appointment', 'Contact'].map((item, i) => {
            const path = i === 0 ? "/" : `/${item.toLowerCase().replace(' ', '-')}`;
            const isActive = location.pathname === path;
            
            return (
              <Link
                key={item}
                to={path}
                className={cn(
                  "font-bold text-sm uppercase tracking-wider transition-colors",
                  isActive ? "text-primary-container" : "text-primary-container/60 hover:text-secondary"
                )}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:block text-right">
            <p className="text-[10px] text-primary-container/50 font-bold uppercase tracking-widest">Call Me</p>
            <p className="text-sm font-bold text-primary-container">+1 (800) 257 214 392</p>
          </div>
          <Link to="/appointment" className="hidden md:block bg-secondary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary/90 transition-all">
            Book Appointment
          </Link>
          <button className="md:hidden bg-primary-container text-white p-3 rounded-lg hover:bg-secondary transition-all">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-40 left-[15%] w-48 h-32 -rotate-12 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(19,29,41,0.06)] border-4 border-white z-20 hidden lg:block">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB37yRbX94IRuku44-BNHOz3TKijCyOsgEm1GCL4a0DSSn-EgnDj8Q0YzlNFK3m8vVDbYiMdiW_WLHhZkChO85W4iIJOlh6hoeu7_RH3eXsJZTpJfTyq970HHVVzqSarAGMQ1lOm7_e8KriVkXNeFe_hwmMnlXD_zfiddkmKvWgXLa8xd2yS1WwUbrrPSA5VlFdSH48xU9Sbvn7gMF8fV3ER4AMoGdXLtl7bORm2uJv1rSSjpbgYU1jTEjqdq5M8zRBj3en2p1i89U"
          alt="Happy Patient"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-40 right-[15%] w-40 h-52 rotate-12 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(19,29,41,0.06)] border-4 border-white z-20 hidden lg:block">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNQ5Rudizu6ojpICDXR55uaDW-Gdaxp8fVGvnU2fKuFtOincfetyo_ZL7SORPP6kQDuOrE4zigek8PmfbeFkxkwXsTUvn0FMoSp-IysjPsT1Z_lvPYyUL6F8ND-q_bOlPfn8vEte30D03McZ19h9KuiIX7J7GYwX0AalWDqVMbt2RDozPAx8GX2ADHQbWB9eyT4UoHe8FQZgNhzzvbGBBOWHok-vVgBDEWxHXmq3bZItNs9Zo7liVTuIoMly0Xpl6qy6Edbdf0ec"
          alt="Result Close-up"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Watermarks */}
      <div className="absolute top-1/2 left-20 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <Activity className="w-96 h-96 text-secondary" />
      </div>
      <div className="absolute top-1/3 right-40 opacity-5 pointer-events-none hidden lg:block">
        <SmilePlus className="w-80 h-80 text-secondary" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-primary-container leading-[0.9] tracking-tighter max-w-4xl mx-auto">
            Your trusted<br />professional dentist
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="w-12 h-1 bg-primary-container mx-auto lg:mx-0"></div>
            <p className="text-lg text-primary-container/70 font-medium leading-relaxed max-w-xs mx-auto lg:mx-0">
              Enjoy dental care experience, that you feel comfortable with our first dental professionals and that you look awesome.
            </p>
            <Link to="/appointment" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all inline-block">
              Book Appointment
            </Link>
          </motion.div>

          {/* Center Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Background Circle Shape */}
              <div className="absolute inset-0 bg-[#FCD7D7] rounded-full scale-[1.15] opacity-50 blur-sm"></div>
              {/* Profile Image */}
              <div className="relative w-[340px] h-[520px] rounded-full overflow-hidden bg-white shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmFN_SZM8ZS-DM9V9R0WKpQ9gsNFtLhk0Q10rhYll9REYr9rPfGueBDiJvXhBYJSMXzJzH6gNy0Tb53cxzPg9lWV7LlunPRM0QMNmZ629WhLg7GN0TMcZ7NUk7lgCKAMh1218WFsvb9bFwbhU7GcqWwA_GqGbYnWBDeI9qPeNi3BywtHECVtOR9hTsSOq_4OAQjkJ83_Qd52Nju5dPg8faiOAVRqTS8sQRdS2NJPrY68pAHMugR0xJSabuK_p2LiFSk9lG7s1F-aA"
                  alt="Doctor Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating Video Badge */}
              <div className="absolute -top-4 -left-8 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 p-2 cursor-pointer group hover:scale-110 transition-transform">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Play className="text-secondary w-8 h-8 fill-secondary" />
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
                    <text className="fill-primary-container font-bold uppercase tracking-[0.2em]" fontSize="10">
                      <textPath href="#circlePath">Watch Video • Watch Video •</textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <div className="space-y-8 order-3 lg:order-3 text-center lg:text-left">
            <div>
              <p className="text-primary-container/70 font-bold text-sm leading-snug max-w-[200px] mx-auto lg:mx-0">
                Achieved degrees from reputed dental college
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center opacity-70 filter grayscale max-w-[240px] mx-auto lg:mx-0">
              <div className="font-black text-xs">JOB JUMP</div>
              <div className="font-black text-xs">EDUCATION</div>
              <div className="font-black text-xs">THE BEST</div>
              <div className="font-black text-xs">SMART</div>
            </div>
            <div>
              <p className="text-primary-container font-extrabold text-lg">2011-2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 24, suffix: "/7", label: "Emergency Care" },
    { value: 5.0, suffix: "", decimals: 1, label: "Google Rating" },
  ];

  return (
    <section className="bg-surface-container-lowest py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn("text-center md:text-left", i !== stats.length - 1 && "md:border-r border-outline-variant/30")}
            >
              <p className="text-4xl font-extrabold text-secondary mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} duration={2.5} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-4xl font-bold text-primary mt-4 tracking-tight">Holistic care for your dental architecture.</h2>
          </div>
          <Link to="/our-services" className="w-fit bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 group hover:bg-secondary/90 transition-all">
            Explore all services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 group relative overflow-hidden bg-primary-container rounded-xl p-12 text-white h-[400px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 mb-6 text-secondary" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Teeth Whitening</h3>
              <p className="text-slate-300 max-w-sm leading-relaxed">
                Professional illumination that transforms your aesthetic. Safe, effective, and immediate results.
              </p>
            </div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LHxwZbnTohzCmSqGRPsw_3Za1uHThe4LRmulqJk8WPrvfru_FZjw-wFQBE2D5w1KokFSPRW7f7VKjC-7TRieCB1hBoriqG4rumdzrmFhghf36XCaMMRxpGbqSmy8NVajB9otJ5VQT4bAwjvfXM9lC-tBBVBxyewEcC9t3rJUncGJdx_TcPmX5KaT5qsFI2c5Ggo7c_89pgGT5Wbe5dRuFzxGIaYiHksarORkIJV7iwHKvBc2u5gbZkvR4peDn7ccjIqPK5-2fqM"
              alt="Teeth Whitening"
              className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-700"
            />
            <Link to="/our-services#teeth-whitening" className="relative z-10 w-fit bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg inline-block hover:bg-secondary/90 transition-all">
              Learn More
            </Link>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-low rounded-xl p-10 flex flex-col justify-between border border-transparent hover:border-outline-variant/20 transition-all"
          >
            <div>
              <Stethoscope className="w-10 h-10 mb-6 text-secondary" />
              <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">Dentures</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Custom-designed prosthetic solutions engineered for stability and a natural appearance.
              </p>
            </div>
            <Link to="/our-services#dentures" className="mt-8 w-fit bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg inline-block hover:bg-secondary/90 transition-all">
              Learn More
            </Link>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-surface-container-low rounded-xl p-10 flex flex-col justify-between border border-transparent hover:border-outline-variant/20 transition-all"
          >
            <div>
              <Activity className="w-10 h-10 mb-6 text-secondary" />
              <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">Orthodontic Treatment</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Precision alignment using the latest invisible aligner technology and advanced bracing systems.
              </p>
            </div>
            <Link to="/our-services#orthodontic-treatment" className="mt-8 w-fit bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg inline-block hover:bg-secondary/90 transition-all">
              Learn More
            </Link>
          </motion.div>

          {/* Medium Card (Spans 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-surface-container-low rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div className="p-12 flex flex-col justify-center">
              <Microscope className="w-10 h-10 mb-6 text-secondary" />
              <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">Dental Implants</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Biocompatible solutions for permanent structural restoration, providing a lifetime solution for missing teeth.
              </p>
              <Link to="/our-services#dental-implants" className="mt-8 w-fit bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg inline-block hover:bg-secondary/90 transition-all">
                Learn More
              </Link>
            </div>
            <div className="h-64 md:h-full bg-slate-300">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC-31FuAWst7XKJB3YfgfSulENrfVTM9vNtArCMRFR1VS_7D6V6jCMaGLVSZCV1WJzM2fDc2H03NjVYuxNzmi3LSbZnwGrwZeLolGcry0CkPVFKr7nFpyel-AfgsFvNOf0uQb8p5IRImMhiH-L4VBZtBv4hoGRRzMSS3xcWgwJvkpQQGFtk7weiJxExVCLoDOvSM1cp4Eo1iW58DbaFtzICUrVHx2g7rSvZauHyFAmA5oR8FGEJSYkt-PLyAs55RWDhWotllyrmWY"
                alt="Dental Implants"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ beforeImage, afterImage, title, subtitle, duration }: { beforeImage: string, afterImage: string, title: string, subtitle: string, duration: string }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const stopDragging = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, onMouseMove, onTouchMove, stopDragging]);

  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(19,29,41,0.04)] border border-outline-variant/10">
      <div
        ref={containerRef}
        className="relative aspect-video rounded-lg overflow-hidden select-none cursor-ew-resize"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      >
        {/* After Image (Background) */}
        <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable="false" />

        {/* Before Image (Foreground, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden border-r-4 border-white shadow-xl"
          style={{ width: `${position}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 h-full object-cover max-w-none" 
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }} 
            draggable="false" 
          />
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 -ml-0.5 w-1 bg-white"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -mt-6 -ml-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <ChevronsLeftRight className="text-primary-container w-5 h-5" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-primary-container/80 backdrop-blur px-3 py-1 rounded text-white text-[10px] font-bold uppercase tracking-wider">Before</div>
        <div className="absolute bottom-4 right-4 bg-secondary/80 backdrop-blur px-3 py-1 rounded text-white text-[10px] font-bold uppercase tracking-wider">After</div>
      </div>
      <div className="mt-6 flex justify-between items-center px-2">
        <div>
          <h4 className="font-bold text-primary tracking-tight">{title}</h4>
          <p className="text-sm text-on-surface-variant">{subtitle}</p>
        </div>
        <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{duration}</span>
      </div>
    </div>
  );
}

function Comparisons() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">The Transformation</span>
          <h2 className="text-4xl font-bold text-primary mt-4 tracking-tight">Witness the Clinical Difference</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ComparisonSlider
              beforeImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAlK3e0a_3qIxHGOsUGUPNfiiY5jtBEeWqfZsZR8cE0sAbXrCoMxZ2qs95Cx2Oq41NPB0nmBkr1jQby097BO4CBQ927mYAPTkDYktl_WG1gqsc8AuAH4dR71wixT61ewX8CUS4IV1C0QxRPh5spbnLvDFvXK47c29IM9-TYTi6NNA54GKG-EzuEmKElLgwwgOf3FQjVoAA66Py7VtFdU5K3Qks5pGo0twxu8LFRy4c6pNDIgCfI6UU6TiK41VS1oi2CzYL6SMr0SdE"
              afterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCr7bdPYQDAPJdJGmCXvsavpkfKLZWz_NicEVHHYhVD7YeHcKSaQa4IfN0p7u4Y0OnOUZiglE-_fLmDyyjh8G-JE87V8-rQ1A6qqgHtYnVHWQmaqqczQIB7sK004Dv10lX3LuVRCsozHEjj_MWJppPkrd7G1NVdmaJpUntWWOU0BL0IR9Yn4R70R0hXdhiTGTZiUwEkXiA-_-m40SLbvkOvngkqDdeHBC7T8tK5X_Eme9yerSpXosukLpcR2lvY6y6rTn-DIeewIAs"
              title="Smile Reconstruction"
              subtitle="Full arch porcelain veneers"
              duration="8 Weeks"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ComparisonSlider
              beforeImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB_k6hr8FuijuUHdDg34czF07qqX6-JMBNa8xfSEzVdH6nedxFWcLI-MEqQvJqwwXgjUNtOQR6yxRgpR-drpAWxvu3KkHeSPKtfypgSqotjqdq2-DWOPYr7la1J5VwV-1lYMXkTqAeQXh5SuG9e3Re0YiD9kEtj1wUrW1ZN5qRf06njRMt1slQ1TtsJO6Pfyq0hoaBRA4QIGPLVjUFvNrUgtL1HPIR_NeTJpyc6NfDJHDIbocmgLB6H90f71qEXutmiR9L8FNfBlds"
              afterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ke-jeRk_2yvjWimC9XmEACkB8CM_esfk4rWJWmeqPk9x6aClzbzG5RcJ-hHGYs6q52HeAwQdyYgbQ1S7DuXdygyEnYmef5RGtU10HZhLiDdjDtFlYRQdCLbZp3SXTszkWOO2h7pFUPCd9UM-XNe_cwNkFBXepxYe5Dt1wIA3khiWUXjy1hHkiWLc97aLneg_cDwq3gPKk7M2z8ZO3CoMUHqYjKHAQ0aXdwuuo51VGNg9LhmdaD5anv83J3T2XVrzG67VXn5ASYY"
              title="Alignment Correction"
              subtitle="Clear aligner therapy"
              duration="12 Months"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 relative"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEv_7xTGtddBeye5FPuvsPoswnthNGLLMicqqeWgOqvk2BMuwUkLlEYsAEoG0YSEdM1wUlDSFFCF8FVewgytdpihHQetQ1_vDibg9TFpVc1PlYvDExJdErGYvjH_3uB9TM24utfOMlv4_lzdSvHDQRdbsV42l6xoUw5bUM0sffj86UdKRGcIymKmKcHKtbkEqRDn3CVbRmMEiOvhen8n4a48qtchds-donOOh00s_PcpFvzRB4QdJklKUcCe_OeU0QrirzD4CbOh4"
            alt="Clinic Interior"
            className="w-full rounded-xl shadow-[0_20px_40px_rgba(19,29,41,0.06)]"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 space-y-10"
        >
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">The Caninus Philosophy</span>
            <h2 className="text-4xl font-bold text-primary mt-4 tracking-tight">Where Clinical Precision Meets Editorial Aesthetics.</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <Flower2 className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Spa-Like Environment</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Forget the sterile scent. Our studio is designed to calm the senses and provide a boutique experience.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                <Crosshair className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Painless Precision</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Utilizing computer-guided surgery and high-speed digital mapping for absolute comfort and accuracy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "The team at Caninus redefined what I thought was possible in dental care. It felt more like a wellness retreat than a clinic, and the results are absolutely flawless. My confidence has never been higher.",
      name: "Helena Richardson",
      role: "Creative Director",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB37yRbX94IRuku44-BNHOz3TKijCyOsgEm1GCL4a0DSSn-EgnDj8Q0YzlNFK3m8vVDbYiMdiW_WLHhZkChO85W4iIJOlh6hoeu7_RH3eXsJZTpJfTyq970HHVVzqSarAGMQ1lOm7_e8KriVkXNeFe_hwmMnlXD_zfiddkmKvWgXLa8xd2yS1WwUbrrPSA5VlFdSH48xU9Sbvn7gMF8fV3ER4AMoGdXLtl7bORm2uJv1rSSjpbgYU1jTEjqdq5M8zRBj3en2p1i89U"
    },
    {
      quote: "I've always had anxiety about visiting the dentist, but the spa-like environment and painless procedures here completely changed my perspective. Truly a remarkable experience.",
      name: "Marcus Chen",
      role: "Software Engineer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmFN_SZM8ZS-DM9V9R0WKpQ9gsNFtLhk0Q10rhYll9REYr9rPfGueBDiJvXhBYJSMXzJzH6gNy0Tb53cxzPg9lWV7LlunPRM0QMNmZ629WhLg7GN0TMcZ7NUk7lgCKAMh1218WFsvb9bFwbhU7GcqWwA_GqGbYnWBDeI9qPeNi3BywtHECVtOR9hTsSOq_4OAQjkJ83_Qd52Nju5dPg8faiOAVRqTS8sQRdS2NJPrY68pAHMugR0xJSabuK_p2LiFSk9lG7s1F-aA"
    },
    {
      quote: "The attention to detail and aesthetic planning is unmatched. They didn't just fix my teeth; they designed a smile that perfectly suits my face. Highly recommended.",
      name: "Sophia Martinez",
      role: "Architect",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_k6hr8FuijuUHdDg34czF07qqX6-JMBNa8xfSEzVdH6nedxFWcLI-MEqQvJqwwXgjUNtOQR6yxRgpR-drpAWxvu3KkHeSPKtfypgSqotjqdq2-DWOPYr7la1J5VwV-1lYMXkTqAeQXh5SuG9e3Re0YiD9kEtj1wUrW1ZN5qRf06njRMt1slQ1TtsJO6Pfyq0hoaBRA4QIGPLVjUFvNrUgtL1HPIR_NeTJpyc6NfDJHDIbocmgLB6H90f71qEXutmiR9L8FNfBlds"
    }
  ];

  return (
    <section className="py-24 bg-primary-container text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Testimonials</span>
          <h2 className="text-4xl font-bold tracking-tight">What our patients say</h2>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom', bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
            navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
            className="!pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center px-4">
                  <div className="mb-8">
                    <Quote className="text-secondary w-12 h-12 md:w-16 md:h-16 opacity-30 rotate-180" />
                  </div>
                  <p className="text-lg md:text-3xl font-light italic leading-relaxed mb-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary p-1">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-secondary text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Controls */}
          <div className="flex justify-center items-center mt-8 gap-4 absolute bottom-0 left-0 right-0 z-10">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="swiper-pagination-custom !relative !w-auto flex items-center justify-center gap-2 px-4"></div>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer shrink-0">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-secondary rounded-2xl overflow-hidden p-12 lg:p-20 text-white text-center flex flex-col items-center"
        >
          {/* Subtle background gradient/texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-container opacity-50 pointer-events-none"></div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative z-10 tracking-tight">Ready to redesign your smile?</h2>
          <p className="text-white/80 max-w-2xl mb-12 text-lg relative z-10">
            Join our waiting list for new patient consultations and experience the Clinical Editorial difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link to="/appointment" className="bg-primary-container text-white px-10 py-4 rounded-xl font-bold shadow-2xl hover:scale-105 transition-all inline-block">
              Schedule Consult
            </Link>
            <Link to="/contact" className="bg-surface-container-lowest text-secondary px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all inline-block">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-16 bg-primary-container">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <SmilePlus className="text-white w-6 h-6" />
            <p className="text-xl font-bold text-white tracking-tight">Caninus</p>
          </Link>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Elevating dental standards through editorial-grade precision and personalized aesthetic planning.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-surface font-bold tracking-tight">Quick Links</p>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link to="/our-services" className="text-slate-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-surface font-bold tracking-tight">Our Popular Services</p>
            <ul className="space-y-2">
              <li><Link to="/our-services#root-canal-treatment" className="text-slate-400 hover:text-white transition-colors text-sm">Root Canal Treatment</Link></li>
              <li><Link to="/our-services#dental-fillings" className="text-slate-400 hover:text-white transition-colors text-sm">Dental Fillings</Link></li>
              <li><Link to="/our-services#dentures" className="text-slate-400 hover:text-white transition-colors text-sm">Dentures</Link></li>
              <li><Link to="/our-services#teeth-whitening" className="text-slate-400 hover:text-white transition-colors text-sm">Teeth Whitening</Link></li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 pt-12 border-t border-white/5">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Caninus Dental. The Clinical Editorial experience.</p>
        </div>
      </div>
    </footer>
  );
}

// --- Main App ---

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight max-w-4xl mx-auto leading-tight">
              Precision care, curated for your comfort.
            </h2>
          </motion.div>
        </div>
      </section>
      <Services />
      <Comparisons />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}

function StitchScreen() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <SmilePlus className="w-10 h-10 text-secondary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
          Next Stitch Screen
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          This is a placeholder for your new screen. We can add booking forms, detailed service descriptions, or anything else you need here.
        </p>
        <Link 
          to="/" 
          className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-services" element={<ServicesPage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stitch" element={<StitchScreen />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

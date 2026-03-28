import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, User, Stethoscope, Calendar, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Appointment() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    contactMethod: 'email',
    treatment: '',
    issue: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      const formattedService = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setFormData(prev => ({ ...prev, treatment: formattedService }));
    }
  }, [location]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setIsSubmitted(true);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isWeekend = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const timeSlots = isWeekend(formData.date) 
    ? ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM']
    : ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  return (
    <main className="pt-24 pb-20">
      {/* Breadcrumb Title Bar */}
      <header className="bg-surface-container-low py-12 mb-16">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex items-center gap-2 mb-4 text-sm font-medium text-on-surface-variant">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">Appointment</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-[-0.04em] text-primary"
          >
            Schedule Your Visit
          </motion.h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <span className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Reservation Portal</span>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">Experience precision-led dental care. Complete our editorial guided booking to secure your preferred clinical time.</p>
        </header>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-16 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-px bg-surface-container-highest -z-10"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-highest text-on-surface-variant'}`}>
              <User className="w-6 h-6" />
            </div>
            <span className={`text-sm font-bold ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>Patient Info</span>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 2 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-highest text-on-surface-variant'}`}>
              <Stethoscope className="w-6 h-6" />
            </div>
            <span className={`text-sm font-bold ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Treatment</span>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 3 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-highest text-on-surface-variant'}`}>
              <Calendar className="w-6 h-6" />
            </div>
            <span className={`text-sm font-bold ${step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>Date & Time</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Editorial Image & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                alt="Clinical environment" 
                className="relative rounded-xl w-full object-cover aspect-[4/3] shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVdL-W6FgzydxKkWeRUkqwHxbtG-8CHfFg0Pe8b6dwrxtOem-OZ4vktc1kXtvqUYnm83xvg6ut29omlcyaGv5BUNvk4Oc9490E5MNtx8T0_stPU8O8TWGU3K7hHa8h-GiE9I_XYNu-sxY7gQ4iRmr-ppytH8ny9oJ2TQToQQv-59ViSA98LctelvCyOi1S1wUOheCobqiGLBgGCMmvXiz3gDwdcrwpZllkHuSRSizUk4X6c2giRNR7Zn1mpszJ23v1C2UiMmqqVG4"
              />
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
              <div>
                <div className="text-3xl font-extrabold text-secondary tracking-tighter">15k+</div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mt-1">Successful Procedures</div>
              </div>
              <div className="h-px bg-surface-container-highest w-full"></div>
              <div>
                <div className="text-3xl font-extrabold text-secondary tracking-tighter">4.9/5</div>
                <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mt-1">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-[0_20px_40px_rgba(19,29,41,0.06)] relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleNext} 
                  className="space-y-8"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">First Name *</label>
                          <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" placeholder="John" type="text" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Last Name *</label>
                          <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" placeholder="Doe" type="text" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Email Address *</label>
                        <input required name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" placeholder="john.doe@example.com" type="email" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Phone Number *</label>
                        <div className="flex gap-4">
                          <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="w-28 bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm font-medium">
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (IN)</option>
                            <option value="+61">+61 (AU)</option>
                          </select>
                          <input required name="phone" value={formData.phone} onChange={handleChange} className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" placeholder="(555) 000-0000" type="tel" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Preferred Contact Method</label>
                        <div className="flex gap-4">
                          {['email', 'sms', 'phone'].map((method) => (
                            <label key={method} className="flex-1 cursor-pointer">
                              <input 
                                className="hidden peer" 
                                name="contactMethod" 
                                type="radio" 
                                value={method}
                                checked={formData.contactMethod === method}
                                onChange={handleChange}
                              />
                              <div className="p-4 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-secondary peer-checked:bg-secondary/5 text-center transition-all">
                                <span className="text-sm font-bold capitalize">{method}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Related Treatment *</label>
                        <select required name="treatment" value={formData.treatment} onChange={handleChange} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all">
                          <option value="">Select a treatment</option>
                          <option value="General Consultation">General Consultation</option>
                          <option value="Cosmetic Rejuvenation">Cosmetic Rejuvenation</option>
                          <option value="Advanced Implants">Advanced Implants</option>
                          <option value="Root Canal Treatment">Root Canal Treatment</option>
                          <option value="Dental Fillings">Dental Fillings</option>
                          <option value="Dentures">Dentures</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Orthodontic Treatment">Orthodontic Treatment</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Describe Your Issue *</label>
                        <textarea required name="issue" value={formData.issue} onChange={handleChange} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all placeholder:text-outline-variant" placeholder="Please provide details about your dental concerns..." rows={5}></textarea>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Select Date *</label>
                        <input required name="date" value={formData.date} onChange={handleChange} type="date" min={new Date().toISOString().split('T')[0]} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" />
                        {isWeekend(formData.date) && (
                          <p className="text-xs text-secondary mt-2">Note: Weekend hours are half-day (10:00 AM - 4:00 PM).</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Select Time Slot *</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {timeSlots.map((time) => (
                            <label key={time} className="cursor-pointer">
                              <input 
                                className="hidden peer" 
                                name="time" 
                                type="radio" 
                                value={time}
                                checked={formData.time === time}
                                onChange={handleChange}
                                required
                              />
                              <div className="p-3 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-secondary peer-checked:bg-secondary/5 text-center transition-all">
                                <span className="text-sm font-medium">{time}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {step > 1 ? (
                      <button onClick={handlePrev} className="text-on-surface-variant font-bold text-sm px-6 py-3 hover:text-primary transition-colors flex items-center gap-2" type="button">
                        Back
                      </button>
                    ) : (
                      <Link to="/" className="text-on-surface-variant font-bold text-sm px-6 py-3 hover:text-primary transition-colors flex items-center gap-2">
                        <X className="w-5 h-5" />
                        Cancel
                      </Link>
                    )}
                    <button className="bg-secondary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-secondary/90 transition-all w-full sm:w-auto justify-center" type="submit">
                      {step === 3 ? 'Book Appointment' : 'Continue'}
                      {step !== 3 && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Thank You!</h2>
                  <p className="text-on-surface-variant text-lg max-w-md mx-auto">
                    Your appointment request has been received. We will send a confirmation email to <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-8">
                    <Link to="/" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all inline-block">
                      Return to Home
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

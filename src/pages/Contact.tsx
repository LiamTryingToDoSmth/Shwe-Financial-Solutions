import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Simulate form submission
      setTimeout(() => setSubmitted(true), 500);
    }
  };

  return (
    <div className="bg-[#f5f2ed] min-h-screen">
      {/* Page Header */}
       <div className="bg-[#1a365d] py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-[#1a365d] mb-6">Private Consultations</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Shwe Financial Solutions welcomes inquiries from prospective clients. Due to the highly discrete nature of our work, all consultations are strictly confidential. Please reach out to our Yangon headquarters to schedule an appointment.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#d4af37] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1a365d] mb-2">Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Level 7, Sakura Tower<br/>
                    339 Bogyoke Aung San Road<br/>
                    Kyauktada Township, Yangon<br/>
                    Myanmar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#d4af37] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1a365d] mb-2">Direct Line</h4>
                  <p className="text-slate-600 text-sm">
                    +95 1 255 131<br/>
                    <span className="text-xs text-slate-400">Available Mon-Fri, 9am - 5pm MMT</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#d4af37] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-[#1a365d] mb-2">Email Inquiries</h4>
                  <p className="text-slate-600 text-sm">
                    contact@shwefinancial.com.mm<br/>
                    <span className="text-xs text-slate-400">Our team typically responds within 24 hours.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 border border-[#e5e0d8] shadow-sm">
            <h3 className="text-xl font-serif text-[#1a365d] mb-6">Secure Inquiry Form</h3>
            
            {submitted ? (
              <div className="bg-[#f5f2ed] border border-[#d4af37] p-6 text-center">
                <h4 className="text-[#1a365d] font-serif text-lg mb-2">Inquiry Received</h4>
                <p className="text-slate-600 text-sm">Thank you for contacting Shwe Financial Solutions. A member of our advisory team will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name / Entity Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-[#f5f2ed] border ${errors.name ? 'border-red-400' : 'border-[#e5e0d8]'} px-4 py-3 text-sm text-[#1a365d] focus:outline-none focus:border-[#d4af37] transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-[#f5f2ed] border ${errors.email ? 'border-red-400' : 'border-[#e5e0d8]'} px-4 py-3 text-sm text-[#1a365d] focus:outline-none focus:border-[#d4af37] transition-colors`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject of Inquiry *</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className={`w-full bg-[#f5f2ed] border ${errors.subject ? 'border-red-400' : 'border-[#e5e0d8]'} px-4 py-3 text-sm text-[#1a365d] focus:outline-none focus:border-[#d4af37] transition-colors`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Detailed Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full bg-[#f5f2ed] border ${errors.message ? 'border-red-400' : 'border-[#e5e0d8]'} px-4 py-3 text-sm text-[#1a365d] focus:outline-none focus:border-[#d4af37] transition-colors resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a365d] text-white px-6 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#2a4a7f] transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

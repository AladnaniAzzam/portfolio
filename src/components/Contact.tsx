import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = language === 'en' ? 'Name is required' : 'الاسم مطلوب';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = language === 'en' ? 'Invalid email format' : 'صيغة البريد الإلكتروني غير صحيحة';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = language === 'en' ? 'Subject is required' : 'الموضوع مطلوب';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = language === 'en' ? 'Message is required' : 'الرسالة مطلوبة';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = language === 'en' ? 'Message must be at least 10 characters' : 'الرسالة يجب أن تكون 10 أحرف على الأقل';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -start-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -end-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-cyan-300">
                {language === 'en' ? "Let's Connect" : 'لنتواصل'}
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white px-4">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              {t.contact.subtitle}
            </p>
            <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:via-blue-400 dark:to-emerald-400 mx-auto rounded-full"></div>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="animate-fadeIn bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 sm:p-6 rounded-xl shadow-xl flex items-center gap-3 max-w-2xl mx-auto">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  {language === 'en' ? 'Message Sent Successfully!' : 'تم إرسال الرسالة بنجاح!'}
                </h4>
                <p className="text-sm sm:text-base text-emerald-50">
                  {language === 'en' ? "Thank you for reaching out. I'll get back to you soon!" : 'شكراً لتواصلك معي. سأرد عليك قريباً!'}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Information Cards - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Contact Information' : 'معلومات التواصل'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Email Card */}
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                        {t.contact.info.email}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${t.contact.info.phone}`}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" dir="ltr">
                        {t.contact.info.phone}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="group relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Location' : 'الموقع'}
                      </h4>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {t.contact.info.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
                  {language === 'en' ? 'Connect on Social Media' : 'تواصل عبر وسائل التواصل'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/azzam-adnan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span className="text-base font-bold">in</span>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/azzam-adnan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span className="text-base">⚡</span>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'Email' : 'بريد'}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {language === 'en' ? 'Send Me a Message' : 'أرسل لي رسالة'}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Name and Email - Side by Side on Desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {t.contact.form.name}
                        <span className="text-red-500 ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:py-3.5 bg-gray-50 dark:bg-slate-900 border-2 ${
                          formErrors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-blue-500 dark:focus:border-cyan-500'
                        } rounded-xl focus:ring-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200`}
                        placeholder={language === 'en' ? 'Your full name' : 'اسمك الكامل'}
                      />
                      {formErrors.name && (
                        <p className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <span>⚠</span> {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {t.contact.form.email}
                        <span className="text-red-500 ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 sm:py-3.5 bg-gray-50 dark:bg-slate-900 border-2 ${
                          formErrors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-blue-500 dark:focus:border-cyan-500'
                        } rounded-xl focus:ring-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200`}
                        placeholder={language === 'en' ? 'your.email@example.com' : 'your.email@example.com'}
                        dir="ltr"
                      />
                      {formErrors.email && (
                        <p className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <span>⚠</span> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      {t.contact.form.subject}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 sm:py-3.5 bg-gray-50 dark:bg-slate-900 border-2 ${
                        formErrors.subject 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-blue-500 dark:focus:border-cyan-500'
                      } rounded-xl focus:ring-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200`}
                      placeholder={language === 'en' ? 'What is this about?' : 'ما هو موضوع رسالتك؟'}
                    />
                    {formErrors.subject && (
                      <p className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {formErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      {t.contact.form.message}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 sm:py-3.5 bg-gray-50 dark:bg-slate-900 border-2 ${
                        formErrors.message 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-blue-500 dark:focus:border-cyan-500'
                      } rounded-xl focus:ring-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 resize-none`}
                      placeholder={language === 'en' ? 'Tell me about your project or inquiry...' : 'أخبرني عن مشروعك أو استفسارك...'}
                    />
                    {formErrors.message && (
                      <p className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-700 hover:via-cyan-600 hover:to-emerald-600 dark:from-cyan-500 dark:via-blue-500 dark:to-emerald-500 dark:hover:from-cyan-600 dark:hover:via-blue-600 dark:hover:to-emerald-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{language === 'en' ? 'Sending...' : 'جاري الإرسال...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>{t.contact.form.send}</span>
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    {language === 'en' 
                      ? '🔒 Your information is secure and will never be shared with third parties.'
                      : '🔒 معلوماتك آمنة ولن تتم مشاركتها مع أطراف ثالثة.'
                    }
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

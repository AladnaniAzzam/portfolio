import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 pt-14 sm:pt-16 lg:pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -start-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -end-1/2 w-full h-full bg-gradient-to-tl from-emerald-400/20 to-blue-400/20 dark:from-emerald-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop Two-Column Layout / Mobile Stacked */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
          
          {/* Profile Image - Mobile: Top Center / Desktop: Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end flex-shrink-0">
            <div className="relative group animate-fadeIn">
              {/* Glow Effect Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:via-blue-400 dark:to-emerald-400 opacity-75 dark:opacity-50 blur-2xl group-hover:opacity-100 dark:group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Border Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:via-blue-400 dark:to-emerald-400 p-1 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  {/* Inner White Ring (Light Mode) / Dark Ring (Dark Mode) */}
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-2">
                    {/* Image Wrapper */}
                    <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-slate-200 dark:ring-slate-700 group-hover:ring-blue-400 dark:group-hover:ring-cyan-400 transition-all duration-500">
                      <img
                        src="./assets/images/azzam_profile.jpg"
                        alt="Azzam Adnan Abdalghani - IT Engineer & Full-Stack Developer"
                        className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 rounded-full shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile: Below Image / Desktop: Left Side */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-start lg:rtl:text-end space-y-6 sm:space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start lg:rtl:justify-end gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200 dark:border-blue-800 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {t.hero.badge1}
            </span>
            <span className="text-gray-400 hidden xs:inline">•</span>
            <span className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
              {t.hero.badge2}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeInUp leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 animate-fadeInUp animation-delay-200 leading-relaxed px-4">
            {t.hero.title}
          </h2>

          {/* Intro */}
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto animate-fadeInUp animation-delay-400 px-4">
            {t.hero.intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto px-4 animate-fadeInUp animation-delay-600">
            <button
              onClick={scrollToProjects}
              className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.cta1}
            </button>
            <a
              href="/azzam-adnan-cv.pdf"
              download
              className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-semibold text-sm sm:text-base rounded-xl border-2 border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-cyan-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">{t.hero.cta2}</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce lg:hidden">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400 dark:text-gray-500" />
          </div>
          </div>
          {/* End Content Section */}
        </div>
        {/* End Two-Column Layout */}
      </div>
    </section>
  );
};

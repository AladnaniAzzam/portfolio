import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              {t.about.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <div className="px-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 dark:border-slate-700">
              <div className="flex items-start gap-3 sm:gap-4">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4">
            {/* Education Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                  {t.about.subtitle}
                </h3>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {t.about.education.degree}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
                  {t.about.education.university}
                </p>
                <div className="flex items-center justify-between pt-1 sm:pt-2 flex-wrap gap-2">
                  <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-cyan-400">
                    {t.about.education.year}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {t.about.education.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                  {t.about.certifications}
                </h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3">
                {t.about.certs.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-xs sm:text-sm leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

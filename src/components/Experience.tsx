import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t.experience.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {t.experience.roles.map((role, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:rtl:text-left' : 'md:text-left md:rtl:text-right'}`}>
                    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                      {/* Company & Period */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2 justify-start md:justify-end rtl:md:justify-start">
                          <Building2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {role.company}
                          </h3>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          {role.title}
                        </h4>
                        <div className="flex flex-wrap gap-3 mb-4 justify-start md:justify-end rtl:md:justify-start">
                          <span className="inline-flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{role.period}</span>
                          </span>
                          <span className="inline-flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{role.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {role.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Smartphone, Server, Globe, Database, Cloud, Briefcase, Monitor, Palette } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  mobile: <Smartphone className="w-6 h-6" />,
  backend: <Server className="w-6 h-6" />,
  frontend: <Globe className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  devops: <Cloud className="w-6 h-6" />,
  erp: <Briefcase className="w-6 h-6" />,
  desktop: <Monitor className="w-6 h-6" />,
  design: <Palette className="w-6 h-6" />,
};

const categoryColors: Record<string, string> = {
  mobile: 'from-blue-600 to-cyan-500',
  backend: 'from-purple-600 to-pink-500',
  frontend: 'from-orange-500 to-red-500',
  database: 'from-emerald-600 to-teal-500',
  devops: 'from-indigo-600 to-blue-500',
  erp: 'from-amber-600 to-orange-500',
  desktop: 'from-slate-600 to-gray-500',
  design: 'from-pink-600 to-rose-500',
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('mobile');

  const categories = Object.keys(t.skills.categories);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 px-4">
              {t.skills.subtitle}
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base ${
                    isActive
                      ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg`
                      : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                  }`}
                >
                  <span className="flex-shrink-0">{categoryIcons[category]}</span>
                  <span className="whitespace-nowrap leading-tight">
                    {t.skills.categories[category as keyof typeof t.skills.categories].title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-4">
            {t.skills.categories[activeCategory as keyof typeof t.skills.categories].skills.map(
              (skill, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${categoryColors[activeCategory]} flex-shrink-0`}></div>
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                      {skill}
                    </h4>
                  </div>
                  <div className="mt-2 sm:mt-3 h-1.5 sm:h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${categoryColors[activeCategory]} rounded-full animate-progressBar`}
                      style={{ width: `${85 + Math.random() * 15}%` }}
                    ></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

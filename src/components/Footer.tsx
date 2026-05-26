import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="text-center space-y-4">
            {/* Logo/Name */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.hero.name}
            </div>

            {/* Languages Support */}
            <p className="text-sm text-gray-400">
              {t.footer.languages}
            </p>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>

            {/* Copyright */}
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm">
              <span>{t.footer.copyright.replace('2025', currentYear.toString())}</span>
              <span>•</span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>& Code</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

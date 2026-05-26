import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 relative flex justify-center">
          <div className="relative w-28 h-28">
            {/* تأثير خارجي متحرك */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-md animate-pulse"></div>
            {/* إطار الصورة */}
            <div className="relative w-full h-full p-[3px] rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 shadow-2xl">
              {/* الصورة */}
              <img
                src="./assets/images/azzam_profile.jpg"
                alt="Azzam"
                className="w-full h-full rounded-full object-cover border-4 border-[#0B1120]"
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white animate-pulse">
            Loading Portfolio
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

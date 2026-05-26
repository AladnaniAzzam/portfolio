import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, ExternalLink, Globe, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectData {
  name: string;
  description: string;
  tech: string[];
  type: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  year?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Prevent background scrolling when modal is open and reset carousel
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  // Handle ESC key to close modal or fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isFullscreen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    if (!project || !project.images.length) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project || !project.images.length) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // RTL Support for arrows
  const onClickLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    isRTL ? nextImage() : prevImage();
  };

  const onClickRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    isRTL ? prevImage() : nextImage();
  };

  if (!isOpen || !project) return null;

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md" />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl animate-scaleIn">
        {/* Header with Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                {project.type}
              </span>
              {project.year && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {project.year}
                </span>
              )}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex-shrink-0 ms-4 p-2 sm:p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-all duration-200 group"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Two-Column Layout on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Left Column - Image & Tech Stack */}
            <div className="space-y-6">
              {/* Project Image/Mockup with Carousel */}
              <div className="relative group">
                <div className="aspect-video max-h-[400px] w-full rounded-xl overflow-hidden bg-slate-900/90 dark:bg-slate-950/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 relative flex items-center justify-center">
                  {project.images && project.images.length > 0 ? (
                    <>
                      <img
                        key={currentImageIndex} // force re-render for basic CSS opacity effect if desired, or let React handle it smoothly
                        src={project.images[currentImageIndex]}
                        alt={`${project.name} - slide ${currentImageIndex + 1}`}
                        onClick={() => setIsFullscreen(true)}
                        className="w-full h-full object-contain object-center transition-opacity duration-500 p-2 sm:p-4 cursor-pointer hover:scale-[1.02] transition-transform"
                      />
                      
                      {/* Carousel Controls */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={onClickLeft}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                          </button>
                          
                          <button
                            onClick={onClickRight}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                          </button>

                          {/* Dots Indicator */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(idx);
                                }}
                                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                                  currentImageIndex === idx
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/80'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-blue-500 dark:text-cyan-400 mb-4" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Project Preview
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Details & Features */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                  Project Overview
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col xs:flex-row gap-3 sm:gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl border-2 border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-cyan-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="text-lg">⚡</span>
                    <span className="text-sm sm:text-base">Source Code</span>
                  </a>
                )}
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                  {isRTL 
                    ? 'انقر خارج هذا المربع أو اضغط ESC للإغلاق'
                    : 'Click outside this box or press ESC to close'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fullscreen Image Viewer */}
      {isFullscreen && project.images && project.images.length > 0 && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            className="absolute top-4 right-4 z-[210] p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Image */}
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} - fullscreen`}
            className="w-full h-full max-w-[95vw] max-h-[95vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Fullscreen Controls */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onClickLeft(e); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-[210]"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); onClickRight(e); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all z-[210]"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Dots for Fullscreen */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[210] bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                      currentImageIndex === idx
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

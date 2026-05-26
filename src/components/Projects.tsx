import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Smartphone, Server, Globe as GlobeIcon } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const projectTypeIcons: Record<string, React.ReactNode> = {
  'Mobile Development': <Smartphone className="w-5 h-5" />,
  'Full-Stack Development': <GlobeIcon className="w-5 h-5" />,
  'Full-Stack Development / Systems': <Server className="w-5 h-5" />,
  'Full-Stack E-Commerce & ERP': <GlobeIcon className="w-5 h-5" />,
};

interface ProjectData {
  name: string;
  description: string;
  tech: string[];
  type: string;
  images: string[];
}

const rawProjects = [
  {
    folder: 'ain_al_amn_app',
    images: [
      "/assets/images/projects/ain_al_amn_app/1.jpg",
      "/assets/images/projects/ain_al_amn_app/2.jpg",
      "/assets/images/projects/ain_al_amn_app/3.jpg"
    ],
    category: 'Mobile Development',
    titleEn: "Ain Al-Amn (Security Eye) - Mobile App",
    titleAr: "تطبيق عين الأمن - للهواتف الذكية",
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC Pattern', 'RESTful APIs', 'JWT/OAuth 2.0', 'Push Notifications', 'Git'],
    descEn: "Overview: A high-end security incidents reporting mobile system designed for production environments.\n\nArchitecture: Engineered using Domain-Driven Design (DDD) / Clean Architecture patterns, cleanly separating Data, Domain, and Presentation layers to ensure enterprise-level testability and scale.\n\nSecurity & Network: Implemented secure REST API integrations with robust JWT session token management, axios-like interceptors for auto-refresh tokens, and payload encryption. Features push notifications using background workers.",
    descAr: "نظرة عامة: نظام أمني متقدم للهواتف الذكية مخصص للإبلاغ عن الحوادث والجرائم وإدارتها فورياً وبشكل آمن تماماً.\n\nالهندسة البرمجية: تم التكويد بالاعتماد على معايير \"الهندسة النظيفة\" (Clean Architecture) وفصل طبقات البيانات (Data) عن منطق العمل (Domain) والواجهات (Presentation)، مع إدارة الحالة باستخدام BLoC."
  },
  {
    folder: 'ain_al_amn_dashboard',
    images: [
      "/assets/images/projects/ain_al_amn_dashboard/1.jpg",
      "/assets/images/projects/ain_al_amn_dashboard/2.jpg",
      "/assets/images/projects/ain_al_amn_dashboard/3.jpg"
    ],
    category: 'Full-Stack Development',
    titleEn: "Ain Al-Amn - Admin & Sub-System Dashboards",
    titleAr: "موقع لوحات تحكم عين الأمن - نظام الإدارة المركزي",
    tech: ['React.js', 'Django REST Framework', 'PostgreSQL', 'WebSockets', 'Real-time Tracking'],
    descEn: "Central backbone of the Security Eye ecosystem. Master admin dashboard for full incident management and routing dashboards for specialized responding units.",
    descAr: "البنية التحتية المركزية لنظام عين الأمن. يتضمن لوحة تحكم رئيسية (Master Admin) لإدارة دورة حياة البلاغات بالكامل، ولوحات تحكم فرعية مخصصة للأنظمة والجهات المختلفة لتلقي وتوجيه البلاغات."
  },
  {
    folder: 'safarni_platform',
    images: [
      "/assets/images/projects/safarni_platform/1.jpg",
      "/assets/images/projects/safarni_platform/2.jpg"
    ],
    category: 'Full-Stack Development / Systems',
    titleEn: "Safarni Platform",
    titleAr: "منصة سفرني - لأتمتة وحجز الرحلات",
    tech: ['React.js', 'Django', 'PostgreSQL', 'Cron Jobs', 'Automation Services', 'RESTful APIs'],
    descEn: "An advanced system for automating, booking, and tracking domestic long-distance trips within Yemen. Streamlines ticket booking, schedules management, and passenger updates.",
    descAr: "نظام متقدم لأتمتة، حجز، وتتبع الرحلات الداخلية بين المدن في اليمن. يسهل إدارة تذاكر الحجز، جدولة الرحلات، وإرسال التحديثات المؤتمتة للمسافرين."
  },
  {
    folder: 'mirab_ecommerce',
    images: [
      "/assets/images/projects/mirab_ecommerce/1.jpg",
      "/assets/images/projects/mirab_ecommerce/2.jpg",
      "/assets/images/projects/mirab_ecommerce/3.jpg"
    ],
    category: 'Full-Stack E-Commerce & ERP',
    titleEn: "Mirab - Building Materials E-Commerce & Inventory System",
    titleAr: "منصة ميراب - متجر إلكتروني متكامل ونظام مخزون لمواد البناء",
    tech: ['React.js', 'Django', 'Database Indexing', 'Stock Control Workflows', 'Secured Checkout'],
    descEn: "Complete e-commerce system featuring a smooth client-facing storefront integrated with a powerful Admin Dashboard for live material and inventory control.",
    descAr: "نظام تجارة إلكترونية متكامل لمحل مواد بناء. يشمل واجهات متكاملة للعميل (تصفح، شراء، ودفع وسلس) مرتبطة بلوحة تحكم متطورة للأدمين (Admin Dashboard) لإدارة المواد، المخزون، وتتبع التوريد."
  }
];

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enhancedProjects: ProjectData[] = rawProjects.map(p => ({
    name: language === 'en' ? p.titleEn : p.titleAr,
    description: language === 'en' ? p.descEn : p.descAr,
    tech: p.tech,
    type: p.category,
    images: p.images
  }));

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 px-4">
              {t.projects.subtitle}
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {enhancedProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col cursor-pointer"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(project);
                  }
                }}
              >
                {/* Project Image Header */}
                <div className="relative aspect-video overflow-hidden bg-slate-900/90 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center">
                  {/* Project Image */}
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 p-2 sm:p-4"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20">
                      <div className="text-center p-4">
                        {projectTypeIcons[project.type] || <GlobeIcon className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-blue-500 dark:text-cyan-400 mb-2 opacity-40" />}
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Type Badge - Floating */}
                  <div className="absolute top-3 end-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-blue-700 dark:text-cyan-400 rounded-full text-[10px] sm:text-xs font-bold shadow-lg border border-white/20">
                      {projectTypeIcons[project.type] ? (
                        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                          {projectTypeIcons[project.type]}
                        </span>
                      ) : null}
                      <span className="whitespace-nowrap">{project.type}</span>
                    </span>
                  </div>

                  {/* Project Name - Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1 whitespace-pre-line line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 sm:mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{language === 'en' ? 'View Details' : 'عرض التفاصيل'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

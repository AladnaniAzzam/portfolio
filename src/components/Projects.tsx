import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Smartphone, Server, Globe as GlobeIcon } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { getProjectImages } from '../utils/getProjectImages';


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
      "/assets/images/projects/ain_al_amn_app/0.jpg",
      "/assets/images/projects/ain_al_amn_app/1.jpg",
      "/assets/images/projects/ain_al_amn_app/2.jpg",
      "/assets/images/projects/ain_al_amn_app/3.jpg",
      "/assets/images/projects/ain_al_amn_app/4.jpg",
      "/assets/images/projects/ain_al_amn_app/5.jpg",
      "/assets/images/projects/ain_al_amn_app/6.jpg"
    ],
    category: 'Mobile Development',
    titleEn: "Ain Al-Amn (Security Eye) - Mobile App",
    titleAr: "تطبيق عين الأمن - للهواتف الذكية",
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC Pattern', 'RESTful APIs', 'JWT/OAuth 2.0', 'Push Notifications'],
    descEn: "Overview: A production-grade mobile security platform designed for secure incident reporting, emergency response coordination, and real-time communication workflows.\n\nArchitecture: Built using Clean Architecture and Domain-Driven Design (DDD) principles with a clear separation between Data, Domain, and Presentation layers to ensure maintainability, scalability, and long-term reliability.\n\nSecurity & Integrations: Integrated secure REST APIs with JWT/OAuth 2.0 authentication, automated token refresh mechanisms, encrypted payload handling, and push notifications powered by background services for continuous real-time updates.",
    descAr: "نظرة عامة: منصة أمنية متقدمة للهواتف الذكية مخصصة للإبلاغ عن الحوادث وإدارة البلاغات والتنسيق الفوري بين الجهات المختصة بشكل آمن وفعّال.\n\nالهندسة البرمجية: تم تطوير المشروع باستخدام مبادئ Clean Architecture وDDD مع فصل واضح بين طبقات البيانات والمنطق والواجهات لضمان سهولة التوسع والاستقرار على المدى الطويل.\n\nالأمان والتكامل: تم ربط التطبيق بواجهات APIs آمنة باستخدام JWT/OAuth 2.0 مع إدارة تلقائية للجلسات والإشعارات الفورية والتحديثات اللحظية عبر خدمات الخلفية."
  },

  {
    folder: 'ain_al_amn_dashboard',
    images: [
      "/assets/images/projects/ain_al_amn_dashboard/1.jpg"
    ],
    category: 'Full-Stack Development',
    titleEn: "Ain Al-Amn - Admin & Sub-System Dashboards",
    titleAr: "موقع لوحات تحكم عين الأمن - نظام الإدارة المركزي",
    tech: ['React.js', 'Django REST Framework', 'PostgreSQL', 'WebSockets', 'Real-time Tracking'],
    descEn: "A centralized operations dashboard built to manage the complete incident lifecycle, monitor emergency workflows, and coordinate communication between multiple response entities in real time.\n\nThe platform includes role-based administrative panels, live tracking systems, and WebSocket-powered real-time updates to ensure fast response handling and operational visibility.",
    descAr: "منصة مركزية لإدارة دورة حياة البلاغات ومتابعة العمليات الأمنية والتنسيق بين الجهات المختلفة بشكل لحظي.\n\nيتضمن النظام لوحات تحكم متعددة الصلاحيات، وتتبع مباشر للحالات، وتحديثات فورية باستخدام WebSockets لضمان سرعة الاستجابة وكفاءة إدارة العمليات."
  },

  {
    folder: 'mirab_ecommerce',
    images: [
      "/assets/images/projects/mirab_ecommerce/1.jpg",
      "/assets/images/projects/mirab_ecommerce/2.jpg",
      "/assets/images/projects/mirab_ecommerce/3.jpg",
      "/assets/images/projects/mirab_ecommerce/4.jpg",
      "/assets/images/projects/mirab_ecommerce/5.jpg",
      "/assets/images/projects/mirab_ecommerce/6.jpg",
      "/assets/images/projects/mirab_ecommerce/7.jpg"
    ],
    category: 'Full-Stack E-Commerce & ERP',
    titleEn: "Mirab - Building Materials E-Commerce & Inventory System",
    titleAr: "منصة ميراب - متجر إلكتروني متكامل ونظام مخزون لمواد البناء",
    tech: ['React.js', 'Django', 'Database Indexing', 'Stock Control Workflows', 'Secured Checkout'],
    descEn: "A full-scale e-commerce and inventory management platform developed for the building materials sector, combining a modern customer storefront with a powerful administrative management system.\n\nThe solution streamlines product management, inventory tracking, order processing, and secured checkout workflows while improving operational efficiency and stock visibility.",
    descAr: "منصة تجارة إلكترونية متكاملة مخصصة لقطاع مواد البناء، تجمع بين واجهات شراء حديثة للعملاء ونظام إدارة احترافي للمخزون والطلبات.\n\nيساعد النظام على إدارة المنتجات والمخزون وتتبع الطلبات وعمليات الدفع بشكل آمن مع تحسين كفاءة التشغيل ومراقبة حركة التوريد."
  },

  {
    folder: 'bizflow_platform',
    images: [
      "/assets/images/projects/bizflow_platform/1.jpg",
      "/assets/images/projects/bizflow_platform/2.jpg",
      "/assets/images/projects/bizflow_platform/3.jpg"
    ],
    category: 'Full-Stack Development / SaaS',
    titleEn: "BizFlow - Multi-Tenant Enterprise SaaS Cloud Platform",
    titleAr: "منصة BizFlow لإدارة الأعمال - نظام SaaS سحابي متعدد الشركات",
    tech: ['Next.js', 'React.js', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Multi-Tenancy Architecture', 'Docker'],
    descEn: "A scalable enterprise SaaS platform designed to unify ERP and CRM operations for multiple independent companies within a secure multi-tenant cloud environment.\n\nThe system implements strict logical data isolation, asynchronous background task processing using Celery and Redis, and optimized client-side rendering with Next.js to ensure high performance, security, and operational scalability.\n\nContainerized deployment pipelines using Docker were implemented to simplify infrastructure management and ensure deployment consistency across environments.",
    descAr: "منصة SaaS سحابية متكاملة تم تطويرها لتوحيد عمليات ERP وCRM لعدة شركات مستقلة ضمن بيئة متعددة المستأجرين عالية الأمان.\n\nيعتمد النظام على عزل منطقي للبيانات، ومعالجة المهام الخلفية باستخدام Celery وRedis، مع تحسين الأداء عبر Next.js لضمان السرعة وقابلية التوسع.\n\nتم تنفيذ بيئات تشغيل معتمدة على Docker لتسهيل إدارة البنية التحتية وضمان استقرار عمليات النشر."
  },

  {
    folder: 'tech_core',
    imageCount: 2,
    category: 'Web Development / E-Services',
    titleEn: "Tech Core - Technical Solutions Ecosystem & Consultancy Hub",
    titleAr: "منصة TECH CORE - منظومة الحلول والاستشارات التقنية",
    tech: ['React.js', 'Django', 'Tailwind CSS', 'RESTful APIs', 'Secure Communication Pipelines', 'Cloud Infrastructure'],
    descEn: "A professional digital platform developed to automate technical consultation requests, software service workflows, and enterprise solution inquiries for business clients.\n\nThe platform focuses on streamlined service management, secure communication pipelines, and responsive user experiences powered by Tailwind CSS and backend API integrations.",
    descAr: "منصة رقمية احترافية مخصصة لأتمتة طلبات الخدمات التقنية والاستشارات البرمجية وإدارة تواصل العملاء مع الحلول المؤسسية.\n\nتركز المنصة على تحسين تجربة المستخدم، وتنظيم مسارات الطلبات، وتأمين عمليات التواصل عبر REST APIs وبنية تشغيل حديثة."
  },

  {
    folder: 'luxe_page',
    imageCount: 3,
    category: 'Full-Stack Development / E-Commerce',
    titleEn: "Luxe Page - Luxury E-Commerce Platform",
    titleAr: "Luxe Page - منصة تجارة إلكترونية فاخرة",
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'next-intl', 'next-themes'],
    descEn: "A premium luxury e-commerce platform specialized in showcasing and selling high-end fashion products through an elegant and performance-focused user experience.\n\nThe platform includes dynamic theming support, multilingual RTL/LTR interfaces, SEO-optimized rendering, and smooth micro-interactions powered by Framer Motion to deliver a refined modern shopping experience.",
    descAr: "منصة تجارة إلكترونية فاخرة مخصصة لعرض وبيع المنتجات الراقية ضمن تجربة استخدام حديثة وسريعة الأداء.\n\nتدعم المنصة الثيمات الديناميكية، وتعدد اللغات RTL/LTR، وتحسين SEO، مع تأثيرات تفاعلية سلسة لتقديم تجربة تسوق احترافية ومتطورة."
  },

  {
    folder: 'safarni_platform',
    imageCount: 3,
    category: 'Full-Stack Development / Systems',
    titleEn: "Safarni Platform - Integrated Transport Automation",
    titleAr: "منصة سفرني - أتمتة النقل المتكاملة",
    tech: ['Flutter', 'Next.js', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Redis', 'WebSockets', 'Google Maps API'],
    descEn: "An integrated transport management ecosystem designed to automate inter-city transportation services through mobile applications, administrative dashboards, and real-time operational systems.\n\nThe platform combines Flutter mobile apps, a Next.js management portal, and a scalable NestJS backend with PostgreSQL and Redis to support live booking, route management, and location tracking.\n\nReal-time communication and tracking are powered by WebSockets and Google Maps APIs with offline-first capabilities for low-connectivity environments.",
    descAr: "منصة رقمية متكاملة تهدف إلى أتمتة خدمات النقل بين المدن عبر تطبيقات الهواتف ولوحات التحكم الإدارية وأنظمة التشغيل اللحظية.\n\nتجمع المنصة بين تطبيقات Flutter، ولوحات إدارة عبر Next.js، وخادم NestJS قابل للتوسع مع PostgreSQL وRedis لدعم الحجز الفوري وتتبع الرحلات وإدارة المسارات.\n\nتعتمد المنصة على WebSockets وGoogle Maps لتوفير التتبع اللحظي ودعم العمل في البيئات ذات الاتصال الضعيف."
  },
];


// const rawProjects = [
//   {
//     folder: 'ain_al_amn_app',
//     images: [
//       "/assets/images/projects/ain_al_amn_app/0.jpg",
//       "/assets/images/projects/ain_al_amn_app/1.jpg",
//       "/assets/images/projects/ain_al_amn_app/2.jpg",
//       "/assets/images/projects/ain_al_amn_app/3.jpg",
//       "/assets/images/projects/ain_al_amn_app/4.jpg",
//       "/assets/images/projects/ain_al_amn_app/5.jpg",
//       "/assets/images/projects/ain_al_amn_app/6.jpg"
//     ],
//     category: 'Mobile Development',
//     titleEn: "Ain Al-Amn (Security Eye) - Mobile App",
//     titleAr: "تطبيق عين الأمن - للهواتف الذكية",
//     tech: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC Pattern', 'RESTful APIs', 'JWT/OAuth 2.0', 'Push Notifications', 'Git'],
//     descEn: "Overview: A high-end security incidents reporting mobile system designed for production environments.\n\nArchitecture: Engineered using Domain-Driven Design (DDD) / Clean Architecture patterns, cleanly separating Data, Domain, and Presentation layers to ensure enterprise-level testability and scale.\n\nSecurity & Network: Implemented secure REST API integrations with robust JWT session token management, axios-like interceptors for auto-refresh tokens, and payload encryption. Features push notifications using background workers.",
//     descAr: "نظرة عامة: نظام أمني متقدم للهواتف الذكية مخصص للإبلاغ عن الحوادث والجرائم وإدارتها فورياً وبشكل آمن تماماً.\n\nالهندسة البرمجية: تم التكويد بالاعتماد على معايير \"الهندسة النظيفة\" (Clean Architecture) وفصل طبقات البيانات (Data) عن منطق العمل (Domain) والواجهات (Presentation)، مع إدارة الحالة باستخدام BLoC."
//   },
//   {
//     folder: 'ain_al_amn_dashboard',
//     images: [
//       "/assets/images/projects/ain_al_amn_dashboard/1.jpg"
//     ],
//     category: 'Full-Stack Development',
//     titleEn: "Ain Al-Amn - Admin & Sub-System Dashboards",
//     titleAr: "موقع لوحات تحكم عين الأمن - نظام الإدارة المركزي",
//     tech: ['React.js', 'Django REST Framework', 'PostgreSQL', 'WebSockets', 'Real-time Tracking'],
//     descEn: "Central backbone of the Security Eye ecosystem. Master admin dashboard for full incident management and routing dashboards for specialized responding units.",
//     descAr: "البنية التحتية المركزية لنظام عين الأمن. يتضمن لوحة تحكم رئيسية (Master Admin) لإدارة دورة حياة البلاغات بالكامل، ولوحات تحكم فرعية مخصصة للأنظمة والجهات المختلفة لتلقي وتوجيه البلاغات."
//   },
//   {
//     folder: 'mirab_ecommerce',
//     images: [
//       "/assets/images/projects/mirab_ecommerce/1.jpg",
//       "/assets/images/projects/mirab_ecommerce/2.jpg",
//       "/assets/images/projects/mirab_ecommerce/3.jpg",
//       "/assets/images/projects/mirab_ecommerce/4.jpg",
//       "/assets/images/projects/mirab_ecommerce/5.jpg",
//       "/assets/images/projects/mirab_ecommerce/6.jpg",
//       "/assets/images/projects/mirab_ecommerce/7.jpg"
//     ],
//     category: 'Full-Stack E-Commerce & ERP',
//     titleEn: "Mirab - Building Materials E-Commerce & Inventory System",
//     titleAr: "منصة ميراب - متجر إلكتروني متكامل ونظام مخزون لمواد البناء",
//     tech: ['React.js', 'Django', 'Database Indexing', 'Stock Control Workflows', 'Secured Checkout'],
//     descEn: "Complete e-commerce system featuring a smooth client-facing storefront integrated with a powerful Admin Dashboard for live material and inventory control.",
//     descAr: "نظام تجارة إلكترونية متكامل لمحل مواد بناء. يشمل واجهات متكاملة للعميل (تصفح، شراء، ودفع وسلس) مرتبطة بلوحة تحكم متطورة للأدمين (Admin Dashboard) لإدارة المواد، المخزون، وتتبع التوريد."
//   },
//   {
//     folder: 'bizflow_platform',
//     images: [
//       "/assets/images/projects/bizflow_platform/1.jpg",
//       "/assets/images/projects/bizflow_platform/2.jpg",
//       "/assets/images/projects/bizflow_platform/3.jpg"
//     ],
//     category: 'Full-Stack Development / SaaS',
//     titleEn: "BizFlow - Multi-Tenant Enterprise SaaS Cloud Platform",
//     titleAr: "منصة BizFlow لإدارة الأعمال - نظام السحاب المتكامل متعدد المستأجرين (SaaS)",
//     tech: ['Next.js', 'React.js', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Multi-Tenancy Architecture', 'Docker'],
//     descEn: `The Challenge: Engineering a scalable, production-grade SaaS platform that serves as the unified operation hub (ERP + CRM) for multiple independent companies, demanding absolute data segregation, high performance, and real-time computation.

// Multi-Tenancy Architecture & Security Compliance: Implemented a highly secure logical separation model at the database level to achieve Multi-Tenancy. This ensures that each subscriber company's enterprise data, employee structures, and financial ledgers are strictly isolated from other tenants, strictly complying with global GDPR privacy standards.

// Performance Bottleneck Engineering: Deployed React/Next.js for optimized client-side rendering alongside a Django backend. To resolve performance bottlenecks caused by heavy background accounting tasks and multi-currency tax calculations, integrated a Redis caching tier paired with Celery asynchronous message brokers. This offloaded intensive processes away from the main request-response cycle, maintaining crisp app responsiveness. Containerized via Docker to guarantee seamless infrastructure environment duplication.`,
//     descAr: `التحدي الهندسي: هندسة منصة رقمية سحابية كخدمة (SaaS) جاهزة للإنتاج لتعمل كمركز عمليات موحد (ERP + CRM) يخدم شركات متعددة ومستقلة، مما يتطلب عزلًا مطلقًا للبيانات، وأداءً فائقًا، ومعالجة فورية للمهام.

// معمارية تعدد المستأجرين (Multi-Tenancy) والامتثال الأمن: تم تطبيق معمارية عزل منطقي صارم ومحكم على مستوى قاعدة البيانات (Logical Database Isolation) لتحقيق نظام الـ Multi-Tenancy. يضمن هذا العزل عدم تداخل أو رؤية أي شركة لبيانات شركة أخرى، وهو ما تمتثل تمامًا لمعايير الخصوصية والأمان العالمية مثل GDPR.

// هندسة الأداء ومعالجة الاختناقات: تم بناء الواجهات التفاعلية بـ Next.js/React لضمان أسرع رندر للمتصفح مع خادم Django خلفي. ولحل مشاكل بطء النظام الناتجة عن التقارير المالية وحسابات الضرائب المعقدة متعددة العملات، تم دمج طبقة الذاكرة المؤقتة لـ Redis مرافقة لموزع المهام غير المتزامن Celery، مما أدى لنقل العمليات الثقيلة للخلفية والحفاظ على سرعة استجابة الموقع. تم تغليف المنصة بالكامل بحاويات Docker لضمان توافق واستقرار البيئة البرمجية أثناء النشر والتشغيل.`,
//   },
//   {
//     folder: 'tech_core',
//     imageCount: 2,
//     category: 'Web Development / E-Services',
//     titleEn: "Tech Core - Technical Solutions Ecosystem & Consultancy Hub",
//     titleAr: "منصة TECH CORE - المنظومة المتكاملة للحلول والاستشارات التقنية",
//     tech: ['React.js', 'Django', 'Tailwind CSS', 'RESTful APIs', 'Secure Communication Pipelines', 'Cloud Infrastructure'],
//     descEn: `The Challenge: Building an authoritative digital platform that consolidates, manages, and automates corporate electronic service workflows and complex IT architectural consultancies for high-value enterprise clients.

// Service Automation Pipeline: Designed and coded a streamlined, highly functional digital catalog that automates corporate consulting and software requests. Clients can customize service scopes (e.g., Enterprise Web Apps, Flutter Cross-Platform Apps, DevOps Infrastructure configuration) and receive structured technical feedback pipelines instantly.

// Fluid UI & Secure Conversion Core: Focused on micro-interactions and optimized layouts using Tailwind CSS to showcase high technical authority. Integrated dynamic validation intake forms communicating securely with backend REST APIs, reducing client onboarding friction while tracking lead generation data natively.`,
//     descAr: `التحدي الهندسي: بناء منصة رقمية مركزية وموثوقة تقوم بأتمتة مسارات طلب الخدمات الإلكترونية المتقدمة والاستشارات البرمجية والهندسية المعقدة للعملاء والشركات الكبرى.

// خطوط أتمتة الطلبات والخدمات: تصميم وبرمجة دليل رقمي تفاعلي يؤتمت استقبال وفرز عروض الاستشارات التقنية، حيث يمكن للعميل تحديد نطاق مشروعه بدقة (مثل: تطبيقات الويب الكبيرة، تطبيقات الهواتف بـ Flutter، أو تهيئة بنية الـ DevOps) ليدخل الطلب فورًا في خط معالجة ومتابعة فنية مؤتمتة بالكامل.

// واجهة تفاعلية ومحرك تحويل آمن: التركيز على الحركات الدقيقة (Micro-interactions) والتنسيق البصري الفاخر باستخدام Tailwind CSS لإبراز الهوية الهندسية الاحترافية. تم ربط نماذج التحقق الديناميكية بأمان عبر الـ RESTful APIs مع الخادم الخلفي لتسجيل وتحليل طلبات العملاء فوراً وبسلاسة تامة.`,
//   },

//   {
//     folder: 'luxe_page',
//     imageCount: 3,
//     category: 'Full-Stack Development / E-Commerce',
//     titleEn: "Luxe Page - Luxury E-Commerce Platform",
//     titleAr: "Luxe Page - منصة تجارة إلكترونية فاخرة",
//     tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'next-intl', 'next-themes'],
//     descEn: `The Challenge: Building an elegant luxury e‑commerce platform dedicated to selling high‑end handbags. The site focuses on premium visual design, smooth navigation, and lightning‑fast performance using Next.js App Router, TypeScript, and SEO‑optimized rendering.

// Features include dynamic theming (light/dark) with next-themes, RTL/LTR support via next-intl, and subtle micro‑interactions powered by Framer Motion for a refined user experience.`,
//     descAr: `التحدي: إنشاء منصة تجارة إلكترونية فاخرة مخصصة لبيع الحقائب الراقية. يركز المشروع على تصميم بصري راقٍ، تنقل سلس، وأداء فائق السرعة باستخدام Next.js App Router، TypeScript، وتحسين SEO.

// تشمل الميزات دعم الثيمات الديناميكية (Light/Dark) عبر next-themes، دعم اللغات RTL/LTR عبر next-intl، وتفاعل حركي ناعم باستخدام Framer Motion لتجربة مستخدم مميزة.`
//   },
//   {
//     folder: 'safarni_platform',
//     imageCount: 3,
//     category: 'Full-Stack Development / Systems',
//     titleEn: "Safarni Platform - Integrated Transport Automation",
//     titleAr: "منصة سفرني - أتمتة النقل المتكاملة",
//     tech: ['Flutter', 'Next.js', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Redis', 'WebSockets', 'Google Maps API'],
//     descEn: `An end‑to‑end digital ecosystem for automating inter‑city transport in Yemen. The platform combines a Flutter mobile app for drivers and passengers, a Next.js web dashboard for companies, and a robust NestJS backend with PostgreSQL and Redis for real‑time booking, routing, and caching.

// Real‑time location tracking is powered by WebSockets and Google Maps, with offline‑first support for low‑connectivity areas.`,
//     descAr: `منصة رقمية شاملة لأتمتة النقل بين المدن في اليمن. تجمع المنصة تطبيق Flutter للركاب والسائقين، لوحة تحكم ويب Next.js للشركات، وخادم NestJS قوي مع PostgreSQL وRedis للحجز والتوجيه في الوقت الحقيقي.

// يتم تتبع المواقع لحظيًا باستخدام WebSockets وGoogle Maps، مع دعم وضع عدم الاتصال للبيئات ذات الاتصال الضعيف.`
//   },
// ];

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enhancedProjects: ProjectData[] = rawProjects.map(p => ({
    name: language === 'en' ? p.titleEn : p.titleAr,
    description: language === 'en' ? p.descEn : p.descAr,
    tech: p.tech,
    type: p.category,
    images: (p.images && p.images.length > 0) ? p.images : getProjectImages(p.folder),
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
                className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl overflow-visible border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col cursor-pointer"
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
                <div className="relative overflow-visible bg-slate-900/90 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center">
                  {/* Project Image */}
                  {project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-full aspect-video overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="text-center p-12 w-full h-full aspect-video flex flex-col items-center justify-center">
                      {projectTypeIcons[project.type] || <GlobeIcon className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-blue-500 dark:text-cyan-400 mb-2 opacity-40" />}
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
                    <button onClick={(e) => {
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

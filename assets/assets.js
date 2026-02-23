import user_photo from './user-photo.jpg';
import logo from './logo.png';
import {
	BriefcaseBusiness,
	Cloud,
	FolderGit2,
	Github,
	Globe,
	GraduationCap,
	Laptop,
	Linkedin,
	Mail,
	Smartphone,
} from 'lucide-react';

export const assets = {
	user_photo,
	logo,
};

export const servicesData = [
	{
		icon: Globe,
		title: 'Static Website',
		description:
			'Fast, secure, and SEO-optimized static websites perfect for landing pages, portfolios, and business presentations.',
	},
	{
		icon: Laptop,
		title: 'Web Application',
		description:
			'Dynamic and interactive web applications built with modern frameworks to meet your business requirements.',
	},
	{
		icon: Cloud,
		title: 'SaaS Development',
		description:
			'Scalable Software-as-a-Service solutions featuring user management, subscriptions, and a secure, high-performance architecture designed for growth.',
	},
];

export const infoList = [
	{
		icon: BriefcaseBusiness,
		title: 'Experience',
		description: '3 Years',
	},
	{
		icon: GraduationCap,
		title: 'Education',
		description: 'Bachelor of CS',
	},
	{
		icon: FolderGit2,
		title: 'Projects',
		description: '5+ Completed',
	},
];

export const skillsData = [
	{
		name: 'React',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		category: 'Frontend',
	},
	{
		name: 'Next.js',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		category: 'Frontend',
	},
	{
		name: 'Laravel',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
		category: 'Backend',
	},
	{
		name: 'CodeIgniter',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
		category: 'Backend',
	},
	{
		name: 'MySQL',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
		category: 'Database',
	},
	{
		name: 'PostgreSQL',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		category: 'Database',
	},
];

export const projectsData = [
	{
		id: 2,
		title: 'AKK (Aplikasi Keringanan Kredit)',
		category: 'Mobile Application',
		technologies: ['Laravel', 'Tailwind CSS', 'PHP', 'JavaScript', 'MySQL'],
		startDate: 'Dec 2024',
		endDate: 'Jan 2025',
		description:
			'A mobile application for credit relief management, providing authentication, credit balance calculation, and overdue payment rescheduling.',
		keypoints: [
			'Developed REST APIs using Laravel 11 with JWT authentication',
			'Implemented SPA front-end using Laravel Blade and JavaScript',
			'Integrated API calls for seamless data interaction',
			'Converted Laravel Blade front-end into mobile app using Android Studio WebView',
			'Implemented multi-level user system for frontliner and debtor',
		],
	},
	{
		id: 3,
		title: 'SIMRS Promedik',
		category: 'Web Application',
		technologies: ['Laravel', 'Bootstrap', 'PHP', 'MySQL'],
		startDate: 'Sep 2024',
		endDate: 'Nov 2024',
		description:
			'A hospital management system that digitizes patient treatment flow from registration to transaction completion.',
		keypoints: [
			'Developed authentication and role permission system using Laravel Spatie',
			'Implemented CRUD for patient and medical personnel master data',
			'Built outpatient registration and transaction system',
			'Created database migrations, factories, and seeders with proper relationships',
		],
	},
	{
		id: 4,
		title: 'SIMPAN UMKM',
		category: 'Web Application',
		technologies: ['Laravel', 'Bootstrap', 'PHP', 'MySQL'],
		startDate: 'Jun 2024',
		endDate: 'Aug 2024',
		description:
			'A platform for micro, small, and medium enterprises in Sukabumi to register their business to DISKUMINDAG.',
		keypoints: [
			'Implemented authentication and multi-level user management using Laravel Spatie',
			'Built Content Management System (CMS) and approval system',
			'Enabled export to .xlsx using PhpSpreadsheet',
			'Created business registration form with image upload',
		],
	},
	{
		id: 5,
		title: 'Ceritacerdas.id',
		category: 'Web Application (Blog)',
		technologies: ['CodeIgniter', 'Bootstrap', 'PHP', 'MySQL'],
		startDate: 'Mar 2024',
		endDate: 'Apr 2024',
		description:
			'A blog platform featuring dynamic content management, article search, and multi-level user authentication.',
		keypoints: [
			'Developed custom blog pages and admin dashboard',
			'Implemented full CRUD functionality for articles',
			'Built dashboard with article search and statistics',
			'Collaborated with team to meet client requirements',
		],
	},
	{
		id: 6,
		title: 'POS Emerald Tree Resto & Coffee Bar',
		category: 'Web Application (POS)',
		technologies: [
			'CodeIgniter',
			'Bootstrap',
			'PHP',
			'JavaScript',
			'MySQL',
		],
		startDate: 'Nov 2023',
		endDate: 'Feb 2024',
		description:
			'A POS application for restaurant operations from table selection to order completion.',
		keypoints: [
			'Implemented table selection, ordering, and receipt printing',
			'Developed raw material management system',
			'Integrated JavaScript modules for enhanced functionality',
			'Collaborated via GitHub for version control',
		],
	},
	{
		id: 7,
		title: 'VisCOK',
		category: 'Web Application',
		technologies: ['CodeIgniter', 'Bootstrap', 'PHP', 'MySQL'],
		startDate: 'Oct 2023',
		endDate: 'Dec 2023',
		description:
			'A financial management application for recording and managing monthly government expenditures.',
		keypoints: [
			'Implemented multi-level user authentication and admin dashboard',
			'Developed bank account and expenditure master data management',
			'Built expense submission and receipt printing feature',
			'Ensured robust backend performance with MySQL',
		],
	},
];

export const experienceData = [
	{
		id: 1,
		role: 'Full Stack Developer',
		company: 'PT. Lab Computer Indonesia',
		location: 'Sukabumi, ID – Hybrid',
		startDate: 'Sep 2023',
		endDate: 'Feb 2026',
		description:
			'Responsible for designing and developing scalable web-based systems across multiple industries, translating business requirements into reliable full-stack solutions while ensuring code quality, performance, and long-term maintainability.',
		achievements: [
			'Developed a custom Content Management System (CMS) with an administrative dashboard and public blog platform, including dynamic sections, banner management, article publishing workflow, social sharing, and SEO configuration. The platform improved search visibility and increased organic traffic and reader engagement.',
			'Contributed to the early development of a restaurant Point of Sale (POS) system by implementing secure cashier authentication and designing an efficient table selection workflow, improving transaction accuracy and operational flow.',
			'Developed an integrated all-in-one F&B POS system deployed across 14 active outlets, covering transaction processing, multi-point receipt printing, master data management, inventory control, stock movement tracking, and real-time stock monitoring, enhancing operational efficiency and scalability.',
			'Contributed to the development of a Hospital Management Information System (SIMRS), implementing structured master data and outpatient workflows from patient registration to diagnosis documentation, streamlining clinical administration and improving data consistency.',
			'Developed scalable web applications using CodeIgniter and Laravel with JavaScript for interactive frontend features, maintaining clean, maintainable, and business-aligned system architecture.',
			'Worked in a hybrid environment, balancing remote development with on-site strategic meetings and urgent deployment cycles to ensure timely and stable delivery.',
		],
	},
	{
		id: 2,
		role: 'Full Stack Developer (Contract)',
		company: 'Entercode Technology',
		location: 'Gorontalo, ID – Remote',
		startDate: 'Apr 2025',
		endDate: 'May 2025',
		description:
			'Delivered a short-term remote project focused on building a structured and scalable system within a tight timeline, emphasizing clean architecture, rapid development, and reliable third-party integrations.',
		achievements: [
			'Developed a lightweight ISP management system, delivering core features within a one-month remote contract timeline. Implemented Laravel Repository Pattern to improve code structure, maintainability, and reusability across the application.',
			'Built end-to-end features including master data management, branch-based data filtering, and interactive workflows using AJAX, aligned with business requirements.',
			'Integrated third-party services such as Google Maps API for automated location mapping and coordinate synchronization, and Twilio WhatsApp API for real-time notification features.',
		],
	},
	{
		id: 3,
		role: 'Junior Full Stack Developer',
		company: 'PT. Lab Computer Indonesia',
		location: 'Sukabumi, ID – Hybrid',
		startDate: 'Feb 2023',
		endDate: 'Aug 2023',
		description:
			'Supported other developers in building and maintaining web applications, contributing to system design discussions and implementing foundational features while strengthening technical and collaborative skills.',
		achievements: [
			'Assisted in designing and reviewing Entity Relationship Diagrams (ERD) to ensure well-structured and scalable database architecture.',
			'Supported feature planning by contributing to workflow design, business logic mapping, and technical breakdown discussions.',
			'Contributed to the development of core application features, including CRUD operations for master data modules.',
			'Utilized Git for version control to manage code changes, maintain clean commit history, and support collaborative development.',
			'Collaborated with cross-functional team members through GitHub for pull requests, code reviews, and issue tracking.',
		],
	},
];

export const socialLinks = [
	{
		name: 'GitHub',
		icon: Github,
		url: 'https://github.com/hasbinbl',
		color: 'hover:text-gray-900 hover:bg-gray-100',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		url: 'https://linkedin.com/in/hasbi-nabil',
		color: 'hover:text-blue-700 hover:bg-blue-50',
	},
	{
		name: 'WhatsApp',
		icon: Smartphone,
		url: 'https://wa.me/62895403324676',
		color: 'hover:text-green-700 hover:bg-green-50',
	},
	{
		name: 'Email',
		icon: Mail,
		url: 'mailto:hasbinabil.work@gmail.com',
		color: 'hover:text-red-700 hover:bg-red-50',
	},
];

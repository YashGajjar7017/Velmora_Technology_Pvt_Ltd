import {
  Globe,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Lightbulb,
  Users,
  Cpu,
  Headphones,
  Maximize,
  Star,
  Zap,
  Rocket,
  Code2,
  Database,
  Lock,
  Palette,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'

/* ─── Navigation ─── */
export type PageName = 'home' | 'services' | 'about' | 'portfolio' | 'pricing' | 'contact'

export interface NavItem {
  label: string
  page: PageName
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'About', page: 'about' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Contact', page: 'contact' },
]

/* ─── Services ─── */
export interface Service {
  icon: LucideIcon
  title: string
  shortDescription: string
  description: string
  features: string[]
}

export const SERVICES: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    shortDescription: 'Custom web applications built with modern frameworks and best practices.',
    description:
      'We build high-performance web applications using cutting-edge frameworks like React, Next.js, and Vue. From single-page apps to complex enterprise platforms, our solutions are scalable, accessible, and optimized for speed.',
    features: [
      'React, Next.js, Vue.js development',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'CMS & headless architecture',
      'API design & integration',
      'Performance optimization',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    shortDescription: 'Scalable cloud infrastructure design and migration on AWS, Azure, and GCP.',
    description:
      'Migrate to the cloud or optimize your existing infrastructure. We design scalable, cost-effective cloud architectures on AWS, Azure, and GCP that grow with your business while ensuring 99.99% uptime.',
    features: [
      'Cloud migration & strategy',
      'AWS, Azure, GCP architecture',
      'Serverless computing',
      'Container orchestration (K8s)',
      'Cost optimization',
      'Disaster recovery planning',
    ],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    shortDescription: 'Comprehensive security assessments and compliance solutions.',
    description:
      'Protect your digital assets with our comprehensive cybersecurity services. From penetration testing to compliance audits, we identify vulnerabilities and implement robust security measures to safeguard your business.',
    features: [
      'Penetration testing',
      'Security audits & compliance',
      'SOC-as-a-Service',
      'Incident response',
      'Zero Trust architecture',
      'Security awareness training',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
    description:
      'Create engaging mobile experiences for iOS and Android. We specialize in native development with Swift and Kotlin, as well as cross-platform solutions with React Native and Flutter for maximum reach.',
    features: [
      'iOS (Swift) & Android (Kotlin)',
      'React Native & Flutter',
      'UI/UX design for mobile',
      'App Store optimization',
      'Push notifications & analytics',
      'Offline-first architecture',
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    shortDescription: 'Intelligent solutions powered by cutting-edge AI technology.',
    description:
      'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. Our AI team builds custom machine learning models, NLP solutions, and computer vision systems.',
    features: [
      'Custom ML model development',
      'Natural Language Processing',
      'Computer vision systems',
      'Predictive analytics',
      'AI chatbots & assistants',
      'Data pipeline engineering',
    ],
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    shortDescription: 'Strategic technology consulting for digital transformation.',
    description:
      'Align your technology investments with business goals through our strategic IT consulting. We create roadmaps for digital transformation, assess technology stacks, and guide your team through change.',
    features: [
      'Digital transformation strategy',
      'Technology stack assessment',
      'IT governance & roadmap',
      'Vendor selection guidance',
      'Process automation',
      'Change management',
    ],
  },
]

/* ─── Stats ─── */
export interface Stat {
  value: string
  label: string
}

export const STATS: Stat[] = [
  { value: '8+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
]

/* ─── Why Choose Us ─── */
export interface WhyUsItem {
  icon: LucideIcon
  title: string
  description: string
}

export const WHY_US: WhyUsItem[] = [
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our certified professionals bring deep expertise across technologies and industries, ensuring top-quality solutions every time.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description:
      'We leverage the latest tools and frameworks to build future-proof solutions that keep you ahead of the competition.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock support and monitoring ensure your systems stay online and issues are resolved promptly.',
  },
  {
    icon: Maximize,
    title: 'Scalable Solutions',
    description:
      'Architecture designed to grow with your business. Our solutions adapt seamlessly as your needs evolve and expand.',
  },
]

/* ─── Testimonials ─── */
export interface Testimonial {
  name: string
  role: string
  initials: string
  quote: string
  stars: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, FinVault Inc.',
    initials: 'SM',
    quote:
      'NexaTech transformed our legacy systems into a modern cloud platform. The team was professional, responsive, and delivered beyond our expectations.',
    stars: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder, GreenLeaf Apps',
    initials: 'DC',
    quote:
      'Their mobile app development team created an incredible product that our users love. The attention to detail and performance optimization was outstanding.',
    stars: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Engineering, LogiCore',
    initials: 'ER',
    quote:
      'The cybersecurity audit NexaTech conducted revealed critical vulnerabilities we had missed. Their remediation plan was thorough and effective.',
    stars: 5,
  },
]

/* ─── Team Members ─── */
export interface TeamMember {
  name: string
  role: string
  initials: string
}

export const TEAM: TeamMember[] = [
  { name: 'Alex Johnson', role: 'CEO & Founder', initials: 'AJ' },
  { name: 'Priya Sharma', role: 'CTO', initials: 'PS' },
  { name: 'Marcus Lee', role: 'Head of Design', initials: 'ML' },
  { name: 'Sofia Garcia', role: 'Lead Developer', initials: 'SG' },
  { name: 'James Wilson', role: 'Cloud Architect', initials: 'JW' },
  { name: 'Aisha Patel', role: 'Security Lead', initials: 'AP' },
]

/* ─── Portfolio Projects ─── */
export interface Project {
  title: string
  category: string
  description: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'FinVault Banking Platform',
    category: 'Web Development',
    description:
      'A modern cloud-native banking platform handling 2M+ transactions daily with 99.99% uptime.',
    tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'GreenLeaf Mobile App',
    category: 'Mobile Development',
    description:
      'Cross-platform sustainability tracking app with 500K+ downloads and 4.8-star rating.',
    tags: ['React Native', 'Firebase', 'ML Kit'],
  },
  {
    title: 'LogiCore Security Overhaul',
    category: 'Cybersecurity',
    description:
      'Complete security transformation including Zero Trust implementation and SOC 2 compliance.',
    tags: ['Zero Trust', 'SOC 2', 'SIEM', 'WAF'],
  },
  {
    title: 'MedSync AI Diagnostics',
    category: 'AI & Machine Learning',
    description:
      'AI-powered medical imaging analysis system achieving 97% accuracy in early detection.',
    tags: ['Python', 'TensorFlow', 'DICOM', 'HIPAA'],
  },
  {
    title: 'RetailMax E-Commerce',
    category: 'Cloud Solutions',
    description:
      'Scalable e-commerce infrastructure supporting 100K concurrent users with sub-second load times.',
    tags: ['Next.js', 'Kubernetes', 'Redis', 'CDN'],
  },
  {
    title: 'EduTech Learning Platform',
    category: 'Web Development',
    description:
      'Interactive learning platform with real-time collaboration features serving 50K+ students.',
    tags: ['Vue.js', 'WebRTC', 'MongoDB', 'Socket.io'],
  },
]

/* ─── Pricing Plans ─── */
export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  icon: LucideIcon
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$2,499',
    period: '/project',
    description: 'Perfect for small businesses and startups getting off the ground.',
    features: [
      'Single-page website or app',
      'Responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month post-launch support',
      'Up to 5 pages',
    ],
    highlighted: false,
    icon: Zap,
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: '/project',
    description: 'Ideal for growing businesses that need a robust digital presence.',
    features: [
      'Multi-page web application',
      'Custom UI/UX design',
      'Advanced SEO & analytics',
      'CMS integration',
      'API development',
      '3 months post-launch support',
      'Up to 15 pages',
      'Performance optimization',
    ],
    highlighted: true,
    icon: Rocket,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with complex requirements.',
    features: [
      'Full-scale enterprise platform',
      'Dedicated project team',
      'Cloud infrastructure setup',
      'Security audit & compliance',
      'CI/CD pipeline',
      '12 months premium support',
      'Unlimited pages & features',
      '24/7 monitoring & maintenance',
    ],
    highlighted: false,
    icon: Code2,
  },
]

/* ─── Technology Stack ─── */
export interface TechItem {
  name: string
  icon: LucideIcon
}

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'Node.js', icon: Cpu },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Database },
  { name: 'Kubernetes', icon: Maximize },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Redis', icon: Zap },
  { name: 'Security', icon: Lock },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Design', icon: Palette },
  { name: 'AI/ML', icon: Brain },
]

/* ─── Trusted By ─── */
export const TRUSTED_BY = [
  'FinVault',
  'GreenLeaf',
  'LogiCore',
  'MedSync',
  'RetailMax',
  'EduTech',
]

export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  tools: string[]
  tags: string[]
  coverImage: string
  thumbnailImage: string
  images: ProjectGalleryImage[]
  client?: string
  timeline: string
  duration: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "job-finder-app",
    title: "Job Finder App",
    category: "Mobile App",
    shortDescription: "A modern job search application designed to connect job seekers with employers efficiently.",
    description: [
      "The Job Finder App is a comprehensive mobile application designed to streamline the job search process. It provides an intuitive interface for job seekers to discover opportunities that match their skills and preferences.",
      "The app features a smart matching algorithm that analyzes user profiles and job requirements to suggest the most relevant positions. Users can easily filter jobs by location, industry, experience level, and salary range.",
      "For employers, the platform offers tools to post job listings, review applications, and communicate with potential candidates directly through the app.",
    ],
    features: [
      "Personalized job recommendations based on user skills and preferences",
      "Real-time notifications for new job postings and application updates",
      "In-app messaging system for direct communication between employers and candidates",
      "Resume builder with templates and formatting tools",
      "Interview scheduling and calendar integration",
      "Detailed analytics for job seekers to track their application progress",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "Firebase"],
    tools: ["Figma", "Postman", "Jira", "GitHub", "Vercel"],
    tags: ["Mobile Development", "Job Search", "AI/ML", "Real-time", "User Experience"],
    coverImage: "/job-finder-cover.png",
    thumbnailImage: "/job-finder-screen1.png",
    images: [
      { url: "/job-finder-screen1.png", caption: "Home Screen with Job Recommendations" },
      { url: "/job-finder-screen2.png", caption: "Job Detail View" },
      { url: "/job-finder-screen3.png", caption: "User Profile and Skills" },
      { url: "/job-finder-screen4.png", caption: "Application Tracking Dashboard" },
    ],
    timeline: "Q2 2023",
    duration: "3 months",
    role: "Lead Product Manager",
    liveUrl: "https://example.com/job-finder",
    githubUrl: "https://github.com/example/job-finder",
    relatedProjects: [
      {
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        category: "Web Application",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "ecommerce-redesign",
        title: "E-Commerce Redesign",
        category: "UX Case Study",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 2,
    slug: "finance-dashboard",
    title: "Finance Dashboard",
    category: "Web Application",
    shortDescription:
      "A comprehensive financial management dashboard for tracking investments, expenses, and financial goals.",
    description: [
      "The Finance Dashboard is a powerful web application designed to help users manage their personal finances in one centralized location. It provides real-time insights into spending patterns, investment performance, and progress toward financial goals.",
      "The dashboard features interactive charts and visualizations that make complex financial data easy to understand at a glance. Users can connect multiple accounts, categorize transactions automatically, and receive personalized recommendations to improve their financial health.",
      "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive financial information.",
    ],
    features: [
      "Account aggregation from multiple financial institutions",
      "Automated transaction categorization and tagging",
      "Budget creation and expense tracking",
      "Investment portfolio analysis and performance metrics",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Financial insights and recommendations",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js", "Stripe API"],
    tools: ["Figma", "Postman", "Jira", "GitHub", "Vercel", "Chart.js"],
    tags: ["Financial Tech", "Data Visualization", "Dashboard", "Analytics", "Security"],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/finance-dashboard-screen1.png",
    images: [
      { url: "/finance-dashboard-screen1.png", caption: "Main Dashboard Overview" },
      { url: "/finance-dashboard-screen2.png", caption: "Investment Portfolio Analysis" },
      { url: "/finance-dashboard-screen3.png", caption: "Expense Tracking Interface" },
      { url: "/finance-dashboard-screen4.png", caption: "Financial Goals Dashboard" },
    ],
    timeline: "Q1 2023",
    duration: "4 months",
    role: "Full Stack Developer",
    liveUrl: "https://example.com/finance-dashboard",
    githubUrl: "https://github.com/example/finance-dashboard",
    relatedProjects: [
      {
        slug: "job-finder-app",
        title: "Job Finder App",
        category: "Mobile App",
        image: "/job-finder-screen1.png",
      },
      {
        slug: "ecommerce-redesign",
        title: "E-Commerce Redesign",
        category: "UX Case Study",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 3,
    slug: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    category: "UX Case Study",
    shortDescription: "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    description: [
      "This project involved a comprehensive redesign of an existing e-commerce platform to improve user experience, increase conversion rates, and modernize the overall design aesthetic.",
      "The redesign process included extensive user research, competitor analysis, and iterative design testing to ensure the new interface met user needs and business objectives.",
      "Key improvements included streamlined checkout processes, enhanced product discovery, and mobile-first responsive design that significantly improved user engagement metrics.",
    ],
    features: [
      "Streamlined checkout process with reduced steps",
      "Advanced product filtering and search functionality",
      "Personalized product recommendations",
      "Mobile-first responsive design",
      "Enhanced product detail pages with 360° views",
      "Integrated customer reviews and ratings system",
      "Real-time inventory tracking and notifications",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Hotjar", "Google Analytics"],
    tools: ["Figma", "Adobe Creative Suite", "Miro", "UserTesting", "Hotjar"],
    tags: ["UX Design", "E-commerce", "User Research", "Conversion Optimization", "Mobile Design"],
    coverImage: "/ecommerce-redesign-cover.png",
    thumbnailImage: "/ecommerce-redesign-screen1.png",
    images: [
      { url: "/ecommerce-redesign-screen1.png", caption: "Homepage Redesign" },
      { url: "/ecommerce-redesign-screen2.png", caption: "Product Listing Page" },
      { url: "/ecommerce-redesign-screen3.png", caption: "Product Detail View" },
      { url: "/ecommerce-redesign-screen4.png", caption: "Checkout Process" },
    ],
    timeline: "Q4 2022",
    duration: "2 months",
    role: "UX Designer",
    liveUrl: "https://example.com/ecommerce-redesign",
    relatedProjects: [
      {
        slug: "job-finder-app",
        title: "Job Finder App",
        category: "Mobile App",
        image: "/job-finder-screen1.png",
      },
      {
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        category: "Web Application",
        image: "/modern-finance-overview.png",
      },
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = projects.find((project) => project.slug === currentSlug)
  if (!currentProject?.relatedProjects) return []

  return currentProject.relatedProjects.slice(0, limit)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((project) => project.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allTags = projects.flatMap((project) => project.tags)
  return [...new Set(allTags)].sort()
}

export function getAllCategories(): string[] {
  const allCategories = projects.map((project) => project.category)
  return [...new Set(allCategories)].sort()
}

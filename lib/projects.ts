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
  recognition?: string[]
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
  teammates?: string[]
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "nrel-solar-district-cup",
    title: "Residential Energy Retrofits for NYC",
    category: "Engineering Project",
    shortDescription: "Rooftop solar-plus-storage design for 9 NYC buildings with tariff and shading optimization.",
    description: [
      "Engineered a rooftop solar-plus-storage system for 9 NYC buildings, optimizing tilt, azimuth, and row spacing to minimize shading losses and shift peak loads.",
      "Performed tariff analysis, interconnection modeling, and shading-loss simulations; proposed positive NPV over 30 years with projected savings and IRR."
    ],
    features: [
      "PV sizing and storage integration",
      "Shading and interconnection modeling",
      "Tariff optimization and NPV analysis"
    ],
    recognition: [
      "NREL Solar District Cup Finalist",
      "Presented at NYC Energy Week 2024"
    ],
    technologies: ["Python", "Helioscope", "PVsyst"],
    tools: [],
    tags: ["Solar", "Energy Modeling", "Storage", "NYC"],
    coverImage: "/images/nrel-solar-district-cup-cover.png",
    thumbnailImage: "/images/nrel-solar-district-cup-thumb.png",
    images: [],
    timeline: "Aug 2024 – Present",
    duration: "Ongoing",
    role: "Mechanical Engineering Lead",
    teammates: ["Sarah Chen", "Michael Rodriguez", "Alex Thompson"],
  },
  {
    id: 2,
    slug: "pfizer-digital-hackathon-cucu",
    title: "Pfizer Digital Hackathon — CUCU",
    category: "Product / Hackathon",
    shortDescription: "2nd-place mental health app prototype for underserved high school students.",
    description: [
      "Led end-to-end development of CUCU: defined PRD, prioritized features, and coordinated design/engineering.",
      "Implemented mood-classification concept and journaling tools in a user-centric prototype; placed 2nd."
    ],
    features: [
      "Mood classification concept",
      "Journaling and tracking",
      "User-tested prototype"
    ],
    recognition: [
      "2nd Place - Pfizer Digital Hackathon 2024",
      "Selected for Pfizer's Innovation Pipeline"
    ],
    technologies: [],
    tools: [],
    tags: ["Hackathon", "Mental Health", "Product"],
    coverImage: "/images/cucu-cover.png",
    thumbnailImage: "/images/cucu-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Product Manager & Team Lead",
    teammates: ["Emily Zhang", "David Kim", "Lisa Patel"],
  },
  {
    id: 3,
    slug: "otc-packaging-redesign",
    title: "OTC Medications — Packaging Redesign",
    category: "Product Design",
    shortDescription: "Sustainable packaging to improve UX and clarity of sensitive information.",
    description: [
      "Designed sustainable OTC packaging with a focus on clear information hierarchy and improved usability.",
      "Built resin-printed prototypes to iterate quickly on form and function."
    ],
    features: [
      "Sustainable materials focus",
      "Clarity-first information layout",
      "Rapid prototyping"
    ],
    recognition: [
      "Cooper Union Design Excellence Award",
      "Featured in Industrial Design Society of America Exhibition"
    ],
    technologies: ["Blender", "AutoCAD"],
    tools: ["Adobe Creative Suite", "3D Resin Printing"],
    tags: ["Industrial Design", "Sustainability", "UX"],
    coverImage: "/images/otc-packaging-cover.png",
    thumbnailImage: "/images/otc-packaging-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Product Designer & MechE",
    teammates: ["Rachel Green", "Tom Wilson"],
  },
  {
    id: 4,
    slug: "airfoil-lift-drag-rig",
    title: "Experimental Rig: Lift/Drag of 3D-Printed Airfoil",
    category: "Engineering Project",
    shortDescription: "Wind-tunnel rig with six-manometer setup and custom clamp for airfoil testing.",
    description: [
      "Built an experimental rig with a six-manometer setup connected to pressure taps to measure lift and drag.",
      "Designed a clamp to safely mount the airfoil in the test section."
    ],
    features: [
      "Wind-tunnel instrumentation",
      "Pressure tap integration",
      "Custom mounting clamp"
    ],
    recognition: [
      "Cooper Union Engineering Research Grant",
      "Presented at American Institute of Aeronautics and Astronautics Conference"
    ],
    technologies: ["SolidWorks"],
    tools: ["Wind Tunnel", "Manometers"],
    tags: ["Aero", "Testing", "Instrumentation"],
    coverImage: "/images/airfoil-rig-cover.png",
    thumbnailImage: "/images/airfoil-rig-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Mechanical Engineer",
    teammates: ["James Anderson", "Maria Garcia"],
  },
  {
    id: 5,
    slug: "pandora-3d-pose-module",
    title: "Pandora: Hardware Module for 3D Pose Estimation",
    category: "Hardware / ML",
    shortDescription: "Low-cost, modular, open-source pose module on Jetson Nano with MediaPipe.",
    description: [
      "Developed a modular hardware module for 3D pose estimation; implemented Google MediaPipe on Nvidia Jetson Nano.",
      "Designed a passively cooled housing and wrote quickstart/troubleshooting docs for hobbyists."
    ],
    features: [
      "Open-source hardware design",
      "Jetson Nano + MediaPipe",
      "Passive thermal design"
    ],
    recognition: [
      "Open Source Hardware Association Recognition",
      "Featured in Hackaday and Make Magazine"
    ],
    technologies: ["Nvidia Jetson Nano", "MediaPipe", "SolidWorks"],
    tools: [],
    tags: ["Embedded", "Computer Vision", "Open Source"],
    coverImage: "/images/pandora-cover.png",
    thumbnailImage: "/images/pandora-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Product Designer & MechE",
    teammates: ["Kevin Lee", "Sophie Chen"],
  },
  {
    id: 6,
    slug: "carbon-seat-questration",
    title: "Carbon (Seat)-questration",
    category: "Industrial Design",
    shortDescription: "Fastener-free lounge rocking chair optimized for low embodied carbon.",
    description: [
      "Engineered a fastener-free lounge rocking chair; selected materials to reduce embodied carbon and maximize sequestration.",
      "Used material databases to guide sustainable manufacturing and lifecycle choices."
    ],
    features: [
      "Fastener-free joinery",
      "Material carbon analysis",
      "Lifecycle optimization"
    ],
    recognition: [
      "Cooper Union Sustainability Design Award",
      "Selected for NYC Design Week Exhibition"
    ],
    technologies: ["Rhino 3D", "ANSYS Granta MI"],
    tools: [],
    tags: ["Furniture", "Sustainability", "Materials"],
    coverImage: "/images/carbon-seat-cover.png",
    thumbnailImage: "/images/carbon-seat-thumb.png",
    images: [],
    timeline: "Jan 2025 – Mar 2025",
    duration: "3 months",
    role: "Mechanical Engineer",
    teammates: ["Anna Rodriguez", "Chris Johnson"],
  },
  {
    id: 7,
    slug: "cooper-motorsports-composites",
    title: "Cooper Union Motorsports — Composites Manufacturing",
    category: "Team Project",
    shortDescription: "Manufacturing airfoils and composite structures via layups, CNC, and wire cutting.",
    description: [
      "Contributed to composites manufacturing: airfoils, layups, CNC machining, wire cutting, and 3D printing."
    ],
    features: ["Composite layups", "CNC machining", "Rapid fabrication"],
    recognition: [
      "Formula SAE Competition Participant",
      "Cooper Union Motorsports Team Recognition"
    ],
    technologies: [],
    tools: ["CNC", "3D Printing", "Wire Cutting"],
    tags: ["Composites", "Manufacturing", "Aero"],
    coverImage: "/images/motorsports-composites-cover.png",
    thumbnailImage: "/images/motorsports-composites-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Product Designer & MechE",
    teammates: ["Team of 15+ students", "Faculty Advisor: Dr. Smith"],
  },
  {
    id: 8,
    slug: "hvac-conscious-retrofit",
    title: "HVAC-Conscious Retrofit Design",
    category: "Building Science",
    shortDescription: "BIM + thermal analysis to optimize airflow, passive solar, and envelope performance.",
    description: [
      "Designed a 250 sq ft space and performed HVAC/thermal analyses with OpenStudio and shoe-box modeling.",
      "Optimized air movement, passive solar heating, and envelope performance."
    ],
    features: [
      "BIM-driven retrofit design",
      "Thermal + HVAC simulation",
      "Passive strategies"
    ],
    recognition: [
      "Building Science Research Grant",
      "Presented at ASHRAE Conference"
    ],
    technologies: ["OpenStudio SDK", "Rhino 3D", "BIM"],
    tools: [],
    tags: ["HVAC", "Energy", "Building Science"],
    coverImage: "/images/hvac-retrofit-cover.png",
    thumbnailImage: "/images/hvac-retrofit-thumb.png",
    images: [],
    timeline: "Mar 2025 – Present",
    duration: "Ongoing",
    role: "Mechanical Engineer",
    teammates: ["Dr. Williams", "Building Science Lab Team"],
  },
  {
    id: 9,
    slug: "lstm-nvda-prediction",
    title: "LSTM Model for NVIDIA Stock Prediction",
    category: "Machine Learning",
    shortDescription: "Multi-layer LSTM that reduced MSE 20% vs. ARIMA on daily close predictions.",
    description: [
      "Engineered and tuned a multi-layer LSTM with TensorFlow/Keras for NVDA close price prediction.",
      "Achieved ~20% MSE improvement over an ARIMA baseline via hyperparameter tuning and feature scaling."
    ],
    features: [
      "Time-series preprocessing",
      "Model tuning and evaluation",
      "Baseline benchmarking"
    ],
    recognition: [
      "Machine Learning Research Award",
      "Paper submitted to IEEE Conference on Computational Finance"
    ],
    technologies: ["TensorFlow", "Keras"],
    tools: [],
    tags: ["ML", "Time Series", "Finance"],
    coverImage: "/images/lstm-nvda-cover.png",
    thumbnailImage: "/images/lstm-nvda-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Machine Learning Engineer",
    teammates: ["Prof. Davis", "ML Research Group"],
  },
  {
    id: 10,
    slug: "digital-movement-exhibit",
    title: "Digital Movement Exhibit",
    category: "Interactive / Grants",
    shortDescription: "Grant-funded interactive module exploring applications in art and K-12 education.",
    description: [
      "Awarded a $10,000 grant to run a user study and build an interactive learning module.",
      "Led and managed a cross-functional team of artists and electrical engineers."
    ],
    features: [
      "Grant-funded research",
      "Interactive learning module",
      "Team leadership"
    ],
    recognition: [
      "$10,000 Research Grant Recipient",
      "Featured in Cooper Union Art Exhibition",
      "Educational Technology Innovation Award"
    ],
    technologies: [],
    tools: [],
    tags: ["Interactive", "Education", "Art Tech"],
    coverImage: "/images/digital-movement-cover.png",
    thumbnailImage: "/images/digital-movement-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Lead Designer & Engineer",
    teammates: ["Art Team: 3 artists", "Engineering Team: 2 EEs", "Education Specialist: Dr. Brown"],
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

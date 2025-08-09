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
  documentsUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "nrel-solar-district-cup",
    title: "Residential Energy Retrofits for NYC",
    category: "Energy & Sustainability",
    shortDescription: "A portfolio of rooftop solar + battery retrofit solutions for multi-family buildings in NYC’s Lower East Side",
    description: [
      "NYC’s Climate Mobilization Act and Local Law 97 are forcing thousands of large buildings to slash emissions or face heavy fines - up to $268 per excess metric ton of CO₂e. For the Lower East Side’s prewar walkups and postwar towers, that’s a high-stakes challenge. These buildings have tight rooftop space, tricky shading from neighbors, and strict fire/zoning codes. Owners need solutions that cut emissions, work within structural limits, and make financial sense.",
      "Partnering with Loisaida, Inc., we conducted a solar feasibility study across 32 parcels, narrowing down to 9 high-potential rooftops and carports. Using Helioscope for shading and layout optimization, PVsyst for performance modeling, and NREL’s System Advisor Model for cost/benefit analysis, we designed a portfolio of rooftop canopy and carport systems - optimized for NYC’s constraints."
    ],
    features: [
      "85 kW DC across four flagship sites, generating ~120 MWh/year - offsetting up to 66.8% of these buildings’ annual electricity consumption.",
      "Maximized panel count with raised canopy designs to sidestep setback limitations.",
      "Integrated battery storage only where financially viable (e.g., a 10 kWh system at 308 E 8th St. boosted NPV)",
      "Planned interconnection points to match Con Edison’s hosting capacity maps, avoiding costly grid upgrades.",
      "Proposed a customer-owned model delivering a 9% IRR and ~$751K in lifetime savings, with a 9-year payback period."
    ],
    recognition: [
      "U.S. Department of Energy's Solar District Cup Finalist",
      "Honorable Mention at the 2024 U.S. DOE Solar District Cup Finals"
    ],
    technologies: ["Python", "Helioscope", "PVsyst", "System Advisor Model"],
    tools: ["MS Excel", "MS Powerpoint","ArcGIS", "LaTeX"],
    tags: ["Solar", "Energy Modeling", "Storage", "NYC", "Energy Efficiency", "Sustainability", "Decarbonization"],
    coverImage: "/images/nrel-solar-district-cup/nrel-solar-district-cup-cover.png",
    thumbnailImage: "/images/nrel-solar-district-cup/nrel-solar-district-cup-cover.png",
    images: [
      {
        url: "/images/nrel-solar-district-cup/01-district-solar-cup-poster.png",
        caption: "U.S. Department of Energy Solar District Cup presentation poster showcasing our NYC solar retrofit portfolio"
      },
      {
        url: "/images/nrel-solar-district-cup/02-estimated-penalties.png", 
        caption: "Local Law 97 penalty analysis showing potential fines for buildings exceeding carbon emission limits"
      },
      {
        url: "/images/nrel-solar-district-cup/03-system-summary.png",
        caption: "Technical system summary detailing solar panel configurations and energy performance metrics"
      }
    ],
    timeline: "Aug 2024 – May 2025",
    duration: "10 months",
    role: "Team Lead & Mechanical Engineer",
    teammates: ["Gautaman Asirwatham", "Akil Foster", "Logan Pogreba"],
    documentsUrl: "/docs/BYOD_CU_ProjectPitch.pdf",
  },
  {
    id: 2,
    slug: "pfizer-digital-hackathon-cucu",
    title: "CUCU: Your Mental Health Companion",
    category: "Health & Wellness",
    shortDescription: "An AI-powered mental health app for NYC high school students to foster emotional resilience and access personalized support",
    description: [
      "NYC’s public schools are in the middle of a teen mental health emergency. Between 2011 and 2021, the percentage of high school students reporting feeling sad or hopeless jumped from 27% to 38%. Yet, 423 public schools have no social worker, and over 80% fall short of the recommended 1:250 social worker–student ratio. Existing Department of Education programs like Harmony SEL and DESSA screening are valuable but can’t scale to meet demand—especially for students relying on unhealthy coping mechanisms like self-blame or withdrawal.",
      "CUCU was born at the Pfizer Digital Hackathon as an AI-powered, gamified mental health companion tailored to NYC high school students."
    ],
    features: [
      "Virtual Companion: CUCU chats with students daily, adapting tone and suggesting activities based on mood.",
      "Mood Classification: An NLP-powered algorithm analyzes journal entries to detect emotions, visualizes mood trends, and recommends mental health activities.",
      "Gamified Resilience: Achievements, CuCoins, and mini-games like meditation, coloring, and NYC outdoor challenges encourage ongoing engagement.",
      "Private Reflection: Journals remain confidential to students, while anonymized mood trends help counselors spot class-level concerns.",
      "Admin Dashboard: Social workers and wellness staff can see aggregated, privacy-safe data to identify high-need classes and send announcements."
    ],
    recognition: [
      "2nd Place at Pfizer Digital Hackathon 2024, outperforming teams from top universities including Yale, Cornell, and Princeton",
      "Recognition from Chief Digital and Technology Officer, Pfizer for presenting our solution with empathy, demonstrating a heart-felt desire to offer tools to build emotional resilience for students!"
    ],
    technologies: ["Python", "React", "Flask", "SQLite", "SQLAlchemy", "HTML", "CSS", "JavaScript", "Natural Language Processing"],
    tools: ["GitHub", "Figma", "MS Excel", "MS Powerpoint", "Notion"],
    tags: ["Hackathon", "Mental Health", "Digital Healthcare", "AI", "Machine Learning"],
    coverImage: "/images/pfizer-digital-hackathon-cucu/cucu-rectangle-banner.webp",
    thumbnailImage: "/images/pfizer-digital-hackathon-cucu/cucu-profile-square.webp",
    images: [
      {
        url: "/images/pfizer-digital-hackathon-cucu/team.png",
        caption: "Team CUCU from The Cooper Union presenting our AI-powered mental health app at Pfizer Digital Hackathon 2024, where we won 2nd place"
      },
      {
        url: "/images/pfizer-digital-hackathon-cucu/Demo Video (1).mov",
        caption: "Live demonstration of CUCU's AI-powered emotion classification, mood tracking, and personalized mental health recommendations in action"
      },
      {
        url: "/images/pfizer-digital-hackathon-cucu/app-interactive-figma.mp4",
        caption: "Interactive Figma prototype walkthrough showcasing CUCU's user interface, gamification elements, and administrative dashboard features"
      }
    ],
    timeline: "Sep 2024 – Oct 2024",
    duration: "10 days",
    role: "Product Manager & Team Lead",
    teammates: ["Lizelle Ocfemia", "Lamiah Khan", "Lei (Raymond) Chi", "Jaehyeon Park"],
    githubUrl: "https://github.com/aaryanmahipalcu/CUCU-pfizer-hackathon/tree/main",
    documentsUrl: "/docs/Cooper_Union_Pfizer_Hackathon.pdf",
  },
  {
    id: 3,
    slug: "otc-packaging-redesign",
    title: "Choice: OTC Drugs Reimagined",
    category: "Health & Wellness",
    shortDescription: "Sustainable packaging to improve UX and clarity of sensitive druginformation.",
    description: [
      "Managing a medicine cabinet shouldn’t feel like a scavenger hunt. For people like Sarah, a health-conscious, busy single mother, expired bottles, unclear labels, and cluttered storage create stress at the very moment she needs clarity. This isn’t just inconvenient; it can be unsafe, leading to accidental misuse or delayed care.",
      "I designed CHOICE as a holistic solution to make medicine storage intuitive, organized, and sustainable. By combining thoughtful packaging with ecological responsibility, CHOICE streamlines how people store, identify, and access everyday medicines."
    ],
    features: [
      "Refillable frosted glass containers to reduce plastic waste.",
      "Child-safe, airtight caps for safety and freshness.",
      "Clear, prioritized symptom labeling for fast recognition.",
      "Readable dosage details designed with accessibility in mind.",
      "Travel, Personal, and Family pack sizes to fit different lifestyles.",
      "Biodegradable refill pouches to minimize environmental impact."
    ],
    recognition: [
    
    ],
    technologies: ["Blender", "AutoCAD", "Adobe Photoshop"],
    tools: ["Adobe Creative Suite", "3D Printing", "Resin Printing"],
    tags: ["Product Design", "Sustainability"],
    coverImage: "/images/otc-packaging-cover.png",
    thumbnailImage: "/images/otc-packaging-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Product Designer",
    teammates: [],
  },
  {
    id: 4,
    slug: "airfoil-lift-drag-rig",
    title: "AeroRig: An Experiment to Measure Lift & Drag in an Airfoil",
    category: "Mechanical Engineering",
    shortDescription: "A custom-built aerodynamic testing rig for the modern fluid dynamics classroom",
    description: [
      "Our Mechanical Engineering faculty wanted to make aerodynamic principles tangible for students, but the existing wind tunnel setup was limited. It lacked a precise way to measure pressure distributions and securely mount experimental airfoils. Purchasing a turnkey commercial rig was costly and inflexible.",
      "We engineered AeroRig, a purpose-built instrumentation and mounting system designed to integrate seamlessly with the department’s existing wind tunnel."
    ],
    features: [
      "Six-manometer pressure tap array routed to multiple points along the airfoil for real-time lift and drag calculations.",
      "Custom clamping mechanism that safely secures airfoils in the wind tunnel test section while allowing quick changes between models and angle of attack.",
      "Streamlined tubing and sensor layout for minimal flow disturbance and accurate readings",
      "Robust, classroom-ready construction to withstand repeated student use without recalibration after each lab session."
    ],
    recognition: [

    ],
    technologies: ["SolidWorks", "AutoCAD", "OnShape", "Python", "Fluid Dynamics"],
    tools: ["MS Excel", "MS Powerpoint", "LaTeX", "3D Printing", "Laser Cutting"],
    tags: ["Instrumentation", "Mechanical Engineering", "Fluid Dynamics", "Aerodynamics"],
    coverImage: "/images/airfoil-rig-cover.png",
    thumbnailImage: "/images/airfoil-rig-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Mechanical Engineer",
    teammates: ["Taaseen Jahan", "Shreyas Krishnan"],
  },
  {
    id: 5,
    slug: "pandora-3d-pose-module",
    title: "Pandora: A low-cost Hardware Module for Motion Capture",
    category: "Embedded Systems",
    shortDescription: "A low-cost, open-source, and modular hardware device for 3D Pose Estimation",
    description: [
      "Real-time 3D pose estimation is an increasingly important capability for applications in AR/VR, robotics, sports analytics, and accessibility tools.",
      "However, high-quality 3D pose estimation has been locked behind expensive, immobile, and technically complex systems. These setup, often requiring bulky sensors, multiple cameras, and lengthy calibration, are inaccessible to hobbyists, small studios, or educators who could use them for art, health, or interactive applications.",
      "We built Pandora, a modular hardware device that delivers real-time 3D pose estimation in a package smaller than a paperback book, and for under $100."
    ],
    features: [
      "Pandora is a low-cost, open-source hardware module built on the NVIDIA Jetson Nano, running Google’s MediaPipe for real-time 3D pose estimation.",
      "Passive thermal management enclosure designed in SolidWorks.",
      "Real-time skeletal tracking streamed directly from the Jetson module, with support for USB or network-connected displays.",
      "Step-by-step quickstart documentation and troubleshooting guides, with dependency management using pyenv."
    ],
    recognition: [
      "Audience Choice Award at the 2022 Cooper Union Undergraduate Research Symposium"
    ],
    technologies: ["Nvidia Jetson Nano", "GoogleMediaPipe", "Python", "SolidWorks"],
    tools: ["3D Printing", "LaTeX", "Git", "GitHub"],
    tags: ["Embedded Systems", "Computer Vision", "AR/VR", "Pose Estimation", "Motion Capture"],
    coverImage: "/images/pandora/pandora's final hosuing design.JPG",
    thumbnailImage: "/images/pandora/pandora's final hosuing design.JPG",
    images: [
      {
        url: "/images/pandora/pandora's final hosuing design.JPG",
        caption: "Pandora's final housing design - a compact, modular hardware module for 3D pose estimation"
      },
      {
        url: "/images/pandora/early prototype of pandora's hosing.JPG",
        caption: "Early prototype of Pandora's housing showing the iterative design process"
      },
      {
        url: "/images/pandora/Dr. Shah and me with Pandora (one day before the final showcase).JPG",
        caption: "Dr. Shah and I with Pandora one day before the final showcase, demonstrating the completed hardware module"
      },
      {
        url: "/images/pandora/still from pandora's testers.JPG",
        caption: "Pandora being tested by users during development and validation phases"
      },
      {
        url: "/images/pandora/final showcase (pandora is the second project on the right).jpg",
        caption: "Final showcase setup with Pandora positioned as the second project on the right"
      },
      {
        url: "/images/pandora/lab picture.jpg",
        caption: "Development work in the lab during Pandora's construction and testing"
      },
      {
        url: "/images/pandora/undergraduate research symposium.jpg",
        caption: "Presenting Pandora at the undergraduate research symposium"
      },
      {
        url: "/images/pandora/first-instance-algo-jetson-nano.mov",
        caption: "First successful instance of the pose estimation algorithm running on the NVIDIA Jetson Nano"
      },
      {
        url: "/images/pandora/testing-pandora-before-show.mov",
        caption: "Final testing of Pandora moments before the showcase demonstration"
      },
      {
        url: "/images/pandora/blazepose-instance-computer.mp4",
        caption: "BlazePose pose estimation algorithm running on computer for comparison and validation"
      }
    ],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Product Designer & MechE",
    teammates: ["Amaan Rahman", "Dr. Mili Shah"],
  },
  {
    id: 6,
    slug: "carbon-seat-questration",
    title: "Carbon (Seat)-questration",
    category: "Mechanical Engineering",
    shortDescription: "Fastener-free lounge rocking chair optimized for low embodied carbon.",
    description: [
      "Furniture is often overlooked in climate impact conversations, yet it’s a silent contributor to embodied carbon. Most lounge chairs rely on carbon-intensive materials, fasteners, and manufacturing methods that make disassembly and recycling almost impossible. We set out to flip that narrative, designing a piece that’s comfortable, structurally sound, and actively reduces carbon footprint.", 
      "We engineered a fastener-free lounge rocking chair optimized for low embodied carbon. The design process was driven by material-first thinking: sourcing soft woods that actively stores carbon, avoiding adhesives and metals, and shaping each component for minimal waste during CNC cutting.",
      "We analyzed embodied carbon at every stage, from sourcing and transport to machining, sanding, and end-of-life. Using ANSYS Granta MI, we modeled high/low carbon scenarios, balancing performance with sustainability."
    ],
    features: [
      "Fastener-Free Joinery: Precision-cut components lock together without screws or adhesives, enabling full disassembly for recycling.",
      "Carbon Analysis Integration: Every material decision validated through ANSYS Granta MI to quantify impact before fabrication.",
      "Sustainable Material Selection: Sourced wood species with high carbon sequestration potential and long-term durability.",
      "Optimized CNC Fabrication: Sub-1-hour machining time with waste reduced to lightweight wood shavings.",
      "Lifecycle Design: Considered repairability, reuse, and end-of-life pathways from the outset.",
      "Ergonomic Rocking Geometry: Designed for comfort without adding unnecessary structural weight."
    ],
    recognition: [
      "Recognized by distinguished faculty across architecture and engineering departments for its playful approach and attention to detail. "
    ],
    technologies: ["Rhino 3D", "ANSYS Granta MI"],
    tools: ["CNC Milling", "MS Excel", "MS Powerpoint"],
    tags: ["Furniture", "Sustainability", "Consumer Products", "Embodied Carbon", "Carbon Sequestration"],
    coverImage: "/images/carbon-seat-cover.png",
    thumbnailImage: "/images/carbon-seat-thumb.png",
    images: [],
    timeline: "Jan 2025 – Mar 2025",
    duration: "3 months",
    role: "Mechanical Engineer",
    teammates: ["Leah Alfred", "Gautaman Asirwatham"],
  },
  {
    id: 7,
    slug: "cooper-motorsports-composites",
    title: "Cooper Union Motorsports: Composites Manufacturing",
    category: "Mechanical Engineering",
    shortDescription: "Manufacturing airfoils and composite structures via layups, CNC, and wire cutting.",
    description: [
      "As part of the Cooper Union Motorsports Team, I focused on composites manufacturing for the car’s aerodynamic elements and structural components. This involved taking CAD designs from the aero team and translating them into finished carbon fiber parts, ready for competition."
    ],
    features: ["CNC Airfoil Plates: Milled precision-cut templates used for layups to maintain accurate foil profiles.",
       "Custom Wire Cutter Operation: Fabricated foam cores for aero elements using a team-designed hot-wire cutting rig.",
       "Composite Layups: Hand-laid carbon fiber and fiberglass with vacuum bagging for optimal fiber-to-resin ratios.",
       "Mold Preparation: Surface finishing and release coating to ensure part integrity and minimal post-processing."
      ],
    recognition: [
      "Formula SAE Competition Participant",
      "Cooper Union Motorsports Team: Recognized as a top performer of the month in April 2022."
    ],
    technologies: ["SolidWorks", "CNC Milling", "Carbon Fiber Layup"],
    tools: ["Laser Cutting"],
    tags: ["Composites", "Manufacturing", "Aero", "Carbon Fiber", "Formula SAE", "Motorsports"],
    coverImage: "/images/motorsports/motorsports-cover.png",
    thumbnailImage: "/images/motorsports/motorsports-cover.png",
    images: [
      {
        url: "/images/motorsports/motorsports-cover.png",
        caption: "Cooper Union Motorsports Formula SAE car 2022 in action, featuring our black and yellow livery with custom aerodynamic components"
      },
      {
        url: "/images/motorsports/me-wtih-the-car.JPG",
        caption: "Working directly with the race car during composites manufacturing and aerodynamic testing"
      },
      {
        url: "/images/motorsports/foam-cores-cut.jpg",
        caption: "Precision cutting of foam cores for aerodynamic components using advanced manufacturing techniques"
      },
      {
        url: "/images/motorsports/after-cut.JPG",
        caption: "Completed foam core components ready for carbon fiber layup and vacuum bagging process"
      },
      {
        url: "/images/motorsports/vacuum sealed airfoil.jpeg",
        caption: "Vacuum bagging process for carbon fiber layup, ensuring proper consolidation and eliminating air bubbles for optimal strength"
      }
    ],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Manufacturing Engineer",
    teammates: ["Team of 15+ students"],
  },
  {
    id: 8,
    slug: "lstm-nvda-prediction",
    title: "MarketSense LSTM: Predicting Nvidia's Stock Moves",
    category: "AI & ML",
    shortDescription: "Multivariate LSTM model combining market data with news sentiment",
    description: [
      "Classical models like ARIMA are powerful, but they struggle to adapt when market behavior changes rapidly, especially when external signals like news sentiment shift investor psychology. The goal: build a deep learning model that could anticipate NVDA’s next-day close more accurately by blending market data with sentiment analysis.",
      "We engineered a multilayer LSTM pipeline to capture temporal patterns in both quantitative and qualitative signals."
    ],
    features: [
      "Collected NVDA OHLCV data and scraped stock news headlines to combine market and sentiment signals.",
      "Engineered features including daily returns, 10-day rolling volatility, VADER sentiment scores, and lagged variables.",
      "Designed 30-day lookback sequences for temporal context in multivariate time-series forecasting.",
      "Built stacked LSTM layers with dropout regularization and a dense regression output layer.",
      "Benchmarked against an ARIMA model trained only on closing price.",
      "Evaluated using MSE, MAE, and predicted vs. actual price trajectory plots."
    ],
    recognition: [

    ],
    technologies: ["TensorFlow", "Python", "NLTK (VADER)"],
    tools: ["Jupyter Notebook", "GitHub", "Git", "OpenAI ChatGPT"],
    tags: ["Time Series Forecasting", "Finance", "Sentiment Analysis", "AI", "Machine Learning"],
    coverImage: "/images/lstm-nvda-cover.png",
    thumbnailImage: "/images/lstm-nvda-thumb.png",
    images: [],
    timeline: "Sep 2024 – Oct 2024",
    duration: "2 months",
    role: "Machine Learning Engineer",
    teammates: ["Amelia Roopnarine"],
  },
  {
    id: 9,
    slug: "digital-movement-exhibit",
    title: "Digital Movement Exhibit",
    category: "Events",
    shortDescription: "Grant-funded interactive module exploring applications in art and K-12 education.",
    description: [
      "Body-tracking technology is often siloed: powerful in research labs, but inaccessible to the broader public and underutilized in creative contexts. We wanted to break those walls down, showing how motion capture can cross disciplines, spark curiosity, and invite hands-on exploration.",
      "With a grant from The Cooper Union, I curated and produced the Digital Movement Exhibit: a week-long public showcase of our lab’s research in body-tracking applications, spanning interactive art, novel technology, and wearable exoskeletons."
    ],
    features: [
      "The show brought together artists and engineers, including my own contributions:",
      "Pandora — a modular, open-source 3D pose estimation hardware platform.",
      "Unity Motion Game: an interactive, markerless motion-capture game where visitors could pick up and move digital objects simply by pinching their fingers, no headset required.",
      "Beyond curation, I handled end-to-end production:",
      "Coordinated with student researchers to set up their projects for live demos.",
      "Designed posters, infographics, and placards for each installation.",
      "Negotiated with vendors for catering and drinks.",
      "Secured a venue, procured AV equipment and led project installations.",
      "Curated takeaway booklets for visitors, giving them a keepsake and deeper insight into the work."
    ],
    recognition: [
      "$10,000 Research Grant Recipient",
      "The exhibit attracted 200+ attendees over its week-long run, from students and faculty to industry guests.",
    ],
    technologies: ["AutoCAD", "Unity Engine", "Python", "Google Mediapipe"],
    tools: ["Laser Cutting", "3D Printing", "MS Excel", "MS Powerpoint", "Adobe Photoshop", "Adobe InDesign", "Git", "GitHub"],
    tags: ["Interactive", "Education", "Art Tech"],
    coverImage: "/images/digital movement/DigMoveInvPoster.jpg",
    thumbnailImage: "/images/digital movement/DigMoveInvPoster.jpg",
    images: [
      {
        url: "/images/digital movement/contributors to the show.jpg",
        caption: "Contributors and collaborators who made the Digital Movement Exhibit possible"
      },
      {
        url: "/images/digital movement/civics-doc-4.jpg",
        caption: "Exoskeleton Evaluations and Markerless Motion Capture"
      },
      {
        url: "/images/digital movement/civics-doc-5.jpg",
        caption: "Setting up interactive art displays from Lucia's Menshell Fellowship exploring movement and dance through the lens of motion capture"
      },
      {
        url: "/images/digital movement/civics-doc-6.jpg",
        caption: "Unity Motion Game setup allowing visitors to interact with digital objects through markerless motion capture"
      },
      {
        url: "/images/digital movement/civics-doc-28.jpg",
        caption: "Pandora hardware module demonstration - low-cost 3D pose estimation platform built on NVIDIA Jetson Nano"
      },
      {
        url: "/images/digital movement/civics-doc-50.jpg",
        caption: "Information booklet for visitors to take home and guest book to leave comments"
      },
      {
        url: "/images/digital movement/civics-doc-68.jpg",
        caption: "E-textiles sensing pressure changes resulting in different voltage outputs"
      },
      {
        url: "/images/digital movement/civics-doc-74.jpg",
        caption: "Menshell Fellowship interactive art installation exploring movement and dance through the lens of motion capture"
      },
      {
        url: "/images/digital movement/civics-doc-126.jpg",
        caption: "Guests interacting with the exhibit"
      },
      {
        url: "/images/digital movement/civics-doc-132.jpg",
        caption: "My friends talking about motion capture :)"
      },
      {
        url: "/images/digital movement/civics-doc-138.jpg",
        caption: "Food (menu picked and organized by yours truly)"
      },
      {
        url: "/images/digital movement/civics-doc-143.jpg",
        caption: "Guest enjoying the playable e-textile"
      },
      {
        url: "/images/digital movement/civics-doc-146.jpg",
        caption: "A still of me mid-explanation, walking someone through my contributions"
      },
      {
        url: "/images/digital movement/civics-doc-150.jpg",
        caption: "Gorgeous still from the Menshell Fellowship"
      },
      {
        url: "/images/digital movement/civics-doc-170.jpg",
        caption: "Amaan being a total pro with the exoskeletons"
      },
      {
        url: "/images/digital movement/civics-doc-178.jpg",
        caption: "Genuine moments of laughter and amazement"
      },
      {
        url: "/images/digital movement/civics-doc-203.jpg",
        caption: "Dr. Shah and Dr. Pandit - exploring the lab's newest exo-suit"
      },
      {
        url: "/images/digital movement/civics-doc-229.jpg",
        caption: "Stills from the Opening Reception"
      },
      {
        url: "/images/digital movement/civics-doc-230.jpg",
        caption: "Stills from the Opening Reception"
      },
      {
        url: "/images/digital movement/civics-doc-235.jpg",
        caption: "Bringing back Marionette, a project by Ricky - a cooper alumn and miliLab researcher"
      },
      {
        url: "/images/digital movement/civics-doc-238.jpg",
        caption: "Art and technology can bring lots of joy through movement "
      }
    ],
    timeline: "Nov 2022 – April 2024",
    duration: "6 months",
    role: "Undergraduate Researcher and Lead Curator",
    teammates: ["Dr. Mili Shah", "Lucia Rhode", "Amaan Rahman", "Nishat Ahmed", "Amanda Blanca", "Nicole Joseph", "Lani Wang", "Esther Wang"],
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

// AI Context Document - Comprehensive Portfolio Information for RAG
// This file consolidates all portfolio data into a single, searchable format

export const AI_CONTEXT = {
  personal: {
    name: "Aaryan Mahipal",
    title: "Mechanical Engineer & Product Leader",
    location: "New York, NY",
    bio: "Aaryan Mahipal is a mechanical engineer working at the intersection of health, education, and product innovation. He has built AI-powered tools, health tech startups, and renewable energy projects. His vision is to solve real-world problems through technology and create inclusive solutions. Based in New York, he believes in constant experimentation and lifelong learning.",
    personalStory: "I grew up in Mumbai,India and moved to the US in pursuit of higher education in 2021. I'm currently based in New York, building and creating to solve real-world problems through technology and human-centered design. I'm a graduate of The Cooper Union, where I studied mechanical engineering.",
    focus: [
      "Building AI-powered solutions for healthcare and education",
      "Leading product development and go-to-market strategies", 
      "Optimizing operations through data-driven insights"
    ],
    languages: [
      { name: "English", proficiency: "Native", level: 100 },
      { name: "Spanish", proficiency: "Fluent", level: 80 },
      { name: "French", proficiency: "Intermediate", level: 60 },
      { name: "German", proficiency: "Basic", level: 30 }
    ],
    interests: ["AI & Machine Learning", "Healthcare Innovation", "Data Analysis", "Product Strategy", "Operations"],
    beyondWork: [
      "Avid reader - particularly enjoys poetry and literature",
      "Nature walks and outdoor activities",
      "Foodie who loves exploring different cuisines",
      "Traveler who values cultural experiences"
    ]
  },

  education: {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    institution: "The Cooper Union for the Advancement of Science and Art",
    year: "2020-2024",
    location: "New York, NY"
  },

  experience: [
    {
      title: "GTM & Product Lead (Founding Team)",
      company: "Ovelia Health",
      period: "Aug 2024 - Present",
      location: "New York, NY",
      description: "Leading go-to-market strategy and product development for a health tech startup focused on PCOS care. Driving user research, market validation, and product positioning to build solutions that address unmet needs in women's health.",
      achievements: [
        "Drove cold outreach to 200+ stakeholders/week to validate unmet needs across the PCOS journey, resulting in a redesigned provider referral model and 3 prioritized MVP features",
        "Defined 4 user market segments by analyzing qualitative data using manual tagging and AI-powered sentiment analysis; insights shaped 70% of MVP scope",
        "Spearheaded multi-channel GTM campaigns that drove a 60% MoM increase in waitlist signups and conversion of 30+ users into two closed beta testing cohorts",
        "Led Ovelia's messaging and positioning by benchmarking 12+ competitors and embedding real user stories into marketing content"
      ],
      technologies: ["Market Research", "User Interviews", "GTM Strategy", "Product Management", "Data Analysis", "UX Research", "A/B Testing", "Cold Outreach"]
    },
    {
      title: "Investments Intern, Equity Capital Markets",
      company: "The Landmark Group, Family Office",
      period: "May 2024 - Aug 2024",
      location: "Mumbai, India",
      description: "Analyzed financial markets and developed investment strategies for large-cap US equities in automotive and energy sectors. Created comprehensive valuation models and investment theses to inform portfolio decisions.",
      achievements: [
        "Analyzed quarterly earnings and financial statements for large-cap US equities in automotive and energy sectors",
        "Developed DCF and comps-based valuation models to inform buy/sell recommendations aligned with firm's risk appetite",
        "Synthesized investment theses on two large-cap equities, presenting comprehensive risk matrix and macro-driven insights to senior partners"
      ],
      technologies: ["Financial Modeling", "DCF Analysis", "Market Research", "Risk Analysis", "Relative Valuation", "Equity Research", "Fundamental Analysis"]
    },
    {
      title: "Operations Associate",
      company: "The Cooper Union, Makerspace Lab",
      period: "Jan 2023 - Jul 2024",
      location: "New York, NY",
      description: "Managed fabrication lab operations and redesigned workflows to improve efficiency and reduce waste. Built analytics dashboards to track KPIs and drive strategic decision-making.",
      achievements: [
        "Redesigned fabrication workflows across 5 departments, cutting queue time by 79% and material waste by 47%",
        "Built live Excel dashboard tracking 15+ KPIs; insights drove strategic budget reallocations and staffing plans",
        "Increased lab engagement by 45% and reduced operational bottlenecks through process optimization"
      ],
      technologies: ["Operations", "Web Design", "Data Analysis", "3D Printing", "CNC", "Laser Cutting", "CAD", "Project Management"]
    },
    {
      title: "Operations Analyst Intern, CTO Intern Group",
      company: "Innova Solutions Inc.",
      period: "Jun 2023 - Aug 2023",
      location: "New York, NY",
      description: "Developed AI-powered solutions to automate HR processes and improve operational efficiency. Built and trained NLP chatbots to handle employee onboarding and compliance.",
      achievements: [
        "Built HRFlow - an NLP-based chatbot powered by Python (ChatterBot), reducing onboarding time by 45% per employee",
        "Led chatbot's training on internal SOPs and FAQs to automate compliance at scale",
        "Cut HR ticket volume by 42% by designing modular, region-specific onboarding workflows across APAC, EU, and LATAM"
      ],
      technologies: ["Python", "NLP", "AI Automation", "Data Analysis", "UX Research"]
    }
  ],

  projects: [
    {
      title: "Residential Energy Retrofits for NYC",
      category: ["Energy & Sustainability", "Mechanical Engineering"],
      description: "A portfolio of rooftop solar + battery retrofit solutions for multi-family buildings in NYC's Lower East Side. NYC's Climate Mobilization Act and Local Law 97 are forcing thousands of large buildings to slash emissions or face heavy fines - up to $268 per excess metric ton of CO₂e. Partnering with Loisaida, Inc., we conducted a solar feasibility study across 32 parcels, narrowing down to 9 high-potential rooftops and carports.",
      features: [
        "85 kW DC across four flagship sites, generating ~120 MWh/year - offsetting up to 66.8% of these buildings' annual electricity consumption",
        "Maximized panel count with raised canopy designs to sidestep setback limitations",
        "Integrated battery storage only where financially viable (e.g., a 10 kWh system at 308 E 8th St. boosted NPV)",
        "Planned interconnection points to match Con Edison's hosting capacity maps, avoiding costly grid upgrades",
        "Proposed a customer-owned model delivering a 9% IRR and ~$751K in lifetime savings, with a 9-year payback period"
      ],
      recognition: [
        "U.S. Department of Energy's Solar District Cup Finalist",
        "Honorable Mention at the 2024 U.S. DOE Solar District Cup Finals"
      ],
      technologies: ["Python", "Helioscope", "PVsyst", "System Advisor Model"],
      tools: ["MS Excel", "MS Powerpoint", "ArcGIS", "LaTeX"],
      timeline: "Aug 2024 – May 2025",
      duration: "10 months",
      role: "Team Lead & Mechanical Engineer",
      teammates: ["Gautaman Asirwatham", "Akil Foster", "Logan Pogreba"]
    },
    {
      title: "CUCU: Your Mental Health Companion",
      category: ["Health & Wellness", "AI & ML"],
      description: "An AI-powered mental health app for NYC high school students to foster emotional resilience and access personalized support. NYC's public schools are in the middle of a teen mental health emergency. Between 2011 and 2021, the percentage of high school students reporting feeling sad or hopeless jumped from 27% to 38%. Yet, 423 public schools have no social worker, and over 80% fall short of the recommended 1:250 social worker–student ratio.",
      features: [
        "Virtual Companion: CUCU chats with students daily, adapting tone and suggesting activities based on mood",
        "Mood Classification: An NLP-powered algorithm analyzes journal entries to detect emotions, visualizes mood trends, and recommends mental health activities",
        "Gamified Resilience: Achievements, CuCoins, and mini-games like meditation, coloring, and NYC outdoor challenges encourage ongoing engagement",
        "Private Reflection: Journals remain confidential to students, while anonymized mood trends help counselors spot class-level concerns",
        "Admin Dashboard: Social workers and wellness staff can see aggregated, privacy-safe data to identify high-need classes and send announcements"
      ],
      recognition: [
        "2nd Place at Pfizer Digital Hackathon 2024, outperforming teams from top universities including Yale, Cornell, and Princeton",
        "Recognition from Chief Digital and Technology Officer, Pfizer for presenting our solution with empathy, demonstrating a heart-felt desire to offer tools to build emotional resilience for students!"
      ],
      technologies: ["Python", "React", "Flask", "SQLite", "SQLAlchemy", "HTML", "CSS", "JavaScript", "Natural Language Processing"],
      tools: ["GitHub", "Figma", "MS Excel", "MS Powerpoint", "Notion"],
      timeline: "Sep 2024 – Oct 2024",
      duration: "10 days",
      role: "Product Manager & Team Lead",
      teammates: ["Lizelle Ocfemia", "Lamiah Khan", "Lei (Raymond) Chi", "Jaehyeon Park"]
    },
    {
      title: "Choice: OTC Drugs Reimagined",
      category: "Health & Wellness",
      description: "Sustainable packaging to improve UX and clarity of sensitive drug information. Managing a medicine cabinet shouldn't feel like a scavenger hunt. For people like Sarah, a health-conscious, busy single mother, expired bottles, unclear labels, and cluttered storage create stress at the very moment she needs clarity. This isn't just inconvenient; it can be unsafe, leading to accidental misuse or delayed care.",
      features: [
        "Refillable frosted glass containers to reduce plastic waste",
        "Child-safe, airtight caps for safety and freshness",
        "Clear, prioritized symptom labeling for fast recognition",
        "Readable dosage details designed with accessibility in mind",
        "Travel, Personal, and Family pack sizes to fit different lifestyles",
        "Biodegradable refill pouches to minimize environmental impact"
      ],
      technologies: ["Blender", "AutoCAD", "Adobe Photoshop"],
      tools: ["Adobe Creative Suite", "3D Printing", "Resin Printing"],
      timeline: "Aug 2023 – Dec 2023",
      duration: "5 months",
      role: "Product Designer"
    },
    {
      title: "AeroRig: An Experiment to Measure Lift & Drag in an Airfoil",
      category: "Mechanical Engineering",
      description: "A custom-built aerodynamic testing rig for the modern fluid dynamics classroom. Our Mechanical Engineering faculty wanted to make aerodynamic principles tangible for students, but the existing wind tunnel setup was limited. It lacked a precise way to measure pressure distributions and securely mount experimental airfoils. Purchasing a turnkey commercial rig was costly and inflexible.",
      features: [
        "Six-manometer pressure tap array routed to multiple points along the airfoil for real-time lift and drag calculations",
        "Custom clamping mechanism that safely secures airfoils in the wind tunnel test section while allowing quick changes between models and angle of attack",
        "Streamlined tubing and sensor layout for minimal flow disturbance and accurate readings",
        "Robust, classroom-ready construction to withstand repeated student use without recalibration after each lab session"
      ],
      technologies: ["SolidWorks", "AutoCAD", "OnShape", "Python", "Fluid Dynamics"],
      tools: ["MS Excel", "MS Powerpoint", "LaTeX", "3D Printing", "Laser Cutting"],
      timeline: "Sep 2024 – Oct 2024",
      duration: "2 months",
      role: "Mechanical Engineer",
      teammates: ["Taaseen Jahan", "Shreyas Krishnan"]
    },
    {
      title: "Pandora: A low-cost Hardware Module for Motion Capture",
      category: ["Embedded Systems", "AI & ML"],
      description: "A low-cost, open-source, and modular hardware device for 3D Pose Estimation. Real-time 3D pose estimation is an increasingly important capability for applications in AR/VR, robotics, sports analytics, and accessibility tools. However, high-quality 3D pose estimation has been locked behind expensive, immobile, and technically complex systems.",
      features: [
        "Pandora is a low-cost, open-source hardware module built on the NVIDIA Jetson Nano, running Google's MediaPipe for real-time 3D pose estimation",
        "Passive thermal management enclosure designed in SolidWorks",
        "Real-time skeletal tracking streamed directly from the Jetson module, with support for USB or network-connected displays",
        "Step-by-step quickstart documentation and troubleshooting guides, with dependency management using pyenv"
      ],
      recognition: [
        "Audience Choice Award at the 2022 Cooper Union Undergraduate Research Symposium"
      ],
      technologies: ["Nvidia Jetson Nano", "GoogleMediaPipe", "Python", "SolidWorks"],
      tools: ["3D Printing", "LaTeX", "Git", "GitHub"],
      timeline: "Jan 2022 – May 2022",
      duration: "5 months",
      role: "Team Lead and Product Engineer",
      teammates: ["Amaan Rahman", "Dr. Mili Shah"]
    },
    {
      title: "Carbon (Seat)-questration",
      category: "Mechanical Engineering",
      description: "Fastener-free lounge rocking chair optimized for low embodied carbon. Furniture is often overlooked in climate impact conversations, yet it's a silent contributor to embodied carbon. Most lounge chairs rely on carbon-intensive materials, fasteners, and manufacturing methods that make disassembly and recycling almost impossible.",
      features: [
        "Fastener-Free Joinery: Precision-cut components lock together without screws or adhesives, enabling full disassembly for recycling",
        "Carbon Analysis Integration: Every material decision validated through ANSYS Granta MI to quantify impact before fabrication",
        "Sustainable Material Selection: Sourced wood species with high carbon sequestration potential and long-term durability",
        "Optimized CNC Fabrication: Sub-1-hour machining time with waste reduced to lightweight wood shavings",
        "Lifecycle Design: Considered repairability, reuse, and end-of-life pathways from the outset",
        "Ergonomic Rocking Geometry: Designed for comfort without adding unnecessary structural weight"
      ],
      recognition: [
        "Recognized by distinguished faculty across architecture and engineering departments for its playful approach and attention to detail"
      ],
      technologies: ["Rhino 3D", "ANSYS Granta MI"],
      tools: ["CNC Milling", "MS Excel", "MS Powerpoint"],
      timeline: "Jan 2025 – Mar 2025",
      duration: "3 months",
      role: "Mechanical Engineer",
      teammates: ["Leah Alfred", "Gautaman Asirwatham"]
    },
    {
      title: "Cooper Union Motorsports: Composites Manufacturing",
      category: "Mechanical Engineering",
      description: "Manufacturing airfoils and composite structures via layups, CNC, and wire cutting. As part of the Cooper Union Motorsports Team, I focused on composites manufacturing for the car's aerodynamic elements and structural components. This involved taking CAD designs from the aero team and translating them into finished carbon fiber parts, ready for competition.",
      features: [
        "CNC Airfoil Plates: Milled precision-cut templates used for layups to maintain accurate foil profiles",
        "Custom Wire Cutter Operation: Fabricated foam cores for aero elements using a team-designed hot-wire cutting rig",
        "Composite Layups: Hand-laid carbon fiber and fiberglass with vacuum bagging for optimal fiber-to-resin ratios",
        "Mold Preparation: Surface finishing and release coating to ensure part integrity and minimal post-processing"
      ],
      recognition: [
        "Formula SAE Competition Participant",
        "Cooper Union Motorsports Team: Recognized as a top performer of the month in April 2022"
      ],
      technologies: ["SolidWorks", "CNC Milling", "Carbon Fiber Layup"],
      tools: ["Laser Cutting"],
      timeline: "Jan 2022 – May 2022",
      duration: "5 months",
      role: "Manufacturing Engineer",
      teammates: ["Team of 15+ students"]
    },
    {
      title: "MarketSense LSTM: Predicting Nvidia's Stock Moves",
      category: "AI & ML",
      description: "Multivariate LSTM model combining market data with news sentiment. Classical models like ARIMA are powerful, but they struggle to adapt when market behavior changes rapidly, especially when external signals like news sentiment shift investor psychology. The goal: build a deep learning model that could anticipate NVDA's next-day close more accurately by blending market data with sentiment analysis.",
      features: [
        "Collected NVDA OHLCV data and scraped stock news headlines to combine market and sentiment signals",
        "Engineered features including daily returns, 10-day rolling volatility, VADER sentiment scores, and lagged variables",
        "Designed 30-day lookback sequences for temporal context in multivariate time-series forecasting",
        "Built stacked LSTM layers with dropout regularization and a dense regression output layer",
        "Benchmarked against an ARIMA model trained only on closing price",
        "Evaluated using MSE, MAE, and predicted vs. actual price trajectory plots"
      ],
      technologies: ["TensorFlow", "Python", "NLTK (VADER)"],
      tools: ["Jupyter Notebook", "GitHub", "Git", "OpenAI ChatGPT"],
      timeline: "Nov 2024 – Dec 2024",
      duration: "2 months",
      role: "Machine Learning Engineer",
      teammates: ["Amelia Roopnarine"]
    },
    {
      title: "Digital Movement Exhibit",
      category: ["Events", "AI & ML"],
      description: "Grant-funded interactive module exploring applications in art and K-12 education. Body-tracking technology is often siloed: powerful in research labs, but inaccessible to the broader public and underutilized in creative contexts. We wanted to break those walls down, showing how motion capture can cross disciplines, spark curiosity, and invite hands-on exploration.",
      features: [
        "The show brought together artists and engineers, including my own contributions:",
        "Pandora — a modular, open-source 3D pose estimation hardware platform",
        "Unity Motion Game: an interactive, markerless motion-capture game where visitors could pick up and move digital objects simply by pinching their fingers, no headset required",
        "Beyond curation, I handled end-to-end production:",
        "Coordinated with student researchers to set up their projects for live demos",
        "Designed posters, infographics, and placards for each installation",
        "Negotiated with vendors for catering and drinks",
        "Secured a venue, procured AV equipment and led project installations",
        "Curated takeaway booklets for visitors, giving them a keepsake and deeper insight into the work"
      ],
      recognition: [
        "$10,000 Research Grant Recipient",
        "The exhibit attracted 200+ attendees over its week-long run, from students and faculty to industry guests"
      ],
      technologies: ["AutoCAD", "Unity Engine", "Python", "Google Mediapipe"],
      tools: ["Laser Cutting", "3D Printing", "MS Excel", "MS Powerpoint", "Adobe Photoshop", "Adobe InDesign", "Git", "GitHub"],
      timeline: "Nov 2022 – April 2024",
      duration: "6 months",
      role: "Undergraduate Researcher and Lead Curator",
      teammates: ["Dr. Mili Shah", "Lucia Rhode", "Amaan Rahman", "Nishat Ahmed", "Amanda Blanca", "Nicole Joseph", "Lani Wang", "Esther Wang"]
    }
  ],

  skills: {
    categories: ["All Skills", "Core Languages", "Frameworks & Libraries", "Data, ML & AI", "Design & Engineering", "Tooling & Ops"],
    coreLanguages: ["TypeScript", "JavaScript", "HTML", "CSS", "Python", "C++", "C#"],
    frameworks: ["React", "Next.js", "TailwindCSS", "NumPy", "Pandas", "Matplotlib", "Plotly", "GeoPandas", "Scikit-learn", "NLTK"],
    aiMl: ["TensorFlow", "VBA Excel", "Cursor", "Claude", "v0"],
    designEngineering: ["Figma", "AutoCAD", "OnShape", "Blender", "3D Printing", "Laser Cutting", "CNC", "Helioscope", "ANSYS Granta MI"],
    toolingOps: ["Git", "VS Code", "Notion", "Slack", "Jira", "GitHub", "Vercel", "Canva"],
    product: ["Product Management", "GTM Strategy", "Market Research", "User Interviews", "Data Analysis", "Competitive Analysis"],
    technical: ["Python", "NLP", "ChatterBot", "Excel", "Financial Modeling", "DCF Analysis", "Process Design"],
    operations: ["Operations Management", "Workflow Optimization", "KPI Tracking", "Budget Management", "Staffing Planning", "Process Automation"],
    softSkills: ["Leadership", "Strategic Thinking", "Problem Solving", "Cross-functional Collaboration", "Presentations"]
  },

  social: [
    { platform: "GitHub", url: "https://github.com/aaryanmahipalcu", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/aaryan-mahipal/", icon: "Linkedin" },
    { platform: "Twitter", url: "https://x.com/aaryanmahipal", icon: "Twitter" },
    { platform: "Instagram", url: "https://www.instagram.com/itsaaryanmahipal/", icon: "Instagram" },
    { platform: "Substack", url: "https://substack.com/@aaryanmahipal0?utm_source=user-menu", icon: "Substack" }
  ],

  writing: {
    platform: "Substack",
    focus: "thoughts, insights, and stories",
    url: "https://substack.com/@aaryanmahipal0",
    posts: [
      {
        title: "लेकिन (\"but\")",
        excerpt: "on rewatching a film, letting go, and writing myself back into existence",
        content: "Every three years, I rewatch Yeh Jawaani Hai Deewani. It is not intentional, it just happens, like the flu or a personal reckoning. Every time, I find myself crying at a different scene. That's how I know I have changed. This time it was the sunset scene. When Bunny tells Naina, 'Kahi pahuchne ke liye kahi se nikalna bahut zaroori hai.' To get somewhere you have to leave something behind. But then he pauses. And the lekin hangs there. God, I've been living in that lekin for months. The first time I watched this movie (at least when I could make some sense of it), I was fifteen, dreaming of running away from everything familiar to me. It was the year I moved away from my parents, friends, and beloved Bombay to go to an all-boys boarding school XYZ miles from home. The second time, I was a college sophomore in NYC, deep into the chaos of building a new life. This time, I'm a new grad who hasn't figured out what comes next - and I think I'm starting to realize I never will, at least not fully. That's why I watch this film over and over again. It reminds me that I'm not lost, just in the midst of a transition. Rewatching it has become my self-love ritual. I don't care for face masks (maybe i do, you'll never know) or post-it affirmations (i just stick passive-aggressive sticky notes to myself on my bookshelf). But every time I watch the film, I remind myself that I don't have to be running to be moving. Somewhere in the background, 'The Archer' plays (don't come @ me, it just gets me every time). The quiet of new grad life screams, drunk on expectations. I wake up with time on my hands and too-familiar noise in my head, like a gaggle of uncles arguing about what I should be doing by now. 'You moved to America to chase big dreams. You should be networking more. You're wasting time.' And then, I hear my friend whisper from the back, 'You're not the kid who wrote poems anymore.' Some of these voices are mine, truly mine, while others belong to people I've tried to impress. Either way, they're loud, entitled, and exhausting - like they all think they're the funniest person alive. (They're not. That would be me.) So I do what any normal person does: put on 'I'm the Funniest Person Alive' by Sofia Mills and pretend I'm not the problem but the main character. What I'm trying to let go of is not a person or place. It's a version of myself that is always on. Always chasing. Always over-explaining why I'm not where I should be. The hardest part about letting go is holding so tightly to the last four years that I lose the chance to become something else. Slowly so, I am learning how to say no to things even though part of me wants to go. Phoebe said that, 'I'm a bad liar, with a savior complex.' Like yes, I do want to fix everything. But what does writing have to do with any of this? Writing has always been the way I leave breadcrumbs for myself. When I was lonely, I wrote stories. When I was angry, I wrote poems. And when I was in love (or thought I was in love), I wrote about skin and scent and silence. And now, when I don't know who I'm becoming, I write this. Words don't always bring me answers, but they give me back my voice. They help me remember that I don't need to be understood right now. I just need to stay curious. So here's what I've been feeding my curiosity with lately: Reading: 'One Art' by Elizabeth Bishop (this is a poem about losing things - keys, cities, people, versions of yourself - and pretending it's 'no disaster.' Of course, it's a disaster but Bishop is too polite to scream and whine about it, so she writes about loss with elegance. we are both having a girl-are-u-okay moment), 'Lord of the Flies' by William Golding (relatable. If my internal voices were left unsupervised for too long, this would be their group project. I am Ralph, Piggy, and the conch shell all at once), 'Poems From An Email Exchange' by Hanif Abdurraqib (10/10 emotional chaos. I giggled, gasped, and cried. Imagine writing a poem about love and getting rejected because the editor prefers cats). The image? Yeah, that's a fortune cookie with no fortune inside. When I saw this image on Reddit, I thought, wow, even the universe is ghosting people. Taking this as a sign to write my own fortune now. (Still accepting snacks and signs from the universe though.)",
        publishedDate: "2025-08-07",
        readTime: "6 min read",
        themes: ["Personal growth", "Transition periods", "Self-reflection", "Writing as therapy", "Cultural identity", "Film analysis", "Poetry", "Literature"]
      }
    ]
  }
}

// Export as a searchable string for the AI
export const AI_CONTEXT_STRING = JSON.stringify(AI_CONTEXT, null, 2) 
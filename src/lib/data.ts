// ===================================================
// Site-wide Static Data — DIMHANS
// ===================================================

export const SITE = {
  name: "DIMHANS",
  fullName: "Dharwad Institute of Mental Health and Neurosciences",
  tagline: "Advancing Mental Health, Neuroscience & Deep-Tech Innovation",
  email: "info@dimhans.gov.in",
  phone: "+91-836-2460000",
  address: "Near KSRTC Bus Stand, Dharwad, Karnataka – 580008, India",
  hours: "Mon – Fri: 9:00 AM – 5:30 PM IST",
  established: "1956",
  type: "Government Research Institute & Technology Business Incubator",
  socials: {
    twitter: "https://twitter.com/dimhans",
    linkedin: "https://linkedin.com/company/dimhans",
    youtube: "https://youtube.com/@dimhans",
    facebook: "https://facebook.com/dimhans",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Research", href: "#research" },
  { label: "Incubator", href: "#incubator" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Team", href: "#team" },
  { label: "Startups", href: "#startups" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 140, suffix: "+", label: "Research Projects", description: "Active & completed funded projects" },
  { value: 48, suffix: "+", label: "Startups Incubated", description: "Since incubator inception in 2018" },
  { value: 75, suffix: "+", label: "Scientists & Mentors", description: "Experts across disciplines" },
  { value: 320, suffix: "+", label: "Publications", description: "Peer-reviewed journal papers" },
];

export const TIMELINE = [
  { year: "1956", title: "Institute Founded", description: "Established by Government of Karnataka as a premier mental health institution." },
  { year: "1985", title: "Research Wing Launched", description: "Dedicated neurosciences and clinical research division inaugurated." },
  { year: "2005", title: "Deemed University Status", description: "Recognized as Deemed University under UGC, enabling advanced academic programs." },
  { year: "2018", title: "Technology Incubator Launched", description: "Technology Business Incubator established under BIRAC & DST funding." },
  { year: "2021", title: "AI & Digital Health Hub", description: "National Centre for AI in Mental Health established with MEITY support." },
  { year: "2024", title: "Deep-Tech Scale-Up Program", description: "Launched flagship deep-tech accelerator for Series A–ready startups." },
];

export const SERVICES = [
  {
    id: "clinical",
    icon: "Stethoscope",
    title: "Clinical Services",
    description: "Comprehensive inpatient and outpatient psychiatric care, emergency mental health services, and specialized treatment units with 400+ beds.",
    tags: ["Psychiatry", "Neurology", "Emergency Care"],
  },
  {
    id: "counseling",
    icon: "HeartHandshake",
    title: "Counseling & Psychology",
    description: "Evidence-based psychological interventions including CBT, DBT, EMDR, and family therapy delivered by licensed clinical psychologists.",
    tags: ["CBT", "DBT", "Family Therapy"],
  },
  {
    id: "diagnostics",
    icon: "ScanLine",
    title: "Advanced Diagnostics",
    description: "State-of-the-art neuroimaging (3T MRI, fMRI, PET-CT), electrophysiology labs, and genetic testing for precision psychiatry.",
    tags: ["fMRI", "PET-CT", "Genomics"],
  },
  {
    id: "research-support",
    icon: "FlaskConical",
    title: "Research Support",
    description: "End-to-end research facilitation including ethics committee clearances, biostatistics consulting, grant writing support, and publication assistance.",
    tags: ["Ethics", "Grants", "Biostatistics"],
  },
  {
    id: "innovation",
    icon: "Lightbulb",
    title: "Innovation Programs",
    description: "Structured innovation challenges, hackathons, and proof-of-concept grants bridging clinical practice with emerging technology solutions.",
    tags: ["Hackathons", "PoC Grants", "Challenges"],
  },
  {
    id: "digital-health",
    icon: "MonitorSmartphone",
    title: "Digital Healthcare",
    description: "Telepsychiatry platform, AI-assisted diagnostic tools, digital therapeutics, and remote patient monitoring systems across Karnataka.",
    tags: ["Telemedicine", "AI Tools", "mHealth"],
  },
];

export const RESEARCH_AREAS = [
  {
    id: "neuroscience",
    icon: "Brain",
    color: "#0B5ED7",
    title: "Neuroscience",
    description: "Cutting-edge research in neurobiological mechanisms of psychiatric disorders, neural circuit mapping, and brain-behavior relationships.",
    papers: 84,
  },
  {
    id: "ai",
    icon: "Cpu",
    color: "#114B8B",
    title: "Artificial Intelligence",
    description: "Development of AI models for psychiatric diagnosis, symptom prediction, clinical decision support, and treatment response forecasting.",
    papers: 42,
  },
  {
    id: "ml",
    icon: "Network",
    color: "#00A3E0",
    title: "Machine Learning",
    description: "Applied ML for EEG biomarker discovery, natural language processing of clinical notes, and federated learning across health systems.",
    papers: 38,
  },
  {
    id: "diagnostics",
    icon: "Activity",
    color: "#0B5ED7",
    title: "Digital Diagnostics",
    description: "Building clinically validated, AI-powered diagnostic platforms for early detection of schizophrenia, depression, and bipolar disorders.",
    papers: 31,
  },
  {
    id: "pharmacogenomics",
    icon: "Dna",
    color: "#114B8B",
    title: "Pharmacogenomics",
    description: "Investigating genetic determinants of psychotropic drug response to enable personalized medication selection and dosing in psychiatry.",
    papers: 29,
  },
  {
    id: "forensic",
    icon: "Scale",
    color: "#00A3E0",
    title: "Forensic Sciences",
    description: "Forensic psychiatry research including mental illness and criminal responsibility, fitness to plead assessments, and victimology studies.",
    papers: 22,
  },
  {
    id: "sensogenomics",
    icon: "Waves",
    color: "#0B5ED7",
    title: "Sensogenomics",
    description: "Novel field integrating sensory biology and genomics to understand how sensory processing differences relate to psychiatric conditions.",
    papers: 18,
  },
  {
    id: "mental-health",
    icon: "Smile",
    color: "#114B8B",
    title: "Mental Health Research",
    description: "Epidemiology, public health interventions, stigma reduction, and community mental health program evaluation across rural India.",
    papers: 56,
  },
];

export const INCUBATION_BENEFITS = [
  { icon: "Rocket", title: "Startup Incubation", description: "12-24 month structured incubation with dedicated mentors, office space, and go-to-market support for healthcare and deep-tech ventures." },
  { icon: "Banknote", title: "Funding Access", description: "Direct facilitation of BIRAC, DST, MEITY grants, and angel funding up to ₹2 Crore through our curated investor network." },
  { icon: "ScrollText", title: "Government Grants", description: "Expert guidance navigating SBIRI, BIPP, NIDHI-PRAYAS, and state government seed-funding schemes for early-stage startups." },
  { icon: "Users", title: "Expert Mentorship", description: "Access to 60+ mentors including clinicians, technologists, regulatory experts, and successful healthcare entrepreneurs." },
  { icon: "TrendingUp", title: "Investor Connect", description: "Quarterly demo days, curated investor introductions, and warm connections to HealthTech VCs across India and globally." },
  { icon: "Shield", title: "IP Support", description: "In-house legal team providing IP audit, provisional and complete patent filing, trademark registration, and technology licensing assistance." },
  { icon: "FileText", title: "Patent Assistance", description: "End-to-end patent drafting, prosecution, and commercialization support via partnership with leading IP law firms." },
  { icon: "BarChart3", title: "Business Development", description: "Market research, business model validation, pitch deck coaching, and warm introductions to hospitals and healthcare buyers." },
];

export const INCUBATION_STAGES = [
  { step: 1, title: "Apply", description: "Submit application with executive summary, technology brief, and team profile through our online portal." },
  { step: 2, title: "Review", description: "Expert evaluation committee assesses technical feasibility, market potential, and team competence within 30 days." },
  { step: 3, title: "Selection", description: "Shortlisted teams present to the incubation board and undergo 2-day due diligence before selection announcement." },
  { step: 4, title: "Mentoring", description: "Weekly structured mentoring sessions, milestone planning, and access to clinical infrastructure for validation." },
  { step: 5, title: "Funding", description: "Performance-based funding tranches, grant facilitation, and investor introductions based on milestone achievement." },
  { step: 6, title: "Graduation", description: "Successful ventures graduate with alumni network access, co-investor referrals, and ongoing post-incubation support." },
];

export const INFRASTRUCTURE_ITEMS = [
  {
    id: "research-labs",
    title: "Research Laboratories",
    description: "8 specialized labs including neuroimaging suite (3T MRI, fMRI), molecular biology, pharmacology, and electrophysiology.",
    capacity: "180 researchers",
    area: "12,000 sq ft",
  },
  {
    id: "conference",
    title: "Conference & Seminar Rooms",
    description: "5 fully equipped conference rooms (20–200 capacity) with AV systems, simultaneous translation, and hybrid meeting capabilities.",
    capacity: "Up to 200 seats",
    area: "6,000 sq ft",
  },
  {
    id: "coworking",
    title: "Coworking Space",
    description: "Open-plan innovation hub with 120 hot-desks, breakout zones, phone booths, and 24/7 high-speed fiber access.",
    capacity: "120 desks",
    area: "8,500 sq ft",
  },
  {
    id: "equipment",
    title: "Shared Equipment Center",
    description: "Core facility with shared access to high-performance computing, sequencing, confocal microscopy, and mass spectrometry.",
    capacity: "48 instruments",
    area: "4,200 sq ft",
  },
  {
    id: "meeting",
    title: "Meeting Rooms",
    description: "12 private meeting rooms (4–12 seater) equipped with whiteboards, video conferencing, and digital collaboration tools.",
    capacity: "4–12 per room",
    area: "2,800 sq ft",
  },
  {
    id: "vc-studio",
    title: "Video Conferencing Studio",
    description: "Professional broadcast-quality VC studio for webinars, telemedicine consultations, investor presentations, and global collaborations.",
    capacity: "30 seats",
    area: "1,400 sq ft",
  },
];

export const TEAM_MEMBERS = [
  { id: 1, name: "Prof. Dr. Ajay Kumar", role: "Director & CEO", department: "Executive Leadership", expertise: "Neuropsychiatry, Clinical Governance", category: "leadership" },
  { id: 2, name: "Dr. Priya Nair", role: "Deputy Director – Research", department: "Executive Leadership", expertise: "Translational Neuroscience, Genomics", category: "leadership" },
  { id: 3, name: "Dr. Suresh Patil", role: "Head – Technology Incubator", department: "Executive Leadership", expertise: "Startup Ecosystem, Deep Tech", category: "leadership" },
  { id: 4, name: "Prof. Anand Rao", role: "Scientific Advisor", department: "Scientific Advisory Board", expertise: "Computational Neuroscience, AI", category: "advisor" },
  { id: 5, name: "Dr. Meena Krishnan", role: "Scientific Advisor", department: "Scientific Advisory Board", expertise: "Pharmacogenomics, Precision Medicine", category: "advisor" },
  { id: 6, name: "Dr. Rohan Shah", role: "Lead Researcher – AI/ML", department: "Research Division", expertise: "Deep Learning, EEG Analysis", category: "researcher" },
  { id: 7, name: "Dr. Kavya Hegde", role: "Lead Researcher – Genomics", department: "Research Division", expertise: "Functional Genomics, GWAS", category: "researcher" },
  { id: 8, name: "Mr. Vikram Joshi", role: "Industry Mentor", department: "Incubation Mentors", expertise: "HealthTech Entrepreneurship, VC", category: "mentor" },
  { id: 9, name: "Dr. Nalini Iyer", role: "Regulatory Affairs Mentor", department: "Incubation Mentors", expertise: "CDSCO, FDA, CE Mark, MDR", category: "mentor" },
];

export const STARTUPS = [
  { id: 1, name: "NeuroSync AI", founder: "Dr. Rahul Mehta", industry: "AI Diagnostics", status: "Active", raised: "₹1.8 Cr", stage: "Seed", description: "AI-powered EEG analysis platform for early schizophrenia detection in primary care settings.", founded: "2022" },
  { id: 2, name: "MindBridge Health", founder: "Ms. Priya Sharma", industry: "Digital Therapeutics", status: "Active", raised: "₹2.4 Cr", stage: "Pre-Series A", description: "Culturally adapted digital CBT platform for depression and anxiety in Tier-2 and Tier-3 cities.", founded: "2021" },
  { id: 3, name: "PharmaGeno Labs", founder: "Dr. Anil Verma", industry: "Pharmacogenomics", status: "Graduated", raised: "₹4.1 Cr", stage: "Series A", description: "Point-of-care pharmacogenomic testing kit for optimizing antidepressant selection.", founded: "2020" },
  { id: 4, name: "CortexVision", founder: "Mr. Kiran Nair", industry: "Medical Imaging", status: "Active", raised: "₹95 L", stage: "Pre-Seed", description: "Affordable MRI preprocessing and AI-assisted report generation for district hospitals.", founded: "2023" },
  { id: 5, name: "SensoryPath", founder: "Dr. Leela Rao", industry: "Assistive Technology", status: "Active", raised: "₹1.2 Cr", stage: "Seed", description: "Sensory integration therapy tools for children with autism spectrum disorder.", founded: "2022" },
  { id: 6, name: "ForensicMind", founder: "Mr. Deepak Kumar", industry: "Forensic Psychiatry", status: "Graduated", raised: "₹3.2 Cr", stage: "Series A", description: "Digital platform for standardized forensic psychiatric evaluation and court-ready documentation.", founded: "2019" },
];

export const SUCCESS_STORIES = [
  {
    id: 1,
    name: "Dr. Rahul Mehta",
    role: "Founder, NeuroSync AI",
    quote: "DIMHANS incubator gave us access to real patient data under strict ethical frameworks, allowing us to validate our AI models in ways no private incubator could provide. The clinical credibility transformed our investor conversations.",
    outcome: "Raised ₹1.8 Cr; now deployed in 12 district hospitals across Karnataka",
    category: "Startup Success",
  },
  {
    id: 2,
    name: "Prof. S. Kiran",
    role: "WHO Collaborator, NIMHANS",
    quote: "Our collaborative research on adolescent mental health with DIMHANS has resulted in policy changes at the state level. The quality of clinical data and the research rigor here is comparable to international standards.",
    outcome: "WHO-funded study; results adopted in Karnataka State Mental Health Policy 2023",
    category: "Research Impact",
  },
  {
    id: 3,
    name: "Ms. Priya Sharma",
    role: "Founder, MindBridge Health",
    quote: "The mentors here are not just advisors — they are domain experts who challenged every assumption we made. The regulatory guidance alone saved us 18 months and significant capital. DIMHANS is a unique ecosystem.",
    outcome: "Serving 45,000+ users; partnership signed with 3 state government programs",
    category: "Startup Success",
  },
];

export const EVENTS = [
  { id: 1, date: "2026-07-15", type: "Conference", title: "International Conference on Neuroimaging & AI", description: "Two-day international conference on advances in computational psychiatry and neural imaging.", location: "DIMHANS Auditorium", registration: "Open" },
  { id: 2, date: "2026-07-22", type: "Workshop", title: "Deep Tech Startup Bootcamp", description: "5-day intensive bootcamp for early-stage deep-tech founders focused on healthcare product-market fit.", location: "Innovation Hub", registration: "Open" },
  { id: 3, date: "2026-08-05", type: "Hackathon", title: "MindTech Hackathon 2026", description: "48-hour hackathon challenging teams to build technology solutions for rural mental health access.", location: "DIMHANS Campus + Virtual", registration: "Closing Soon" },
  { id: 4, date: "2026-08-18", type: "Seminar", title: "Grand Rounds: Pharmacogenomics in Practice", description: "Monthly grand rounds featuring Dr. David Mrazek, Mayo Clinic, on clinical applications of pharmacogenomics.", location: "Seminar Hall B", registration: "Open" },
  { id: 5, date: "2026-09-10", type: "Demo Day", title: "Incubator Demo Day — Cohort 7", description: "Graduating startups present to 80+ investors, industry leaders, and government officials.", location: "DIMHANS Auditorium", registration: "Invite Only" },
];

export const PUBLICATIONS = [
  { id: 1, title: "Deep Learning for EEG-Based Schizophrenia Detection: A Multi-Site Validation Study", journal: "Nature Digital Medicine", authors: "Mehta R, Patil S, Kumar A et al.", year: 2025, doi: "10.1038/s41746-025-01234-5", type: "Original Research" },
  { id: 2, title: "Pharmacogenomic Predictors of Antidepressant Response in South Asian Populations", journal: "The Lancet Psychiatry", authors: "Krishnan M, Verma A, Nair P et al.", year: 2025, doi: "10.1016/S2215-0366(25)00089-X", type: "Original Research" },
  { id: 3, title: "Federated Learning Framework for Multi-Hospital Psychiatric Diagnosis", journal: "JAMA Network Open", authors: "Shah R, Rao A, Hegde K", year: 2024, doi: "10.1001/jamanetworkopen.2024.12345", type: "Original Research" },
  { id: 4, title: "Sensogenomics: A Novel Framework for Understanding Sensory Processing in Autism", journal: "Molecular Psychiatry", authors: "Iyer N, Rao L, Kumar A", year: 2024, doi: "10.1038/s41380-024-02345-6", type: "Review" },
  { id: 5, title: "Community-Based Mental Health Intervention Outcomes in Rural Karnataka", journal: "PLOS Medicine", authors: "Nair P, Hegde K, Kumar A et al.", year: 2024, doi: "10.1371/journal.pmed.1004123", type: "Original Research" },
  { id: 6, title: "Artificial Intelligence in Forensic Psychiatry: Opportunities and Ethical Considerations", journal: "World Psychiatry", authors: "Joshi V, Kumar D, Patil S", year: 2023, doi: "10.1002/wps.21100", type: "Perspective" },
  { id: 7, title: "Digital Therapeutics for Depression in Low-Resource Settings: A Randomized Controlled Trial", journal: "BMJ", authors: "Sharma P, Mehta R, Kumar A et al.", year: 2023, doi: "10.1136/bmj-2023-076543", type: "RCT" },
  { id: 8, title: "Neural Correlates of Emotion Regulation in Bipolar Disorder: An fMRI Meta-Analysis", journal: "Biological Psychiatry", authors: "Rao A, Shah R, Krishnan M", year: 2023, doi: "10.1016/j.biopsych.2023.04.019", type: "Meta-Analysis" },
];

export const RESOURCES = [
  { id: 1, category: "Guidelines", title: "Incubation Application Guidelines 2026", description: "Comprehensive guide covering eligibility, documentation, evaluation criteria, and timelines for applying to the TBI.", fileType: "PDF", size: "2.4 MB", updated: "Jan 2026" },
  { id: 2, category: "Policy", title: "Intellectual Property Policy — TBI", description: "Detailed IP ownership, licensing terms, and revenue-sharing policy for incubated startups.", fileType: "PDF", size: "1.1 MB", updated: "Mar 2026" },
  { id: 3, category: "Forms", title: "Incubation Application Form (Form TBI-01)", description: "Standard application form for Technology Business Incubator. Requires executive summary attachment.", fileType: "DOCX", size: "340 KB", updated: "Jan 2026" },
  { id: 4, category: "Forms", title: "Ethics Committee Application — Clinical Research", description: "IEC application form for studies involving human subjects, including informed consent templates.", fileType: "PDF", size: "890 KB", updated: "Apr 2026" },
  { id: 5, category: "Policy", title: "Research Data Management Policy", description: "Guidelines on data storage, sharing, anonymization, and retention for all research activities.", fileType: "PDF", size: "780 KB", updated: "Feb 2026" },
  { id: 6, category: "Guidelines", title: "Infrastructure Booking Guidelines", description: "Procedures and terms for booking research labs, conference rooms, and shared equipment.", fileType: "PDF", size: "560 KB", updated: "Jun 2026" },
];

export const FAQS = [
  { id: 1, q: "Who can apply to the Technology Business Incubator?", a: "The TBI is open to Indian citizens with a validated deep-tech or healthcare technology startup (registered company preferred, ideation stage considered). Founders with a prior DIMHANS-affiliated research background receive priority consideration." },
  { id: 2, q: "What equity does DIMHANS TBI take?", a: "DIMHANS TBI is a non-equity-dilutive government incubator for the base program. For startups receiving DST/BIRAC grant co-facilitation above ₹50 lakhs, a nominal 0–2% equity or revenue-share arrangement may be discussed on a case-by-case basis." },
  { id: 3, q: "How long is the incubation period?", a: "The standard incubation period is 18 months, extendable to 24 months for exceptional performers. A 6-month pre-incubation phase is available for idea-stage projects under our PRAYAS equivalent program." },
  { id: 4, q: "Can researchers collaborate with the institute without being incubated?", a: "Yes. DIMHANS offers collaborative research agreements, sponsored research programs, and visiting fellow positions. Contact the Research Coordination Office for partnership proposals." },
  { id: 5, q: "Are facilities available to external researchers and institutions?", a: "Shared research facilities including neuroimaging, genomics labs, and HPC cluster are accessible to external researchers under a fee-for-service model and MoU-based collaboration agreements." },
];

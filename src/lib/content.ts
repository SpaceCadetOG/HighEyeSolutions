import {
  BadgeCheck,
  Binoculars,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Factory,
  FileImage,
  HardHat,
  Home,
  Map,
  RadioTower,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const company = {
  name: "High Eye Solutions",
  location: "Houston, Texas",
  serviceAreas:
    "Houston, San Antonio, Dallas-Fort Worth, Austin, New Orleans, and Chicago",
  operatingStatus:
    "FAA Part 107 certified and currently accepting commercial drone missions",
  founder: "Victor Ogbebor",
  email: "hello@higheyesolutions.com",
  phone: "(832) 555-0198",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const differentiators = [
  {
    title: "Safety-First Operations",
    description:
      "Every mission starts with airspace awareness, site planning, risk review, and clear boundaries for safe flight.",
    icon: ShieldCheck,
  },
  {
    title: "FAA Compliance",
    description:
      "Built around FAA Part 107 standards, responsible operations, and documentation that can scale with the business.",
    icon: BadgeCheck,
  },
  {
    title: "Reliable Communication",
    description:
      "Fast responses, clear scope, scheduling expectations, and deliverables aligned before launch.",
    icon: Clock3,
  },
  {
    title: "Professional Deliverables",
    description:
      "Aerial photos, video clips, site views, and inspection imagery organized for practical business use.",
    icon: FileImage,
  },
  {
    title: "Multi-Market Service",
    description:
      "Houston-based support across key Texas, Louisiana, and Illinois markets, subject to scheduling and mission review.",
    icon: Building2,
  },
  {
    title: "Military-Grade Structure",
    description:
      "Disciplined planning, accountability, and mission-focused execution guide each project from scope to delivery.",
    icon: Target,
  },
  {
    title: "Technology-Driven Workflow",
    description:
      "IT-minded systems, organized media delivery, and scalable processes for future commercial operations.",
    icon: Wrench,
  },
  {
    title: "Growth-Oriented Capabilities",
    description:
      "Starting with practical aerial support today while building toward mapping, inspection, and enterprise workflows.",
    icon: Binoculars,
  },
];

export const featuredServices = [
  {
    title: "Real Estate Aerial Media",
    description:
      "Professional aerial views, listing content, property flyovers, and neighborhood context for residential and commercial marketing.",
    icon: Home,
  },
  {
    title: "Roof & Property Inspections",
    description:
      "Visual documentation support for roofing contractors, property owners, maintenance teams, and claim conversations.",
    icon: ShieldCheck,
  },
  {
    title: "Construction Progress Monitoring",
    description:
      "Scheduled aerial documentation for contractors, stakeholders, and owners who need clear progress records.",
    icon: HardHat,
  },
  {
    title: "Marketing Content",
    description:
      "Aerial photos and motion clips for small business promotions, property highlights, social media, and local campaigns.",
    icon: Camera,
  },
  {
    title: "Insurance Documentation Support",
    description:
      "Organized imagery for damage documentation, before-and-after comparisons, and contractor records.",
    icon: ClipboardCheck,
  },
  {
    title: "General Aerial Support",
    description:
      "Custom drone missions for site overviews, asset documentation, visual support, and operational awareness.",
    icon: CheckCircle2,
  },
];

export const growthServices = [
  "Mapping",
  "Photogrammetry",
  "Commercial Site Documentation",
  "Industrial Inspection Support",
];

export const yearOneIndustries = [
  { title: "Real Estate", icon: Home },
  { title: "Roofing", icon: ShieldCheck },
  { title: "Insurance", icon: ClipboardCheck },
  { title: "Construction", icon: HardHat },
  { title: "Small Business Marketing", icon: Camera },
  { title: "Events", icon: Users },
];

export const futureIndustries = [
  { title: "Energy", icon: Zap },
  { title: "Telecom", icon: RadioTower },
  { title: "Utilities", icon: Wrench },
  { title: "Data Centers", icon: Building2 },
  { title: "Industrial Facilities", icon: Factory },
];

export const serviceSections = [
  {
    title: "Real Estate Marketing",
    summary:
      "Aerial media that helps listings and properties show location, scale, exterior features, and surrounding context.",
    items: [
      "Listing photography",
      "Aerial video",
      "Social media content",
      "Property marketing",
      "Neighborhood / property flyovers",
      "Lot, exterior, and full-site context",
      "Nearby feature and location highlights",
    ],
  },
  {
    title: "Roofing & Insurance Documentation",
    summary:
      "Clear visual documentation support for roof condition, storm-related observations, and contractor records.",
    items: [
      "Roof condition documentation",
      "Storm damage support",
      "Insurance claim imagery support",
      "Contractor before-and-after documentation",
      "Maintenance documentation",
      "Adjuster and contractor image packages",
      "Time-stamped visual records",
    ],
  },
  {
    title: "Construction Monitoring",
    summary:
      "Repeatable aerial views that help contractors and owners communicate project progress without slowing the jobsite.",
    items: [
      "Progress tracking",
      "Site documentation",
      "Contractor updates",
      "Stakeholder reporting",
      "Monthly visual progress records",
    ],
  },
  {
    title: "Marketing & Promotional Media",
    summary:
      "Professional aerial content for companies, venues, local campaigns, and commercial properties.",
    items: [
      "Business promotional videos",
      "Property highlights",
      "Event aerial media",
      "Social media content",
    ],
  },
  {
    title: "General Aerial Support",
    summary:
      "Flexible drone support for legitimate business needs when an elevated view can improve visibility or documentation.",
    items: [
      "Site overviews",
      "Asset documentation",
      "Visual inspection support",
      "Custom drone missions",
    ],
  },
];

export const immediateServices = [
  {
    title: "Real Estate Aerial Media",
    audience:
      "Real estate agents, brokers, property owners, builders, and property managers",
    description:
      "Aerial media designed to show the complete property story: lot layout, exterior condition, surrounding features, neighborhood context, and the relationship between structures and land.",
    deliverables: [
      "Edited aerial listing photographs",
      "Short aerial video or property flyover",
      "Vertical social media clips when requested",
      "Lot, exterior, access, and amenity views",
      "Secure digital delivery link",
    ],
  },
  {
    title: "Roof & Insurance Documentation",
    audience:
      "Roofing contractors, property owners, insurance adjusters, claim teams, and maintenance professionals",
    description:
      "Access-conscious roof and property imagery that helps document visible conditions, storm-related concerns, repairs, and before-and-after records without presenting the drone operator as the claim decision-maker.",
    deliverables: [
      "High-resolution roof overview images",
      "Slope, edge, flashing, penetration, and drainage views where safely visible",
      "Visible-condition and storm documentation image sets",
      "Before-and-after contractor records",
      "Organized, time-stamped digital delivery package",
    ],
  },
  {
    title: "Construction & Commercial Documentation",
    audience:
      "Contractors, owners, project managers, commercial property teams, and stakeholders",
    description:
      "Repeatable site imagery for project updates, exterior documentation, remote stakeholder visibility, and visual progress records.",
    deliverables: [
      "Site overview and perimeter imagery",
      "Repeatable progress viewpoints",
      "Milestone or monthly photo sets",
      "Stakeholder-ready digital folders",
      "Optional short progress video",
    ],
  },
];

export const pricingPackages = [
  {
    service: "Real Estate",
    package: "Essential",
    price: "$150-$300",
    description:
      "A focused residential aerial photo set covering the property, lot, exterior, and immediate context.",
    includes: ["Edited aerial photos", "One property", "Digital delivery"],
  },
  {
    service: "Real Estate",
    package: "Media Plus",
    price: "$300-$500",
    description:
      "Expanded listing coverage with aerial photography plus short-form motion content.",
    includes: [
      "Expanded photo set",
      "Short aerial video",
      "Social-ready selections",
    ],
  },
  {
    service: "Real Estate",
    package: "Full Property Story",
    price: "$1,000+",
    description:
      "Custom production for larger, luxury, acreage, development, or multi-location property assignments.",
    includes: [
      "Custom shot plan",
      "Photo and video package",
      "Advanced editing and multiple deliverable formats",
    ],
  },
  {
    service: "Roof Documentation",
    package: "Residential",
    price: "$200-$300",
    description:
      "Focused aerial documentation of a residential roof and safely visible exterior conditions.",
    includes: [
      "Roof overview",
      "Detailed visual angles",
      "Organized image package",
    ],
  },
  {
    service: "Roof Documentation",
    package: "Commercial",
    price: "$500-$1,000+",
    description:
      "Custom documentation for larger roofs, multiple structures, complex sites, or expanded reporting needs.",
    includes: [
      "Pre-flight scope review",
      "Expanded coverage",
      "Contractor or adjuster-ready file organization",
    ],
  },
  {
    service: "Construction",
    package: "Progress Mission",
    price: "Custom quote",
    description:
      "Single-visit or recurring site documentation priced around site size, frequency, access, and deliverables.",
    includes: [
      "Site overview",
      "Progress viewpoints",
      "Optional recurring schedule",
    ],
  },
];

export const serviceWorkflows = [
  {
    service: "Real Estate Media",
    steps: [
      "Submit the address, listing timeline, property details, and requested media.",
      "High Eye reviews airspace, weather, property access, shot priorities, and scope.",
      "The client approves the quote and funds the agreed payment milestone.",
      "The mission is scheduled, flown, and captured under the approved plan.",
      "Media is edited and quality checked for consistent, usable presentation.",
      "Final files are delivered through a secure link; funds release at the agreed milestone.",
    ],
  },
  {
    service: "Roof & Insurance Documentation",
    steps: [
      "Submit the property location, claim or contractor context, urgency, and requested roof views.",
      "High Eye confirms lawful access, airspace, weather, safety boundaries, and documentation scope.",
      "The client approves pricing and funds the agreed payment milestone.",
      "The aircraft captures efficient perimeter, roof-plane, and visible-condition imagery without making coverage or damage determinations.",
      "Files are reviewed, organized, labeled, and prepared for the contractor, adjuster, owner, or claim team.",
      "The digital package is delivered; payment releases according to the approved project terms.",
    ],
  },
  {
    service: "Construction & Commercial",
    steps: [
      "Submit the site, project phase, stakeholders, target viewpoints, and reporting frequency.",
      "High Eye reviews site permissions, operational hazards, airspace, scheduling, and repeatable flight positions.",
      "The client approves the quote, deliverables, and payment schedule.",
      "The mission is flown once or on an agreed recurring cadence.",
      "Photos and video are organized by date, phase, location, or milestone.",
      "Deliverables are posted to the client workspace and the corresponding milestone is released.",
    ],
  },
];

export const growthServiceSections = [
  {
    title: "Mapping & Photogrammetry",
    icon: Map,
    summary:
      "Future expansion area as High Eye Solutions builds equipment, workflows, and project experience for data-oriented deliverables.",
    items: [
      "Orthomosaics",
      "Site mapping",
      "Asset documentation",
      "Construction mapping",
    ],
  },
  {
    title: "Industrial Services",
    icon: Factory,
    summary:
      "Longer-term capability path for contractor, infrastructure, utility, telecom, energy, and data center support.",
    items: [
      "Infrastructure monitoring",
      "Utility inspection support",
      "Telecom support",
      "Energy sector support",
      "Data center documentation",
    ],
  },
];

export const underwritingServices = [
  {
    title: "Residential Underwriting Documentation",
    status: "Available now",
    summary:
      "Consistent exterior and roof documentation that helps insurance and property teams evaluate current property conditions and preserve a visual record for future reference.",
    current: [
      "Policy and assignment intake",
      "Policyholder or property-contact coordination",
      "Exterior elevation and roof documentation",
      "Visible roof, property, and liability-condition imagery",
      "Organized photo package with mission metadata",
      "Secure client delivery and documented receipt",
    ],
    future: [
      "Carrier-specific forms and report templates",
      "Automated hazard-assistance workflows",
      "Structured report summaries",
      "Direct carrier or inspection-platform exchange",
    ],
  },
  {
    title: "Commercial Underwriting Documentation",
    status: "Scoped projects",
    summary:
      "Custom exterior documentation for commercial properties where underwriters, risk teams, owners, and contractors need consistent site and structural context.",
    current: [
      "Site, building, and roof overview imagery",
      "Pre-existing exterior condition documentation",
      "Access, exposure, and surrounding-risk context",
      "Multiple-building and complex-site shot planning",
      "Custom file naming and delivery structure",
      "Priority and deadline tracking through the portal",
    ],
    future: [
      "Custom carrier questionnaires",
      "Interior and floor-plan partner workflows",
      "Automated report generation",
      "Experienced underwriting-review partnerships",
    ],
  },
  {
    title: "Managed Inspection Coordination",
    status: "Expanding capability",
    summary:
      "A high-touch coordination workflow for clients who need careful scheduling, clear communication, tailored scope, and controlled delivery for complex or high-value properties.",
    current: [
      "Dedicated assignment review",
      "Multi-channel contact and scheduling attempts",
      "Named mission coordinator",
      "Custom shot list and access planning",
      "Progress notifications and escalation notes",
      "Admin quality review before client delivery",
    ],
    future: [
      "Specialized inspector network",
      "Carrier-specific certification programs",
      "Floor-plan and replacement-cost data partners",
      "White-labeled enterprise portal experience",
    ],
  },
];

export const integrationWorkflow = [
  {
    title: "Assignment Received",
    description:
      "Create the mission from a portal request, structured file import, or future API integration.",
  },
  {
    title: "Contact & Schedule",
    description:
      "Confirm the property contact, access requirements, deadline, permissions, and appointment window.",
  },
  {
    title: "Mission Planned",
    description:
      "Review scope, airspace, weather, site hazards, credential needs, and required deliverables.",
  },
  {
    title: "Field Documentation",
    description:
      "Capture the approved exterior, roof, site, and contextual imagery using a repeatable shot plan.",
  },
  {
    title: "Process & Review",
    description:
      "Organize files, verify scope completion, prepare watermarked proofs, and complete Admin quality review.",
  },
  {
    title: "Deliver & Acknowledge",
    description:
      "Release reports and clean files after approval, record receipt, and update the assignment as client-received.",
  },
];

export const industrySolutions = [
  {
    title: "Real Estate",
    description:
      "Listing media, property flyovers, neighborhood context, and exterior views for residential or commercial marketing.",
  },
  {
    title: "Roofing",
    description:
      "Roof condition photos, access-conscious visual support, storm documentation, and maintenance imagery.",
  },
  {
    title: "Construction",
    description:
      "Progress updates, jobsite overviews, stakeholder records, and repeatable documentation over time.",
  },
  {
    title: "Insurance",
    description:
      "Imagery support for claims conversations, contractor records, before-and-after documentation, and property condition files.",
  },
  {
    title: "Commercial Property",
    description:
      "Site overviews, exterior documentation, tenant marketing, maintenance support, and owner reporting.",
  },
  {
    title: "Small Business Marketing",
    description:
      "Aerial media for brand content, property highlights, local campaigns, venues, and social channels.",
  },
  {
    title: "Events",
    description:
      "Outdoor event aerial media where location, airspace, crowd safety, and permissions support responsible operations.",
  },
];

export const futureIndustrialGrowth = [
  "Utilities",
  "Telecom",
  "Energy",
  "Oil & Gas",
  "Data Centers",
  "Solar",
  "Infrastructure",
];

export const portfolioCards = [
  {
    title: "Residential Property Marketing",
    type: "Real estate media",
    description:
      "Placeholder for aerial listing photos, exterior angles, lot context, and social-ready clips.",
    deliverables: ["Aerial photos", "Short video clips", "Property overview"],
  },
  {
    title: "Roof Documentation Project",
    type: "Roofing support",
    description:
      "Placeholder for roof condition imagery, damage documentation, and contractor records.",
    deliverables: ["Roof image set", "Annotated notes", "Before-and-after views"],
  },
  {
    title: "Construction Progress Update",
    type: "Construction monitoring",
    description:
      "Placeholder for scheduled progress imagery and visual reporting for stakeholders.",
    deliverables: ["Site overview", "Progress photo set", "Monthly record"],
  },
  {
    title: "Commercial Property Overview",
    type: "Commercial property",
    description:
      "Placeholder for exterior documentation and marketing views of a business property.",
    deliverables: ["Aerial stills", "Perimeter views", "Media folder"],
  },
  {
    title: "Local Business Promotional Media",
    type: "Marketing content",
    description:
      "Placeholder for aerial promotional content supporting a local campaign or social post.",
    deliverables: ["Edited clips", "Social crops", "Brand media selects"],
  },
  {
    title: "Future Mapping Project Placeholder",
    type: "Growth capability",
    description:
      "Placeholder for future mapping and photogrammetry work after expanded aircraft and workflow readiness.",
    deliverables: ["Orthomosaic", "Site map", "Data package"],
  },
];

export const faqs = [
  {
    question: "Are you FAA Part 107 certified?",
    answer:
      "Yes. High Eye Solutions is FAA Part 107 certified and currently accepts commercial drone missions when airspace, weather, property access, permissions, and site conditions support a lawful and safe operation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "High Eye Solutions is based in Houston and reviews missions in Houston, San Antonio, Dallas-Fort Worth, Austin, New Orleans, and Chicago. Every assignment remains subject to scheduling, travel, airspace, access, credential requirements, and safe operating conditions. Outside this network, reach out for a project review.",
  },
  {
    question: "What services do you currently offer?",
    answer:
      "Year 1 services focus on real estate aerial media, roof and property documentation, construction progress monitoring, marketing content, insurance documentation support, and general aerial support.",
  },
  {
    question: "Do you provide real estate drone media?",
    answer:
      "Yes. Services can include aerial photos, property flyovers, neighborhood context, listing content, and social media clips.",
  },
  {
    question: "Do you provide roof documentation?",
    answer:
      "Yes. High Eye Solutions can support roofing contractors and property owners with visual roof documentation when conditions allow safe and responsible flight.",
  },
  {
    question: "Can you support insurance documentation?",
    answer:
      "Yes. Drone imagery can support licensed adjusters, claim teams, roofing contractors, and property owners with visible-condition records, storm documentation, and before-and-after files. High Eye Solutions provides aerial documentation, not coverage decisions, damage causation opinions, engineering reports, or public-adjusting services.",
  },
  {
    question: "Do you offer construction progress monitoring?",
    answer:
      "Yes. Scheduled aerial documentation can help contractors, owners, and stakeholders track progress and maintain visual records.",
  },
  {
    question: "Do you provide mapping services?",
    answer:
      "Mapping and photogrammetry are listed as growth services. High Eye Solutions is building toward those capabilities as aircraft, software, and workflows mature.",
  },
  {
    question: "How are deliverables provided?",
    answer:
      "Deliverables are provided through organized digital folders, secure links, or the client portal workflow. Packages may include edited photos, video clips, web galleries, and documentation files based on the approved scope.",
  },
  {
    question: "How quickly can projects be scheduled?",
    answer:
      "Scheduling depends on weather, airspace, site permissions, and project complexity. Quote requests are reviewed quickly so expectations are clear up front.",
  },
  {
    question: "Do you carry insurance?",
    answer:
      "Insurance language can be updated as policies are finalized. Commercial projects may require coverage details before flight operations are confirmed.",
  },
  {
    question: "How much does a drone mission cost?",
    answer:
      "Indicative pricing begins around $150-$300 for essential real estate aerial media and $200-$300 for residential roof documentation. Expanded real estate packages are commonly $300-$500, while full property productions and commercial roof projects may begin around $500-$1,000 or more. Every price is confirmed after airspace, location, access, site size, travel, editing, and deliverables are reviewed.",
  },
  {
    question: "Can you support commercial or contractor projects?",
    answer:
      "Yes. High Eye Solutions is positioned to support legitimate residential, commercial, and contractor projects where drone imagery adds practical value.",
  },
];

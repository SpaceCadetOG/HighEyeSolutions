export type MissionStatus =
  | "Received"
  | "Scope Review"
  | "Quoted"
  | "Funded"
  | "Scheduled"
  | "En Route"
  | "On Site"
  | "Processing"
  | "Admin Review"
  | "Delivered"
  | "Completed";

export type DemoMission = {
  id: string;
  title: string;
  service: string;
  clientId: string;
  client: string;
  location: string;
  propertyAddress: string;
  date: string;
  deadline: string;
  status: MissionStatus;
  progress: number;
  price: number;
  payable: number;
  claimNumber?: string;
  carrier?: string;
  onsiteContact: string;
  access: string;
  scope: string[];
  deliverables: string[];
  assignedPilot: string;
  activity: { label: string; time: string }[];
};

export const demoMissions: DemoMission[] = [
  {
    id: "HES-1042",
    title: "Residential Roof Documentation",
    service: "Insurance Adjuster Support",
    clientId: "CL-201",
    client: "Gulf Claims Partners",
    location: "Houston, TX",
    propertyAddress: "1428 Wycliffe Drive, Houston, TX",
    date: "Schedule pending",
    deadline: "June 21, 2026 at 5:00 PM",
    status: "Scope Review",
    progress: 24,
    price: 300,
    payable: 180,
    claimNumber: "GCP-TX-88241",
    carrier: "Demo Property Carrier",
    onsiteContact: "Jordan Miles · (713) 555-0184",
    access: "Exterior access approved. Call contact 30 minutes before arrival.",
    scope: [
      "Full roof overview and individual roof-plane imagery",
      "Ridge, valley, edge, flashing, vent, and penetration views",
      "Visible-condition and storm-related documentation",
      "Front, rear, and side elevation context",
    ],
    deliverables: [
      "High-resolution JPG image set",
      "Time-stamped and organized file package",
      "Adjuster-ready secure delivery link",
      "Optional one-page mission summary",
    ],
    assignedPilot: "Victor Ogbebor",
    activity: [
      { label: "Mission received", time: "June 18 · 8:42 AM" },
      { label: "Client files attached", time: "June 18 · 8:47 AM" },
      { label: "Scope review started", time: "June 18 · 9:05 AM" },
    ],
  },
  {
    id: "HES-1038",
    title: "Residential Listing Media",
    service: "Real Estate Media",
    clientId: "CL-204",
    client: "Alamo Property Group",
    location: "San Antonio, TX",
    propertyAddress: "811 Cibolo Ridge, San Antonio, TX",
    date: "June 22, 2026",
    deadline: "June 23, 2026 at noon",
    status: "Scheduled",
    progress: 45,
    price: 275,
    payable: 165,
    onsiteContact: "Maya Reynolds · (210) 555-0136",
    access: "Vacant property. Lockbox instructions stored in private mission notes.",
    scope: [
      "Front and rear exterior hero angles",
      "Lot, driveway, pool, and neighborhood context",
      "Slow property reveal and elevated orbit",
      "Vertical social media selections",
    ],
    deliverables: [
      "18 edited aerial photographs",
      "45-second edited property video",
      "Three vertical social clips",
      "Secure web gallery",
    ],
    assignedPilot: "Victor Ogbebor",
    activity: [
      { label: "Quote approved", time: "June 17 · 2:20 PM" },
      { label: "Payment milestone funded", time: "June 17 · 2:24 PM" },
      { label: "Flight scheduled", time: "June 17 · 3:10 PM" },
    ],
  },
  {
    id: "HES-1029",
    title: "Construction Progress Update",
    service: "Construction Documentation",
    clientId: "CL-209",
    client: "Lakeshore BuildCo",
    location: "Chicago, IL",
    propertyAddress: "2201 S Canal Street, Chicago, IL",
    date: "Delivered June 14",
    deadline: "Completed",
    status: "Delivered",
    progress: 100,
    price: 650,
    payable: 390,
    onsiteContact: "Evan Brooks · (312) 555-0191",
    access: "Site orientation complete. PPE required beyond the marked staging area.",
    scope: [
      "Repeatable north, south, east, and west site viewpoints",
      "Foundation and structural progress context",
      "Material staging and access documentation",
      "Stakeholder overview video",
    ],
    deliverables: [
      "24 edited progress photographs",
      "Secure web gallery",
      "PDF progress summary",
      "Downloadable project archive",
    ],
    assignedPilot: "Victor Ogbebor",
    activity: [
      { label: "Flight completed", time: "June 13 · 10:18 AM" },
      { label: "Deliverables approved", time: "June 14 · 1:30 PM" },
      { label: "Client delivery sent", time: "June 14 · 1:42 PM" },
    ],
  },
];

export const demoInvoices = [
  {
    id: "INV-1042",
    missionId: "HES-1042",
    client: "Gulf Claims Partners",
    issued: "June 18, 2026",
    due: "Upon approval",
    amount: 300,
    status: "Draft",
    receipt: "Not available",
  },
  {
    id: "INV-1038",
    missionId: "HES-1038",
    client: "Alamo Property Group",
    issued: "June 17, 2026",
    due: "Funded",
    amount: 275,
    status: "Paid",
    receipt: "RCT-1038",
  },
  {
    id: "INV-1029",
    missionId: "HES-1029",
    client: "Lakeshore BuildCo",
    issued: "June 10, 2026",
    due: "June 14, 2026",
    amount: 650,
    status: "Paid",
    receipt: "RCT-1029",
  },
];

export type DeliverablePackage = {
  id: string;
  missionId: string;
  missionTitle: string;
  client: string;
  status: "Awaiting Approval" | "Released";
  paymentStatus: "Funded - release pending" | "Paid and released";
  submitted: string;
  files: { name: string; format: string; size: string }[];
  preview: {
    label: string;
    detail: string;
    watermark: string | null;
    resolution: string;
  };
  release: {
    originalAccess: string;
    linkExpiration: string;
    receipt: string;
  };
};

export const demoDeliverablePackages: DeliverablePackage[] = [
  {
    id: "DEL-1042",
    missionId: "HES-1042",
    missionTitle: "Residential Roof Documentation",
    client: "Gulf Claims Partners",
    status: "Awaiting Approval",
    paymentStatus: "Funded - release pending",
    submitted: "June 20, 2026 at 2:18 PM",
    files: [
      { name: "Roof overview proof set", format: "12 JPG proofs", size: "8 MB" },
      { name: "Adjuster summary proof", format: "PDF proof", size: "1.4 MB" },
    ],
    preview: {
      label: "Client proof view",
      detail:
        "The client can review composition, coverage, file count, and scope completion.",
      watermark: "HIGH EYE PROOF - NOT LICENSED FOR USE",
      resolution: "Low-resolution preview",
    },
    release: {
      originalAccess: "Locked until approval and payment release",
      linkExpiration: "No original download link issued",
      receipt: "Issued after payment confirmation",
    },
  },
  {
    id: "DEL-1029",
    missionId: "HES-1029",
    missionTitle: "Construction Progress Update",
    client: "Lakeshore BuildCo",
    status: "Released",
    paymentStatus: "Paid and released",
    submitted: "June 14, 2026 at 1:42 PM",
    files: [
      {
        name: "Construction progress photo set",
        format: "24 JPG files",
        size: "186 MB",
      },
      { name: "Site overview gallery", format: "Secure gallery", size: "Ready" },
      { name: "Progress summary", format: "PDF", size: "4.2 MB" },
    ],
    preview: {
      label: "Released client view",
      detail:
        "The client sees clean originals, approved reports, and download controls.",
      watermark: null,
      resolution: "Original resolution",
    },
    release: {
      originalAccess: "Clean originals available",
      linkExpiration: "Secure link expires June 21, 2026",
      receipt: "RCT-1029",
    },
  },
];

export const demoClients = [
  {
    id: "CL-201",
    name: "Gulf Claims Partners",
    type: "Independent adjusting firm",
    market: "Texas",
    contact: "Jordan Miles",
    email: "claims@example.com",
    missions: 4,
    lifetimeValue: 1200,
    outstanding: 300,
  },
  {
    id: "CL-204",
    name: "Alamo Property Group",
    type: "Real estate brokerage",
    market: "San Antonio",
    contact: "Maya Reynolds",
    email: "listings@example.com",
    missions: 3,
    lifetimeValue: 825,
    outstanding: 0,
  },
  {
    id: "CL-209",
    name: "Lakeshore BuildCo",
    type: "Construction contractor",
    market: "Chicago",
    contact: "Evan Brooks",
    email: "projects@example.com",
    missions: 6,
    lifetimeValue: 3900,
    outstanding: 0,
  },
];

export const serviceMarkets = [
  { city: "Houston", state: "TX", status: "Primary operations" },
  { city: "San Antonio", state: "TX", status: "Supported" },
  { city: "Dallas-Fort Worth", state: "TX", status: "Supported by scheduling" },
  { city: "Austin", state: "TX", status: "Supported by scheduling" },
  { city: "New Orleans", state: "LA", status: "Supported by scheduling" },
  { city: "Chicago", state: "IL", status: "Supported by scheduling" },
];

export const licensingRoadmap = [
  {
    title: "FAA Part 107",
    status: "Active",
    detail: "Commercial drone operations credential.",
  },
  {
    title: "Texas All-Lines Adjuster",
    status: "Verify",
    detail: "Record license number, issue date, and expiration before public use.",
  },
  {
    title: "Louisiana Claims Adjuster",
    status: "Verify",
    detail: "Record license authority and expiration before public use.",
  },
  {
    title: "Illinois Operating Review",
    status: "Planned",
    detail: "Confirm assignment and DHS requirements with the firm or carrier.",
  },
  {
    title: "IA Firm & Carrier Onboarding",
    status: "Planned",
    detail: "Complete W-9, COI, vendor, security, and workflow requirements.",
  },
  {
    title: "CAT Deployment Readiness",
    status: "Planned",
    detail: "Finalize rapid intake, routing, reporting, and deployment procedures.",
  },
];

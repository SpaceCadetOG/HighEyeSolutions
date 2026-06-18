"use client";

import {
  Banknote,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  CloudDownload,
  FileImage,
  FolderKanban,
  FileText,
  LayoutDashboard,
  MapPin,
  Menu,
  MessageSquareText,
  PlaneTakeoff,
  Plus,
  ReceiptText,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  demoInvoices,
  demoMissions,
  type DemoMission,
} from "@/lib/portal-data";

type View =
  | "overview"
  | "missions"
  | "deliverables"
  | "billing"
  | "payments"
  | "messages";

const navigation = [
  { id: "overview" as const, label: "Overview", icon: LayoutDashboard },
  { id: "missions" as const, label: "Missions", icon: PlaneTakeoff },
  { id: "deliverables" as const, label: "Deliverables", icon: CloudDownload },
  { id: "billing" as const, label: "Invoices & Receipts", icon: ReceiptText },
  { id: "payments" as const, label: "Payments", icon: Banknote },
  { id: "messages" as const, label: "Messages", icon: MessageSquareText },
];

const deliverables = [
  {
    name: "Construction Progress - Photo Set",
    mission: "HES-1029",
    format: "24 JPG files",
    size: "186 MB",
  },
  {
    name: "Site Overview - Web Gallery",
    mission: "HES-1029",
    format: "Secure gallery",
    size: "Ready",
  },
  {
    name: "Progress Summary",
    mission: "HES-1029",
    format: "PDF",
    size: "4.2 MB",
  },
];

export function PortalDashboard() {
  // TODO(Phase 2): Replace demo mission, messaging, and deliverable data with
  // authenticated APIs and signed GCP Cloud Storage download URLs.
  // TODO(Phase 3): Integrate a licensed marketplace payment provider for
  // compliant payment authorization, escrow-style milestones, and payouts.
  const [view, setView] = useState<View>("overview");
  const [mobileNav, setMobileNav] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [expandedMission, setExpandedMission] = useState<string | null>(
    "HES-1042",
  );

  const selectView = (next: View) => {
    setView(next);
    setMobileNav(false);
  };

  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      <header className="sticky top-0 z-40 flex min-h-16 items-center justify-between border-b border-white/10 bg-navy/95 px-4 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/10 lg:hidden"
            onClick={() => setMobileNav((value) => !value)}
            aria-label="Toggle portal navigation"
          >
            {mobileNav ? <X size={19} /> : <Menu size={19} />}
          </button>
          <span className="flex h-9 w-9 items-center justify-center border border-flight/40 bg-flight/15 text-xs font-black">
            HE
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em]">
              Client Portal
            </p>
            <p className="text-xs text-slate-500">Demo workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300"
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>
          <div className="hidden border-l border-white/10 pl-4 sm:block">
            <p className="text-sm font-bold">Demo Client</p>
            <p className="text-xs text-slate-500">Property Operations</p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1500px]">
        <aside
          className={`fixed bottom-0 left-0 top-16 z-30 w-64 border-r border-white/10 bg-navy p-4 transition-transform lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
            mobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="grid gap-1">
            {navigation.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                key={id}
                onClick={() => selectView(id)}
                className={`flex min-h-11 items-center gap-3 px-3 text-left text-sm font-bold transition ${
                  view === id
                    ? "bg-flight text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>
          <div className="mt-8 border border-signal/25 bg-signal/5 p-4">
            <ShieldCheck className="text-signal" size={20} />
            <p className="mt-3 text-sm font-bold">Protected workflow</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Payments shown here are simulated. Future funds will be managed
              by a qualified payment provider.
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-flight">
                {view}
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight">
                {view === "overview"
                  ? "Mission control"
                  : navigation.find((item) => item.id === view)?.label}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Manage aerial work from request through delivery.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setRequestSent(false);
                setRequestOpen(true);
              }}
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-signal px-5 text-sm font-black text-navy transition hover:bg-white"
            >
              <Plus size={18} /> Request Mission
            </button>
          </div>

          {view === "overview" ? (
            <Overview
              onNavigate={selectView}
              expandedMission={expandedMission}
              onToggleMission={setExpandedMission}
            />
          ) : null}
          {view === "missions" ? (
            <MissionList
              expandedMission={expandedMission}
              onToggleMission={setExpandedMission}
            />
          ) : null}
          {view === "deliverables" ? <DeliverableList /> : null}
          {view === "billing" ? <BillingView /> : null}
          {view === "payments" ? <PaymentView /> : null}
          {view === "messages" ? <MessagesView /> : null}
        </main>
      </div>

      {requestOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="max-h-[94vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-[#0b1627] p-5 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-signal">
                  New Mission
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Tell us what needs to fly.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setRequestOpen(false)}
                className="flex h-10 w-10 flex-none items-center justify-center border border-white/10 text-slate-300"
                aria-label="Close mission request"
              >
                <X size={19} />
              </button>
            </div>

            {requestSent ? (
              <div className="mt-8 border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
                <CheckCircle2 className="mx-auto text-emerald-400" size={34} />
                <h3 className="mt-4 text-xl font-black">Request prepared</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  This demo does not transmit data. In the live portal, your
                  request would enter scope review and trigger a notification.
                </p>
                <button
                  type="button"
                  onClick={() => setRequestOpen(false)}
                  className="mt-5 bg-white px-5 py-3 text-sm font-bold text-navy"
                >
                  Return to Portal
                </button>
              </div>
            ) : (
              <form className="mt-7 grid gap-5 sm:grid-cols-2">
                <PortalField label="Service needed">
                  <select className="portal-input">
                    <option>Residential roof documentation - $300</option>
                    <option>Insurance adjuster documentation support</option>
                    <option>Real estate media</option>
                    <option>Construction monitoring</option>
                    <option>Insurance documentation</option>
                    <option>Marketing content</option>
                    <option>Custom aerial support</option>
                  </select>
                </PortalField>
                <PortalField label="Project location">
                  <input className="portal-input" placeholder="Street, city, state" />
                </PortalField>
                <PortalField label="Carrier or firm">
                  <input
                    className="portal-input"
                    placeholder="Insurance carrier, IA firm, or company"
                  />
                </PortalField>
                <PortalField label="Claim number">
                  <input
                    className="portal-input"
                    placeholder="Optional claim or assignment number"
                  />
                </PortalField>
                <PortalField label="On-site contact">
                  <input
                    className="portal-input"
                    placeholder="Name and phone number"
                  />
                </PortalField>
                <PortalField label="Deadline / SLA">
                  <input className="portal-input" type="datetime-local" />
                </PortalField>
                <PortalField label="Preferred date">
                  <input className="portal-input" type="date" />
                </PortalField>
                <PortalField label="Budget range">
                  <select className="portal-input">
                    <option>Request estimate</option>
                    <option>$150 - $300</option>
                    <option>$300 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000+</option>
                  </select>
                </PortalField>
                <PortalField label="Mission details" className="sm:col-span-2">
                  <textarea
                    className="portal-input min-h-28 resize-y py-3"
                    placeholder="Describe the site, goals, access, and required shots or documentation."
                  />
                </PortalField>
                <PortalField label="Access instructions" className="sm:col-span-2">
                  <textarea
                    className="portal-input min-h-24 resize-y py-3"
                    placeholder="Gate codes, lockbox, permission status, hazards, parking, or contact-before-arrival notes."
                  />
                </PortalField>
                <PortalField label="Reference files" className="sm:col-span-2">
                  <button
                    type="button"
                    className="flex min-h-24 w-full items-center justify-center gap-3 border border-dashed border-white/20 bg-navy/50 text-sm font-bold text-slate-300"
                  >
                    <Upload size={19} /> Add site plans, shot lists, or photos
                  </button>
                </PortalField>
                <button
                  type="button"
                  onClick={() => setRequestSent(true)}
                  className="min-h-12 bg-signal px-5 text-sm font-black text-navy sm:col-span-2"
                >
                  Submit for Scope Review
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PortalField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-slate-200 ${className}`}>
      {label}
      {children}
    </label>
  );
}

function Overview({
  onNavigate,
  expandedMission,
  onToggleMission,
}: {
  onNavigate: (view: View) => void;
  expandedMission: string | null;
  onToggleMission: (missionId: string | null) => void;
}) {
  const stats = [
    { label: "Active Missions", value: "2", icon: PlaneTakeoff },
    { label: "Ready Files", value: "3", icon: FileImage },
    { label: "Protected Funds", value: "$450", icon: CircleDollarSign },
    { label: "Open Messages", value: "2", icon: MessageSquareText },
  ];

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <article key={label} className="border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-400">{label}</p>
              <Icon className="text-flight" size={19} />
            </div>
            <p className="mt-4 text-3xl font-black">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <section className="border border-white/10 bg-white/[0.025]">
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div>
              <h2 className="text-lg font-black">Recent missions</h2>
              <p className="mt-1 text-xs text-slate-500">Latest project activity</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("missions")}
              className="text-sm font-bold text-flight"
            >
              View all
            </button>
          </div>
          <MissionRows
            expandedMission={expandedMission}
            onToggleMission={onToggleMission}
          />
        </section>

        <section className="border border-white/10 bg-white/[0.025] p-5">
          <h2 className="text-lg font-black">Next action</h2>
          <div className="mt-5 border border-signal/25 bg-signal/5 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-signal">
              Approval Needed
            </p>
            <p className="mt-3 font-bold">Roof documentation scope</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Confirm deliverables and the proposed payment milestone for
              mission HES-1042.
            </p>
            <button
              type="button"
              onClick={() => onNavigate("payments")}
              className="mt-5 flex items-center gap-2 text-sm font-black text-white"
            >
              Review estimate <ChevronRight size={17} />
            </button>
          </div>
          <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">
            <CalendarDays className="mt-0.5 flex-none text-flight" size={19} />
            <div>
              <p className="text-sm font-bold">Upcoming flight</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Residential Listing Media, June 22 at 9:00 AM, weather pending.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function MissionRows({
  expandedMission,
  onToggleMission,
}: {
  expandedMission: string | null;
  onToggleMission: (missionId: string | null) => void;
}) {
  return (
    <div className="divide-y divide-white/10">
      {demoMissions.map((mission) => (
        <article
          key={mission.id}
          className="bg-white/[0.01]"
        >
          <button
            type="button"
            onClick={() =>
              onToggleMission(expandedMission === mission.id ? null : mission.id)
            }
            className="grid w-full gap-4 p-5 text-left transition hover:bg-white/[0.035] sm:grid-cols-[1fr_auto_auto] sm:items-center"
            aria-expanded={expandedMission === mission.id}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-bold">{mission.title}</p>
                <StatusBadge status={mission.status} />
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                <span>{mission.id}</span>
                <span>{mission.client}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} /> {mission.location}
                </span>
                <span>{mission.date}</span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs text-slate-500">Mission price</p>
              <p className="mt-1 font-black text-white">
                ${mission.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-full sm:w-32">
                <div className="mb-2 flex justify-between text-xs text-slate-500">
                  <span>Progress</span>
                  <span>{mission.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/10">
                  <div
                    className="h-full bg-flight"
                    style={{ width: `${mission.progress}%` }}
                  />
                </div>
              </div>
              <ChevronRight
                className={`flex-none text-slate-500 transition ${
                  expandedMission === mission.id ? "rotate-90" : ""
                }`}
                size={18}
              />
            </div>
          </button>
          {expandedMission === mission.id ? (
            <MissionDetails mission={mission} />
          ) : null}
        </article>
      ))}
    </div>
  );
}

function MissionList({
  expandedMission,
  onToggleMission,
}: {
  expandedMission: string | null;
  onToggleMission: (missionId: string | null) => void;
}) {
  return (
    <section className="mt-8 border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-black">All missions</h2>
        <p className="mt-1 text-sm text-slate-500">
          Requested, scheduled, active, and delivered work.
        </p>
      </div>
      <MissionRows
        expandedMission={expandedMission}
        onToggleMission={onToggleMission}
      />
    </section>
  );
}

function MissionDetails({ mission }: { mission: DemoMission }) {
  return (
    <div className="grid gap-6 border-t border-flight/20 bg-flight/[0.045] p-5 lg:grid-cols-2 xl:grid-cols-4">
      <DetailBlock title="Assignment">
        <DetailLine label="Service" value={mission.service} />
        <DetailLine label="Property" value={mission.propertyAddress} />
        <DetailLine label="Deadline" value={mission.deadline} />
        <DetailLine label="Pilot" value={mission.assignedPilot} />
      </DetailBlock>
      <DetailBlock title="Insurance / Contact">
        <DetailLine label="Claim" value={mission.claimNumber ?? "Not applicable"} />
        <DetailLine label="Carrier" value={mission.carrier ?? "Not applicable"} />
        <DetailLine label="Contact" value={mission.onsiteContact} />
        <DetailLine label="Access" value={mission.access} />
      </DetailBlock>
      <DetailBlock title="Approved Scope">
        <BulletItems items={mission.scope} />
      </DetailBlock>
      <DetailBlock title="Deliverables">
        <BulletItems items={mission.deliverables} />
      </DetailBlock>
      <div className="border-t border-white/10 pt-5 lg:col-span-2 xl:col-span-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
          Mission Activity
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {mission.activity.map((event) => (
            <div key={event.label} className="border border-white/10 bg-navy/60 p-4">
              <p className="text-sm font-bold text-white">{event.label}</p>
              <p className="mt-1 text-xs text-slate-500">{event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-flight">
        {title}
      </p>
      <div className="mt-4 grid gap-3">{children}</div>
    </div>
  );
}

function DetailLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase text-slate-600">{label}</p>
      <p className="mt-1 text-sm leading-5 text-slate-300">{value}</p>
    </div>
  );
}

function BulletItems({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-5 text-slate-300">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-signal" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function DeliverableList() {
  return (
    <section className="mt-8 border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-black">Available deliverables</h2>
        <p className="mt-1 text-sm text-slate-500">
          Demo files from a completed construction mission.
        </p>
      </div>
      <div className="divide-y divide-white/10">
        {deliverables.map((file) => (
          <article
            key={file.name}
            className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center border border-flight/30 bg-flight/10 text-flight">
                <FolderKanban size={20} />
              </span>
              <div>
                <p className="font-bold">{file.name}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {file.mission} · {file.format} · {file.size}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-white/15 px-4 text-sm font-bold text-slate-200"
            >
              <CloudDownload size={17} /> Preview Download
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function BillingView() {
  return (
    <section className="mt-8 border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-black">Invoices and receipts</h2>
        <p className="mt-1 text-sm text-slate-500">
          Billing documents linked to each mission and payment milestone.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[780px] text-left">
          <thead className="border-b border-white/10 bg-white/[0.025] text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-5 py-4">Invoice</th>
              <th className="px-5 py-4">Mission</th>
              <th className="px-5 py-4">Issued</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Documents</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {demoInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-5 py-5 font-bold text-white">{invoice.id}</td>
                <td className="px-5 py-5 text-sm text-slate-300">
                  {invoice.missionId}
                </td>
                <td className="px-5 py-5 text-sm text-slate-400">
                  {invoice.issued}
                </td>
                <td className="px-5 py-5 font-black text-white">
                  ${invoice.amount.toFixed(2)}
                </td>
                <td className="px-5 py-5">
                  <span
                    className={`border px-2 py-1 text-[10px] font-black uppercase ${
                      invoice.status === "Paid"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-signal/30 bg-signal/10 text-signal"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-5 py-5">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="inline-flex min-h-9 items-center gap-2 border border-white/15 px-3 text-xs font-bold text-slate-200"
                    >
                      <FileText size={15} /> Invoice
                    </button>
                    <button
                      type="button"
                      disabled={invoice.receipt === "Not available"}
                      className="inline-flex min-h-9 items-center gap-2 border border-white/15 px-3 text-xs font-bold text-slate-200 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <ReceiptText size={15} /> Receipt
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PaymentView() {
  return (
    <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <section className="border border-white/10 bg-white/[0.025]">
        <div className="border-b border-white/10 p-5">
          <h2 className="text-lg font-black">Payment milestones</h2>
          <p className="mt-1 text-sm text-slate-500">
            Estimates and protected release stages.
          </p>
        </div>
        <div className="divide-y divide-white/10">
          <PaymentRow
            mission="HES-1042"
            title="Residential Roof Documentation"
            amount="$300.00"
            status="Awaiting Approval"
          />
          <PaymentRow
            mission="HES-1038"
            title="Residential Listing Media"
            amount="$275.00"
            status="Funded"
          />
          <PaymentRow
            mission="HES-1029"
            title="Construction Progress Update"
            amount="$650.00"
            status="Released"
          />
        </div>
      </section>
      <aside className="border border-flight/25 bg-flight/5 p-6">
        <ShieldCheck className="text-flight" size={26} />
        <h2 className="mt-4 text-xl font-black">How payment protection works</h2>
        <ol className="mt-5 grid gap-4 text-sm leading-6 text-slate-300">
          <li><strong className="text-white">1. Approve:</strong> Review the mission scope and estimate.</li>
          <li><strong className="text-white">2. Fund:</strong> A licensed provider secures the project payment.</li>
          <li><strong className="text-white">3. Deliver:</strong> High Eye completes the approved mission and uploads files.</li>
          <li><strong className="text-white">4. Release:</strong> Funds release after the agreed delivery milestone.</li>
        </ol>
        <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">
          Demo only. High Eye Solutions does not currently receive, custody, or
          hold escrow funds through this portal.
        </p>
      </aside>
    </div>
  );
}

function PaymentRow({
  mission,
  title,
  amount,
  status,
}: {
  mission: string;
  title: string;
  amount: string;
  status: string;
}) {
  return (
    <article className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-bold">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{mission}</p>
      </div>
      <div className="flex items-center justify-between gap-5 sm:justify-end">
        <div className="text-right">
          <p className="font-black">{amount}</p>
          <p className="mt-1 text-xs text-signal">{status}</p>
        </div>
        <ChevronRight className="text-slate-600" size={18} />
      </div>
    </article>
  );
}

function MessagesView() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <section className="border border-white/10 bg-white/[0.025]">
        <div className="border-b border-white/10 p-5">
          <h2 className="font-black">Project conversations</h2>
        </div>
        {["HES-1042 · Roof Documentation", "HES-1038 · Listing Media"].map(
          (thread, index) => (
            <button
              type="button"
              key={thread}
              className={`block w-full border-b border-white/10 p-5 text-left ${
                index === 0 ? "bg-flight/10" : ""
              }`}
            >
              <p className="text-sm font-bold">{thread}</p>
              <p className="mt-2 truncate text-xs text-slate-500">
                {index === 0
                  ? "We prepared the proposed scope..."
                  : "Weather window confirmed for..."}
              </p>
            </button>
          ),
        )}
      </section>
      <section className="flex min-h-[420px] flex-col border border-white/10 bg-white/[0.025]">
        <div className="border-b border-white/10 p-5">
          <p className="font-black">Commercial Roof Documentation</p>
          <p className="mt-1 text-xs text-slate-500">Mission HES-1042</p>
        </div>
        <div className="flex-1 space-y-4 p-5">
          <div className="max-w-md bg-white/5 p-4 text-sm leading-6 text-slate-300">
            We prepared the proposed scope based on your roof documentation
            request. Please review the payment milestone when ready.
          </div>
          <div className="ml-auto max-w-sm bg-flight p-4 text-sm leading-6 text-white">
            Thank you. I will review the estimate and confirm the preferred
            scheduling window.
          </div>
        </div>
        <div className="flex gap-2 border-t border-white/10 p-4">
          <input
            className="min-h-11 min-w-0 flex-1 border border-white/10 bg-navy px-4 text-sm outline-none focus:border-flight"
            placeholder="Write a project message..."
          />
          <button
            type="button"
            className="min-h-11 bg-flight px-5 text-sm font-black"
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const color =
    status === "Delivered"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : status === "Scheduled"
        ? "border-flight/30 bg-flight/10 text-blue-300"
        : "border-signal/30 bg-signal/10 text-signal";

  return (
    <span className={`border px-2 py-1 text-[10px] font-black uppercase ${color}`}>
      {status}
    </span>
  );
}

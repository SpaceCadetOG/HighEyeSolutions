"use client";

import {
  Banknote,
  Bell,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Eye,
  LayoutDashboard,
  MapPin,
  Menu,
  PlaneTakeoff,
  Plus,
  ReceiptText,
  ShieldCheck,
  UserRound,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  demoClients,
  demoDeliverablePackages,
  demoInvoices,
  demoMissions,
  type DemoMission,
} from "@/lib/portal-data";

type AdminView =
  | "overview"
  | "missions"
  | "deliverables"
  | "clients"
  | "billing"
  | "payables"
  | "pilots";

const adminNavigation = [
  { id: "overview" as const, label: "Operations", icon: LayoutDashboard },
  { id: "missions" as const, label: "Mission Queue", icon: PlaneTakeoff },
  { id: "deliverables" as const, label: "Deliverable Review", icon: Eye },
  { id: "clients" as const, label: "Client History", icon: Users },
  { id: "billing" as const, label: "Invoices & Receipts", icon: FileText },
  { id: "payables" as const, label: "Pilot Payables", icon: WalletCards },
  { id: "pilots" as const, label: "Pilots", icon: UserRound },
];

export function AdminDashboard() {
  const [view, setView] = useState<AdminView>("overview");
  const [mobileNav, setMobileNav] = useState(false);
  const [expandedMission, setExpandedMission] = useState<string | null>(
    "HES-1042",
  );

  const selectView = (next: AdminView) => {
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
            aria-label="Toggle admin navigation"
          >
            {mobileNav ? <X size={19} /> : <Menu size={19} />}
          </button>
          <span className="flex h-9 w-9 items-center justify-center border border-signal/40 bg-signal/10 text-xs font-black text-signal">
            HE
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em]">
              Admin Mission Control
            </p>
            <p className="text-xs text-slate-500">Dispatcher demo workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300"
            aria-label="Admin notifications"
          >
            <Bell size={18} />
          </button>
          <div className="hidden border-l border-white/10 pl-4 sm:block">
            <p className="text-sm font-bold">Victor Ogbebor</p>
            <p className="text-xs text-slate-500">Administrator · Dispatch</p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        <aside
          className={`fixed bottom-0 left-0 top-16 z-30 w-64 border-r border-white/10 bg-navy p-4 transition-transform lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
            mobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="grid gap-1">
            {adminNavigation.map(({ id, label, icon: Icon }) => (
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
          <div className="mt-8 border border-flight/25 bg-flight/5 p-4">
            <ShieldCheck className="text-flight" size={20} />
            <p className="mt-3 text-sm font-bold">Admin-only controls</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Production access will require administrator authentication,
              role checks, and an immutable audit event for every override.
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
                  ? "Operations command"
                  : adminNavigation.find((item) => item.id === view)?.label}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Track missions received, client history, receivables, and
                pilot payables.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-signal px-5 text-sm font-black text-navy"
            >
              <Plus size={18} /> Create Mission
            </button>
          </div>

          {view === "overview" ? (
            <AdminOverview
              onNavigate={selectView}
              expandedMission={expandedMission}
              onToggleMission={setExpandedMission}
            />
          ) : null}
          {view === "missions" ? (
            <AdminMissionQueue
              expandedMission={expandedMission}
              onToggleMission={setExpandedMission}
            />
          ) : null}
          {view === "deliverables" ? <AdminDeliverables /> : null}
          {view === "clients" ? <ClientHistory /> : null}
          {view === "billing" ? <AdminBilling /> : null}
          {view === "payables" ? <Payables /> : null}
          {view === "pilots" ? <PilotManagement /> : null}
        </main>
      </div>
    </div>
  );
}

function AdminOverview({
  onNavigate,
  expandedMission,
  onToggleMission,
}: {
  onNavigate: (view: AdminView) => void;
  expandedMission: string | null;
  onToggleMission: (missionId: string | null) => void;
}) {
  const stats = [
    { label: "Missions Received", value: "3", icon: PlaneTakeoff },
    { label: "Client Receivables", value: "$300", icon: CircleDollarSign },
    { label: "Pilot Payables", value: "$735", icon: WalletCards },
    { label: "Awaiting Review", value: "1", icon: FileCheck2 },
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
      <section className="mt-8 border border-white/10 bg-white/[0.025]">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <h2 className="text-lg font-black">Priority mission queue</h2>
            <p className="mt-1 text-xs text-slate-500">
              Received assignments requiring dispatch action.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("missions")}
            className="text-sm font-bold text-flight"
          >
            View queue
          </button>
        </div>
        <AdminMissionRows
          expandedMission={expandedMission}
          onToggleMission={onToggleMission}
        />
      </section>
    </>
  );
}

function AdminMissionQueue({
  expandedMission,
  onToggleMission,
}: {
  expandedMission: string | null;
  onToggleMission: (missionId: string | null) => void;
}) {
  return (
    <section className="mt-8 border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-black">All received missions</h2>
        <p className="mt-1 text-sm text-slate-500">
          Expand a row to review scope, assignment data, billing, and activity.
        </p>
      </div>
      <AdminMissionRows
        expandedMission={expandedMission}
        onToggleMission={onToggleMission}
      />
    </section>
  );
}

function AdminMissionRows({
  expandedMission,
  onToggleMission,
}: {
  expandedMission: string | null;
  onToggleMission: (missionId: string | null) => void;
}) {
  return (
    <div className="divide-y divide-white/10">
      {demoMissions.map((mission) => (
        <article key={mission.id}>
          <button
            type="button"
            onClick={() =>
              onToggleMission(expandedMission === mission.id ? null : mission.id)
            }
            className="grid w-full gap-4 p-5 text-left transition hover:bg-white/[0.035] lg:grid-cols-[1fr_180px_130px_24px] lg:items-center"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-bold">{mission.title}</p>
                <AdminStatus status={mission.status} />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {mission.id} · {mission.client} · {mission.location}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Deadline / SLA</p>
              <p className="mt-1 text-sm font-bold text-slate-200">
                {mission.deadline}
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-xs text-slate-500">Client / payable</p>
              <p className="mt-1 text-sm font-black">
                ${mission.price} / ${mission.payable}
              </p>
            </div>
            <ChevronRight
              className={`text-slate-500 transition ${
                expandedMission === mission.id ? "rotate-90" : ""
              }`}
              size={18}
            />
          </button>
          {expandedMission === mission.id ? (
            <AdminMissionDetails mission={mission} />
          ) : null}
        </article>
      ))}
    </div>
  );
}

function AdminMissionDetails({ mission }: { mission: DemoMission }) {
  return (
    <div className="border-t border-flight/20 bg-flight/[0.045] p-5">
      <div className="grid gap-6 lg:grid-cols-4">
        <AdminDetail title="Assignment">
          <Line label="Property" value={mission.propertyAddress} />
          <Line label="Client" value={mission.client} />
          <Line label="Pilot" value={mission.assignedPilot} />
          <Line label="Contact" value={mission.onsiteContact} />
        </AdminDetail>
        <AdminDetail title="Claim / Access">
          <Line label="Claim" value={mission.claimNumber ?? "Not applicable"} />
          <Line label="Carrier" value={mission.carrier ?? "Not applicable"} />
          <Line label="Access" value={mission.access} />
        </AdminDetail>
        <AdminDetail title="Scope">
          <MiniList items={mission.scope} />
        </AdminDetail>
        <AdminDetail title="Deliverables">
          <MiniList items={mission.deliverables} />
        </AdminDetail>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
        <button type="button" className="bg-flight px-4 py-2 text-sm font-bold">
          Assign Pilot
        </button>
        <button type="button" className="border border-white/15 px-4 py-2 text-sm font-bold">
          Update Status
        </button>
        <button type="button" className="border border-white/15 px-4 py-2 text-sm font-bold">
          Review Invoice
        </button>
        <button type="button" className="border border-white/15 px-4 py-2 text-sm font-bold">
          View Audit Trail
        </button>
      </div>
    </div>
  );
}

function AdminDeliverables() {
  return (
    <div className="mt-8 grid gap-6">
      {demoDeliverablePackages.map((delivery) => {
        const released = delivery.status === "Released";
        return (
          <section
            key={delivery.id}
            className="border border-white/10 bg-white/[0.025]"
          >
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-black">{delivery.missionTitle}</h2>
                  <AdminStatus status={delivery.status} />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {delivery.id} · {delivery.missionId} · {delivery.client}
                </p>
              </div>
              <div className="lg:text-right">
                <p className="text-xs text-slate-500">Payment state</p>
                <p className="mt-1 text-sm font-bold text-slate-200">
                  {delivery.paymentStatus}
                </p>
              </div>
            </div>
            <div className="grid gap-6 p-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/15 bg-[linear-gradient(145deg,#15243a,#304761_50%,#8794a3)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
                <div className="absolute inset-x-[12%] top-[25%] h-[48%] border border-white/25 bg-navy/35 [clip-path:polygon(50%_0,100%_35%,82%_100%,18%_100%,0_35%)]" />
                {delivery.preview.watermark ? (
                  <div className="absolute inset-0 flex -rotate-12 items-center justify-center">
                    <p className="border-y-4 border-white/50 bg-navy/55 px-5 py-3 text-center text-base font-black uppercase tracking-[0.12em] text-white/70">
                      {delivery.preview.watermark}
                    </p>
                  </div>
                ) : null}
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-flight">
                  Admin Perspective
                </p>
                <h3 className="mt-3 text-xl font-black">
                  {released
                    ? "Release complete and logged"
                    : "Review proof before client release"}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {released
                    ? "The client has clean-file access, the receipt is attached, and the audit trail records who released the package and when."
                    : "Admin verifies file count, watermarking, scope completion, payment funding, and client permissions before proofs become available."}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <AdminCheck
                    label="Scope"
                    value={released ? "Approved" : "Ready for review"}
                  />
                  <AdminCheck
                    label="Payment"
                    value={delivery.paymentStatus}
                  />
                  <AdminCheck
                    label="Originals"
                    value={delivery.release.originalAccess}
                  />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {!released ? (
                    <>
                      <button
                        type="button"
                        className="bg-flight px-4 py-2 text-sm font-bold"
                      >
                        Approve Proof Set
                      </button>
                      <button
                        type="button"
                        className="border border-white/15 px-4 py-2 text-sm font-bold"
                      >
                        Return to Pilot
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="border border-white/15 px-4 py-2 text-sm font-bold"
                      >
                        View Release Log
                      </button>
                      <button
                        type="button"
                        className="border border-white/15 px-4 py-2 text-sm font-bold"
                      >
                        View Receipt
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function AdminCheck({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-navy/50 p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-600">
        {label}
      </p>
      <p className="mt-2 text-xs font-bold leading-5 text-slate-300">{value}</p>
    </div>
  );
}

function ClientHistory() {
  return (
    <section className="mt-8 overflow-x-auto border border-white/10 bg-white/[0.025]">
      <table className="w-full min-w-[860px] text-left">
        <thead className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-500">
          <tr>
            <th className="px-5 py-4">Client</th>
            <th className="px-5 py-4">Type</th>
            <th className="px-5 py-4">Market</th>
            <th className="px-5 py-4">Missions</th>
            <th className="px-5 py-4">Lifetime value</th>
            <th className="px-5 py-4">Outstanding</th>
            <th className="px-5 py-4">History</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {demoClients.map((client) => (
            <tr key={client.id}>
              <td className="px-5 py-5">
                <p className="font-bold">{client.name}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {client.contact} · {client.email}
                </p>
              </td>
              <td className="px-5 py-5 text-sm text-slate-300">{client.type}</td>
              <td className="px-5 py-5 text-sm text-slate-300">{client.market}</td>
              <td className="px-5 py-5 font-bold">{client.missions}</td>
              <td className="px-5 py-5 font-bold">
                ${client.lifetimeValue.toLocaleString()}
              </td>
              <td className="px-5 py-5 font-bold text-signal">
                ${client.outstanding.toLocaleString()}
              </td>
              <td className="px-5 py-5">
                <button type="button" className="text-sm font-bold text-flight">
                  Open profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function AdminBilling() {
  return (
    <section className="mt-8 overflow-x-auto border border-white/10 bg-white/[0.025]">
      <table className="w-full min-w-[900px] text-left">
        <thead className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-500">
          <tr>
            <th className="px-5 py-4">Invoice</th>
            <th className="px-5 py-4">Client</th>
            <th className="px-5 py-4">Mission</th>
            <th className="px-5 py-4">Due</th>
            <th className="px-5 py-4">Amount</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Documents</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {demoInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="px-5 py-5 font-bold">{invoice.id}</td>
              <td className="px-5 py-5 text-sm text-slate-300">
                {invoice.client}
              </td>
              <td className="px-5 py-5 text-sm text-slate-300">
                {invoice.missionId}
              </td>
              <td className="px-5 py-5 text-sm text-slate-400">{invoice.due}</td>
              <td className="px-5 py-5 font-black">
                ${invoice.amount.toFixed(2)}
              </td>
              <td className="px-5 py-5">
                <AdminStatus status={invoice.status} />
              </td>
              <td className="px-5 py-5">
                <div className="flex gap-2">
                  <button type="button" className="border border-white/15 p-2" aria-label="View invoice">
                    <FileText size={16} />
                  </button>
                  <button type="button" className="border border-white/15 p-2" aria-label="View receipt">
                    <ReceiptText size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Payables() {
  return (
    <section className="mt-8 border border-white/10 bg-white/[0.025]">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-black">Pilot and vendor payables</h2>
        <p className="mt-1 text-sm text-slate-500">
          Compensation becomes payable after the configured approval milestone.
        </p>
      </div>
      <div className="divide-y divide-white/10">
        {demoMissions.map((mission) => (
          <article
            key={mission.id}
            className="grid gap-4 p-5 sm:grid-cols-[1fr_auto_auto] sm:items-center"
          >
            <div>
              <p className="font-bold">{mission.assignedPilot}</p>
              <p className="mt-1 text-xs text-slate-500">
                {mission.id} · {mission.title}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs text-slate-500">Approved payable</p>
              <p className="mt-1 font-black">${mission.payable.toFixed(2)}</p>
            </div>
            <AdminStatus
              status={mission.status === "Delivered" ? "Approved" : "Pending"}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function PilotManagement() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <article className="border border-white/10 bg-white/[0.025] p-6">
        <div className="flex h-12 w-12 items-center justify-center border border-flight/30 bg-flight/10 text-flight">
          <UserRound size={23} />
        </div>
        <h2 className="mt-5 text-xl font-black">Victor Ogbebor</h2>
        <p className="mt-1 text-sm text-slate-500">Primary pilot · Houston</p>
        <div className="mt-6 grid gap-3 text-sm">
          <Line label="FAA Part 107" value="Active status recorded" />
          <Line label="Aircraft" value="DJI Air 3S" />
          <Line label="Markets" value="TX · LA · IL mission review" />
          <Line label="Availability" value="Available by dispatch" />
        </div>
      </article>
      <article className="border border-white/10 bg-white/[0.025] p-6">
        <h2 className="text-xl font-black">Credential readiness</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Production dispatch will validate credential numbers, expiration
          dates, aircraft, insurance, service area, and mission requirements
          before a pilot can be assigned.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Part 107 verification",
            "Aircraft assignment",
            "COI and policy dates",
            "State authority review",
            "Night-operation currency",
            "Mission performance history",
          ].map((item) => (
            <div key={item} className="flex gap-3 border border-white/10 p-4 text-sm">
              <CheckCircle2 className="flex-none text-signal" size={18} />
              {item}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function AdminDetail({
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

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase text-slate-600">{label}</p>
      <p className="mt-1 text-sm leading-5 text-slate-300">{value}</p>
    </div>
  );
}

function MiniList({ items }: { items: string[] }) {
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

function AdminStatus({ status }: { status: string }) {
  const color =
    status === "Paid" || status === "Approved" || status === "Delivered"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : status === "Scheduled"
        ? "border-flight/30 bg-flight/10 text-blue-300"
        : "border-signal/30 bg-signal/10 text-signal";

  return (
    <span className={`w-fit border px-2 py-1 text-[10px] font-black uppercase ${color}`}>
      {status}
    </span>
  );
}

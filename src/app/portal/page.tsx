import {
  Banknote,
  CloudDownload,
  FileCheck2,
  MessageSquareText,
  PlaneTakeoff,
  ShieldCheck,
} from "lucide-react";
import { PortalAccess } from "@/components/portal-access";

export const metadata = {
  title: "Client Portal",
};

const portalCapabilities = [
  {
    title: "Request Missions",
    description:
      "Submit a location, service type, timeline, site notes, and target deliverables.",
    icon: PlaneTakeoff,
  },
  {
    title: "Track Projects",
    description:
      "Follow review, scheduling, flight, editing, and delivery milestones.",
    icon: FileCheck2,
  },
  {
    title: "Receive Deliverables",
    description:
      "Access organized photos, video, reports, and project files in one place.",
    icon: CloudDownload,
  },
  {
    title: "Project Messages",
    description:
      "Keep mission questions, updates, approvals, and revisions tied to the job.",
    icon: MessageSquareText,
  },
  {
    title: "Protected Payments",
    description:
      "Review estimates and future provider-managed escrow milestones before release.",
    icon: Banknote,
  },
  {
    title: "Controlled Access",
    description:
      "Future role-based authentication will protect client and project information.",
    icon: ShieldCheck,
  },
];

export default function PortalPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="pt-4">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-signal">
              High Eye Client Portal
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              One workspace from mission request to final delivery.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Built for property professionals, contractors, adjusters, and
              business clients who need clear status, organized files, and a
              reliable way to manage aerial work.
            </p>

            <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {portalCapabilities.map(({ icon: Icon, ...item }) => (
                <article key={item.title} className="bg-navy/95 p-5">
                  <Icon className="text-flight" size={21} />
                  <h2 className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <PortalAccess />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-start gap-4">
          <ShieldCheck className="mt-0.5 flex-none text-signal" size={22} />
          <p className="max-w-4xl text-sm leading-6 text-slate-300">
            Payment protection will be implemented through a qualified
            third-party marketplace payment provider. High Eye Solutions will
            not independently hold client funds. No live payment or escrow
            transaction is available in this MVP preview.
          </p>
        </div>
      </section>
    </>
  );
}

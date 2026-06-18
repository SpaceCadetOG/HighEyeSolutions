import { CheckCircle2, CircleDashed, MapPin } from "lucide-react";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { licensingRoadmap, serviceMarkets } from "@/lib/portal-data";

export const metadata = {
  title: "About",
};

const standards = [
  "Professional standards",
  "Reliable communication",
  "Safety-first planning",
  "Continuous learning",
  "Technical capability",
  "Client service",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A drone services company built for disciplined growth."
        description="High Eye Solutions was founded by Victor Ogbebor to provide professional aerial imaging, documentation, and drone support for property owners, contractors, real estate professionals, and local businesses."
      />

      <Section
        eyebrow="Founder"
        title="Led by Victor Ogbebor."
        description="High Eye Solutions brings a professional, technical, and mission-focused approach to commercial drone work. The company is in its startup stage, with Year 1 focused on serving local clients, building a credible portfolio, and developing repeatable systems for safe aerial operations."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="aerial-panel min-h-[340px] p-6 shadow-glow">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-signal">
                  Based in Houston, Texas
                </p>
                <h2 className="mt-4 text-3xl font-black text-white">
                  Professional aerial support, built one mission at a time.
                </h2>
              </div>
              <p className="mt-8 text-sm leading-6 text-slate-300">
                Initial operations are centered on the DJI Air 3S, with a
                future growth path toward enterprise aircraft such as the DJI
                Mavic 3 Enterprise when mapping, photogrammetry, and advanced
                inspection work become operational priorities.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {standards.map((standard) => (
              <div
                key={standard}
                className="border border-white/10 bg-white/5 p-5 text-sm font-bold text-slate-200"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Mission"
        title="Practical drone services with safety and communication at the center."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoBlock
            title="Year 1 Startup Focus"
            copy="The company is focused on building a professional portfolio, serving clients across its Texas, Louisiana, and Illinois mission network, gaining paid experience, learning profitable niches, and working through legitimate contractor channels."
          />
          <InfoBlock
            title="FAA Part 107 Compliance"
            copy="High Eye Solutions is FAA Part 107 certified and currently accepts commercial drone missions when airspace, access, weather, permissions, and site conditions support safe and lawful operations."
          />
          <InfoBlock
            title="Safety Commitment"
            copy="Every project requires thoughtful site review, weather awareness, airspace checks, permission considerations, and a clear go/no-go mindset."
          />
          <InfoBlock
            title="Military-Grade Structure"
            copy="Disciplined planning, accountability, calm communication, and mission-focused execution shape how projects are scoped, flown, and delivered."
          />
          <InfoBlock
            title="Technology and IT Background"
            copy="The company is built with technical systems in mind, from organized media delivery today to future portals, cloud storage, dashboards, and reporting tools."
          />
          <InfoBlock
            title="Future Growth Vision"
            copy="High Eye Solutions is building toward mapping, construction documentation, industrial inspection support, utilities, telecom, energy, data centers, and enterprise accounts."
          />
        </div>
      </Section>

      <Section
        eyebrow="Service Network"
        title="Houston-based support across priority regional markets."
        description="Missions are reviewed individually for scheduling, travel, airspace, access, credential requirements, weather, and safe operating conditions. Projects outside this network are welcome for review."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceMarkets.map((market) => (
            <article
              key={`${market.city}-${market.state}`}
              className="flex items-start gap-4 border border-white/10 bg-white/[0.035] p-5"
            >
              <MapPin className="mt-0.5 flex-none text-flight" size={20} />
              <div>
                <h2 className="font-black text-white">
                  {market.city}, {market.state}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{market.status}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 border border-signal/25 bg-signal/5 p-5 text-sm leading-6 text-slate-300">
          Expansion targets include Georgia, Florida, California, New York, and
          additional markets as credentials, pilot coverage, demand, and
          operating systems mature.
        </div>
      </Section>

      <Section
        eyebrow="Business Plan Timeline"
        title="Credential and insurance-market readiness."
        description="This presentation timeline separates active credentials from items that still need documentation or completion. License numbers and expiration dates should be verified before public licensed-status claims are enabled."
        className="bg-white/[0.03]"
      >
        <div className="grid gap-4">
          {licensingRoadmap.map((item, index) => {
            const active = item.status === "Active";
            return (
              <article
                key={item.title}
                className="grid gap-4 border border-white/10 bg-navy/60 p-5 sm:grid-cols-[48px_1fr_auto] sm:items-center"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center border ${
                    active
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                      : "border-white/15 bg-white/5 text-slate-500"
                  }`}
                >
                  {active ? <CheckCircle2 size={20} /> : <CircleDashed size={20} />}
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-600">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-1 text-lg font-black text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>
                <span
                  className={`w-fit border px-3 py-2 text-xs font-black uppercase ${
                    active
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : item.status === "Verify"
                        ? "border-signal/30 bg-signal/10 text-signal"
                        : "border-white/10 bg-white/5 text-slate-400"
                  }`}
                >
                  {item.status}
                </span>
              </article>
            );
          })}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function InfoBlock({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="aerial-panel p-6 shadow-glow">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
    </article>
  );
}

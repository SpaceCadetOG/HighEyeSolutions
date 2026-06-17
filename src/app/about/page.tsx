import { CtaBand, PageHero, Section } from "@/components/ui";

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
                  Houston, San Antonio & Chicago
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
            copy="The company is focused on building a professional portfolio, serving clients in Houston, San Antonio, and Chicago, gaining paid experience, learning profitable niches, and working through legitimate contractor channels."
          />
          <InfoBlock
            title="FAA Part 107 Compliance"
            copy="Operations and messaging are structured around FAA Part 107 requirements. The compliance language can be updated from certification in progress to FAA Part 107 certified when applicable."
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

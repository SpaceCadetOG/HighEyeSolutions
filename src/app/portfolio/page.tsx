import { CtaBand, PageHero, Section } from "@/components/ui";
import { portfolioCards } from "@/lib/content";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Portfolio placeholders for a growing aerial services company."
        description="High Eye Solutions is in the Year 1 portfolio-building stage. These cards identify the project categories the company is preparing to document with real client-approved media."
      />

      <Section
        eyebrow="Project Categories"
        title="Real work will replace placeholders as projects are completed."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioCards.map((card, index) => (
            <article key={card.title} className="aerial-panel overflow-hidden shadow-glow">
              <div className="relative h-48 border-b border-white/10 bg-gradient-to-br from-steel via-navy to-charcoal">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(47,128,237,0.28)_48%,transparent_49%)]" />
                <div className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-[0.22em] text-signal">
                  TODO: Add real project media
                </div>
                <div className="absolute right-4 top-4 text-5xl font-black text-white/10">
                  0{index + 1}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-flight">
                  {card.type}
                </p>
                <h2 className="mt-3 text-xl font-black text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {card.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.deliverables.map((deliverable) => (
                    <span
                      key={deliverable}
                      className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

import type { ComponentType } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero, Section } from "@/components/ui";
import { company } from "@/lib/content";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote for aerial support."
        description="Use the form to share the service needed, project location, site details, and preferred timeline. High Eye Solutions reviews scope, weather, airspace, and safety considerations before confirming any flight."
      />

      <Section
        eyebrow="Quote Request"
        title="Tell us what needs to be documented, filmed, or supported."
        description="Request a quote for aerial imaging, roof documentation, construction monitoring, or general drone support in Houston, San Antonio, or Chicago."
      >
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="grid content-start gap-5">
            <ContactCard
              icon={MapPin}
              title="Service Area"
              copy={company.serviceAreas}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              copy={company.email}
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              copy={company.phone}
            />
            <div className="aerial-panel p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-signal">
                Safety Note
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Project approval depends on safe weather, legal airspace,
                property access, site conditions, and applicable permissions.
              </p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: ComponentType<{ size?: number }>;
  title: string;
  copy: string;
}) {
  return (
    <div className="aerial-panel flex gap-4 p-5">
      <div className="flex h-11 w-11 flex-none items-center justify-center border border-flight/40 bg-flight/15 text-flight">
        <Icon size={21} />
      </div>
      <div>
        <p className="text-sm font-black text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p>
      </div>
    </div>
  );
}

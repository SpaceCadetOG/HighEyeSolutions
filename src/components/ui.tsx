import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-signal">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-signal">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function IconCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="aerial-panel p-6 shadow-glow">
      <div className="mb-5 flex h-11 w-11 items-center justify-center border border-flight/40 bg-flight/15 text-flight">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-signal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border border-signal/30 bg-white px-6 py-10 text-navy sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-steel">
            Drone Support
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Need aerial documentation or media?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            Request a quote for aerial imaging, roof documentation,
            construction monitoring, or general drone support in Houston, San
            Antonio, or Chicago. Outside this network? Reach out and we can
            review the project.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-flight lg:mt-0"
        >
          Request Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

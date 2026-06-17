const services = [
  "Real Estate Aerial Media",
  "Roof Documentation",
  "Construction Monitoring",
  "Marketing Content",
  "Insurance Documentation Support",
  "General Aerial Support",
  "Future Mapping / Photogrammetry",
];

export function ContactForm() {
  return (
    <form className="aerial-panel grid gap-5 p-6 shadow-glow sm:p-8">
      {/* TODO Phase 2: Connect this form to a backend contact API with validation, email notifications, CRM integration, and spam protection. */}
      {/* TODO Phase 3: Route authenticated clients into a portal for project tracking, deliverable downloads, scheduling, and automated reporting. */}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" />
        <Field label="Email" name="email" placeholder="you@example.com" type="email" />
        <Field label="Phone" name="phone" placeholder="(###) ###-####" />
        <Field label="Company" name="company" placeholder="Company or organization" />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Service Needed
        <select
          name="service"
          className="border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none transition focus:border-flight"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <Field
        label="Project Location"
        name="location"
        placeholder="Houston, San Antonio, DFW, Chicago, or outside-network project location"
      />
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Project Description
        <textarea
          name="description"
          rows={6}
          placeholder="Tell us what you need documented, filmed, inspected, or supported."
          className="resize-y border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-flight"
        />
      </label>
      <Field
        label="Preferred Timeline"
        name="timeline"
        placeholder="Example: this week, next month, weather dependent"
      />
      <button
        type="button"
        className="bg-signal px-5 py-3 text-sm font-black text-navy transition hover:bg-white"
      >
        Submit Quote Request
      </button>
      <p className="text-xs leading-5 text-slate-500">
        Form submission is currently UI-only for the MVP. Backend handling,
        email notifications, online scheduling, and GCP Cloud Storage delivery
        are planned future integrations.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-flight"
      />
    </label>
  );
}

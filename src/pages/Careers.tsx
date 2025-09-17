import { BarChart3, FlaskConical, Users, Warehouse, CheckCircle2, Linkedin } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-12 pb-10 sm:pt-16 sm:pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          We are always looking for
          <br className="hidden sm:block" />
          Innovators and Team Players
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Foundation Brothers is on a mission to make the construction hassle free to all.
        </p>

        <p className="mt-8 font-medium text-muted-foreground">Foundation Brothers offering</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Feature icon={<FlaskConical className="h-8 w-8 text-foreground/70" />} title={"Innovative Work\nEnvironment"} />
          <Feature icon={<BarChart3 className="h-8 w-8 text-foreground/70" />} title={"Opportunities\nfor Growth"} />
          <Feature icon={<Users className="h-8 w-8 text-foreground/70" />} title={"Collaborative\nCulture"} />
          <Feature icon={<Warehouse className="h-8 w-8 text-foreground/70" />} title={"Impactful on-site\nProjects"} />
        </div>

        <a
          href="/about"
          className="mt-8 inline-flex items-center justify-center rounded-md border border-border bg-yellow-200 px-4 py-2 text-sm font-medium text-foreground hover:bg-yellow-300 transition"
        >
          Learn more about our team and our values <span className="ml-1 underline">Click here</span>
        </a>
      </section>

      {/* Current openings / Apply */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Current openings, apply today</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Left - visual + steps */}
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img
              src="/assets/hiring.jpg"
              alt="Office team working"
              className="h-96 w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-semibold max-w-sm">Want to work with us? Tell us a bit about yourself!</h3>
              </div>
              <ol className="space-y-3 text-white/90">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-white" /> Add your details</li>
                <li className="flex items-center gap-2 opacity-80"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/70 text-xs">2</span> Additional Information</li>
              </ol>
            </div>
          </div>

          {/* Right - form */}
          <div className="rounded-lg border border-border p-6 sm:p-8 bg-card">
            <h3 className="text-lg font-medium">Add your details</h3>
            <form className="mt-6 grid gap-4">
              <LabeledInput label="Name" placeholder="Your name" />
              <div className="grid grid-cols-3 gap-3">
                <LabeledInput label="Mobile" placeholder="91+" />
                <LabeledInput label="" placeholder="00000 00000" className="col-span-2" />
              </div>
              <LabeledInput label="Email" type="email" placeholder="you@mail.com" />
              <LabeledInput label="Location" placeholder="City" />
              <LabeledInput label="LinkedIn" placeholder="www.linkedin.com/youraccount" />
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 disabled:opacity-50">
                Next
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why we're special */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Why we’re special to work with</h2>
            <p className="mt-4 text-muted-foreground">
              At Foundation Brothers, we foster innovation, collaboration, and personal growth. We encourage every team member to push boundaries and make meaningful contributions. With a focus on creativity and continuous learning, we ensure that your work truly matters and helps you advance in your career.
            </p>
            <a
              href="https://www.linkedin.com/company/foundationbrothers/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0A66C2] text-white px-4 py-2 text-sm hover:opacity-95"
            >
              <Linkedin className="h-4 w-4" /> Submit your CV
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              and you’ll be contacted if we have any openings in near future.
            </p>
          </div>
          <div className="relative h-[460px]">
            <img
              src="/assets/team-members.jpg"
              alt="Team group photo"
              className="absolute left-6 top-6 h-64 w-64 sm:h-72 sm:w-72 object-cover rounded-md shadow-md rotate-[-4deg]"
            />
            <img
              src="/assets/team-member-2.jpg"
              alt="Office celebration"
              className="absolute right-8 top-0 h-40 w-56 object-cover rounded-md shadow-md rotate-[6deg]"
            />
            <img
              src="/assets/team-members-3.jpg"
              alt="Team in office"
              className="absolute right-10 bottom-6 h-64 w-80 object-cover rounded-md shadow-md rotate-[2deg]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  const [line1, line2] = title.split("\n");
  return (
    <div className="flex flex-col items-center gap-2 border border-border rounded-lg py-6">
      {icon}
      <div className="text-center">
        <p className="text-sm font-medium">{line1}</p>
        <p className="text-sm">{line2}</p>
      </div>
    </div>
  );
}

function LabeledInput({ label, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; className?: string }) {
  return (
    <label className={`grid gap-1 ${className}`}>
      {label ? <span className="text-xs text-muted-foreground">{label}</span> : null}
      <input
        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
        {...props}
      />
    </label>
  );
}

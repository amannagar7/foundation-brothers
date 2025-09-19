import { BarChart3, FlaskConical, Users, Warehouse, CheckCircle2, Linkedin } from "lucide-react";
import React, { useState } from "react";
import Toast from '../components/Toast';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 pb-8 sm:pt-16 sm:pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          We are always looking for
          <br className="hidden sm:block" />
          Innovators and Team Players
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Foundation Brothers is on a mission to make the construction hassle free to all.
        </p>

        <p className="mt-8 font-medium text-muted-foreground">Foundation Brothers offering</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Current openings, apply today</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Left - visual + steps */}
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img
              src="/assets/hiring.jpg"
              alt="Office team working"
              className="h-64 sm:h-80 md:h-96 w-full object-cover object-top"
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
          <div className="rounded-lg border border-border p-5 sm:p-8 bg-card">
            <h3 className="text-lg font-medium">Add your details</h3>
            <HiringForm />
          </div>
        </div>
      </section>

      {/* Why we're special */}
      <section id="why" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
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
          <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
            <img
              src="/assets/team-members.jpg"
              alt="Team group photo"
              className="absolute left-4 top-6 h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 object-cover rounded-md shadow-md rotate-[-4deg]"
            />
            <img
              src="/assets/team-member-2.jpg"
              alt="Office celebration"
              className="absolute right-6 top-0 h-32 w-44 sm:h-40 sm:w-56 object-cover rounded-md shadow-md rotate-[6deg]"
            />
            <img
              src="/assets/team-members-3.jpg"
              alt="Team in office"
              className="absolute right-6 bottom-6 h-48 w-64 sm:h-64 sm:w-80 object-cover rounded-md shadow-md rotate-[2deg]"
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

function HiringForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [experience, setExperience] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success"|"error">("success");

  const getSuccessMessage = () => {
    const messages = [
      "🎯 Amazing! Your job application is on its way!",
      "✨ Fantastic! We're excited to review your profile!",
      "🚀 Brilliant! Our HR team will contact you soon!",
      "💫 Perfect! Your application is successfully submitted!",
      "🌟 Wonderful! We'll get back to you if there's a match!",
      "🎊 Excellent! Your career journey with us starts now!",
      "💎 Outstanding! We're thrilled to see your interest!",
      "🔥 Incredible! Welcome to the Foundation Brothers family!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name, 
          email, 
          phone, 
          message: `Job Application - Position: ${position}, Experience: ${experience}, Location: ${location}, LinkedIn: ${linkedin}` 
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send");
      }
      setStatus("ok");
      setName(""); setPhone(""); setEmail(""); setLocation(""); setLinkedin(""); setExperience(""); setPosition("");
      
      // Show success toast
      setToastMessage(getSuccessMessage());
      setToastType("success");
      setShowToast(true);
    } catch (err: any) {
      setStatus("error");
      
      // Show error toast
      setToastMessage("Oops! Something went wrong. Please try again.");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
          duration={4000}
        />
      )}
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      
      {step === 1 && (
        <>
          <LabeledInput 
            label="Name" 
            placeholder="Your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="grid grid-cols-3 gap-3">
            <LabeledInput 
              label="Mobile" 
              placeholder="91+" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <LabeledInput 
              label="" 
              placeholder="00000 00000" 
              className="col-span-2"
            />
          </div>
          <LabeledInput 
            label="Email" 
            type="email" 
            placeholder="you@mail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LabeledInput 
            label="Location" 
            placeholder="City" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <LabeledInput 
            label="LinkedIn" 
            placeholder="www.linkedin.com/youraccount" 
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <button 
            type="button" 
            onClick={() => setStep(2)}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 disabled:opacity-50"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <LabeledInput 
            label="Position Applied For" 
            placeholder="e.g., Civil Engineer, Project Manager" 
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Experience</label>
            <textarea
              placeholder="Tell us about your relevant experience..."
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              rows={4}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            />
          </div>
          <div className="flex gap-2">
            <button 
              type="button" 
              onClick={() => setStep(1)}
              className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm hover:opacity-90"
            >
              Back
            </button>
            <button 
              type="submit" 
              disabled={status === "sending"}
              className="flex-1 inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </>
      )}
    </form>
    </>
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

import React, { useState } from 'react'
import { Mail, MapPin, Phone, ArrowUpRight, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const enquiryPhone = "+917374940023";
  const maintenancePhone = "+917374940023";
  const email = "info@foundationbrothers.in";
  const address = "Mansarovar, Jaipur, Rajasthan, India";
  const gmapUrl = "https://www.google.com/maps?q=26.9124,75.7873&hl=en&z=14";

  const [copied, setCopied] = useState(false)
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top: Get in touch + Form */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 grid gap-8 md:grid-cols-2">
        {/* Left info */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get in touch with us</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Foundation Brothers serves you focused and extremely tailored solutions to fit your needs, budget and aesthetic preferences. Unsure of what you desire or need in your space? Get in touch with us and we will help you choose from endless possibilities.
          </p>

          <div className="mt-8 space-y-6">
            <InfoRow
              icon={<Phone className="h-5 w-5" />}
              title="Phone Number"
              content={
                <div>
                  <p>Enquiry: <a className="underline underline-offset-2" href={`tel:${enquiryPhone}`}>{enquiryPhone}</a></p>
                  <p>Maintenance: <a className="underline underline-offset-2" href={`tel:${maintenancePhone}`}>{maintenancePhone}</a></p>
                </div>
              }
            />
            <hr className="border-border" />
            <InfoRow
              icon={<Mail className="h-5 w-5" />}
              title="Email us"
              content={<a href={`mailto:${email}`} className="underline underline-offset-2">{email}</a>}
            />
            <hr className="border-border" />
            <InfoRow
              icon={<MapPin className="h-5 w-5" />}
              title="Office Address"
              content={<p>{address}</p>}
            />
          </div>
        </div>

        {/* Right form */}
        <div className="rounded-xl border border-border bg-yellow-200 p-4 sm:p-6 md:p-8">
          <div className="rounded-lg bg-yellow-200/50 p-2 sm:p-3">
            <h2 className="text-xl sm:text-2xl font-semibold">Send us your enquiry, get a call back from us</h2>
            <p className="mt-1 text-sm">We’ll call you within 2 working days</p>
            <form className="mt-5 grid gap-3">
              <LabeledInput placeholder="Name" />
              <LabeledInput placeholder="Phone Number" inputMode="tel" />
              <LabeledInput placeholder="Email" type="email" />
              <LabeledTextarea placeholder="Message" rows={5} />
              <button type="button" className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-white hover:opacity-90">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map + hours */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Visit our office</h2>
            <p className="text-sm text-muted-foreground">Find us on google map</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={copyAddress} className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
              {copied ? 'Copied!' : 'Copy address'}
            </button>
            <a
              href={gmapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
            >
              Open in Gmap <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[360px,1fr]">
          <div className="rounded-xl bg-neutral-900 text-white p-6 flex flex-col">
            <h3 className="text-center text-lg font-medium">Our office hours</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm/6">
              {[
                ["Monday", "10:30 am - 7:00 pm"],
                ["Tuesday", "10:30 am - 7:00 pm"],
                ["Wednesday", "10:30 am - 7:00 pm"],
                ["Thursday", "10:30 am - 7:00 pm"],
                ["Friday", "10:30 am - 7:00 pm"],
                ["Saturday", "10:30 am - 7:00 pm"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <li key={day} className="contents">
                  <span className="text-white/90">{day}</span>
                  <span className="text-white/80 text-right">{time}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${enquiryPhone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4" /> Book appointment
            </a>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.679726630969!2d75.739!3d26.853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYnNTQnNDMuMiJOIDc1JzQzJzQ5LjknRQ!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div className="grid gap-6 md:grid-cols-2 items-center rounded-xl border border-border bg-secondary p-6 sm:p-8">
          <div>
            <h3 className="text-2xl font-semibold">Talk to our experts, We offer FREE consultation</h3>
            <p className="mt-2 text-muted-foreground max-w-prose">Tell us more about your project, Let us understand your project.</p>
            <a
              href={`https://wa.me/${enquiryPhone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-md bg-yellow-300 px-4 py-2 text-sm font-medium text-foreground hover:bg-yellow-400"
            >
              Get free Estimation of your house
            </a>
          </div>
          <div>
            <img
              src="/assets/get-free-estimation-of-your-house.jpg"
              alt="Get free estimation of your house"
              className="w-full rounded-lg object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact

function InfoRow({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-foreground">
        {icon}
      </div>
      <div className="-mt-0.5">
        <p className="text-sm font-medium">{title}</p>
        <div className="text-sm text-foreground/80 mt-1">{content}</div>
      </div>
    </div>
  );
}

function LabeledInput({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={`h-11 w-full rounded-md border border-input bg-white/90 px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60 ${className}`}
      {...props}
    />
  );
}

function LabeledTextarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) {
  return (
    <textarea
      className={`w-full rounded-md border border-input bg-white/90 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60 ${className}`}
      {...props}
    />
  );
}
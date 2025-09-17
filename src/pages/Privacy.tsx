import { ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const enquiryPhone = "+91 7374940023";
  const email = "info@foundationbrothers.in";

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:underline">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span>Privacy policy</span>
        </nav>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 pt-6 pb-12 sm:pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: 24 Nov 2024</p>

        <p className="mt-6 leading-7 text-[0.975rem] text-foreground/90">
          Foundation Brothers ("we," "our," or "us") values your trust and is committed to protecting your privacy. This Privacy Policy
          outlines how we collect, use, and safeguard your personal information when you interact with our website and services.
          By using our website or availing of our services, you agree to the terms of this Privacy Policy.
        </p>

        <div className="mt-8 space-y-8 text-[0.975rem] leading-7">
          <section>
            <h2 className="font-medium text-lg">1. Information We Collect</h2>
            <p className="mt-2">We may collect the following types of information:</p>
            <div className="mt-3 space-y-4">
              <div>
                <p className="font-medium">1.1 Personal Information:</p>
                <ul className="mt-1 list-disc pl-5 text-foreground/90">
                  <li>Name, email address, phone number, and address provided during inquiries or consultations.</li>
                  <li>Financial information such as payment details when processing transactions.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">1.2 Non-Personal Information:</p>
                <ul className="mt-1 list-disc pl-5 text-foreground/90">
                  <li>Browser type, IP address, and browsing behaviour through cookies and analytics tools.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">1.3 Project-Specific Information:</p>
                <ul className="mt-1 list-disc pl-5 text-foreground/90">
                  <li>Construction project details, including location, plans, and preferences.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-medium text-lg">2. How We Use Your Information</h2>
            <p className="mt-2">We use your information for the following purposes:</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/90 space-y-1">
              <li>To provide and improve our construction and consultancy services.</li>
              <li>To communicate updates, appointments, and important service information.</li>
              <li>To process payments and maintain records for administrative and legal purposes.</li>
              <li>To enhance user experience and website performance using analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-lg">3. Data Sharing and Disclosure</h2>
            <p className="mt-2">We do not sell your personal information. We may share information with:</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/90 space-y-1">
              <li>Trusted third-party vendors involved in payments, hosting, or analytics.</li>
              <li>Legal authorities if required to comply with applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-lg">4. Data Security</h2>
            <p className="mt-2">
              We implement reasonable technical and organizational measures to protect your information. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">5. Your Rights</h2>
            <ul className="mt-3 list-disc pl-5 text-foreground/90 space-y-1">
              <li>Access, update, or delete your personal information where applicable.</li>
              <li>Opt-out of non-essential communications.</li>
              <li>Manage cookie preferences via your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-lg">6. Cookies & Analytics</h2>
            <p className="mt-2">
              Our website may use cookies and third-party analytics to improve functionality and understand user behaviour. You can
              disable cookies in your browser settings, though some features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">7. Contact Us</h2>
            <p className="mt-2">
              For questions about this Privacy Policy or your data, contact us at
              {" "}
              <a className="underline underline-offset-2" href={`mailto:${email}`}>{email}</a>
              {" "}
              or on WhatsApp at
              {" "}
              <a className="underline underline-offset-2" href={`https://wa.me/${enquiryPhone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                {enquiryPhone}
              </a>
              .
            </p>
          </section>
        </div>
      </section>

      {/* CTA banner (same style as Contact page) */}
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
              alt="Consultation"
              className="w-full rounded-lg object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

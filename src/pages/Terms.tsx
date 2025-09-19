import { ChevronRight } from "lucide-react";

export default function TermsAndConditionsPage() {
  const enquiryPhone = "+91 7374940023";
  const email = "info.foundationbrothers@gmail.com";

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:underline">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span>Terms and Conditions</span>
        </nav>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-6 pb-12 sm:pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Terms and Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: 24 Nov 2024</p>

        <p className="mt-6 leading-7 text-[0.975rem] text-foreground/90">
          Welcome to Foundation Brothers. Please read these Terms and Conditions carefully before requesting our services.
          By using our services or website, you agree to be bound by the following Terms and Conditions. If you do not agree
          with any part of these terms, please do not proceed with our services.
        </p>

        <p className="mt-6 leading-7 text-[0.975rem] text-foreground/90">
          <span className="font-medium">Disclaimer:</span> This is a simplified version of our Terms and Conditions. A detailed legal
          document is available upon request through our communication channels.
        </p>

        <div className="mt-8 space-y-8 text-[0.975rem] leading-7">
          <section>
            <h2 className="font-medium text-lg">1. Scope of Work</h2>
            <p className="mt-2 text-foreground/90">
              We, the Builders, commit to constructing the building on the specified plot of land as per the agreed plans,
              drawings, layouts, and specifications. The construction will be done using high‑quality materials and in a
              professional manner.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">2. Payment Terms</h2>
            <p className="mt-2 text-foreground/90">
              The Owner agrees to pay for the construction services as per the terms outlined in the Onsite app. A minimum
              balance of ₹2,00,000/- must be maintained. The Builder will commence construction within 15 days of receiving
              the first instalment and will complete the project within ten months from that date, subject to Force Majeure
              events and timely approvals.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">3. Access to the Site</h2>
            <p className="mt-2 text-foreground/90">
              The Owner will provide the Builder and their personnel, including subcontractors and employees, unrestricted
              access to the construction site to perform their duties efficiently.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">4. Approvals & Compliance</h2>
            <p className="mt-2 text-foreground/90">
              The Owner is responsible for obtaining necessary government approvals, permits, and clearances unless
              otherwise agreed in writing. All construction activities will adhere to applicable laws, safety standards, and
              municipal regulations.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">5. Materials & Quality</h2>
            <p className="mt-2 text-foreground/90">
              Materials used will meet the specifications agreed upon in the estimate. Any changes requested by the Owner
              after work has commenced may impact cost and timelines and will be documented as a change order.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">6. Timeline & Delays</h2>
            <p className="mt-2 text-foreground/90">
              While we strive to complete the project within the estimated timeline, delays may occur due to weather,
              material availability, labour issues, or other unforeseen events. Such delays will be communicated promptly.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">7. Site Safety</h2>
            <p className="mt-2 text-foreground/90">
              The Builder will follow standard safety practices on-site. The Owner agrees to restrict unauthorised access to
              the site for safety reasons.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">8. Warranty</h2>
            <p className="mt-2 text-foreground/90">
              Post‑completion, workmanship warranty will be provided as per the agreement. Manufacturer warranties, where
              applicable, will be passed on to the Owner.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">9. Cancellations & Refunds</h2>
            <p className="mt-2 text-foreground/90">
              If the Owner cancels the project after commencement, charges for work completed and procured materials will be
              payable. Refunds, if any, will be processed as per the written agreement.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">10. Intellectual Property</h2>
            <p className="mt-2 text-foreground/90">
              All drawings, designs, and documents shared by the Builder remain their intellectual property unless assigned
              otherwise in writing. The Owner may use them solely for the project for which they were provided.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">11. Limitation of Liability</h2>
            <p className="mt-2 text-foreground/90">
              To the maximum extent permitted by law, the Builder shall not be liable for indirect, incidental, or
              consequential damages arising out of or related to the project.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">12. Force Majeure</h2>
            <p className="mt-2 text-foreground/90">
              Neither party shall be liable for delays or failure to perform due to events beyond reasonable control,
              including natural disasters, strikes, government actions, or pandemics.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">13. Dispute Resolution</h2>
            <p className="mt-2 text-foreground/90">
              Any disputes shall be attempted to be resolved amicably. Failing which, they will be subject to the
              jurisdiction of the courts located in Hyderabad, Telangana, India.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">14. Amendments</h2>
            <p className="mt-2 text-foreground/90">
              We may update these Terms from time to time. Continued use of our services after changes constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">15. Contact</h2>
            <p className="mt-2 text-foreground/90">
              For questions regarding these Terms, contact us at
              {" "}
              <a className="underline underline-offset-2" href={`mailto:${email}`}>{email}</a>
              {" "}
              or on WhatsApp at
              {" "}
              <a
                className="underline underline-offset-2"
                href={`https://wa.me/${enquiryPhone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                {enquiryPhone}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">16. Acceptance of Terms</h2>
            <p className="mt-2 text-foreground/90">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-lg">17. Additional Disclaimer</h2>
            <p className="mt-2 text-foreground/90">
              This is a simplified version of our Terms and Conditions. A detailed legal document is available upon request
              through our communication channels.
            </p>
          </section>
        </div>
      </section>

      {/* CTA banner (same style as other pages) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid gap-6 md:grid-cols-2 items-center rounded-xl border border-border bg-secondary p-6 sm:p-8">
          <div>
            <h3 className="text-2xl font-semibold">Talk to our experts,We offer FREE consultation</h3>
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



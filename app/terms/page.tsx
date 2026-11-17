import { LegalFooter } from "../_components/LegalShell";

export default function Terms() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/cloudcap-mark.svg"
              alt="CloudCap Technologies"
              className="h-9 w-auto"
            />
            <span className="text-base font-bold text-white">
              CloudCap Technologies
            </span>
          </a>
          <a
            href="/"
            className="font-mono text-sm text-slate-400 hover:text-brand-400"
          >
            ← back to home
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 font-mono text-sm text-brand-400">$ terms</p>
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mb-10 font-mono text-xs text-slate-500">
          Last updated: November 17, 2026
        </p>

        <div className="space-y-10 text-slate-400">
          <section>
            <p className="leading-7">
              This website (the "Site") is operated by Dharmendra Chauhan
              under the name CloudCap Technologies ("CloudCap," "we," "us,"
              or "our"). This Site describes our IT infrastructure, Microsoft 365 and
              cybersecurity consulting services and how to buy them. By
              accessing or using this Site, or by buying our services, you
              agree to these Terms &amp; Conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Services, Prices &amp; Payment
            </h2>
            <p className="leading-7">
              Starting prices for our services are listed on our{" "}
              <a href="/pricing" className="text-brand-400 hover:underline">
                Pricing
              </a>{" "}
              page. Each engagement is confirmed by a written quote, proposal
              or service agreement that sets out the scope, price and
              timeline; that document applies to the engagement. Payments are
              made by card or bank transfer. Card payments are processed by
              Stripe, and we never receive or store full card numbers. Prices
              for customers in India exclude GST at the applicable rate.
            </p>
            <p className="mt-3 leading-7">
              Cancellations and refunds are covered by our{" "}
              <a href="/refund" className="text-brand-400 hover:underline">
                Refund &amp; Cancellation Policy
              </a>
              . All services are delivered remotely and digitally.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. Accuracy of Information
            </h2>
            <p className="leading-7">
              We aim to keep the information on this Site accurate and up to
              date, but make no warranties or representations as to its
              completeness or accuracy. Service capabilities, technologies
              used, and other details may evolve over time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. Intellectual Property
            </h2>
            <p className="leading-7">
              All content on this Site, including text, graphics, and logos,
              is the property of CloudCap Technologies unless otherwise
              noted, and may not be reproduced or used without permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Third-Party Tools &amp; Platforms
            </h2>
            <p className="leading-7">
              This Site references third-party or open-source platforms
              (including, without limitation, Microsoft 365, Azure, and
              Maester) to describe the technologies we work with. We are not
              the developer or owner of these third-party tools and make no
              warranties regarding them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Limitation of Liability
            </h2>
            <p className="leading-7">
              This Site and its content are provided on an "as is" basis. To
              the maximum extent permitted by law, CloudCap Technologies is
              not liable for any loss or damage arising from your use of, or
              reliance on, this Site. For paid services, our total liability
              for any claim is limited to the fees you paid for the service
              concerned in the 12 months before the claim, and we are not
              liable for indirect or consequential loss, such as lost profits
              or lost data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. External Links
            </h2>
            <p className="leading-7">
              This Site may link to third-party websites. We are not
              responsible for the content, accuracy, or practices of any
              linked external site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p className="leading-7">
              These Terms are governed by the laws of India. Any disputes
              arising in connection with this Site shall be subject to the
              exclusive jurisdiction of the courts at Aligarh, Uttar Pradesh,
              India.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Changes to These Terms
            </h2>
            <p className="leading-7">
              We may update these Terms from time to time. Continued use of
              this Site after changes are posted constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Contact Us
            </h2>
            <p className="leading-7">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:support@m365pro.io"
                className="text-brand-400 hover:underline"
              >
                support@m365pro.io
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <LegalFooter />
    </main>
  );
}

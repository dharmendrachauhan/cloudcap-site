export default function Terms() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="CloudCap Technologies"
              className="h-9 w-9 rounded-lg border border-slate-700 bg-slate-900 object-contain p-1"
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
          Last updated: July 27, 2026
        </p>

        <div className="space-y-10 text-slate-400">
          <section>
            <p className="leading-7">
              This website (the "Site") is operated by Dharmendra Chauhan
              under the name CloudCap Technologies ("CloudCap," "we," "us,"
              or "our"). This Site is provided for informational purposes
              only, to describe our IT infrastructure and cybersecurity
              consulting services. By accessing or using this Site, you agree
              to these Terms &amp; Conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Informational Purpose
            </h2>
            <p className="leading-7">
              This Site does not offer any products or services for sale, and
              does not process payments, orders, or transactions of any kind.
              Nothing on this Site constitutes a binding offer, quotation, or
              contract. Any actual engagement for services is governed
              separately by a mutually agreed proposal or service agreement
              between CloudCap Technologies and the client.
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
              reliance on, this Site.
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
              exclusive jurisdiction of the courts at Agra, Uttar Pradesh,
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

      <footer className="border-t border-slate-800 px-6 py-8 text-center font-mono text-xs text-slate-600">
        <div className="mb-2 flex justify-center gap-6">
          <a href="/terms" className="hover:text-brand-400">
            terms
          </a>
          <a href="/privacy" className="hover:text-brand-400">
            privacy
          </a>
        </div>
        © 2026 CloudCap Technologies. All rights reserved.
      </footer>
    </main>
  );
}

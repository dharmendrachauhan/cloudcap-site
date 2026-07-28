export default function Privacy() {
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
            className="font-mono text-sm text-slate-400 hover:text-violet-400"
          >
            ← back to home
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 font-mono text-sm text-violet-400">$ privacy</p>
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-10 font-mono text-xs text-slate-500">
          Last updated: July 27, 2026
        </p>

        <div className="space-y-10 text-slate-400">
          <section>
            <p className="leading-7">
              This Privacy Policy explains how CloudCap Technologies
              ("CloudCap," "we," "us," or "our"), operated by Dharmendra
              Chauhan, handles information in connection with this website
              (the "Site"). This Site is informational only — it does not
              have any forms, logins, e-commerce, or payment processing, and
              does not knowingly collect personal information beyond what is
              described below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Information We Collect
            </h2>
            <ul className="list-disc space-y-2 pl-5 leading-7">
              <li>
                <span className="text-slate-300">
                  Information you send us directly:
                </span>{" "}
                if you email us (for example, at support@m365pro.io), we
                receive whatever information you choose to include, such as
                your name, email address, and the contents of your message.
              </li>
              <li>
                <span className="text-slate-300">
                  Standard hosting logs:
                </span>{" "}
                like most websites, our hosting provider may automatically
                record basic technical information such as IP address,
                browser type, and pages visited, for security and
                performance purposes. This Site does not use analytics,
                advertising, or tracking cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. How We Use Information
            </h2>
            <p className="leading-7">
              Any information you send us by email is used only to respond to
              your inquiry and, if an engagement follows, to discuss and
              deliver services. Hosting logs are used only for the security
              and operation of the Site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. Data Sharing
            </h2>
            <p className="leading-7">
              We do not sell, rent, or share your information with third
              parties, except where required by law or a valid legal request
              from a government or judicial authority.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Data Retention
            </h2>
            <p className="leading-7">
              We retain emails and any information you send us only as long
              as reasonably necessary to respond to your inquiry or maintain
              a record of an ongoing engagement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Cookies
            </h2>
            <p className="leading-7">
              This Site does not use cookies for tracking or advertising. Any
              cookies set by the hosting platform itself are strictly
              functional and not used to identify or profile visitors.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Children's Privacy
            </h2>
            <p className="leading-7">
              This Site is not directed at individuals under the age of 18,
              and we do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Third-Party Links
            </h2>
            <p className="leading-7">
              This Site may link to third-party websites (such as Microsoft
              or Maester). We are not responsible for the privacy practices
              of those third-party sites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              8. Your Rights &amp; Grievances
            </h2>
            <p className="leading-7">
              If you have any concerns about how your information is
              handled, or wish to request that information you've sent us be
              corrected or deleted, you can contact our Grievance Officer:
            </p>
            <p className="mt-3 leading-7">
              <span className="text-slate-300">Dharmendra Chauhan</span>
              <br />
              CloudCap Technologies
              <br />
              Agra, Uttar Pradesh, India
              <br />
              Email:{" "}
              <a
                href="mailto:support@m365pro.io"
                className="text-violet-400 hover:underline"
              >
                support@m365pro.io
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              9. Changes to This Policy
            </h2>
            <p className="leading-7">
              If this Site's data practices change — for example, if we later
              add analytics, a contact form, or newsletter signup — this
              Policy will be updated to reflect that before those features go
              live.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              10. Contact Us
            </h2>
            <p className="leading-7">
              For any questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:support@m365pro.io"
                className="text-violet-400 hover:underline"
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
          <a href="/terms" className="hover:text-violet-400">
            terms
          </a>
          <a href="/privacy" className="hover:text-violet-400">
            privacy
          </a>
        </div>
        © 2026 CloudCap Technologies. All rights reserved.
      </footer>
    </main>
  );
}

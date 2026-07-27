export default function Home() {
  const services = [
    "Microsoft 365 Administration",
    "SharePoint Online",
    "Exchange Online",
    "Azure Infrastructure",
    "Microsoft Defender",
    "Microsoft Purview",
    "Intune & Endpoint Security",
    "Cloud Migrations",
    "PowerShell Automation",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold">CloudCap Technologies</h1>
            <p className="text-sm text-cyan-300">
              Microsoft Cloud & Security Consulting
            </p>
          </div>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <span>Services</span>
            <span>About</span>
            <span>Expertise</span>
            <span>Contact</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Microsoft 365 • Azure • Security • Compliance
            </p>

            <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Secure and modernize your Microsoft cloud environment.
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              CloudCap Technologies helps organizations plan, migrate, secure,
              and optimize Microsoft 365, Azure, SharePoint, Defender, Purview,
              Intune and modern workplace environments.
            </p>

            <a
              href="mailto:dc@m365pro.io"
              className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
            >
              Contact CloudCap
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
                CloudCap Focus
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white">
                Cloud • Identity • Security • Compliance
              </h3>
            </div>

            <div className="grid gap-4 text-sm text-slate-300">
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                Microsoft 365 tenant administration and modernization
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                SharePoint Online, Teams, OneDrive and Exchange Online
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                Defender, Intune, Entra ID, MFA and Conditional Access
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                Purview, DLP, retention, eDiscovery and governance
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Services
          </p>

          <h2 className="mb-12 max-w-3xl text-4xl font-bold">
            Microsoft cloud consulting services built for real business needs.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {service}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Consulting, implementation, optimization and support for
                  Microsoft cloud environments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              About
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Founded by Dharmendra Chauhan.
            </h2>

            <p className="mb-5 leading-8 text-slate-700">
              CloudCap Technologies is led by Dharmendra Chauhan, a Microsoft
              Cloud and Cybersecurity Consultant focused on helping organizations
              improve productivity, security, compliance and cloud adoption.
            </p>

            <p className="leading-8 text-slate-700">
              The consulting focus includes Microsoft 365, Azure, SharePoint
              Online, Exchange Online, Microsoft Defender, Microsoft Purview,
              Intune, Entra ID, PowerShell automation and cloud migration
              projects.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <p className="mb-2 text-sm uppercase tracking-widest text-cyan-300">
              Founder
            </p>

            <h3 className="mb-4 text-3xl font-bold">Dharmendra Chauhan</h3>

            <p className="mb-6 text-slate-300">
              Microsoft Cloud & Cybersecurity Consultant
            </p>

            <div className="grid gap-3 text-sm text-slate-300">
              <p>✓ Microsoft 365 administration and consulting</p>
              <p>✓ Azure infrastructure and security</p>
              <p>✓ SharePoint, Teams and collaboration platforms</p>
              <p>✓ Defender, Purview, Intune and Entra ID</p>
              <p>✓ PowerShell automation and technical project execution</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Ready to discuss a Microsoft cloud project?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Reach out for Microsoft 365, Azure, SharePoint, Security,
            Compliance, Defender, Purview, Intune or migration consulting.
          </p>

          <a
            href="mailto:dc@m365pro.io"
            className="inline-flex rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
          >
            dc@m365pro.io
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 CloudCap Technologies. All rights reserved.
      </footer>
    </main>
  );
}

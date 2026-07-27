export default function Home() {
  const services = [
    {
      title: "Microsoft 365",
      text: "Exchange Online, Teams, OneDrive, SharePoint Online, licensing, administration and tenant optimization.",
    },
    {
      title: "SharePoint & Collaboration",
      text: "SharePoint sites, document libraries, permissions, migration planning and collaboration design.",
    },
    {
      title: "Azure Infrastructure",
      text: "Azure virtual machines, networking, backups, security baselines and cloud infrastructure support.",
    },
    {
      title: "Security & Identity",
      text: "Microsoft Defender, Entra ID, MFA, Conditional Access, Intune and endpoint security guidance.",
    },
    {
      title: "Compliance & Purview",
      text: "Microsoft Purview, DLP, retention policies, eDiscovery, information protection and governance.",
    },
    {
      title: "Cloud Migrations",
      text: "Microsoft 365 migrations, Google Workspace to Microsoft 365, tenant-to-tenant and file migration support.",
    },
  ];

  const expertise = [
    "Microsoft 365",
    "Azure",
    "SharePoint Online",
    "Exchange Online",
    "Microsoft Teams",
    "OneDrive",
    "Intune",
    "Entra ID",
    "Microsoft Defender",
    "Microsoft Purview",
    "DLP",
    "Retention Policies",
    "eDiscovery",
    "Conditional Access",
    "MFA",
    "PowerShell",
    "Cloud Migrations",
    "Endpoint Security",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xl font-bold tracking-tight">
              CloudCap Technologies
            </p>
            <p className="text-xs text-cyan-300">
              Microsoft Cloud & Security Consulting
            </p>
          </div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            #servicesServices</a>
            #aboutAbout</a>
            #expertiseExpertise</a>
            #contactContact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Microsoft 365 • Azure • Security • Compliance
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Secure and modernize your Microsoft cloud environment.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              CloudCap Technologies helps organizations plan, migrate, secure,
              and optimize Microsoft 365, Azure, SharePoint, Defender, Purview,
              Intune and modern workplace environments.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:dc@m365pro.io"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
              >
                Contact CloudCap
              </a>

              #services
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
                CloudCap Focus
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Cloud • Identity • Security • Compliance
              </h2>
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

      <section id="services" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Services
            </p>
            <h2 className="text-4xl font-bold">
              Microsoft cloud consulting services built for real business needs.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-100 py-24 text-slate-950">
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

      <section id="expertise" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Expertise
            </p>
            <h2 className="text-4xl font-bold">
              Technologies and platforms supported.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-24 text-white">
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

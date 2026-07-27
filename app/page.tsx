export default function Home() {
  const services = [
    {
      name: "Microsoft 365 Administration",
      detail: "Tenant governance, licensing, and day-to-day admin done right.",
    },
    {
      name: "SharePoint & Teams",
      detail: "Site architecture, permissions, and migrations that don't break links.",
    },
    {
      name: "Exchange Online",
      detail: "Mail flow, transport rules, and mailbox migrations.",
    },
    {
      name: "Azure Infrastructure",
      detail: "VMs, networking, and identity built to actually be maintained.",
    },
    {
      name: "Microsoft Defender",
      detail: "Threat protection tuned for real alert fatigue, not noise.",
    },
    {
      name: "Microsoft Purview",
      detail: "DLP, retention, and eDiscovery mapped to your compliance needs.",
    },
    {
      name: "Intune & Endpoint Security",
      detail: "Device compliance and conditional access, rolled out safely.",
    },
    {
      name: "Cloud Migrations",
      detail: "File servers to SharePoint, on-prem to Azure, done in phases.",
    },
    {
      name: "PowerShell Automation",
      detail: "Scripts that replace the manual work you're doing today.",
    },
  ];

  const expertise = [
    "Microsoft 365",
    "Azure",
    "SharePoint Online",
    "Exchange Online",
    "Teams",
    "OneDrive",
    "Intune",
    "Entra ID",
    "Microsoft Defender",
    "Microsoft Purview",
    "DLP",
    "Retention",
    "eDiscovery",
    "Conditional Access",
    "MFA",
    "PowerShell",
    "Cloud Migrations",
    "Endpoint Security",
  ];

  const status = [
    { label: "M365_TENANT", value: "HEALTHY" },
    { label: "AZURE_INFRA", value: "OPTIMIZED" },
    { label: "SECURITY_POSTURE", value: "HARDENED" },
    { label: "COMPLIANCE", value: "CURRENT" },
  ];

  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="CloudCap Technologies"
              className="h-11 w-11 rounded-lg border border-slate-700 bg-slate-900 object-contain p-1.5"
            />
            <span>
              <p className="text-lg font-bold leading-tight text-white">
                CloudCap Technologies
              </p>
              <p className="font-mono text-xs text-indigo-400">
                microsoft cloud &amp; security
              </p>
            </span>
          </a>

          <nav className="hidden gap-8 font-mono text-sm text-slate-400 md:flex">
            <a href="#services" className="hover:text-indigo-400">
              services
            </a>
            <a href="#about" className="hover:text-indigo-400">
              about
            </a>
            <a href="#expertise" className="hover:text-indigo-400">
              expertise
            </a>
            <a href="#contact" className="hover:text-indigo-400">
              contact
            </a>
          </nav>

          <a
            href="mailto:support@m365pro.io"
            className="hidden rounded-md border border-indigo-500 px-4 py-2 font-mono text-sm text-indigo-400 hover:bg-indigo-500 hover:text-slate-950 md:inline-flex"
          >
            support@m365pro.io
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="border-b border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 font-mono text-xs text-indigo-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              tenant status: operational
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Your Microsoft cloud environment, running the way it's supposed to.
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
              CloudCap Technologies plans, migrates, secures, and maintains
              Microsoft 365 and Azure environments — administered by one
              person who reads the logs, not a ticket queue.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:support@m365pro.io"
                className="inline-flex justify-center rounded-md bg-indigo-500 px-6 py-3 font-semibold text-slate-950 hover:bg-indigo-400"
              >
                Get in touch
              </a>
              <a
                href="#services"
                className="inline-flex justify-center rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-indigo-500 hover:text-indigo-400"
              >
                See services
              </a>
            </div>
          </div>

          {/* Signature element: status console */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-500">
                cloudcap-status.sh
              </span>
            </div>

            <div className="space-y-3 p-6 font-mono text-sm">
              <p className="text-slate-500">$ cloudcap status --tenant</p>
              {status.map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-slate-400">{row.label}</span>
                  <span className="flex items-center gap-2 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {row.value}
                  </span>
                </div>
              ))}
              <p className="pt-2 text-slate-500">
                $ <span className="animate-pulse text-slate-300">_</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-mono text-sm text-indigo-400">$ services</p>
          <h2 className="mb-12 max-w-2xl text-3xl font-bold text-white md:text-4xl">
            Consulting and hands-on execution across the Microsoft stack.
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500"
              >
                <h3 className="mb-2 text-lg font-bold text-white">
                  {service.name}
                </h3>
                <p className="leading-6 text-slate-400">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-slate-800 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-mono text-sm text-indigo-400">$ about</p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Founded by Dharmendra Chauhan.
            </h2>
            <p className="mb-5 leading-8 text-slate-400">
              CloudCap Technologies is led by Dharmendra Chauhan, a Microsoft
              Cloud and Cybersecurity Consultant who helps organizations
              improve productivity, security, compliance, and cloud adoption.
            </p>
            <p className="leading-8 text-slate-400">
              The work covers Microsoft 365, Azure, SharePoint Online,
              Exchange Online, Microsoft Defender, Microsoft Purview, Intune,
              Entra ID, PowerShell automation, and cloud migration projects —
              handled end to end, not handed off.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
            <p className="mb-1 font-mono text-xs text-indigo-400">founder</p>
            <h3 className="mb-1 text-2xl font-bold text-white">
              Dharmendra Chauhan
            </h3>
            <p className="mb-6 text-slate-400">
              Microsoft Cloud &amp; Cybersecurity Consultant
            </p>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Microsoft 365 administration and consulting
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Azure infrastructure and security
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                SharePoint, Teams, and collaboration platforms
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Defender, Purview, Intune, and Entra ID
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                PowerShell automation and technical project execution
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-mono text-sm text-indigo-400">$ expertise</p>
          <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
            Platforms and technologies supported.
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {expertise.map((item) => (
              <span
                key={item}
                className="rounded-md border border-slate-800 bg-slate-900 px-3.5 py-1.5 font-mono text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 font-mono text-sm text-indigo-400">$ contact</p>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to fix, migrate, or harden your environment?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Reach out for Microsoft 365, Azure, SharePoint, Defender, Purview,
            Intune, or migration consulting.
          </p>
          <a
            href="mailto:support@m365pro.io"
            className="inline-flex rounded-md bg-indigo-500 px-8 py-3.5 font-semibold text-slate-950 hover:bg-indigo-400"
          >
            support@m365pro.io
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center font-mono text-xs text-slate-600">
        © 2026 CloudCap Technologies. All rights reserved.
      </footer>
    </main>
  );
}
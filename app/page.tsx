export default function Home() {
  const services = [
    {
      name: "Microsoft 365 Administration",
      detail: "Tenant governance, licensing optimization, and day-to-day admin done right.",
    },
    {
      name: "SharePoint & Teams",
      detail: "Site architecture, permissions, and zero-downtime migrations.",
    },
    {
      name: "Exchange Online",
      detail: "Mail flow hygiene, custom transport rules, and mailbox migrations.",
    },
    {
      name: "Azure Infrastructure",
      detail: "VMs, virtual networking, and identity built to actually be maintained.",
    },
    {
      name: "Microsoft Defender",
      detail: "Threat protection tuned for real alert fatigue, reducing false positives.",
    },
    {
      name: "Microsoft Purview",
      detail: "DLP, retention, and eDiscovery mapped directly to your compliance needs.",
    },
    {
      name: "Intune & Endpoint Security",
      detail: "Device compliance and conditional access, rolled out safely.",
    },
    {
      name: "Cloud Migrations",
      detail: "File servers to SharePoint, on-prem to Azure, executed in controlled phases.",
    },
    {
      name: "PowerShell Automation",
      detail: "Custom scripts and runbooks to eliminate repetitive manual overhead.",
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
    <main className="relative min-h-screen scroll-smooth overflow-hidden bg-slate-950 text-slate-100">
      {/* Datacenter Background Image with Dark Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
          alt="Datacenter Server Racks"
          className="h-full w-full object-cover opacity-15 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
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
        <section id="home" className="border-b border-slate-800/80">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-indigo-400 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                tenant status: operational
              </p>

              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Your Microsoft cloud environment, running the way it's supposed to.
              </h2>

              <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
                CloudCap Technologies plans, migrates, secures, and maintains
                Microsoft 365 and Azure environments — delivered with direct senior engineer
                access, not ticket queues.
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

            {/* Status Console */}
            <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur">
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

        {/* Visual Showcase / Infrastructure Section */}
        <section className="border-b border-slate-800/80 py-16 bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                  alt="Network Infrastructure & Cabling"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-bold text-white">Network &amp; Security Topology</h3>
                  <p className="mt-1 text-xs text-slate-400">Harden cloud perimeter and site-to-site tunnels.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Azure Data Center Racks"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-bold text-white">Azure Infrastructure</h3>
                  <p className="mt-1 text-xs text-slate-400">VM orchestration, hybrid identity, and virtual networks.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
                  alt="Cybersecurity Matrix"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-bold text-white">Defender &amp; Purview</h3>
                  <p className="mt-1 text-xs text-slate-400">Threat intelligence and automated data loss prevention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-indigo-400">$ services</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold text-white md:text-4xl">
              Consulting and hands-on execution across the Microsoft stack.
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 transition backdrop-blur hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10"
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
        <section id="about" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 font-mono text-sm text-indigo-400">$ about</p>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Specialized Microsoft Cloud Practice.
              </h2>
              <p className="mb-5 leading-8 text-slate-400">
                CloudCap Technologies provides focused Microsoft Cloud and Cybersecurity
                consulting to help organizations modernize operations, harden security postures,
                and streamline compliance.
              </p>
              <p className="leading-8 text-slate-400">
                The work covers Microsoft 365, Azure, SharePoint Online, Exchange Online,
                Microsoft Defender, Microsoft Purview, Intune, Entra ID, and PowerShell automation —
                handled with end-to-end technical accountability.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur">
              <p className="mb-1 font-mono text-xs text-indigo-400">overview</p>
              <h3 className="mb-1 text-2xl font-bold text-white">
                Core Capabilities
              </h3>
              <p className="mb-6 text-slate-400">
                Microsoft Cloud &amp; Cybersecurity Consultancy
              </p>

              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Microsoft 365 administration and tenant governance
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Azure infrastructure, identity, and security hardening
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  SharePoint, Teams, and collaboration architecture
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Defender, Purview, Intune, and Entra ID deployment
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
        <section id="expertise" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-indigo-400">$ expertise</p>
            <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
              Platforms and technologies supported.
            </h2>

            <div className="flex flex-wrap gap-2.5">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-800 bg-slate-900/80 px-3.5 py-1.5 font-mono text-sm text-slate-300 backdrop-blur"
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
      </div>
    </main>
  );
}
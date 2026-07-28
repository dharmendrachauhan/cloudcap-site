"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const coreServices = [
    {
      title: "Network & Perimeter Security",
      category: "Infrastructure",
      detail:
        "Next-gen firewall management, site-to-site VPNs, VLAN segmentation, zero-trust network access (ZTNA), and perimeter routing.",
    },
    {
      title: "Email Hygiene & Mail Flow Security",
      category: "Security",
      detail:
        "Strict DMARC/DKIM/SPF enforcement, inbound/outbound spam filtering, anti-phishing policies, and mail gateway hygiene.",
    },
    {
      title: "Microsoft Cloud & Identity",
      category: "Cloud",
      detail:
        "M365 tenant governance, Entra ID hybrid sync, Exchange Online, SharePoint architecture, and Azure infrastructure.",
    },
    {
      title: "Endpoint & Systems Management",
      category: "Operations",
      detail:
        "Patch management, RMM agent deployment, Intune device compliance, and endpoint threat detection across Windows and Linux.",
    },
    {
      title: "Virtualization & Cloud Migrations",
      category: "Modernization",
      detail:
        "On-prem Hyper-V / VMware environments to cloud or hybrid models, server migrations, and zero-downtime cutovers.",
    },
    {
      title: "Backup, DR & Business Continuity",
      category: "Resilience",
      detail:
        "Immutable backup strategies, ransomware resilience, automated disaster recovery testing, and rapid incident restoration.",
    },
  ];

  const maesterFeatures = [
    {
      title: "360+ built-in tests",
      detail:
        "Covers Entra ID, Exchange Online, Defender for Office 365, Teams, SharePoint, and Conditional Access out of the box.",
    },
    {
      title: "Mapped to real baselines",
      detail:
        "Wired into EIDSCA, CISA SCuBA, CIS Microsoft 365, and ORCA — not a one-off checklist someone made up.",
    },
    {
      title: "CI/CD scheduled runs",
      detail:
        "Runs nightly or on every change via GitHub Actions, Azure DevOps, or Azure Automation — configuration treated as code.",
    },
    {
      title: "Custom Pester tests",
      detail:
        "We encode your organization's own access and security policies as tests, so drift gets caught before it becomes an incident.",
    },
  ];

  const techStack = [
    "Firewalls & Routing",
    "VLANs & VPNs",
    "DMARC / DKIM / SPF",
    "Email Security Gateways",
    "Active Directory & Entra ID",
    "Microsoft 365",
    "Azure Infrastructure",
    "Hyper-V / VMware",
    "RMM & Patching",
    "Microsoft Defender",
    "Intune & MDM",
    "PowerShell Automation",
    "Maester & Pester Testing",
    "Backup & Disaster Recovery",
    "Linux / Windows Server",
    "Zero Trust Architecture",
  ];

  const reportRows = [
    {
      area: "Identity & Access",
      check: "Conditional Access baseline coverage",
      status: "pass",
    },
    {
      area: "Email Security",
      check: "DKIM / SPF / DMARC enforced",
      status: "pass",
    },
    {
      area: "Defender for Office 365",
      check: "Safe Links & Safe Attachments enabled",
      status: "pass",
    },
    {
      area: "SharePoint & Sharing",
      check: "External sharing scope",
      status: "review",
    },
  ];

  return (
    <main className="relative min-h-screen scroll-smooth overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Datacenter Image with Dark Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
          alt="Datacenter Infrastructure"
          className="h-full w-full object-cover opacity-15 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      {/* Content Layer */}
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
                <p className="font-mono text-xs text-violet-400">
                  it infrastructure &amp; cybersecurity
                </p>
              </span>
            </a>

            <nav className="hidden gap-8 font-mono text-sm text-slate-400 md:flex">
              <a href="#services" className="hover:text-violet-400">
                services
              </a>
              <a href="#maester" className="hover:text-violet-400">
                maester
              </a>
              <a href="#about" className="hover:text-violet-400">
                about
              </a>
              <a href="#capabilities" className="hover:text-violet-400">
                capabilities
              </a>
              <a href="#contact" className="hover:text-violet-400">
                contact
              </a>
            </nav>

            <a
              href="mailto:support@m365pro.io"
              className="hidden rounded-md border border-violet-500 px-4 py-2 font-mono text-sm text-violet-400 hover:bg-violet-500 hover:text-slate-950 md:inline-flex"
            >
              support@m365pro.io
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="border-b border-slate-800/80">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-violet-400 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                infrastructure state: healthy
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Complete IT Infrastructure &amp; Security Engineering.
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
                From firewalls, switches, and email hygiene to Microsoft 365,
                Azure, and virtualization — CloudCap Technologies designs,
                hardens, and manages your entire technology ecosystem.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:support@m365pro.io"
                  className="inline-flex justify-center rounded-md bg-violet-500 px-6 py-3 font-semibold text-slate-950 hover:bg-violet-400"
                >
                  Consult an Engineer
                </a>
                <a
                  href="#services"
                  className="inline-flex justify-center rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-violet-500 hover:text-violet-400"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Maester security report widget */}
            <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                <span className="font-mono text-xs text-slate-500">
                  maester-report.html
                </span>
                <span className="rounded border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-mono text-[11px] text-violet-400">
                  live tenant scan
                </span>
              </div>

              <div className="flex items-center gap-6 p-6">
                <svg width="96" height="96" viewBox="0 0 96 96" className="shrink-0">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-800"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.94)}
                    transform="rotate(-90 48 48)"
                    className="text-violet-400"
                  />
                  <text
                    x="48"
                    y="53"
                    textAnchor="middle"
                    className="fill-white text-lg font-bold"
                  >
                    94%
                  </text>
                </svg>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Tenant Security Score
                  </p>
                  <p className="font-mono text-xs text-slate-500">
                    47 passed · 1 to review · 0 failed
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 px-6 py-5">
                {reportRows.map((row) => (
                  <div
                    key={row.check}
                    className="flex items-center justify-between font-mono text-xs"
                  >
                    <span className="text-slate-400">
                      {row.area}
                      <span className="mx-2 text-slate-700">/</span>
                      <span className="text-slate-300">{row.check}</span>
                    </span>
                    {row.status === "pass" ? (
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        pass
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        review
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase: Networking, Security & Cloud */}
        <section className="border-b border-slate-800/80 bg-slate-900/40 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal>
                <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                    alt="Network Hardware & Firewall Setup"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white">
                      Networks &amp; Firewalls
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Switching, VLAN segmentation, site-to-site VPNs, and
                      perimeter threat control.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
                    alt="Email Security and Threat Prevention"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white">
                      Email &amp; Endpoint Protection
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      DMARC enforcement, anti-phishing gateways, EDR agents,
                      and automated patching.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                    alt="Cloud Infrastructure & Hybrid Server Environment"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white">
                      Hybrid Cloud &amp; Servers
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      M365, Azure, on-premises virtual machine orchestration,
                      and cloud migrations.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-violet-400">$ services</p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold text-white md:text-4xl">
              End-to-end IT consulting and hands-on system administration.
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {coreServices.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) * 100}>
                  <div className="flex h-full flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/80 p-6 transition backdrop-blur hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">
                    <div>
                      <span className="mb-3 inline-block rounded border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 font-mono text-xs text-violet-400">
                        {service.category}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-6 text-slate-400">
                        {service.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Maester */}
        <section
          id="maester"
          className="border-b border-slate-800/80 bg-slate-900/40 py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <Reveal>
                <div>
                  <p className="mb-3 font-mono text-sm text-violet-400">
                    $ maester --deploy
                  </p>
                  <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                    Continuous Microsoft 365 security testing with Maester.
                  </h2>
                  <p className="mb-5 leading-8 text-slate-400">
                    Maester is a free, open-source PowerShell test automation
                    framework, built on Pester and Microsoft Graph, that runs
                    hundreds of automated checks against your Microsoft 365
                    tenant — Entra ID, Exchange Online, Defender for Office
                    365, Teams, and SharePoint — and reports the results as a
                    readable HTML report.
                  </p>
                  <p className="mb-5 leading-8 text-slate-400">
                    Instead of assuming your Conditional Access policies and
                    mail security settings are still correct, Maester tests
                    them the way you'd test code — continuously, and before a
                    change ships. A broken exclusion group or a
                    quietly-loosened sharing policy shows up as a failed test,
                    not an incident.
                  </p>
                  <p className="leading-8 text-slate-400">
                    We implement and run Maester for clients directly —
                    scheduled scans, custom tests written for your specific
                    policies, and alerts sent to email or Teams when your
                    posture drifts.
                  </p>

                  <a
                    href="mailto:support@m365pro.io?subject=Maester%20rollout"
                    className="mt-8 inline-flex rounded-md bg-violet-500 px-6 py-3 font-semibold text-slate-950 hover:bg-violet-400"
                  >
                    Ask about a Maester rollout
                  </a>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {maesterFeatures.map((feature, i) => (
                  <Reveal key={feature.title} delay={i * 100}>
                    <div className="h-full rounded-lg border border-slate-800 bg-slate-900/80 p-6 backdrop-blur">
                      <h3 className="mb-2 text-sm font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-6 text-slate-400">
                        {feature.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <p className="mb-3 font-mono text-sm text-violet-400">$ about</p>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  A Complete Engineering Partner for Your IT Stack.
                </h2>
                <p className="mb-5 leading-8 text-slate-400">
                  CloudCap Technologies delivers senior-level IT
                  infrastructure management, cybersecurity, and system
                  engineering. Whether you need to secure your network
                  perimeter, protect company email from spoofing, or migrate
                  legacy servers to the cloud, everything is executed with
                  direct technical ownership.
                </p>
                <p className="leading-8 text-slate-400">
                  We eliminate the gap between networking, endpoint security,
                  and cloud administration — giving you a cohesive, hardened,
                  and reliable environment without tier-1 ticket queues.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur">
                <p className="mb-1 font-mono text-xs text-violet-400">
                  overview
                </p>
                <h3 className="mb-1 text-2xl font-bold text-white">
                  Core Competencies
                </h3>
                <p className="mb-6 text-slate-400">
                  Full-Spectrum IT &amp; Cybersecurity Consultancy
                </p>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Firewalls, VPNs, VLANs &amp; network security architecture
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Email security (DMARC, DKIM, SPF &amp; Anti-Phishing
                    gateways)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Microsoft 365, Entra ID, SharePoint &amp; Azure
                    administration
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Virtualization (Hyper-V / VMware) &amp; Cloud Migrations
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Continuous security testing with Maester &amp; PowerShell
                    automation
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section id="capabilities" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-violet-400">
              $ capabilities
            </p>
            <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
              Technologies &amp; Systems Managed.
            </h2>

            <div className="flex flex-wrap gap-2.5">
              {techStack.map((item) => (
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
            <p className="mb-3 font-mono text-sm text-violet-400">$ contact</p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Ready to secure or streamline your IT environment?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">
              Get in touch for network security audits, email authentication
              projects, firewall upgrades, Maester deployments, cloud
              migrations, or ongoing infrastructure management.
            </p>
            <a
              href="mailto:support@m365pro.io"
              className="inline-flex rounded-md bg-violet-500 px-8 py-3.5 font-semibold text-slate-950 hover:bg-violet-400"
            >
              support@m365pro.io
            </a>
          </div>
        </section>

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
      </div>
    </main>
  );
}
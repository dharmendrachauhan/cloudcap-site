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
      title: "Microsoft 365 Migrations",
      category: "Microsoft 365",
      detail:
        "Google Workspace, Exchange, and hybrid migrations to Microsoft 365 with minimal downtime, licensing guidance, and post-migration optimization.",
    },
    {
      title: "SharePoint Migrations",
      category: "Collaboration",
      detail:
        "File share and SharePoint migrations, permissions redesign, governance policies, document libraries, and modern intranet builds.",
    },
    {
      title: "Azure Infrastructure",
      category: "Cloud",
      detail:
        "Virtual machines, networking, storage, monitoring, backups, hybrid connectivity, and production-ready Azure deployments.",
    },
    {
      title: "Security Assessments",
      category: "Security",
      detail:
        "Conditional Access reviews, MFA enforcement, Microsoft Defender configuration, email authentication (DMARC/DKIM/SPF), and Zero Trust baselines.",
    },
    {
      title: "PowerShell Automation",
      category: "Automation",
      detail:
        "Reporting scripts, compliance checks, onboarding workflows, bulk user management, and infrastructure automation.",
    },
  ];

  const portfolioProjects = [
    {
      title: "Google Workspace → Microsoft 365 Migration",
      detail:
        "Full tenant migration including mail, Drive, and calendar for a multi-site organization with staged cutover and user training.",
      tags: ["M365", "Migration", "Google Workspace"],
    },
    {
      title: "SharePoint Online Migration & Governance",
      detail:
        "Migrated on-premises file shares and legacy SharePoint sites, redesigned permissions, and implemented retention & sharing policies.",
      tags: ["SharePoint", "Governance", "OneDrive"],
    },
    {
      title: "Azure PostgreSQL & Hybrid Networking",
      detail:
        "Deployed managed PostgreSQL, configured VNets, private endpoints, and site-to-site VPN for secure hybrid access.",
      tags: ["Azure", "PostgreSQL", "Networking"],
    },
    {
      title: "Conditional Access & Zero Trust Rollout",
      detail:
        "Designed and deployed Conditional Access policies, MFA, device compliance, and continuous access evaluation across the tenant.",
      tags: ["Entra ID", "Security", "Zero Trust"],
    },
  ];

  const blogPosts = [
    {
      title: "SharePoint Migration Tips That Actually Work",
      detail:
        "Practical lessons from real migrations: permissions mapping, large libraries, throttling, and user communication.",
      category: "SharePoint",
    },
    {
      title: "Useful PowerShell Scripts for Microsoft 365 Admins",
      detail:
        "A curated set of scripts for reporting, bulk updates, license management, and security posture checks.",
      category: "PowerShell",
    },
    {
      title: "Azure Infrastructure Essentials for Small Teams",
      detail:
        "How to structure resource groups, networking, monitoring, and backups without over-engineering.",
      category: "Azure",
    },
    {
      title: "Exchange Online Tricks Every Admin Should Know",
      detail:
        "Transport rules, message trace techniques, shared mailbox best practices, and mail flow troubleshooting.",
      category: "Exchange",
    },
  ];

  const techStack = [
    "Microsoft 365",
    "Exchange Online",
    "SharePoint & OneDrive",
    "Entra ID / Active Directory",
    "Azure Infrastructure",
    "Conditional Access",
    "Microsoft Defender",
    "Intune & MDM",
    "PowerShell Automation",
    "Firewalls & VPNs",
    "DMARC / DKIM / SPF",
    "Hybrid Cloud",
    "Backup & DR",
    "Zero Trust Architecture",
  ];

  return (
    <main className="relative min-h-screen scroll-smooth overflow-hidden bg-slate-950 text-slate-100">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
          alt="Datacenter Infrastructure"
          className="h-full w-full object-cover opacity-15 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

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
              <a href="#portfolio" className="hover:text-violet-400">
                portfolio
              </a>
              <a href="#blog" className="hover:text-violet-400">
                blog
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

        {/* Hero */}
        <section id="home" className="border-b border-slate-800/80">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-violet-400 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                infrastructure state: healthy
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Microsoft 365, Azure &amp; Cybersecurity Consulting.
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
                Helping organizations secure, migrate, automate and modernize
                their Microsoft 365, Azure and SharePoint environments through
                practical consulting and hands-on engineering.
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

            {/* Right visual card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                <span className="font-mono text-xs text-slate-500">
                  engagement-overview
                </span>
                <span className="rounded border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-mono text-[11px] text-violet-400">
                  active practice
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Focus areas</span>
                  <span className="font-mono text-xs text-violet-400">5 core services</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Microsoft 365 &amp; Exchange migrations
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    SharePoint governance &amp; migrations
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Azure infrastructure &amp; hybrid cloud
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Security assessments &amp; Zero Trust
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    PowerShell automation &amp; reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual showcase */}
        <section className="border-b border-slate-800/80 bg-slate-900/40 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal>
                <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                    alt="Network Hardware"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white">Networks &amp; Security</h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Firewalls, VLANs, VPNs, and perimeter controls.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
                    alt="Email Security"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white">Email &amp; Identity</h3>
                    <p className="mt-1 text-xs text-slate-400">
                      DMARC, Conditional Access, and Defender configuration.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                    alt="Cloud Infrastructure"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white">Cloud &amp; Migrations</h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Microsoft 365, Azure, and hybrid environments.
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
              Focused consulting and hands-on engineering.
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-violet-400">$ portfolio</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
              Selected project work.
            </h2>
            <p className="mb-12 max-w-2xl text-slate-400">
              Representative engagements across migrations, infrastructure, and security.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {portfolioProjects.map((project, i) => (
                <Reveal key={project.title} delay={(i % 2) * 100}>
                  <div className="h-full rounded-lg border border-slate-800 bg-slate-900/80 p-6 backdrop-blur transition hover:border-violet-500/60">
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-slate-400">
                      {project.detail}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-slate-700 bg-slate-950/60 px-2.5 py-1 font-mono text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="border-b border-slate-800/80 bg-slate-900/40 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-violet-400">$ blog</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
              Technical notes &amp; guides.
            </h2>
            <p className="mb-12 max-w-2xl text-slate-400">
              Practical articles from real Microsoft 365, Azure, and SharePoint work.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post, i) => (
                <Reveal key={post.title} delay={(i % 2) * 100}>
                  <article className="h-full rounded-lg border border-slate-800 bg-slate-900/80 p-6 backdrop-blur transition hover:border-violet-500/60">
                    <span className="mb-3 inline-block rounded border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 font-mono text-xs text-violet-400">
                      {post.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-400">
                      {post.detail}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-center font-mono text-sm text-slate-500">
              Full posts coming soon — reach out if you want a specific topic covered.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <p className="mb-3 font-mono text-sm text-violet-400">$ about</p>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Hands-on engineering for your Microsoft stack.
                </h2>
                <p className="mb-5 leading-8 text-slate-400">
                  CloudCap Technologies delivers senior-level Microsoft 365,
                  Azure, SharePoint, and cybersecurity work. Projects are
                  executed with direct technical ownership — not handed off
                  through multiple layers of account management.
                </p>
                <p className="leading-8 text-slate-400">
                  Whether you need a clean migration, a security baseline, or
                  ongoing infrastructure support, the focus stays on practical
                  outcomes and clear communication.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur">
                <p className="mb-1 font-mono text-xs text-violet-400">overview</p>
                <h3 className="mb-1 text-2xl font-bold text-white">
                  Core Competencies
                </h3>
                <p className="mb-6 text-slate-400">
                  Microsoft 365 · Azure · Security · Automation
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Microsoft 365 &amp; Exchange Online migrations
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    SharePoint governance and document management
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Azure infrastructure and hybrid networking
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    Conditional Access, MFA, and Zero Trust
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    PowerShell automation and reporting
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="border-b border-slate-800/80 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-3 font-mono text-sm text-violet-400">$ capabilities</p>
            <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
              Technologies &amp; platforms.
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
              Ready to talk about a project?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">
              Migrations, security assessments, Azure work, SharePoint projects,
              or ongoing Microsoft 365 support — start with a short conversation.
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
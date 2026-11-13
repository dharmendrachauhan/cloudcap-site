"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  KeyRound,
  ChevronDown,
  Puzzle,
  ScanSearch,
  Cloud,
  Link2,
  Lock,
  Mail,
  MailCheck,
  Menu,
  PlayCircle,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

const EMAIL = "support@m365pro.io";

// Fade-in on scroll. Content is visible in the server-rendered HTML (for search
// engines, link previews and no-JS visitors); only elements that start below the
// fold are hidden after mount and revealed as they scroll into view.
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
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Opened at an anchor (e.g. /#tools): skip the effect so the target is never hidden mid-jump.
    if (window.location.hash) return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
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
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : undefined }}
      className={`transition-all duration-700 ease-out ${
        state === "hidden" ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Signature element: a terminal session typing real admin commands.
const TERMINAL_LINES = [
  { cmd: "Get-DkimSigningConfig -Identity m365pro.io | Select Enabled", out: "Enabled : True" },
  { cmd: "(Get-MgUser -Filter \"userType eq 'Guest'\" -All).Count", out: "3" },
  { cmd: "Get-MgIdentityConditionalAccessPolicy | Measure-Object | Select Count", out: "Count : 12" },
  { cmd: "az vm list -d --query \"[].powerState\" -o tsv", out: "VM running\nVM running" },
  { cmd: "Get-MgSubscribedSku | Select SkuPartNumber, ConsumedUnits", out: "SPE_E5   148" },
];

function TerminalPanel() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) return;
    const current = TERMINAL_LINES[lineIndex].cmd;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = reduced
      ? setTimeout(() => setLineIndex(TERMINAL_LINES.length), 0)
      : charIndex < current.length
        ? setTimeout(() => setCharIndex((c) => c + 1), 18)
        : setTimeout(() => {
            setLineIndex((i) => i + 1);
            setCharIndex(0);
          }, 350);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-amber-500/30 via-transparent to-transparent" />
      <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-3 font-mono text-xs text-slate-500">admin@cloudcap: ~</span>
        </div>
        <div
          className="min-h-[300px] space-y-2.5 p-5 font-mono text-[13px] leading-relaxed"
          aria-label="Example PowerShell and Azure CLI session"
        >
          {TERMINAL_LINES.slice(0, lineIndex).map((l) => (
            <div key={l.cmd}>
              <p className="break-words text-slate-300">
                <span className="text-amber-500">PS&gt;</span> {l.cmd}
              </p>
              <p className="whitespace-pre-line pl-4 text-emerald-400">{l.out}</p>
            </div>
          ))}
          <p className="break-words text-slate-300">
            <span className="text-amber-500">PS&gt;</span>{" "}
            {lineIndex < TERMINAL_LINES.length && TERMINAL_LINES[lineIndex].cmd.slice(0, charIndex)}
            <span className="animate-pulse text-amber-400">▍</span>
          </p>
        </div>
      </div>
    </div>
  );
}

type NavItem = { label: string; href: string; external?: boolean; note?: string };
type NavEntry = { label: string; href: string; items?: NavItem[] };

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function DesktopNav({ nav }: { nav: NavEntry[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const enter = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(i);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };

  return (
    <nav ref={navRef} className="hidden items-center gap-6 font-mono text-sm text-slate-400 lg:flex" aria-label="Main">
      {nav.map((n, i) =>
        n.items ? (
          <div key={n.href} className="relative" onMouseEnter={() => enter(i)} onMouseLeave={leave}>
            <button
              type="button"
              className={`flex items-center gap-1 transition hover:text-amber-400 ${open === i ? "text-amber-400" : ""}`}
              aria-expanded={open === i}
              aria-haspopup="true"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {n.label}
              <ChevronDown className={`h-3.5 w-3.5 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-md">
                  <a
                    href={n.href}
                    onClick={() => setOpen(null)}
                    className="block rounded-lg px-3 py-2 text-xs text-amber-500/80 hover:bg-slate-900 hover:text-amber-400"
                  >
                    all {n.label} →
                  </a>
                  {n.items.map((it) => (
                    <a
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpen(null)}
                      {...(it.external ? { target: "_blank", rel: "noopener" } : {})}
                      className="flex items-start justify-between gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-amber-400"
                    >
                      <span className="min-w-0">
                        <span className="block text-sm leading-5">{it.label}</span>
                        {it.note && <span className="block text-xs text-slate-500">{it.note}</span>}
                      </span>
                      {it.external && <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <a key={n.href} href={n.href} className="transition hover:text-amber-400">
            {n.label}
          </a>
        ),
      )}
    </nav>
  );
}

function MobileNav({ nav, onNavigate }: { nav: NavEntry[]; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <>
      {nav.map((n) => (
        <div key={n.href} className="border-b border-slate-800/70">
          <div className="flex items-center justify-between">
            <a href={n.href} onClick={onNavigate} className="block flex-1 py-3 font-mono text-slate-300 hover:text-amber-400">
              {n.label}
            </a>
            {n.items && (
              <button
                type="button"
                className="p-3 text-slate-400"
                aria-label={`Show ${n.label}`}
                aria-expanded={expanded === n.href}
                onClick={() => setExpanded(expanded === n.href ? null : n.href)}
              >
                <ChevronDown className={`h-4 w-4 transition ${expanded === n.href ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
          {n.items && expanded === n.href && (
            <div className="pb-3 pl-3">
              {n.items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={onNavigate}
                  {...(it.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="flex items-center gap-1 py-2 text-sm text-slate-400 hover:text-amber-400"
                >
                  {it.label}
                  {it.external && <ArrowUpRight className="h-3 w-3" />}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function SectionHeading({ tag, title, intro }: { tag: string; title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-amber-500">$ {tag}</p>
      <h2 className="font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 leading-7 text-slate-400">{intro}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const coreServices = [
    {
      title: "Microsoft 365 Migrations",
      category: "Microsoft 365",
      icon: Cloud,
      detail:
        "Google Workspace, Exchange, and hybrid migrations to Microsoft 365 with minimal downtime, licensing guidance, and post-migration optimization.",
    },
    {
      title: "SharePoint Migrations",
      category: "Collaboration",
      icon: Workflow,
      detail:
        "File share and SharePoint migrations, permissions redesign, governance policies, document libraries, and modern intranet builds.",
    },
    {
      title: "Azure Infrastructure",
      category: "Cloud",
      icon: Cloud,
      detail:
        "Virtual machines, networking, storage, monitoring, backups, hybrid connectivity, and production-ready Azure deployments.",
    },
    {
      title: "Security Assessments",
      category: "Security",
      icon: ShieldCheck,
      detail:
        "Conditional Access reviews, MFA enforcement, Microsoft Defender configuration, email authentication (DMARC/DKIM/SPF), and Zero Trust baselines.",
    },
    {
      title: "PowerShell Automation",
      category: "Automation",
      icon: Terminal,
      detail:
        "Reporting scripts, compliance checks, onboarding workflows, bulk user management, and infrastructure automation.",
    },
    {
      title: "Zero Trust Architecture",
      category: "Security",
      icon: Lock,
      detail:
        "Device compliance, Conditional Access policies, and continuous access evaluation across the tenant.",
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

  const competencies = [
    "Microsoft 365 & Exchange Online migrations",
    "SharePoint governance and document management",
    "Azure infrastructure and hybrid networking",
    "Conditional Access, MFA, and Zero Trust",
    "PowerShell automation and reporting",
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

  const tools = [
    {
      name: "goqk.link",
      href: "https://goqk.link",
      openLabel: "Open goqk.link",
      extra: { label: "Chrome extension", href: "https://chromewebstore.google.com/detail/goqklink-url-shortener/ijgfblbakkkigilpbcolbankelljgmei" },
      icon: Link2,
      tagline: "Free URL shortener",
      detail:
        "Short, safe links with click counts and custom codes, checked against Google Safe Browsing.",
    },
    {
      name: "Email Security & DNS Checker",
      href: "https://check.m365pro.io",
      openLabel: "Check your domain",
      extra: null as { label: string; href: string } | null,
      icon: MailCheck,
      tagline: "Score + any DNS lookup",
      detail:
        "Grade your domain's email security with fixes and a PDF report, or look up any DNS record (MX, SPF, DMARC, PTR…).",
    },
    {
      name: "Email Header Analyzer",
      href: "https://check.m365pro.io/headers",
      openLabel: "Analyze headers",
      extra: null as { label: string; href: string } | null,
      icon: ScanSearch,
      tagline: "Is this email genuine?",
      detail:
        "Paste an email's headers to see SPF, DKIM and DMARC results, spam verdicts and phishing warnings in plain English.",
    },
    {
      name: "Secret Share",
      href: "https://share.m365pro.io",
      openLabel: "Share a secret",
      extra: null as { label: string; href: string } | null,
      icon: KeyRound,
      tagline: "One-time encrypted links",
      detail:
        "Send passwords and keys with a link that self-destructs after it's read. Encrypted in your browser.",
    },
    {
      name: "Low Views",
      href: "https://yt.m365pro.io",
      openLabel: "Open Low Views",
      extra: null as { label: string; href: string } | null,
      icon: PlayCircle,
      tagline: "YouTube discovery tool",
      detail:
        "Find YouTube videos with low view counts — content the algorithm doesn't show you.",
    },
  ];

  const NAV: NavEntry[] = [
    {
      label: "services",
      href: "#services",
      items: coreServices.map((x) => ({ label: x.title, href: `#svc-${slug(x.title)}`, note: x.category })),
    },
    {
      label: "portfolio",
      href: "#portfolio",
      items: portfolioProjects.map((x) => ({ label: x.title, href: `#proj-${slug(x.title)}` })),
    },
    { label: "about", href: "#about" },
    { label: "capabilities", href: "#capabilities" },
    {
      label: "tools",
      href: "#tools",
      items: tools.flatMap((t) => [
        { label: t.name, href: t.href, external: true, note: t.tagline },
        ...(t.extra ? [{ label: `${t.name} ${t.extra.label}`, href: t.extra.href, external: true }] : []),
      ]),
    },
    { label: "contact", href: "#contact" },
  ];

  const card =
    "rounded-xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-0.5 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5";

  return (
    <main className="relative min-h-screen overflow-x-clip bg-slate-950 font-sans text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/40 bg-amber-500/10 font-mono text-sm font-bold text-amber-400">
              cc
            </div>
            <span>
              <span className="block font-mono text-base font-bold leading-tight text-white sm:text-lg">
                CloudCap Technologies
              </span>
              <span className="block font-mono text-xs text-amber-500/70">
                it infrastructure &amp; cybersecurity
              </span>
            </span>
          </a>

          <DesktopNav nav={NAV} />

          <a
            href={`mailto:${EMAIL}`}
            className="hidden items-center gap-2 rounded-lg border border-amber-500/50 px-4 py-2 font-mono text-sm text-amber-400 transition hover:bg-amber-500 hover:text-slate-950 lg:inline-flex"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            {EMAIL}
          </a>

          <button
            type="button"
            className="rounded-lg border border-slate-800 p-2 text-slate-300 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-800 px-6 pb-6 pt-2 lg:hidden" aria-label="Mobile">
            <MobileNav nav={NAV} onNavigate={() => setMenuOpen(false)} />
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 font-mono font-semibold text-slate-950"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden border-b border-slate-800/80">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(30_41_59/0.6)_1px,transparent_1px),linear-gradient(90deg,rgb(30_41_59/0.6)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-amber-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              infrastructure state: healthy
            </p>
            <h1 className="mb-6 font-mono text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[2.9rem]">
              Microsoft 365, Azure &amp;{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Cybersecurity
              </span>{" "}
              Consulting.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
              Helping organizations secure, migrate, automate and modernize their Microsoft 365, Azure and
              SharePoint environments through practical consulting and hands-on engineering.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-mono font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
              >
                Consult an Engineer <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center rounded-lg border border-slate-700 px-6 py-3 font-mono font-semibold text-slate-200 transition hover:border-amber-500 hover:text-amber-400"
              >
                Explore Services
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-slate-400">
              {["Direct engineer access", "Microsoft 365 & Azure focused", "Hands-on delivery"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <TerminalPanel />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-slate-800/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading tag="services" title="Focused consulting and hands-on engineering." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={(i % 3) * 100} className="h-full">
                  <div id={`svc-${slug(service.title)}`} className={`${card} flex h-full scroll-mt-32 flex-col p-6 target:border-amber-500 target:shadow-xl target:shadow-amber-500/10`}>
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10">
                        <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-xs text-slate-500">{service.category}</span>
                    </div>
                    <h3 className="mb-2 font-mono text-lg font-bold text-white">{service.title}</h3>
                    <p className="text-sm leading-6 text-slate-400">{service.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-b border-slate-800/80 bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            tag="portfolio"
            title="Selected project work."
            intro="Representative engagements across migrations, infrastructure, and security."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 100} className="h-full">
                <div id={`proj-${slug(project.title)}`} className={`${card} h-full scroll-mt-32 p-6 target:border-amber-500 target:shadow-xl target:shadow-amber-500/10`}>
                  <p className="mb-3 font-mono text-xs text-amber-500/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 font-mono text-lg font-bold text-white">{project.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-slate-400">{project.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-700 bg-slate-950/60 px-2.5 py-1 font-mono text-xs text-slate-400"
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

      {/* About */}
      <section id="about" className="border-b border-slate-800/80 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-3 font-mono text-sm text-amber-500">$ about</p>
            <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
              Hands-on engineering for your Microsoft stack.
            </h2>
            <p className="mb-5 leading-8 text-slate-400">
              CloudCap Technologies delivers senior-level Microsoft 365, Azure, SharePoint, and cybersecurity
              work. Projects are executed with direct technical ownership — not handed off through multiple
              layers of account management.
            </p>
            <p className="leading-8 text-slate-400">
              Whether you need a clean migration, a security baseline, or ongoing infrastructure support, the
              focus stays on practical outcomes and clear communication.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-900/40 p-8">
              <p className="mb-1 font-mono text-xs text-amber-500">overview</p>
              <h3 className="mb-1 font-mono text-2xl font-bold text-white">Core Competencies</h3>
              <p className="mb-6 text-slate-400">Microsoft 365 · Azure · Security · Automation</p>
              <ul className="space-y-3.5 text-sm text-slate-300">
                {competencies.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check className="h-3 w-3 text-emerald-400" strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-b border-slate-800/80 bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading tag="capabilities" title="Technologies & platforms." />
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-2 font-mono text-sm text-slate-300 transition hover:border-amber-500/50 hover:text-amber-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Free tools */}
      <section id="tools" className="border-b border-slate-800/80 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            tag="tools"
            title="Free tools we built."
            intro="Small, useful utilities from the CloudCap team — free to use."
          />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <Reveal key={tool.name} delay={i * 100} className="h-full">
                  <div className="flex h-full items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4 transition hover:border-amber-500/50">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10">
                      <Icon className="h-4 w-4 text-amber-400" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-mono text-sm font-bold text-white">
                        {tool.name} <span className="font-normal text-amber-500/80">· {tool.tagline}</span>
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">{tool.detail}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300"
                        >
                          {tool.openLabel} <ArrowUpRight className="h-3 w-3" />
                        </a>
                        {tool.extra && (
                          <a
                            href={tool.extra.href}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-400"
                          >
                            <Puzzle className="h-3 w-3" strokeWidth={2} /> {tool.extra.label}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="mb-3 font-mono text-sm text-amber-500">$ contact</p>
              <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to talk about a project?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-slate-400">
                Migrations, security assessments, Azure work, SharePoint projects, or ongoing Microsoft 365
                support — start with a short conversation.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-3.5 font-mono font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
              >
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 font-mono text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 text-sm font-bold text-slate-300">CloudCap Technologies</p>
            <p>© {new Date().getFullYear()} CloudCap Technologies. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://goqk.link" target="_blank" rel="noopener" className="hover:text-amber-400">
              goqk.link
            </a>
            <a href="https://yt.m365pro.io" target="_blank" rel="noopener" className="hover:text-amber-400">
              Low Views
            </a>
            <a href="/terms" className="hover:text-amber-400">
              terms
            </a>
            <a href="/privacy" className="hover:text-amber-400">
              privacy
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-amber-400">
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

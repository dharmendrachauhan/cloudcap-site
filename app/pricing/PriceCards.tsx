"use client";

import { useEffect, useState } from "react";

type Plan = { name: string; usd: string; inr: string; unit: string; points: string[] };

const PLANS: Plan[] = [
  {
    name: "Microsoft 365 Security Assessment",
    usd: "US$299",
    inr: "₹9,999",
    unit: "per tenant, fixed price",
    points: [
      "Identity, MFA and Conditional Access review",
      "Email security, sharing and admin roles",
      "Written report with prioritised fixes",
      "1-hour walkthrough call",
    ],
  },
  {
    name: "Email Security Setup",
    usd: "US$149",
    inr: "₹4,999",
    unit: "per domain, fixed price",
    points: [
      "SPF, DKIM and DMARC configured correctly",
      "Staged move to DMARC enforcement",
      "MTA-STS and TLS reporting where supported",
      "Before-and-after report",
    ],
  },
  {
    name: "Mailbox Migration",
    usd: "US$15",
    inr: "₹499",
    unit: "per mailbox (minimum 10)",
    points: [
      "Google Workspace, IMAP or tenant-to-tenant to Microsoft 365",
      "Mail, calendar and contacts",
      "Cut-over planning and DNS changes",
      "Post-migration support for 7 days",
    ],
  },
  {
    name: "Consulting & Remote Support",
    usd: "US$40",
    inr: "₹1,250",
    unit: "per hour",
    points: [
      "Microsoft 365, Entra ID, Intune and Azure",
      "SharePoint and OneDrive clean-ups",
      "PowerShell and Graph automation",
      "Prepaid blocks of 10 hours available",
    ],
  },
];

type Cur = "usd" | "inr";

// India gets local rupee pricing; everyone else sees US dollars. Visitors can switch.
function detect(): Cur {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "inr";
  } catch {}
  return "usd";
}

export default function PriceCards() {
  const [cur, setCur] = useState<Cur>("usd");
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("cc-currency");
    } catch {}
    setCur(saved === "inr" || saved === "usd" ? saved : detect());
  }, []);
  const pick = (c: Cur) => {
    setCur(c);
    try {
      localStorage.setItem("cc-currency", c);
    } catch {}
  };
  const btn = (c: Cur, label: string) => (
    <button
      type="button"
      onClick={() => pick(c)}
      aria-pressed={cur === c}
      className={`rounded-md px-3 py-1.5 text-sm transition ${
        cur === c ? "bg-brand-500 font-semibold text-white" : "text-slate-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex rounded-lg border border-slate-800 bg-slate-900/70 p-1" role="group" aria-label="Currency">
          {btn("inr", "₹ India")}
          {btn("usd", "US$ International")}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((p) => (
          <div key={p.name} className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="mb-4 text-lg font-bold text-white">{p.name}</h2>
            <p className="text-xs uppercase tracking-wide text-slate-500">from</p>
            <p className="text-3xl font-bold text-white">{cur === "inr" ? p.inr : p.usd}</p>
            <p className="mb-5 text-sm text-slate-500">
              {p.unit}
              {cur === "inr" ? " · plus GST" : ""}
            </p>
            <ul className="mb-6 space-y-2 text-sm leading-6 text-slate-400">
              {p.points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-brand-400">✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:support@m365pro.io?subject=${encodeURIComponent(`Quote: ${p.name}`)}`}
              className="mt-auto rounded-lg border border-brand-500/50 px-4 py-2 text-center text-sm text-brand-400 transition hover:bg-brand-500 hover:text-white"
            >
              Request a quote
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { LegalShell, mail } from "../_components/LegalShell";

export const metadata: Metadata = {
  title: "Pricing | CloudCap Technologies",
  description:
    "Starting prices for CloudCap Technologies Microsoft 365, email security, migration and consulting services.",
};

type Plan = { name: string; usd: string; inr: string; unit: string; points: string[] };

const PLANS: Plan[] = [
  {
    name: "Microsoft 365 Security Assessment",
    usd: "US$299",
    inr: "₹19,999",
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
    inr: "₹9,999",
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
    inr: "₹999",
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
    inr: "₹2,500",
    unit: "per hour",
    points: [
      "Microsoft 365, Entra ID, Intune and Azure",
      "SharePoint and OneDrive clean-ups",
      "PowerShell and Graph automation",
      "Prepaid blocks of 10 hours available",
    ],
  },
];

export default function Pricing() {
  return (
    <LegalShell tag="pricing" title="Pricing" wide>
      <p className="mb-10 max-w-3xl leading-7 text-slate-400">
        Starting prices for our most common services. Every engagement begins with a short scoping call and a written
        quote, so you know the final price before any work starts.
      </p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((p) => (
          <div key={p.name} className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="mb-4 text-lg font-bold text-white">{p.name}</h2>
            <p className="text-xs uppercase tracking-wide text-slate-500">from</p>
            <p className="text-3xl font-bold text-white">{p.usd}</p>
            <p className="mb-1 font-mono text-sm text-brand-400">{p.inr} in India</p>
            <p className="mb-5 text-sm text-slate-500">{p.unit}</p>
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

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="mb-2 text-lg font-bold text-white">Larger projects</h2>
        <p className="leading-7 text-slate-400">
          SharePoint migrations, Azure infrastructure and Zero Trust rollouts are quoted per project after a free
          scoping call. Email {mail} to get started.
        </p>
      </div>

      <div className="mt-10 space-y-3 text-sm leading-6 text-slate-500">
        <p>
          <span className="text-slate-300">Taxes:</span> prices in INR are for customers in India and exclude GST at the
          applicable rate. Customers outside India are invoiced in US dollars.
        </p>
        <p>
          <span className="text-slate-300">Payment:</span> fixed-price projects are 50% in advance and 50% on
          completion; hourly work is billed monthly or prepaid. We accept cards and bank transfer. Card payments are
          processed securely by Stripe; we never see or store your full card number.
        </p>
        <p>
          <span className="text-slate-300">Refunds and cancellations:</span> see our{" "}
          <a href="/refund" className="text-brand-400 hover:underline">
            Refund &amp; Cancellation Policy
          </a>
          .
        </p>
        <p>
          <span className="text-slate-300">Free tools:</span> our tools at{" "}
          <a href="https://check.m365pro.io" className="text-brand-400 hover:underline">
            check.m365pro.io
          </a>{" "}
          and{" "}
          <a href="https://share.m365pro.io" className="text-brand-400 hover:underline">
            share.m365pro.io
          </a>{" "}
          are free to use.
        </p>
      </div>
    </LegalShell>
  );
}

import type { Metadata } from "next";
import { LegalShell, mail } from "../_components/LegalShell";
import PriceCards from "./PriceCards";

export const metadata: Metadata = {
  title: "Pricing | CloudCap Technologies",
  description:
    "Starting prices for CloudCap Technologies Microsoft 365, email security, migration and consulting services.",
};


export default function Pricing() {
  return (
    <LegalShell tag="pricing" title="Pricing" wide>
      <p className="mb-10 max-w-3xl leading-7 text-slate-400">
        Starting prices for our most common services. Every engagement begins with a short scoping call and a written
        quote, so you know the final price before any work starts.
      </p>

      <PriceCards />

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="mb-2 text-lg font-bold text-white">Larger projects</h2>
        <p className="leading-7 text-slate-400">
          SharePoint migrations, Azure infrastructure and Zero Trust rollouts are quoted per project after a free
          scoping call. Email {mail} to get started.
        </p>
      </div>

      <div className="mt-10 space-y-3 text-sm leading-6 text-slate-500">
        <p>
          <span className="text-slate-300">Prices &amp; taxes:</span> we have separate rates for customers in India (in rupees, excluding
          GST at the applicable rate) and for customers outside India (in US dollars). The page picks the right one
          for your location; use the ₹ / US$ switch to change it.
        </p>
        <p>
          <span className="text-slate-300">Payment:</span> fixed-price projects are 50% in advance and 50% on
          completion; hourly work is billed monthly or prepaid. Customers in India can pay by UPI or bank transfer;
          international customers can pay by PayPal (including cards) or international bank transfer. We never see or
          store your full card number.
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

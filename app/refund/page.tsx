import type { Metadata } from "next";
import { LegalShell, Section, mail } from "../_components/LegalShell";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | CloudCap Technologies",
  description: "How cancellations and refunds work for CloudCap Technologies consulting services and subscriptions.",
};

export default function Refund() {
  return (
    <LegalShell tag="refunds" title="Refund & Cancellation Policy" updated="November 17, 2026">
      <div className="space-y-10 text-slate-400">
        <Section>
          <p className="leading-7">
            This policy explains how cancellations and refunds work for services bought from CloudCap Technologies
            ("CloudCap," "we," "us"), operated by Dharmendra Singh from Aligarh, Uttar Pradesh, India. It applies to
            payments made through this website, by payment link or invoice. Where a signed proposal or service
            agreement says something different, the agreement applies.
          </p>
        </Section>

        <Section title="1. Fixed-price projects">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            <li>
              <span className="text-slate-300">Cancelled before work starts:</span> you get a full refund of any
              advance paid.
            </li>
            <li>
              <span className="text-slate-300">Cancelled after work starts:</span> you pay for the work completed up to
              the date of cancellation, and we refund the rest of any advance.
            </li>
            <li>
              <span className="text-slate-300">Completed and delivered work</span> is not refundable, except as
              described in section 4.
            </li>
          </ul>
        </Section>

        <Section title="2. Hourly consulting and prepaid hours">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            <li>Hours already worked are not refundable.</li>
            <li>Unused prepaid hours can be refunded if you ask within 90 days of purchase.</li>
            <li>
              Scheduled sessions can be cancelled or moved free of charge with at least 24 hours' notice. Later
              cancellations may be charged as one hour.
            </li>
          </ul>
        </Section>

        <Section title="3. Subscriptions">
          <p className="leading-7">
            For any subscription service (for example, monitoring or software tools), you can cancel at any time.
            The subscription stays active until the end of the period you have paid for and then stops; it will not
            renew. We do not refund partial periods, except where the law requires it or as described in section 4.
          </p>
        </Section>

        <Section title="4. If something goes wrong">
          <p className="leading-7">
            If we don't deliver a service as agreed, tell us within 30 days of delivery. We will first try to fix it
            at no extra cost. If we can't, we will refund the amount paid for the part that wasn't delivered.
          </p>
        </Section>

        <Section title="5. How to request a cancellation or refund">
          <p className="leading-7">
            Email {mail} with your invoice or payment reference and the reason for the request. We reply within 2
            business days.
          </p>
        </Section>

        <Section title="6. How refunds are paid">
          <p className="leading-7">
            Approved refunds are paid to the original payment method within 5–7 business days. Your bank or card
            provider may take a few more days to show it. Payment processing and currency conversion fees charged by
            banks or payment providers may not be refundable.
          </p>
        </Section>

        <Section title="7. Delivery of services">
          <p className="leading-7">
            All our services are delivered remotely and digitally: by remote session, email, and shared documents or
            reports. Nothing is shipped physically. Start dates and timelines are confirmed in writing before work
            begins.
          </p>
        </Section>

        <Section title="8. Contact">
          <p className="leading-7">
            <span className="text-slate-300">CloudCap Technologies</span>
            <br />
            Aligarh, Uttar Pradesh, India
            <br />
            Email: {mail}
          </p>
        </Section>
      </div>
    </LegalShell>
  );
}

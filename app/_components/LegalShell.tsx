import type { ReactNode } from "react";

// Shared header/footer for the policy and pricing pages.
export const FOOTER_LINKS: [string, string][] = [
  ["/pricing", "pricing"],
  ["/refund", "refunds"],
  ["/terms", "terms"],
  ["/privacy", "privacy"],
];

export function LegalFooter() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8 text-center font-mono text-xs text-slate-600">
      <div className="mb-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {FOOTER_LINKS.map(([href, label]) => (
          <a key={href} href={href} className="hover:text-brand-400">
            {label}
          </a>
        ))}
      </div>
      © {new Date().getFullYear()} CloudCap Technologies. All rights reserved.
    </footer>
  );
}

export function LegalShell({
  tag,
  title,
  updated,
  wide = false,
  children,
}: {
  tag: string;
  title: string;
  updated?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const w = wide ? "max-w-6xl" : "max-w-4xl";
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className={`mx-auto flex ${w} items-center justify-between px-6 py-5`}>
          <a href="/" className="flex items-center gap-3">
            <img src="/cloudcap-mark.svg" alt="CloudCap Technologies" className="h-9 w-auto" />
            <span className="text-base font-bold text-white">CloudCap Technologies</span>
          </a>
          <a href="/" className="font-mono text-sm text-slate-400 hover:text-brand-400">
            ← back to home
          </a>
        </div>
      </header>

      <div className={`mx-auto ${w} px-6 py-16`}>
        <p className="mb-3 font-mono text-sm text-brand-400">$ {tag}</p>
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">{title}</h1>
        {updated && <p className="mb-10 font-mono text-xs text-slate-500">Last updated: {updated}</p>}
        {children}
      </div>

      <LegalFooter />
    </main>
  );
}

export function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section>
      {title && <h2 className="mb-3 text-xl font-bold text-white">{title}</h2>}
      {children}
    </section>
  );
}

export const mail = (
  <a href="mailto:support@m365pro.io" className="text-brand-400 hover:underline">
    support@m365pro.io
  </a>
);

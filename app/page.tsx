export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            CloudCap Technologies
          </h1>

          <p className="text-xl mb-6">
            Microsoft 365 • Azure • Security • Compliance
          </p>

          <p className="text-lg max-w-3xl">
            Helping organizations modernize, secure, and optimize
            their Microsoft cloud environments.
          </p>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Microsoft 365
            </h3>
            <p>
              Exchange Online, Teams, SharePoint,
              OneDrive, Intune and Entra ID.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Security & Compliance
            </h3>
            <p>
              Microsoft Defender, Conditional Access,
              MFA, Purview and Data Governance.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Cloud Migration
            </h3>
            <p>
              Microsoft 365 migrations, SharePoint
              migrations and tenant consolidations.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8">
            About
          </h2>

          <p className="text-lg">
            CloudCap Technologies was founded by
            Dharmendra Chauhan, a Microsoft Cloud
            and Cybersecurity Consultant specializing in
            Microsoft 365, Azure, SharePoint Online,
            Microsoft Defender, Purview, identity
            management and cloud infrastructure.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">
          Contact
        </h2>

        <p>Email: dc@m365pro.io</p>
        <p>Website: m365pro.io</p>
      </section>
    </main>
  );
}
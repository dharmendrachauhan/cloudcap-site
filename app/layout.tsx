import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const description =
  "CloudCap Technologies provides Microsoft 365, Azure, SharePoint, security, Conditional Access, Defender, Intune and cloud migration consulting — hands-on engineering with direct technical ownership.";

export const metadata: Metadata = {
  metadataBase: new URL("https://m365pro.io"),
  title: "CloudCap Technologies | Microsoft 365 & Azure Consulting",
  description,
  openGraph: {
    type: "website",
    url: "https://m365pro.io",
    siteName: "CloudCap Technologies",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CloudCap Technologies — Microsoft 365, Azure & Cybersecurity Consulting" }],
    title: "CloudCap Technologies | Microsoft 365, Azure & Cybersecurity Consulting",
    description,
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: "CloudCap Technologies | Microsoft 365, Azure & Cybersecurity Consulting",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

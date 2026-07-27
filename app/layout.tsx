import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudCap Technologies | Microsoft 365 & Azure Consulting",
  description:
    "CloudCap Technologies provides Microsoft 365, Azure, SharePoint, Security, Compliance, Purview, Defender, Intune and Cloud Migration consulting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

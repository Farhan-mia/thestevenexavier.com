import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stevene XAVIER - Formateur risque électrique",
  description: "Portfolio personnel de Stevene XAVIER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="bg-white dark:bg-[#0a0a0a] text-[#171717] dark:text-[#ededed] antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Yadav - Full Stack Developer & Freelancer",
  description: "Full Stack Developer, DevOps Engineer, and Freelancer. B.Tech Student specialized in Next.js, React, Node.js, and Cloud Technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "DevOps", "Freelancer", "Web Development"],
  authors: [{ name: "Prince Yadav" }],
  creator: "Prince Yadav",
  metadataBase: new URL("https://prince-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prince-portfolio.vercel.app",
    title: "Prince Yadav - Full Stack Developer & Freelancer",
    description: "Full Stack Developer, DevOps Engineer, and Freelancer. B.Tech Student specialized in Next.js, React, Node.js, and Cloud Technologies.",
    siteName: "Prince Yadav Portfolio",
    images: [
      {
        url: "https://prince-portfolio.vercel.app/jsm-logo.png",
        width: 1200,
        height: 630,
        alt: "Prince Yadav Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Yadav - Full Stack Developer & Freelancer",
    description: "Full Stack Developer, DevOps Engineer, and Freelancer. B.Tech Student specialized in Next.js, React, Node.js, and Cloud Technologies.",
    creator: "@prince__up",
    images: ["https://prince-portfolio.vercel.app/jsm-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://prince-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/jsm-logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Prince Yadav Portfolio" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

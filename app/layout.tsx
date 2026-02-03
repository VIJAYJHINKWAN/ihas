import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "I.T.S Institute of Health & Allied Sciences | Best Physiotherapy College in UP",
  description: "I.T.S Institute of Health & Allied Sciences (IHAS) - Premier medical institution offering BPT, MPT, B.Sc & M.Sc Biotechnology. NAAC Grade B accredited. Affiliated to ABVMU, Lucknow.",
  keywords: "physiotherapy college, BPT, MPT, biotechnology, medical education, Ghaziabad, Delhi NCR, NAAC accredited",
  authors: [{ name: "I.T.S Education Group" }],
  canonical: "https://ihas.edu.in",
  openGraph: {
    title: "I.T.S Institute of Health & Allied Sciences | Best Physiotherapy College",
    description: "Premier healthcare education institution offering BPT, MPT & Biotechnology programs. NAAC Grade B accredited.",
    type: "website",
    siteName: "I.T.S IHAS",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ITSEducation",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/images/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

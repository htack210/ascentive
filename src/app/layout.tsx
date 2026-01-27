import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ascentive Dynamics",
    template: "%s | Ascentive Dynamics",
  },
  description:
    "Global biotechnology and pharmaceuticals company advancing human longevity and health through precision science and adaptive intelligence.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Ascentive Dynamics",
    description:
      "Advancing human longevity through precision science and adaptive intelligence.",
    url: "https://ascentivedynamics.com",
    siteName: "Ascentive Dynamics",
    images: [
      {
        url: "https://ascentivedynamics.com/ascentive-og.png",
        width: 1200,
        height: 630,
        alt: "Ascentive Dynamics",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ascentive Dynamics",
    description:
      "Advancing human longevity through precision science and adaptive intelligence.",
    images: ["https://ascentivedynamics.com/assets/ADlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

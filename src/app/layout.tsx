import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maniraj Sidanathan | Senior Techno-Commercial & Geotechnical Manager",
  description:
    "19+ years international leadership in geotechnical engineering, proposal excellence, and risk management across Saudi Arabia, India, and the GCC region. Key accounts include NEOM, Saudi Aramco, and Red Sea Global.",
  keywords: [
    "Maniraj Sidanathan",
    "Geotechnical Manager",
    "Techno-Commercial Manager",
    "Fugro Suhaimi",
    "NEOM",
    "Saudi Aramco",
    "IIT Madras",
    "Civil Engineering",
  ],
  authors: [{ name: "Maniraj Sidanathan" }],
  openGraph: {
    title: "Maniraj Sidanathan | Senior Techno-Commercial & Geotechnical Manager",
    description:
      "Turning geotechnical risk into winning bids for giga-infrastructure projects across Saudi Arabia and India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-titanium-950 text-slate-300 antialiased selection:bg-brandCyan-600 selection:text-white relative">
        {/* Subtle Ambient Glows */}
        <div
          className="ambient-glow w-[500px] h-[500px] bg-brandCyan-500/10 -top-24 -left-24"
          aria-hidden="true"
        />
        <div
          className="ambient-glow w-[600px] h-[600px] bg-gold-500/10 top-1/3 -right-32"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

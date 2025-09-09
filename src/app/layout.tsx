import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Bodoni, Great_Vibes, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"], 
});


const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"], 
});

export const metadata: Metadata = {
  title: "Gui ❤️ Leticia",
  description: "16 de Setembro de 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${lora.variable} ${libreBodoni.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

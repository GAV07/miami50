import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Miami50",
  description: "The event for Investors and Funded Founders Raising Capital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      </body>
    </html>
  );
}

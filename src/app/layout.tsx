import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import {HeroProvider} from "@/context/HeroContext";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
    children,
    header,
    footer
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <HeroProvider>
            {header}
            {children}
            {footer}
          </HeroProvider>
      </body>
    </html>
  );
}

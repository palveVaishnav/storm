import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "../components/Menu";

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
  title: "Storm",
  description: "A Framer site, I am trying to code.",
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
        <div className="fixed w-full top-0 z-10 backdrop-blur-md">
          {/* <Menu /> */}
        </div>
        {children}
      </body>
    </html>
  );
}

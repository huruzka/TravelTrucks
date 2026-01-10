import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header }  from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Rent trcks for your rest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}

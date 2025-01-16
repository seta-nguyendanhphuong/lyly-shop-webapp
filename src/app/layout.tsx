import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./layout.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-pink w-full">
        <Header />
        <div className="">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

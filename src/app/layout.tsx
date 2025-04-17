import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./layout.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { SearchProvider } from "@/app/components/SearchContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-white">
        <SearchProvider>
          <Header />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}

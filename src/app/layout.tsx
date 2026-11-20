import type { Metadata } from "next";
import Navbar from "./Component/Navbar";
import "./globals.css";
import Footer from "./Component/Footer";

export const metadata: Metadata = {
  title: "Zynova AI Solutions | Intelligent Digital Innovation",
  description:
    "Zynova AI Solutions delivers AI-powered applications, intelligent automation, modern web development, and digital transformation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Likith Kumar D K | Frontend Architect",
  description: "Portfolio of Likith Kumar D K",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}>
        {/* Beautiful Elegant Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e130_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e130_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_60%,transparent_100%)]"></div>
          {/* Soft ambient glows */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-40 bg-gradient-to-b from-blue-200 to-indigo-100 blur-[120px] rounded-full mix-blend-multiply"></div>
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] opacity-40 bg-gradient-to-b from-purple-200 to-blue-100 blur-[120px] rounded-full mix-blend-multiply"></div>
        </div>
        
        {children}
      </body>
    </html>
  );
}

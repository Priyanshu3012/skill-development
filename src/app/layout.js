import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.skilldevelopmentsansthan.org"),
  title: {
    default: "Skill Development Sansthan",
    template: "%s | Skill Development Sansthan",
  },
  description:
    "Skill Development Sansthan offers certified diploma, degree and vocational programmes across paramedical, education and skill-based courses through affiliated centers nationwide.",
  icons: {
    icon: "/images/fevicon.png",
  },
  openGraph: {
    title: "Skill Development Sansthan",
    description:
      "Certified diploma, degree and vocational programmes through affiliated centers nationwide.",
    siteName: "Skill Development Sansthan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Development Sansthan",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

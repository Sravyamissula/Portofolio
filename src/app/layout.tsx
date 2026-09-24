import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sai Sri Sravya Missula | Software Engineer",
  description:
    "Portfolio of Sai Sri Sravya Missula — Computer Science & Engineering student at Amrita Vishwa Vidyapeetham, Software Engineering Intern at Fidelity Investments, and developer focused on backend systems, full-stack applications, distributed workflows, and AI.",
  keywords: [
    "Sai Sri Sravya Missula",
    "Software Engineer",
    "Backend Engineer",
    "Fidelity Investments",
    "EventPulse",
    "TradeGenie",
    "Superdense Coding",
    "Java",
    "Spring Boot",
    "FastAPI",
    "Python",
    "Distributed Systems",
    "AI Engineer",
  ],
  authors: [{ name: "Sai Sri Sravya Missula" }],
  openGraph: {
    title: "Sai Sri Sravya Missula | Software Engineer",
    description:
      "Building reliable software systems and intelligent applications. Backend, Distributed Systems & AI.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#07090e] text-[#f8fafc] antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

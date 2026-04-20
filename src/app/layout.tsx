import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velmora — IT Services & Digital Transformation",
  description:
    "Transforming ideas into digital reality. Velmora offers web development, cloud solutions, cybersecurity, mobile apps, AI & ML, and IT consulting services.",
  keywords: [
    "IT services",
    "web development",
    "cloud solutions",
    "cybersecurity",
    "mobile app development",
    "AI",
    "machine learning",
    "IT consulting",
    "digital transformation",
    "Velmora",
  ],
  authors: [{ name: "Velmora" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

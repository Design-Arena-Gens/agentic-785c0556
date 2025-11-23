import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation Mastery Course",
  description: "Learn AI automation with hands-on projects, expert guidance, and cutting-edge techniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

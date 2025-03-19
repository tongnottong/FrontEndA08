import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Explore and book venues easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

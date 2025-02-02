import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uwulingo",
  description:
    "Inspired by Duolingo, this app is made for educational purposes only and does not claim ownership of any content or rights associated with Duolingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

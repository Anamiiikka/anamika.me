import type { Metadata } from "next";
import { Patrick_Hand, Poppins } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anamika Singh",
  description: "Product Designer & Dog Whisperer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.variable} ${poppins.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

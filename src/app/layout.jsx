import { Playfair_Display, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";

// Elegant display serif for section headings.
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Cursive script for the name + accents.
const dancing = Dancing_Script({
  weight: ["400", "600", "700"],
  variable: "--font-dancing",
  subsets: ["latin"],
});

// Clean sans for body copy.
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anamika Singh",
  description: "Developer & Problem Solver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancing.variable} ${poppins.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

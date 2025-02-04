import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import img1 from "../../public/favicon1.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jay Maa Travels",
  description: "Jay Maa Travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon1.png" />
      </head>
      <body className={`${geistSans.variable}  antialiased`}>
        <div className="relative h-[40px] md:h-[120px]">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}

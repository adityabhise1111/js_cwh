import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "get-me-chai",
  description: "A crowd funding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen w-full bg-slate-950 overflow-hidden`}>
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="relative z-10">
            <SessionWrapper>
              <Navbar />
              <div className='text-white '>
                {children}
              </div>
              <Footer />
            </SessionWrapper>
          </div>
        </div>
      </body>
    </html>
  );
}

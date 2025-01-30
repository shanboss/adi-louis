import { Poppins } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";
import FlareCursor from "@/components/FlareCursor";
import LogoHeader from "@/components/LogoHeader";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
});

export const metadata = {
  title: "Adi Louis",
  description: "Adi Louis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased cursor-none`}>
        <FlareCursor />
        <div className="relative min-h-screen">
          {/* Fixed Logo Header */}
          <div className="fixed top-0 left-0 w-full z-10 flex items-center justify-center bg-black/50 backdrop-blur-md pt-2">
            <LogoHeader />
          </div>
          <div className="absolute top-[10rem] w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

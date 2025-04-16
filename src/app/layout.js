import Navbar from "./components/Navbar";
import { Sora, Lato } from "next/font/google";
import "./globals.css";


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
});



export const metadata = {
  title: "Arushi Choudhury",
  description: "Creative Developer & Digital Artist",
};

export default function RootLayout({ children }) {
  
    return (
      <html lang="en" className={`${sora.variable} ${lato.variable}`}>


        <body>
            <Navbar />
        {children}
      </body>
    </html>
  );
}

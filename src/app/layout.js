import "./reset.css";
import "./globals.css";
import { Krub, League_Spartan, Rubik } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const rubik = Rubik({ subsets: ["latin"] });
export const krub = Krub({ subsets: ["latin"], weight: ["200", "300", "400"] });
export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

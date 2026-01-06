import "./globals.css";
import Header from "./components/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dinesh | Portfolio",
  description: "Automation Developer | Full Stack Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-gray-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

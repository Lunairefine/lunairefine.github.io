import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./components/header.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lunairefine",
  description: "Do you wanna coffe?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header/> */}
        {children}
        </body>
    </html>
  );
}

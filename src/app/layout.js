"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <title>My Portfolio | Pankaj</title>
      </head>
      <body className={`${poppins.className}`}>
      <Header />
        {children}
      <Footer/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js" async></script>
      </body>
    </html>
  );
}

"use client"
import React from "react";
import Image from 'next/image';
import ethLogo from "./assets/eth.png";
import opLogo from "./assets/op.png";
import arbLogo from "./assets/arb.png"
import solLogo from "./assets/sol.png";

const logos = [
  { src: ethLogo, alt: "Ethereum" },
  { src: opLogo, alt: "Optimism" },
  { src: arbLogo, alt: "Arbitrum" },
  { src: solLogo, alt: "Solana" },
];

export default function Deployed() {
  return (
    <section className="flex flex-col min-h-screen bg-black px-4 py-20 relative z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="w-[600px] h-[600px] bg-gradient-to-br from-green-500  to-blue-500 opacity-30 blur-3xl rounded-full animate-aurora" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', position: 'absolute' }}></div>
</div>

    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-20 text-center">Deployed across</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import PFP from './assets/lunairefine.png';
import { JSX } from "react";

export default function Landing(): JSX.Element {
  return (
    <section className="flex flex-col min-h-screen bg-black px-4 py-20 relative z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="w-[500px] h-[450px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 opacity-30 blur-3xl rounded-full animate-aurora" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', position: 'absolute' }}></div>
</div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <Image
          src={PFP}
          alt="lunairefine"
          className="rounded-full w-40 h-40 object-cover mb-4 shadow-lg"
        />
        <h1 className="text-2xl font-bold text-white mb-2">LUNAIREFINE</h1>
        <p className="text-lg text-gray-400 text-center">
          Demon Cultivator on Heavenly Network
        </p>
        <a
          href="https://debank.com/profile/0x9111C47492a9043D12af0E6c46D57560eeBCD9D4"
          className="mt-5 bg-black text-white border border-white px-5 py-1.5 rounded-3xl shadow-md hover:bg-gray-800 transition-colors"
        >
          OnChain
        </a>
      </div>

      <div className="flex justify-center gap-6 mt-auto pt-10">
        <a href="https://farcaster.xyz/lunaire" target="_blank" rel="noopener noreferrer">
          <svg width="28" height="28" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1000" height="1000" rx="200" fill="white"/>
            <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" fill="black"/>
            <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" fill="black"/>
            <path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" fill="black"/>
        </svg>
        </a>
        <a href="https://x.com/lunairefine" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.07 9.07 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.62.64c-2.46 0-4.45 2.08-4.45 4.65 0 .36.04.71.12 1.05A12.94 12.94 0 0 1 3.15 2.1a4.63 4.63 0 0 0-.61 2.34c0 1.61.8 3.04 2.02 3.88a4.49 4.49 0 0 1-2.01-.57v.06c0 2.25 1.52 4.13 3.54 4.56a4.56 4.56 0 0 1-2 .08 4.49 4.49 0 0 0 4.21 3.2A9.05 9.05 0 0 1 2 19.54a12.83 12.83 0 0 0 6.95 2.1c8.34 0 12.9-7.25 12.9-13.54 0-.21 0-.43-.02-.64A9.22 9.22 0 0 0 23 3z"/>
          </svg>
        </a>
        <a href="https://github.com/lunairefine" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.79.42-1.35.76-1.66-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.33 3.3 1.24a11.42 11.42 0 0 1 6 0c2.28-1.57 3.3-1.24 3.3-1.24.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

// components/ScrollingLogos.js

import React from "react";
import Image from "next/image";
import Logoeth from '../assets/eth.png'
import Logoarb from '../assets/arb.png'
import Logoop from '../assets/op.png'
import Logoaptos from '../assets/aptos.png'
import Logonear from '../assets/near.png'
import Logobase from '../assets/base.png'
import Logolinea from '../assets/linea.png'
import Logobnb from '../assets/bnb.png'

const ScrollingLogos = () => {
  return (
    <div className="relative overflow-hidden bg-gray-300 py-4">
      <div className="flex gap-8 animate-scroll">
        {/* Logo elements */}
        <div className="flex-shrink-0">
          <Image src={Logoeth} alt="Fireblocks" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <Image src={Logoarb} alt="Metamask" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <Image src={Logoop} alt="OKX" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <Image src={Logoaptos} alt="Ledger" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <Image src={Logonear} alt="RTFKT" className="h-8" />
        </div>
        {/* Repeat logos for a continuous scrolling effect */}
        <div className="flex-shrink-0">
          <Image src={Logolinea} alt="Fireblocks" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <Image src={Logobase} alt="Metamask" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <img src="/path/to/okx-logo.png" alt="OKX" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <img src="/path/to/ledger-logo.png" alt="Ledger" className="h-8" />
        </div>
        <div className="flex-shrink-0">
          <img src="/path/to/rtfkt-logo.png" alt="RTFKT" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;

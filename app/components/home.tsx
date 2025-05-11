import Image from "next/image";
import PFP from './assets/lunairefine.png';
import Logo from './assets/logo.png';
import { JSX } from "react";

export default function Landing(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black py-20">
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
    </section>
  );
}

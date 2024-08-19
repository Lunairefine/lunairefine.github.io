import Image from "next/image";
import PFP from './assets/foto.jpg'
import Logo from './assets/logo.png';

export default function Landing() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen justify-center bg-black py-20">
        <Image src={PFP} alt="lunairefine" className="rounded-full w-40 h-40 object-cover mb-4 shadow-lg"/>
        <h1 className="text-2xl font-bold text-white mb-2">I am, LUNAIREFINE</h1>
        <p className="text-lg text-gray-400 text-center">Hunter S-Class everytime, OpTest at have jobs</p>
      <a href="https://debank.com/profile/0x9111C47492a9043D12af0E6c46D57560eeBCD9D4" className="mt-5 bg-black text-white border border-white px-5 py-1.5 rounded-3xl shadow-md hover:bg-gray-800 transition-colors">
        OnChain</a>
      </section>
    );
  }
  
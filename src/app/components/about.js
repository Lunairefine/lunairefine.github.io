import Image from 'next/image';
import Foto from './assets/foto.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title "About" */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">About</h2>
          <div className="mt-2 border-b-4 border-[#03a9fc] w-24 mx-auto"></div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-2/3 h-2/3 rounded-full overflow-hidden">
            <Image
              src={Foto}
              alt="About Image"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:ml-10 mt-8 lg:mt-0 text-center lg:text-left">
            <h3 className="text-3xl font-extrabold text-white">Lunairefine</h3>
            <p className="mt-4 text-lg text-gray-400 text-justify">
            As an experienced Web3 user, I have delved into various aspects such as DeFi, Staking, Hunter Airdrop, and BetaTest Protocol. With extensive experience exploring blockchain networks like Solana, Ethereum, Binance, Optimism, Arbitrum, Aptos, Polygon, and Near. I have a deep understanding of the characteristics, strengths, and weaknesses of each network. With a solid portfolio of experience, I am ready to contribute to projects that drive innovation and growth in the blockchain ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

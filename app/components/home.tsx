
import Image from "next/image";
import PFP from './assets/lunairefine.png';
import Aurora from "./aurora";
import { FarcasterIcon, TwitterIcon, GithubIcon } from "./icons/index";

const socialLinks = [
  {
    href: "https://farcaster.xyz/lunaire",
    label: "Farcaster Profile",
    Icon: FarcasterIcon,
  },
  {
    href: "https://x.com/lunairefine",
    label: "X/Twitter Profile",
    Icon: TwitterIcon,
  },
  {
    href: "https://github.com/lunairefine",
    label: "GitHub Profile",
    Icon: GithubIcon,
  },
];

export default function Landing() {
  return (
    <main className="flex flex-col min-h-screen bg-black relative overflow-x-hidden">
      <Aurora/>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="w-[500px] h-[450px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 opacity-20 blur-3xl rounded-full animate-aurora" 
          style={{ top: '0%', left: '50%', transform: 'translateX(-50%)', position: 'absolute' }}
        ></div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow z-10 px-2">
        <Image
          src={PFP}
          alt="lunairefine"
          className="rounded-full w-40 h-40 object-cover mb-5 shadow-lg"
          priority
        />
        <h1 className="text-3xl font-bold text-white mb-2">LUNAIREFINE</h1>
        <p className="font-[gamma] text-xl text-gray-300 text-center">
          Cultivator on Heavenly Network
        </p>
        <a
          href="https://debank.com/profile/0x9111C47492a9043D12af0E6c46D57560eeBCD9D4"
          className="mt-5 bg-black/100 text-white border border-white px-5 py-1.5 rounded-3xl shadow-md hover:bg-white hover:text-black transition-colors"
        >
          Onchain
        </a>
      </div>
      <footer className="flex justify-center gap-6 py-30 md:py-8 z-10">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white hover:opacity-80 transition-opacity"
          >
            <Icon />
          </a>
        ))}
      </footer>
    </main>
  );
}
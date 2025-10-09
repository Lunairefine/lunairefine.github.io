import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import ETH from './assets/eth.png';
import ARB from './assets/arb.png';
import OP from './assets/op.png';
import SOLANA from './assets/sol.png';
import BASE from './assets/base.png';
import NEAR from './assets/near.png';
import LINEA from './assets/linea.png';
import UNICHAIN from './assets/unichain.png';


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{width: number | undefined}>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
};

type Framework = {
  name: string;
  icon: React.FC<{ className?: string }>;
  href: string;
  glowColor: string;
};

const EthereumIcon = ({ className }: { className?: string }) => (
    <Image
        src={ETH}
        alt='ETH'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const ArbitrumIcon = ({ className }: { className?: string }) => (
    <Image
        src={ARB}
        alt='ARB'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const OptimismIcon = ({ className }: { className?: string }) => (
    <Image
        src={OP}
        alt='OP'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const BaseIcon = ({ className }: { className?: string }) => (
    <Image
        src={BASE}
        alt='BASE'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const SolanaIcon = ({ className }: { className?: string }) => (
    <Image
        src={SOLANA}
        alt='SOLANA'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const LineaIcon = ({ className }: { className?: string }) => (
    <Image
        src={LINEA}
        alt='LINEA'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const UnichainIcon = ({ className }: { className?: string }) => (
    <Image
        src={UNICHAIN}
        alt='UNICHAIN'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const NearIcon = ({ className }: { className?: string }) => (
    <Image
        src={NEAR}
        alt='NEAR'
        width={40}
        height={40}
        className="transition-transform duration-300 ease-in-out"
      />
);
const DummyIcon = ({ className }: { className?: string }) => (
    <div className={`h-full w-full ${className}`}></div>
);

const blockchainIcons: Framework[] = [
  { name: 'Ethereum', icon: EthereumIcon, href: 'https://ethereum.org/', glowColor: '#627EEA' },
  { name: 'Arbitrum', icon: ArbitrumIcon, href: 'https://arbitrum.io/', glowColor: '#28A0F0' },
  { name: 'Optimism', icon: OptimismIcon, href: 'https://www.optimism.io/', glowColor: '#FF0420' },
  { name: 'Base', icon: BaseIcon, href: 'https://www.base.org/', glowColor: '#0052FF' },
  { name: 'Solana', icon: SolanaIcon, href: 'https://solana.com/', glowColor: '#9945FF' },
  { name: 'Linea', icon: LineaIcon, href: 'https://linea.build/', glowColor: '#1EE9A7' },
  { name: 'Unichain', icon: UnichainIcon, href: '#', glowColor: '#F50DB4' },
  { name: 'Near', icon: NearIcon, href: 'https://near.org/', glowColor: '#FFFFFF' },
];

const ITEMS_PER_ROW = 14;
const NUM_ROWS = 5;
const TOTAL_ITEMS = ITEMS_PER_ROW * NUM_ROWS;

const IconKey = ({ name, icon: Icon, href, glowColor }: Framework) => {
  const isDummy = name.startsWith('Dummy');
  const commonClasses = "group relative flex h-16 w-16 shrink-0 transform-gpu items-center justify-center rounded-lg bg-[#181818]/80 p-4 ring-1 ring-[#2b2b2b] transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:h-20 sm:w-20 sm:p-5";

  if (isDummy) {
    return (
      <div className={`${commonClasses} cursor-default`}>
        <Icon className="h-full w-full" />
        <span className="sr-only">{name}</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${commonClasses} cursor-pointer hover:bg-gray-800`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
    >
      <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
           style={{ boxShadow: `0 0 20px 3px var(--glow-color)` }}></div>
      <Icon className="h-full w-full text-white" />
      <span className="sr-only">{name}</span>
    </a>
  );
};

const FrameworksGrid = () => {
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 768;

  const allItems = useMemo(() => {
    const items: Framework[] = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
      name: `Dummy ${i}`, icon: DummyIcon, href: '#', glowColor: '#4a5568'
    }));

    const centerRowIndex = Math.floor(NUM_ROWS / 2);

    if (isMobile) {
      const rowAboveIndex = centerRowIndex - 1;
      const rowAboveStart = rowAboveIndex * ITEMS_PER_ROW;
      items.splice(rowAboveStart + Math.floor((ITEMS_PER_ROW - 2) / 2), 2, ...blockchainIcons.slice(0, 2));

      const centerRowStart = centerRowIndex * ITEMS_PER_ROW;
      items.splice(centerRowStart + Math.floor((ITEMS_PER_ROW - 4) / 2), 4, ...blockchainIcons.slice(2, 6));

      const rowBelowIndex = centerRowIndex + 1;
      const rowBelowStart = rowBelowIndex * ITEMS_PER_ROW;
      items.splice(rowBelowStart + Math.floor((ITEMS_PER_ROW - 2) / 2), 2, ...blockchainIcons.slice(6, 8));
    } else {
      const centerRowStart = centerRowIndex * ITEMS_PER_ROW;
      const frameworksStart = centerRowStart + Math.floor((ITEMS_PER_ROW - blockchainIcons.length) / 2);
      items.splice(frameworksStart, blockchainIcons.length, ...blockchainIcons);
    }
    return items;
  }, [isMobile]);

  const rows = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    rows.push(allItems.slice(i * ITEMS_PER_ROW, (i + 1) * ITEMS_PER_ROW));
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black text-white px-4">
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl my-12">
          Deployed Across
        </h1>

        <div 
          className="relative w-full py-8 overflow-hidden" 
          style={{
            background: 'radial-gradient(circle at 50% 120%, rgba(0, 0, 0, 0.2), transparent 80%)'
          }}
        >
          <div className="scale-[0.85] sm:scale-90 md:scale-100 transition-transform duration-300 ease-in-out">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              {rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className={`flex flex-nowrap justify-center gap-3 md:gap-5 ${
                    rowIndex % 2 !== 0 ? 'ml-10 md:ml-12' : ''
                  }`}
                >
                  {row.map((fw, itemIndex) => (
                    <IconKey key={`${fw.name}-${rowIndex}-${itemIndex}`} {...fw} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div 
            className="pointer-events-none absolute inset-0" 
            style={{ background: 'radial-gradient(ellipse at center, transparent 35%, black 75%)' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FrameworksGrid;
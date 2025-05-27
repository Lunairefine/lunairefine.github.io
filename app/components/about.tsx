"use client"
import Image from 'next/image';
import Foto from './assets/lunairefine.png';
import { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-10">Background</h2>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center">
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

          <div className="lg:ml-10 mt-8 lg:mt-0 text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-white">Lunairefine</h3>
            <p className="mt-4 text-lg text-gray-400 text-justify">
            As an experienced user in the decentralized technology space, I have explored a wide range of applications, including DeFi platforms, staking mechanisms, early-stage protocol testing, and community-driven initiatives. My background includes in-depth analysis of multiple systems, each with its own technical architecture, advantages, and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

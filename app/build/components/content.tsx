"use client"
import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
  idTag: string;
  path: string;
}

const cardData: CardProps[] = [
  {
    imageSrc: '/media/images/image1.png',
    title: 'Codec Hash',
    link: 'encoding-dev-lunairefine.vercel.app',
    idTag: 'Tools',
    path: 'codec',
  },
  // {
  //   imageSrc: '/media/images/image2.png',
  //   title: 'Serene Expression',
  //   link: 'lunairefine.vercel.app/test',
  //   idTag: '1412',
  //   path: 'hash', // Card 2 -> /build/hash
  // },
  // {
  //   imageSrc: '/media/images/image3.png',
  //   title: 'Gentle Smile',
  //   link: 'lunairefine.vercel.app/test',
  //   idTag: '1412',
  //   path: 'sandbox', // Card 3 -> /build/sandbox
  // },
];

function ImageCard({ imageSrc, title, link, idTag, href }: Omit<CardProps, 'path'> & { href: string }) {
  return (
    <a href={href}
      className="block border border-[rgba(255,255,255,0.12)] bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group cursor-pointer">
      <div className="relative w-full aspect-square">
        <img
          src={imageSrc}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/500x500/2D3748/E2E8F0?text=Image+Not+Found';
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 truncate">
          {title}
        </h3>
        <span className="text-teal-400 text-sm group-hover:text-teal-300 transition-colors block mb-4 truncate"
        >{link}</span>
        <span className="inline-block bg-teal-900 text-teal-200 text-xs font-semibold px-3 py-1 rounded-full">
          {idTag}
        </span>
      </div>
    </a>
  );
}

export default function ImageCardGrid() {
  return (
    <div className="bg-black min-h-screen p-8 md:p-12 font-sans mt-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-200 text-center mb-8 md:mb-12">
        Explore what you want
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardData.map((card, index) => (
          <ImageCard
            key={`${card.title}-${index}`}
            imageSrc={card.imageSrc}
            title={card.title}
            link={card.link}
            idTag={card.idTag}
            href={`/build/${card.path}`}
          />
        ))}
      </div>
    </div>
  );
}
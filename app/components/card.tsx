import Image, { StaticImageData } from 'next/image';

type ProjectCardProps = {
  title: string;
  imageUrl: StaticImageData;
  liveUrl: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ title, imageUrl, liveUrl, description, tags }: ProjectCardProps) {
  return (
    <div className="bg-[#111827]/40 border border-gray-800 rounded-xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105 hover:border-gray-600">
      <div className="relative w-full aspect-video"> 
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-3 flex flex-col flex-grow"> 
        <h2 className="text-base font-bold text-white uppercase tracking-wider">{title}</h2> 
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 text-xs break-all mt-1 transition-colors"
        >
          {liveUrl}
        </a>
        <p className="text-gray-400 mt-2 text-xs font-light flex-grow"> 
          {description}
        </p>

        <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="bg-teal-900/50 text-teal-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
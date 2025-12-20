export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 text-sm mt-auto">
      <p> Created by Lunairefine |{' '}
        <a 
          href="https://lunairefine.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-[#00ec97]"
        >
          lunairefine.eth
        </a>
      </p>
    </footer>
  );
}
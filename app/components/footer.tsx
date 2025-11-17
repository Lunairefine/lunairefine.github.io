export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[rgba(255,255,255,0.12)]">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400">
          &copy; Copyright 2025, Lunairefine |
          <a
            href="https://debank.com/profile/0x9111c47492a9043d12af0e6c46d57560eebcd9d4"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:text-teal-400 transition-colors duration-200"
          >
            lunairefine.eth
          </a>
        </p>
      </div>
    </footer>
  );
}
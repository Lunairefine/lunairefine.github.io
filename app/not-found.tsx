import Image from "next/image";

const notFoundImage = "/404.png";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <img
        src={notFoundImage}
        alt="Not Found"
        width={300}
        height={300}
        className="mb-8"
      />

      {/* tampilan default-style Next.js */}
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg opacity-70">This page could not be found.</p>

    </div>
  );
}

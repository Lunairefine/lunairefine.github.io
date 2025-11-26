const notFoundImage = "/404.png";
import Header from '@/app/components/header';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <Header/>
      <img
        src={notFoundImage}
        alt="Not Found"
        width={300}
        height={300}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg opacity-70">Stop! you are lost.</p>
    </div>
  );
}

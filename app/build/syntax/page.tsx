import Header from '@/app/components/header';
import Canvas from './components/content';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-between p-4 bg-black text-white overflow-hidden">
         <Header/>
       <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">
           <Canvas/>
       </div>
       <Footer/>
    </main>
  );
}
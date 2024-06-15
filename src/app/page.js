import style from './style.css'
import Image from 'next/image';
import banner from './assets/lunaid.png';

export default function Home() {
  return (
    <div class="container">
        <h1 class="landingh1">ルナイルファイヌ</h1>
          <Image src={banner} alt="lunairefine"  className=" mx-auto" width={350} height={350}/>
          <div className="flex items-center justify-center">
              <a href="/error">
              <button className="bg-black text-white border border-white px-3 py-0.3 item">Explore</button>
              </a>
          </div>
          <h2 class="landingh2">© 2024 Lunairefine.eth</h2>
    </div>
  );
}
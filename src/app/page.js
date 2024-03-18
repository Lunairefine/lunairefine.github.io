import Image from "next/image";
import banner from './assets/banner.png';

export default function Home() {
  return (
    <div class="container">
        <h1>ルナイルファイヌ</h1>
        <Image src={banner} alt="lunairefine" className=" mx-auto" width={500} height={500}/>
        <div className="flex items-center justify-center">
          <a href="/about">
            <button className="bg-white text-black border border-black px-3 py-0.3 item ">Explore</button>
          </a>
        </div>
        <h2>Powered by 大魔導士研究所</h2>
    </div>
  );
}

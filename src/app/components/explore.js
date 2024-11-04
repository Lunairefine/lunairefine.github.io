import Image from "next/image";
import Logoeth from './assets/eth.png'
import Logoarb from './assets/arb.png'
import Logoop from './assets/op.png'
import Logoaptos from './assets/aptos.png'
import Logonear from './assets/near.png'
import Logobase from './assets/base.png'
import Logolinea from './assets/linea.png'
import Logobnb from './assets/bnb.png'

export default function Network() {
  return (
    <section id="network" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Network Explore</h2>
          <div className="mt-2 border-b-4 border-[#03a9fc] w-28 mx-auto"></div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="flex items-center justify-center">
            <Image src={Logoeth} alt="ETH" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Logoarb} alt="ARB" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Logoop} alt="OP" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Logoaptos} alt="APTOS" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>

          <div className="mt-20 flex items-center justify-center">
            <Image src={Logonear} alt="NEAR" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
          <div className="mt-20 flex items-center justify-center">
            <Image src={Logobase}  alt="BASE" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
          <div className="mt-20 flex items-center justify-center">
            <Image src={Logolinea} alt="LINEA" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
          <div className="mt-20 flex items-center justify-center">
            <Image src={Logobnb} alt="BNB" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
}

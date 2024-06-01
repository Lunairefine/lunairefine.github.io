import Image from "next/image";
import styles from './styles.css';
import pfp from './assets/pfp.png';
import banner from './assets/banner.png';
import Header from "../components/header.js";

export default function Page() {
    return (
      <div class="about">
        <Header/>
        <div class="pfp">
          <Image src={pfp} alt="lunairefine" class="pfp" height={180} width={180}/>
        </div>
        <div class="details">
          <h2 class="username">Lunairefine</h2>
          <a class="desc">IT Analyst & BetaTester</a>
        </div>
        <div class="intro">
          <a class="introduce">As an experienced Web3 user, I have delved into various aspects such as DeFi, Staking, Hunter Airdrop, and BetaTest Protocol. With extensive experience exploring blockchain networks like Solana, Ethereum, Binance, Optimism, Arbitrum, Aptos, Polygon, and Near. I have a deep understanding of the characteristics, strengths, and weaknesses of each network. With a solid portfolio of experience, I am ready to contribute to projects that drive innovation and growth in the blockchain ecosystem.</a>
        </div>
        <div class="N1">
          <h2 class="NE">Network Experience</h2>
          <hr class="horizontal-line"></hr>
        </div>
        {/* <div class="content2">
            <div class="gambar-container">
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
            <div class="gambar">
            <Image src={pfp} alt="lunairefine" class="gambar"/>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
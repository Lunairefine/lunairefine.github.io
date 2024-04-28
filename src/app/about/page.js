import Image from "next/image";
import styles from './styles.css'
import logo from './logo.png';
import banner from './assets/banner.png';
import pfp from './assets/lunairefine.png';
import projectId1 from './assets/polygon.png'
import projectId2 from './assets/aptos.png'
import projectId3 from './assets/arbitrum.png'

export default function Page() {
    return (
      <div class="about">
        <div class="header">
        <div class="logo">
          <Image src={logo} alt="lunairefine" class="logo1" width={35} height={35}/>
          <a class="home" href="#">ルナイルファイヌ</a>
        </div>
          <div class="menu">
            <a class="menu-item" href="#">About</a>
            <a class="menu-item" href="project">Project</a>
            <a class="menu-item" href="https://t.me/lunairefine">Contact</a>
          </div>
        </div>
        <div class="content">
          {/* <Image src={banner} alt="lunairefine" class="banner"/> */}
        </div>
        <div class="pfp">
          <Image src={pfp} alt="lunairefine" class="pfp" height={180} width={180}/>
        </div>
        <div class="details">
          <h2 class="username">Lunairefine</h2>
          <a class="desc">Research & Testnet Operator</a>
        </div>
        <div class="intro">
          <a class="introduce">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
        </div>
        {/* <div class="horizontal-line">
        </div> */}
        <div>
          <h2 class="exp">EXPERIENCE
          <i class="chevron" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right vue-feather__content"><polyline points="9 18 15 12 9 6"></polyline></svg></i>
          </h2>
        </div>
        <div class="content2">
          <div class="exp1">
            <Image src={projectId1} alt="lunairefine" class="exp-asset" height={80} width={80}/>
            <h3 class="idpro">Polygon</h3>
            <a>Deployer NFT</a>
          </div>
          <div class="exp1">
            <Image src={projectId2} alt="lunairefine" class="exp-asset" height={80} width={80}/>
            <h3 class="idpro">Aptos</h3>
            <a>As Tester on Nov</a>
          </div>
          <div class="exp1">
            <Image src={projectId3} alt="lunairefine" class="exp-asset" height={80} width={80}/>
            <h3 class="idpro">Arbitrum</h3>
            <a>User and Tester</a>
          </div>
        </div>
        <div class="footer">
          <a class="copy">Powered by 大魔導士研究所</a>
        </div>
      </div>
    );
  }
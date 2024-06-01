import Image from "next/image";
import style from './style.css';
import lunaimg from '../assets/lunaire.png';
import Header from "../components/header.js";

export default function Page() { 
    return (
        <div class="Container">
            <Header/>
            <div class="content">
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            <div class="nft">
                <Image src={lunaimg} alt="content" class="img1" width={250} height={250}/>
            </div>
            </div>
        </div>
    )
};
import Image from "next/image";
import './style.css';
import Twitter from '../assets/twitter.png';
import Github from '../assets/github.png';
import Discord from '../assets/discord.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <a href="https://x.com/lunairefine" target="_blank" rel="noopener noreferrer">
                    <Image src={Twitter} alt="Twitter" className="logo1" width={30} height={30}/>
                </a>
                <a href="https://github.com/Lunairefine" target="_blank" rel="noopener noreferrer">
                    <Image src={Github} alt="Github" className="logo1" width={30} height={30}/>
                </a>
                <a href="https://warpcast.com/lunaire" target="_blank" rel="noopener noreferrer">
                    <Image src={Discord} alt="Warpcast" className="logo1" width={30} height={30}/>
                </a>
            </div>
            <div class="footer-container">
                <a class="foot-item">© 2024 Lunairefine. All rights reserved.</a>
            </div>
        </div>
    )
}
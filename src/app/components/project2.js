import Image from "next/image";
import style from './project.css';
import geoimg from '../assets/geoid.png'

export default function Page() {
    return (
        <div><div class="magazine-layout">
        <div class="image-container">
            <Image src={geoimg} alt="project1img" class="imgid" width={250} height={250}/>
        </div>
    <div class="text-container">
        <h1 class="magazine-title">GEOGLYPHS.</h1>
        <p class="magazine-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div></div>
    )
}
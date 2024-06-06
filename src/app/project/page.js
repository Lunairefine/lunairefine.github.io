import Image from "next/image";
import style from './style.css';
import lunaimg from '../assets/lunaire.png';
import Header from "../components/header.js";
import Content1 from '../components/project1.js';
import Content2 from '../components/project2.js'

export default function Page() { 
    return (
        <div class="Container">
            <Header/>
            <Content1/>
            <Content2/>
        </div>
    )
};
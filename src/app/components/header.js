"use client";
import Image from 'next/image';
import logo from '../assets/logo.png';
import style from './style.css';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
    <div class="header">
        <div class="logo">
            <Image src={logo} alt="lunairefine" class="logo1" width={40} height={40}/>
            <a class="home" href="#">LUNAIRE.</a>
        </div>
        <div className="menu-container">
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <a class="menu-item" href="home">Home</a>
            <a class="menu-item" href="about">About</a>
            <a class="menu-item" href="project">Project</a>
            <a class="menu-item" href="https://t.me/lunairefine">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    </div>
    )
};

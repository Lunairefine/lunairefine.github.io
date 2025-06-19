"use client"
import Image from 'next/image';
import { JSX } from 'react';
import Header from './components/header';
import Landing from './components/home';
import About from './components/about';
import Deployed from './components/deployed';

export default function Home(): JSX.Element {
  return (
    <div className="body">
      <Header/>
      <Landing/>
      <About/>
      <Deployed/>
    </div>
  );
}

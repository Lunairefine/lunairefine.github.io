import Image from 'next/image';
import { JSX } from 'react';
import Header from './components/header';
import Landing from './components/home';
import About from './components/about';
import Deployed from './components/deployed';

export const metadata = {
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://yourdomain.com/frame-0.png",
    "fc:frame:button:1": "Mulai",
    "fc:frame:button:1:action": "post",
    "fc:frame:post_url": "https://yourdomain.com/api/frame"
  }
};


export default function Home(): JSX.Element {
  return (
    <div>
      <Header/>
      <Landing/>
      <About/>
      <Deployed/>
    </div>
  );
}

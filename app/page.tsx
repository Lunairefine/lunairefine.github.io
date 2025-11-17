import Image from 'next/image';
import { JSX } from 'react';
import Header from './components/header';
import Landing from './components/home';
import About from './components/about';
import Deployed from './components/deployed';
import Footer from './components/footer';

export const metadata = {
  title: "Lunairefine Webased",
  description: "Do you wanna Coffee?",
  openGraph: {
    title: "lunairefine@server:~",
    description: "Do you wanna Coffee?",
    images: [
      {
        url: "/media/images/frame.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/media/images/frame.png"],
  },
};

export default function Home(): JSX.Element {
  return (
    <div>
      <Header/>
      <Landing/>
      <About/>
      <Deployed/>
      <Footer/>
    </div>
  );
}

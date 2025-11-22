import Header from '@/app/components/header';
import Landing from '@/app/components/home';
import About from '@/app/components/about';
import Deployed from '@/app/components/deployed';
import Footer from '@/app/components/footer';

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

export default function Home() {
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

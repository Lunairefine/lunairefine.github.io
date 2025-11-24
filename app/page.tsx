import Header from '@/app/components/header';
import Landing from '@/app/components/home';
import About from '@/app/components/about';
import Deployed from '@/app/components/deployed';
import Footer from '@/app/components/footer';
import Frame from '@/app/components/farcasterprovider'; 

export default function Home() {
  return (
    <div>
      <Frame>
      <Header/>
      <Landing/>
      <About/>
      <Deployed/>
      <Footer/>
      </Frame>
    </div>
  );
}

import Header from '@/app/components/header';
import Landing from '@/app/components/home';
import About from '@/app/components/about';
import Deployed from '@/app/components/deployed';
import Footer from '@/app/components/footer'; 

export default function Home() {
  return (
    <>
      <Header/>
      <Landing/>
      <About/>
      <Deployed/>
      <Footer/>
    </>
  );
}

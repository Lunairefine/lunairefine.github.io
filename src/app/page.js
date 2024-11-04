import Image from 'next/image'
import Header from './components/header';
import Landing from './components/home';
import About from './components/about';
import Network from './components/explore';
import Project from './components/project';

export default function Home() {
  return(
    <div class="body">
      <Header></Header>
      <Landing id="landing"></Landing>
      <About id="about"></About>
      <Network id="network"></Network>
      {/* <Project id="project"></Project> */}
    </div>
  )
}
import Image from 'next/image';
// import * as React from 'react';
import Header from './components/header';
import { JSX } from 'react';
import Landing from './components/home';
// import About from './components/about';
// import Network from './components/explore1';
// import Project from './components/project'; // Uncomment if needed

export default function Home(): JSX.Element {
  return (
    <div className="body">
      <Header />
      <Landing />
      {/* <About /> */}
      {/* <Network id="network" /> */}
      {/* <Project id="project" /> */}
    </div>
  );
}

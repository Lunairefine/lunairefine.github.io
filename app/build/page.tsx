"use client"
import Image from 'next/image';
import { JSX } from 'react';
import Header from '../components/header';
import Card from '../build/components/content';

export default function Home(): JSX.Element {
  return (
    <div>
      <Header/>
      <Card/>
    </div>
  );
}
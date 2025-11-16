import type { Metadata } from 'next';

const APP_URL = 'https://lunairefine.vercel.app';
const FRAME_IMAGE_URL = '../components/assets/frame.png';

export const metadata: Metadata = {
  title: 'Web Based',
  description: 'Do you wanna coffee?',
  openGraph: {
    title: 'lunairefine@server:~',
    description: 'Do you wanna coffee?',
    images: [FRAME_IMAGE_URL],
  },
  
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': FRAME_IMAGE_URL,
    'fc:frame:button:1': '🚀 Buka Aplikasi',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': APP_URL,
  },
};

export default function LaunchPage() {
  return (
    <div>
      <h1>Frames</h1>
      <p>Explore it</p>
    </div>
  );
}
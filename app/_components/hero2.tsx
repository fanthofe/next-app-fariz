'use client';

import Image from 'next/image';
import profile from '@/public/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const titlesSequence = ["Back-end", 1500 ,
    "Front-end", 1500, 
    "Fullstack", 1500];

  return (
    <section id='hero'>
      <div className="bg-gray-900 min-h-screen flex justify-center items-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative flex items-center justify-center p-12 animate-fade-in">
            <div id='profile' className="absolute left-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden mb-6">
              <Image src={profile} alt="Profile" className="absolute w-full h-full object-contain top-0" />
            </div>
          </div>
          <div className='z-10'>
            <h1 className="text-8xl text-gray-300 transition-opacity duration-500">Je suis développeur </h1>
            <TypeAnimation
              sequence={titlesSequence}
              wrapper="h1"
              speed={50}
              className="text-8xl text-gray-300 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
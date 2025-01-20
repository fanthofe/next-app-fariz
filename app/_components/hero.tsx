'use client';

import Image from 'next/image';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [textColor, setTextColor] = useState('text-gray-300');

  const titlesSequence = ["Back-end", 1500 , () => setTextColor('text-purple-500'),
    "Front-end", 1500, () => setTextColor('text-yellow-300'),
    "Fullstack", 1500, () => setTextColor('text-gray-300')];

  return (
    <section id='hero'>
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative flex items-center justify-center p-12 animate-fade-in">
            <div id='profile' className="absolute lg:left-40 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden mb-6">
              <Image 
                src="/profile.png" 
                width={100}
                height={100}
                alt="Profile" 
                className="absolute w-full h-full object-contain top-0" />
            </div>
          </div>
          <div className='relative -bottom-48 md:-bottom-60 lg:-bottom-0 md:m-auto z-10'>
            <h1 className="text-5xl sm:text-5xl md:text-7xl md:text-center lg:text-8xl text-gray-300 transition-opacity duration-500">Je suis développeur </h1>
            <TypeAnimation
              sequence={titlesSequence}
              wrapper="h1"
              className={`text-5xl sm:text-5xl md:text-7xl md:text-center lg:text-8xl ${textColor} transition-opacity duration-500`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
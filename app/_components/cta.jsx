'use client'

import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const CallToAction = () => {
  const handleMouseEnter = () => {
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.6 },
      colors: ['#60A5FA', '#34D399', '#A78BFA', '#F472B6'],
      gravity: 2,
      scalar: 0.7,
      ticks: 50,
      disableForReducedMotion: true
    });
  };

  const heightRef = useRef(null);

  useEffect(() => {
    if (heightRef.current) {
      const computedHeight = window.getComputedStyle(heightRef.current).height;
      // Vous pouvez également définir cette hauteur comme une variable CSS
      console.log(document.documentElement.style.setProperty('--height-cta', computedHeight))
      document.documentElement.style.setProperty('--height-cta', computedHeight);
    }
  }, []);

  return (
    <div id="cta" ref={heightRef} className="absolute left-0 right-0">
      <div className="absolute inset-0"></div>
      <div className="relative container mx-auto px-4">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto transform hover:-translate-y-3 transition-all duration-300"
          onMouseEnter={handleMouseEnter}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Donnez vie à vos idées
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Transformez votre vision en une expérience web exceptionnelle. 
              Notre expertise en développement web créera pour vous un site 
              moderne, performant et parfaitement adapté à vos besoins.
            </p>
            <button className="bg-gradient-to-r border-none from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300">
              Commencer votre projet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

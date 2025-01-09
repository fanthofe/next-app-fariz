import Image from 'next/image';
import laptopSvg from '@/public/laptop.svg';

const Hero = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Développeur Web Freelance
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Je transforme vos idées en solutions web innovantes et performantes. 
              Spécialisé dans le développement d'applications web modernes, 
              je vous accompagne dans la réalisation de vos projets digitaux.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sites web responsive et applications web</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Interfaces utilisateur modernes et intuitives</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Solutions sur mesure et évolutives</span>
              </li>
            </ul>
            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                Démarrer un projet
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <Image
                src={laptopSvg}
                alt="Developer Laptop Illustration"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

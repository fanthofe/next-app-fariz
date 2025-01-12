"use client";

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import SkillsImage from '@/public/skills/bootstrap.png';

import techwave from '@/public/partners/techwave.svg';
import greenleaf from '@/public/partners/greenleaf.svg';
import skydata from '@/public/partners/skydata.svg';
import nexuslab from '@/public/partners/nexuslab.svg';
import innovatech from '@/public/partners/innovatech.svg';
import blueorbit from '@/public/partners/blueorbit.svg';
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants';

const Skills = () => {
  const skills1 = [
    {
      id: 1,
      name: "php",
      url: "php.png"
    },
    {
      id: 2,
      name: "JS",
      url: "js.png"

    },
    {
      id: 3,
      name: "React",
      url: "react.png"

    },
    {
      id: 4,
      name: "Wordpress",
      url: "wordpress.svg"

    },
    {
      id: 5,
      name: "Symfony",
      url: "symfony.psvg"

    },
    {
      id: 6,
      name: "Sass",
      url: "sass.svg"
    }
  ];

  const skills2 = [
    {
      id: 1,
      name: "Boostrap",
      url: "bootstrap.png"

    },
    {
      id: 2,
      name: "Tailwind",
      url: "tailwindcss.svg"

    },
    {
      id: 3,
      name: "Github",
      url: "github.svg"

    },
    {
      id: 4,
      name: "Gitlab",
      url: "gitlab.svg"

    },
    {
      id: 5,
      name: "Lando",
      url: "lando.png"
    },
    {
      id: 6,
      name: "Mysql",
      url: "mysql.png"
    },
    {
      id: 7,
      name: "MariaDB",
      url: "mariadb.png"
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-3xl">
            Je suis fier d'avoir pu travaillé <br />avec ces sociétés talentueuses
          </h2>
        </div>
        <div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={4000}
            className='clients-carousel mb-5'
          >
            {skills1.map((skill) => (
              <SwiperSlide key={skill.id}>
                <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Image
                    src={`/skills/${skill.url}`}
                    width={36}
                    height={36}
                    alt={`Logo ${skill.name}`}
                    className="max-h-16 w-36 h-36 object-contain filter hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Autoplay, Navigation]}
            allowTouchMove={false}
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={4000}
            className='clients-carousel'
          >
            {skills2.map((skill) => (
              <SwiperSlide key={skill.id}>
                <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Image
                    src={`/skills/${skill.url}`}
                    width={36}
                    height={36}
                    alt={`Logo ${skill.name}`}
                    className="max-h-16 w-36 h-36 object-contain filter hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;

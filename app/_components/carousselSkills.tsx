"use client";

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

const CarousselSkills = () => {
  const skills1 = [
    {
      id: 1,
      name: "php",
      url: "php.svg"
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
      url: "symfony.svg"

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
      url: "tailwindcss.png"

    },
    {
      id: 3,
      name: "Github",
      url: "github.png"

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
      url: "mariadb.svg"
    }
  ];

  return (
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
        speed={6000}
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
        speed={6000}
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
  );
};

export default CarousselSkills;

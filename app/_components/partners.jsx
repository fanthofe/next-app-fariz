"use client";

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import CallToAction from './cta';
import 'swiper/css';

import techwave from '@/public/partners/techwave.svg';
import greenleaf from '@/public/partners/greenleaf.svg';
import skydata from '@/public/partners/skydata.svg';
import nexuslab from '@/public/partners/nexuslab.svg';
import innovatech from '@/public/partners/innovatech.svg';
import blueorbit from '@/public/partners/blueorbit.svg';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "TechWave",
      logo: techwave
    },
    {
      id: 2,
      name: "GreenLeaf",
      logo: greenleaf
    },
    {
      id: 3,
      name: "SkyData",
      logo: skydata
    },
    {
      id: 4,
      name: "NexusLab",
      logo: nexuslab
    },
    {
      id: 5,
      name: "InnovaTech",
      logo: innovatech
    },
    {
      id: 6,
      name: "BlueOrbit",
      logo: blueorbit
    }
  ];

  return (
    <section id="partners" className="relative py-20 bg-gray-900">
      {/* <CallToAction /> */}
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
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            navigation={false}
            loop={true}
            speed={4000}
            className='clients-carousel'
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-h-16 w-auto filter hover:grayscale-0"
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

export default Partners;

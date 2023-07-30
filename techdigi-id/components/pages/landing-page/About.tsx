/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { itemShow } from '@/components/lib/animate'
import { Carousel } from 'flowbite-react';


const About = () => {
  return (
    <section id="about">
      <div className='flex flex-wrap justify-evenly -mt-[10rem] w-full h-auto'>
        <div className='flex items-center justify-center w-[250px] sm:w-1/4 h-[650px] rounded-md sm:mt-[200px]'>
          <Carousel slideInterval={5000} >
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
          </Carousel>
        </div>
      
        <div className="px-4 py-4 sm:py-20">
          <div className="sm:container overflow-x-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-7xl uppercase flex flex-col lg:max-h-[150px] lg:gap-2 font-medium">
            <motion.span
                className="bg-colorfull-blue"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Introducing
              </motion.span>
              <motion.span
                className="pl-20"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About
              </motion.span>
              <motion.span
                className="pl-10 text-colorfull-red"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Us
              </motion.span>
            </h1>
            <motion.div
              variants={itemShow()}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 'all' }}
              className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-xl bg-gray-200 bg-opacity-10 backdrop-blur-sm border border-gray-600 mt-4 md:[90px] lg:mt-[120px]"
            >
              <h1 className="text-3xl sm:text-4xl tracking-widest uppercase font-bold">Tech Digi Indonesia.</h1>
              <p className="sm:text-2xl max-w-3xl mt-4">
                <span className="text-colorfull-blue font-semibold">Techdigi.id</span>  bergerak dibidang jasa berbasis teknologi diantaran pembuatan<span className="text-colorfull-red font-semibold">  Creative Content, Branding Marketing, Web developer, Mobile Apps, Fotography, serta Konsulatasi digital.</span> perusahaan yang memiliki visioner yang terfokus pada pengembangan bisnis terintegrasi berbasis teknologi dan informasi
              </p>
              <ul className="pl-10 sm:text-2xl mt-4 list-disc max-w-xl">
                <li>Pengembangan sistem bisnis berbasis teknologi dan informasi.</li>
                <li>Berafiliasi dengan Owner bisnis dalam pembangunan UMKM</li>
                <li>Pengembangan kualitas SDM baik internal maupun eksternal dibidang teknologi dan bisnis</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

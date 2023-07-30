'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button, Modal,Card } from 'flowbite-react';
import { useState } from 'react';

const Service = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <section id="services">
        <div className='flex flex-col justify-center items-center w-full h-auto py-20'>
          <div className="container flex justify-center items-center mb-10">
          <h1 className="w-max text-3xl sm:text-5xl md:text-7xl uppercase flex flex-col gap-y-2">
            <motion.span
              className="sm:pl-20 whitespace-nowrap"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Service 
            </motion.span>
            <motion.span
              className="self-center sm:self-start bg-colorfull-blue w-max"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Is All You
            </motion.span>
            <motion.span
              className="self-end text-colorfull-red"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Need
            </motion.span>
          </h1>
        </div>

        <div className="flex justify-around flex-col sm:flex-row flex-wrap items-center gap-4">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/hero-section1.png"
          className="w-[250px] sm:w-1/4 my-2"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Web Developer
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam optio voluptates ullam dolore eveniet tempore veniam voluptatum voluptas adipisci.
            </span>
          </p>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/hero-section1.png"
          className="w-[250px] md:w-1/4"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Branding Marketing
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rem mollitia eveniet consequuntur corrupti, corporis itaque eligendi suscipit quibusdam magnam?
            </span>
          </p>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/hero-section1.png"
          className="w-[250px] md:w-1/4"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Technology and Networking
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi doloremque incidunt hic delectus nisi sit alias, minus nesciunt repellendus accusantium.
            </span>
          </p>
        </Card>

        </div>


      </div>
    </section>

  )
}

export default Service

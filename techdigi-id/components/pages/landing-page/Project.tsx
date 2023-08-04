'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/components/lib/animate'
import { works } from '@/constants'
import CardWork from './CardWork'

function Project() {
  return (
    <section id="projects" className='relative'>
        <div className='z-10'>
          <div className="absolute top-[40%] left-[35%] w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
          <div className="absolute top-[40%] left-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
          <div className="absolute top-[40%] right-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
        </div>
      <div className="container py-10 mx-auto">
        <div className="flex items-end gap-2">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase ml-2">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className='font-bold text-blue-500'>Project</span>
            </motion.span>
          </h1>
        </div>
        <motion.div
          variants={containerShow}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-10 mx-6 text-white"
        >
          {works.map((item) => (
            <CardWork key={item.id} item={item} />
          ))}
          
        </motion.div>
      </div>
    </section>
  )
}

export default Project
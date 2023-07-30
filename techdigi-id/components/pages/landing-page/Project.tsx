'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/components/lib/animate'

function Project() {
  return (
    <section id="projects">
      <div className="container py-10 mx-auto">
        <div className="flex items-end gap-2">
          <h1 className="text-3xl sm:text-7xl uppercase ml-2">Our Project</h1>
        </div>
        <motion.div
          variants={containerShow}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-10 mx-6 text-white"
        >
          {['App Development', 'SEO', 'Web Design', 'Graphic Design', 'Soc-Med Management', 'Digital Marketing'].map((item) => (
            <motion.div
              variants={itemShow()}
              key={item}
              className="relative aspect-square rounded-md bg-gray-200 bg-opacity-10 backdrop-blur-sm overflow-hidden group"
            >
              <div className="h-full relative">
                <Image
                  src="/images/hero.jpg"
                  alt="portoflio"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <button className="absolute top-2 right-2 sm:text-xl bg-gray-200 bg-opacity-10 backdrop-blur-sm p-3 rounded-md z-10 hover:bg-black hover:bg-opacity-20 transition">
                <BiLinkExternal />
              </button>
              <div className="absolute inset-0 flex flex-col justify-end px-6 py-10 group-hover:bg-black group-hover:bg-opacity-70 transition">
                <h4 className="sm:text-2xl font-semibold uppercase text-gradient-2">
                  {item}
                </h4>
                <p className="mt-2 text-xs sm:text-lg">
                  Title
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Project
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/components/lib/animate'
import Link from 'next/link'
import { contacts } from '@/constants'


function Contact() {
  return (
    <>
      <div className="container flex items-center justify-center w-full min-h-[500px] py-20 mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase flex flex-col lg:max-h-[150px] gap-2">
          <motion.span
            className="w-max bg-colorfull-red px-4 sm:px-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Are
          </motion.span>
          <motion.span
            className="self-center bg-colorfull-yellow w-max px-4 sm:px-10"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            You
          </motion.span>
          <motion.span
            className="w-max px-4 sm:px-10 bg-colorfull-blue"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready?
          </motion.span>
        </h1>
      </div>
      <section id="contact" className="container flex items-center justify-center w-full min-h-[500px] py-20 mx-auto">
        <div className="relative overflow-x-clip">
          <div className="absolute left-[50%] top-[30%] w-[300px] aspect-square bg-colorfull-blue -z-10 blur-[250px]" />
        </div>
        <div className="px-4 container py-20">
          <div className="flex flex-col lg:flex-row items-center sm:px-10 gap-x-4 gap-y-10 ">
            <div className="lg:basis-[50%] font-semibold sm:px-4 lg:px-0">
              <h4 className="text-lg text-colorfull-yellow">Get In Touch</h4>
              <h2 className="text-4xl sm:text-5xl">Let&apos;s Work Together!</h2>
              <motion.div
                variants={containerShow}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 'all' }}
                className="mt-5 sm:mt-10 grid grid-cols-1 gap-4"
                >
                {contacts.map((item) => {
                  if (item?.link) return (
                    <motion.div key={item.id} variants={itemShow()}>
                      <Link target="_blank" rel="noopener noreferrer" href={item.link} className="flex items-center font-medium gap-4 text-colorfull-black">
                        <item.Icon fontSize={24} />
                        <span className="text-lg sm:text-base text-black underline underline-offset-4">{item.value}</span>
                      </Link>
                    </motion.div>
                  );
                  
                  return (
                    <motion.div variants={itemShow()} key={item.id} className="flex items-center font-medium gap-4 text-black">
                      <item.Icon fontSize={24} />
                      <span className="text-black text-lg sm:text-base">{item.value}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
            <div className="lg:basis-[50%]">
              <form action="">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-black"
                      placeholder="Email Address"
                      />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      className="w-full bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-black"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-span-2">
                    <textarea
                      className="w-full h-[200px] sm:h-[250px] bg-transparent rounded-md border-2 border-colorfull-blue px-4 py-2 outline-none placeholder:text-black resize-none"
                      placeholder="Message"
                      ></textarea>
                  </div>
                  <div className="col-span-2">
                    <button className="w-full px-10 py-4 rounded-full bg-colorfull-blue text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
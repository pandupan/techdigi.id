'use client';

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false)
  const [color,setColor] = useState('transparent')
  const [textColor,setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(()=>{
    const changeColor =()=>{
      if(window.scrollY >= 90){
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor);
  },[])



  return (
    <div style={{backgroundColor:`${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[11240px] m-auto flex justify-between items-center text-white">
        <Link href='/'>
        <Image
          src="/assets/images/Logo.png"
          width={75}
          height={75}
          alt="Logo Company"
          className=""
        />       
        </Link>
        <ul style={{color:`${textColor}`}} className='hidden sm:flex '>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#product'>Product</Link>
          </li>
          <li className='p-4'>
            <Link href='/process'>Process</Link>
          </li>
          <li className='p-4'>
            <Link href='/client'>Client</Link>
          </li>
          <li className='p-4'>
            <Link href='/aboutUs'>About Us</Link>
          </li>
        </ul>

        {/*Hamburger Button*/}
        <div className='block sm:hidden z-10' onClick={handleNav}>
          {nav 
          ? <AiOutlineClose size={20} style={{color:`${textColor}`}} />  
          : <AiOutlineMenu size={20} style={{color:`${textColor}`}} />}
        </div>

        {/*Mobile Header*/}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-[100vh] bg-black text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-[100vh] bg-black text-center ease-in duration-300'
        }>
          <ul >
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#product'>Product</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/process'>Process</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/client'>Client</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/aboutUs'>About Us</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Header
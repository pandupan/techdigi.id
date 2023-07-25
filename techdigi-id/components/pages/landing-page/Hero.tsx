import React from 'react';

interface HeroProps {
  heading: string;
  message: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-[100vh] mb-[10rem] bg-fixed bg-center bg-cover hero-img">
      {/*Overlayer*/}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
      
      <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rm]'>
        <div className='ml-[10rem]'>
          <h2 className='text-3xl sm:text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-xl'>{message}</p>
          <button className='px-8 py-2 border rounded-lg'>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

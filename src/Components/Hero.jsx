import React from 'react';
import cleanmain from '../assets/cleanmainreal.png';
import Navbar from '../Components/Navbar'

const Hero = () => {
  return (
    <div 
      className='font-outfit py-10 px-8' // Make sure the div has height
      style={{
        backgroundImage: `url(${cleanmain})`,
        backgroundSize: 'cover', // or 'contain' based on your preference
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='space-y-10'>
        <Navbar />
        <div className='max-w-[85rem] py-40 mx-auto w-full flex flex-col gap-y-4 text-white '>
          <div className='font-bold eight-title max-w-[46rem]'>
            Outdoor Living & Landscaping Services
          </div>
          <p className='max-w-xl tracking-wide one-title'>
            The best lawncare service in Richmond, Virginia. Providing unparalled and satisfactory services to tens of clients at negotatiable prices. Contact us and find out!
          </p>
          <button className='text-white bg-main px-6 py-2 rounded-full tracking-widest w-max shadow-md'>
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

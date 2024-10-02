import React from 'react'
import lawn1 from '../assets/lawn1.jpg'
import lawn2 from '../assets/lawn2.jpg'
import lawn3 from '../assets/lawn3.jpg'
import lawn4 from '../assets/lawn4.jpg'
import lawn5 from '../assets/lawn5.jpg'


const Gallery = () => {
  return (
    <div className='max-w-[85rem] mx-auto py-40 font-outfit px-8'>
        <div className='flex flex-col gap-y-12'>
            <div className='flex flex-col md:flex-row md:items-end gap-y-4 justify-between'>
                <div className='flex flex-col gap-y-4'>
                    <h4 className='tracking-widest text-main'>
                        GALLERY
                    </h4>
                    <h1 className='font-medium seven-title'>
                        Some of our <br />
                        Incredible Work
                    </h1>
                </div>
                <button className='text-white bg-main px-6 py-2 rounded-full tracking-widest w-max shadow-md h-max'>
                    CONTACT US
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <img 
                    src={lawn1} 
                    alt="Image of lawn that we've worked on" 
                />
                <img 
                    src={lawn2} 
                    alt="Image of lawn that we've worked on" 
                />
                <img 
                    src={lawn3} 
                    alt="Image of lawn that we've worked on" 
                />
                <img 
                    src={lawn4} 
                    alt="Image of lawn that we've worked on" 
                />
                <img 
                    src={lawn5} 
                    alt="Image of lawn that we've worked on" 
                />
                <img 
                    src={lawn1} 
                    alt="Image of lawn that we've worked on" 
                />
                
            </div>
        </div>
    </div>
  )
}

export default Gallery
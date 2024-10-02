import React from 'react'
import grassleaves from '../assets/grass-leaves.png'
import potplant from '../assets/pot-plant.png'
import watermingplant from '../assets/watering-plant.png'
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";

const About = () => {
  return (
    <div className='font-outfit py-10 pt-20 px-8 pb-28 max-w-[85rem] mx-auto'>
        <div className='flex flex-col lg:grid grid-cols-12 gap-12 mb-20'>
            <div className='col-span-12 lg:col-span-7 flex flex-col justify-center gap-y-4'>
                <p className='tracking-widest two-title text-main'>
                    ABOUT OUR COMPANY
                </p>
                <h1 className='font-semibold seven-title'>
                    A Company You <br /> <span className="text-main">Can Trust</span>
                </h1>
                <p className='leading-loose text-sm md:text-base lg:text-lg'>
                    We started Clean Green as a service project for our community. We wanted to provide free landscaping to houses in our local community to help foster unity and pride within one’s own lawn. That project has since evolved into a full-fledged business where we provide potential customers with a free first visit. If they enjoy our services, they can call us back to start a long-term service deal, for which we will provide landscaping services once a week or every other week. Our services include lawn mowing, trimming, leaf blowing, edging, or complete lawn remodeling.
                </p>
                <button className='text-white bg-main px-6 py-2 rounded-full tracking-widest w-max shadow-md'>
                ABOUT US
              </button>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-y-4">
                <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-front-yard-landscaping.jpeg"
                    className='h-2/3 rounded-md rotate-1 shadow-md'
                    alt="A picture of our landscaping efforts"
                />
                <img
                    src="https://worldofstonesusa.com/cdn/shop/articles/landscape.jpg?v=1679731808"
                    className='h-2/3 rounded-md -rotate-1 shadow-md'
                    alt="A picture of our landscaping efforts"
                />
            </div>
        </div>
        <div className='mt-20'>
            <h3 className="text-center five-title font-medium py-16">
                A Lawncare Company <span className="text-main underline">That Knows.</span>
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center'>

                <div className='relative flex flex-col gap-y-2 justify-center items-center text-center bg-[#EFEEE3] px-10 py-14 rounded-xl'>
                    <div className='absolute -top-8 three-title p-2 px-2 text-white'>
                        <PiNumberCircleOneFill className='text-main size-12'/>
                    </div>
                    <img src={potplant} className='size-16' alt="" />
                    <h4 className='three-title'>
                        Safe & Secure
                    </h4>
                    <p className='text-lg'>
                        At CleanGreen, your safety is our top priority. We ensure a secure environment while caring for your lawn, treating your property with respect.


                    </p>
                </div>

                <div className='relative flex flex-col gap-y-2 justify-center items-center text-center bg-[#EFEEE3] px-10 py-14 rounded-xl'>
                    <div className='absolute -top-8 three-title p-2 px-2 text-white'>
                        <PiNumberCircleTwoFill className='text-main size-12'/>
                    </div>
                    <img src={grassleaves} className='size-16' alt="" />
                    <h4 className='three-title'>
                        Easy Communication
                    </h4>
                    <p className='text-lg'>
                    We keep our clients informed and engaged. Our communication is hassle-free—feel free to reach out anytime with questions or feedback.
                    </p>
                </div>

                <div className='relative flex flex-col gap-y-2 justify-center items-center text-center bg-[#EFEEE3] px-10 py-14 rounded-xl'>
                    <div className='absolute -top-8 three-title p-2 px-2 text-white'>
                        <PiNumberCircleThreeFill className='text-main size-12'/>
                    </div>
                    <img src={watermingplant} className='size-16' alt="" />
                    <h4 className='three-title'>
                        Experienced & Trained
                    </h4>
                    <p className='text-lg'>
                    Our skilled team is passionate about lawn care. With years of experience, we’re dedicated to transforming your lawn into a beautiful outdoor space.
                    </p>
                </div>

            </div>
        </div> 
    </div>
  )
}

export default About
import React from 'react'
import grassleaves from '../assets/grass-leaves.png'
import potplant from '../assets/pot-plant.png'
import watermingplant from '../assets/watering-plant.png'

const About = () => {
  return (
    <div className='font-outfit py-10 pt-20 max-w-[85rem] mx-auto'>
        <div className='grid grid-cols-12 gap-12 mb-20'>
            <div className='col-span-7 flex flex-col justify-center gap-y-4 fle'>
                <p className='tracking-widest two-title text-main'>
                    ABOUT OUR COMPANY
                </p>
                <h1 className='font-semibold eight-title'>
                    A Company You Can Trust
                </h1>
                <p className='leading-loose text-lg'>
                    We started Clean Green as a service project for our community. We wanted to provide free landscaping to houses in our local community to help foster unity and pride within one’s own lawn. That project has since evolved into a full-fledged business where we provide potential customers with a free first visit. If they enjoy our services, they can call us back to start a long-term service deal, for which we will provide landscaping services once a week or every other week. Our services include lawn mowing, trimming, leaf blowing, edging, or complete lawn remodeling.
                </p>
                <button className='text-white bg-main px-6 py-2 rounded-full tracking-widest w-max shadow-md'>
                ABOUT US
              </button>
            </div>
            <div className="col-span-5 flex flex-col gap-y-4">
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
            <h3 className="text-center four-title font-medium py-10">
                A Lawncare Company You Can Trust
            </h3>
            <div className='grid grid-cols-3 gap-12'>
                <div className='flex flex-col gap-y-2 justify-center items-center text-center'>
                    <img src={potplant} className='size-16' alt="" />
                    <h4 className='three-title'>
                        Safe & Secure
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit corrupti excepturi sint est animi, culpa voluptatem aut inventore corporis, 
                    </p>
                </div>

                <div className='flex flex-col gap-y-2 justify-center items-center text-center'>
                    <img src={grassleaves} className='size-16' alt="" />
                    <h4 className='three-title'>
                        Easy Communication
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit corrupti excepturi sint est animi, culpa voluptatem aut inventore corporis, 
                    </p>
                </div>

                <div className='flex flex-col gap-y-2 justify-center items-center text-center'>
                    <img src={watermingplant} className='size-16' alt="" />
                    <h4 className='three-title'>
                        Licensed & Trained
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit corrupti excepturi sint est animi, culpa voluptatem aut inventore corporis, 
                    </p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default About
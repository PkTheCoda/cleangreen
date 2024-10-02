import React from 'react'
import { FaVolumeHigh } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaShieldHalved } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-gray-100 py-20 px-8 font-outfit">
      <div className="max-w-[85rem] mx-auto">
        <p className="mb-2 tracking-widest">WHY CLEAN GREEN?</p>
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="six-title font-semibold text-gray-900 mb-4 md:mb-0 md:w-1/2">
            We Offer the Best Guaruantee in the Business.
          </h2>
          <p className="text-gray-600 md:w-1/2">
            "You're hiring us to have more time for the important things in your life and our team of professionals strive to make dealing with us as easy as possible. Contact us today and see why so many choose us for their lawn care and landscaping needs".
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaVolumeHigh className="w-8 h-8 text-green-600" />,
              title: "Low Noise",
              description: "Noise Ordinance Restrictions Are Becoming More Strict And We Understand Why. Our Mowers Are So Quiet You May Not Even Notice We Are There."
            },
            {
              icon: <FaLeaf className="w-8 h-8 text-green-600" />,
              title: "Zero Emissions",
              description: "Lithium-Ion Powered Since Our Lawn Mowers, Weed Eaters, Blowers, And Trimmers Are Battery Powered, They Emit Zero Emissions."
            },
            {
              icon: <TiStarFullOutline className="w-8 h-8 text-green-600" />,
              title: "100% Awesomeness",
              description: "Although Our Equipment Tries To Steal The Show, It Is Really The People Behind The Business That Make Lawn Care So Special. We Can't Wait To Meet You!"
            },
            {
              icon: <FaShieldHalved className="w-8 h-8 text-green-600" />,
              title: "We Are Reliable",
              description: "We Know You Have Heard Horror Stories About Lawn Care Services... We Would Love To Show You We Are Different. Our Entire Team Is Highly Trained And Professional."
            },
            {
              icon: <FaHome className="w-8 h-8 text-green-600" />,
              title: "We Are Neighbors",
              description: "We Call Longview Home And Thoroughly Enjoy Making Our Home And Your Home A More Beautiful Place Than It Already Is. Get A Quote For Free!"
            },
            {
              icon: <IoCheckmarkCircle className="w-8 h-8 text-green-600" />,
              title: "100% Awesomeness",
              description: "Although Our Equipment Tries To Steal The Show, It Is Really The People Behind The Business That Make Lawn Care So Special. We Can't Wait To Meet You!"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">If You're Not 100% Satisfied – We'll Make It Right. It's That Simple.</p>
          <button className='text-white bg-main px-6 py-2 rounded-full tracking-widest w-max shadow-md'>
                GET QUOTE
            </button>
        </div>
      </div>
    </div>
  )
}

export default Features
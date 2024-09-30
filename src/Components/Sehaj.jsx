import React from "react";
import sehajpic from '../assets/sehaj.png'

export default function Sehaj() {
    return (
        <>
            <div className="max-w-[85rem] mx-auto grid grid-cols-2 font-outfit px-20 mb-20">
                <div className="flex items-center justify-center">
                    <img src={sehajpic} alt="Pic of sehaj" className="h-[40rem] -rotate-1 rounded-md shadow-md"/>
                </div>
                <div className="flex flex-col flex justify-center gap-y-4">
                    <p className="tracking-widest font-light">
                        FOUNDER AND CEO
                    </p>
                    <h1 className="seven-title font-semibold tracking-tight">
                        Hey, I'm Sehaj!
                    </h1>
                    <p className="one-title font-light tracking-wide max-w-2xl leading-loose">
                        I am a senior in the International Baccalaureate program at John Randolph Tucker High School in Henrico, Virginia. I enjoy playing basketball, spending time with my family, and helping my community. Having lawn mowed my parents' and grandparents’ yards since a young age, I enjoy providing my extensive landscaping services to those in my community as well.
                    </p>
                    <button className='text-white bg-main px-6 py-2 rounded-full tracking-widest w-max shadow-md transition300scale'>
                        CONTACT ME
                    </button>
                </div>
            </div>
        </>
    )
}
import React from "react";
import sehajpic from '../assets/sehaj.png'
import aryan from '../assets/aryan.jpg'
import matei from '../assets/matei.jpg'

export default function Sehaj() {
    return (
        <>
            <div className="font-outfit">
                <div className="max-w-[85rem] mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 px-8 mb-20">
                    <div className="flex items-center justify-center">
                        <img src={sehajpic} alt="Pic of sehaj" className="md:h-[40rem] -rotate-1 rounded-md shadow-md"/>
                    </div>
                    <div className="flex flex-col justify-center gap-y-4">
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
                <div className="py-10 mb-20 max-w-[55rem] mx-auto text-center space-y-12">
                    <h1 className="six-title font-medium tracking-light">
                        Executive Team
                    </h1>
                    <div className="grid grid-cols-2 place-items center gap-8">

                        <div className="w-full flex flex-col items-center justify-center gap-y-6">
                            <img src={aryan} alt="Image of Aryan, a founder of CleanGreen" className="h-[30rem] rounded-md shadow-md w-full object-cover"/>
                            <div className="w-full flex flex-col gap-y-4">
                                <h2 className="five-title tracking-tight font-medium">
                                    Aryan Ahmed
                                </h2>
                                <p className="text-fit">
                                    Hi, I'm Aryan, a current Senior in the International Baccalaureate program at John Randolph Tucker 
                                    High School. Ever since I was young, I have been doing landscaping work for my family, which is what 
                                    inspired me to co-found Clean Green. My favorite part about the work we do is getting to help members 
                                    of our community serious issues and restore the beauty of their homes.
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center justify-center gap-y-6">
                            <img src={matei} alt="Image of Aryan, a founder of CleanGreen" className="h-[30rem] rounded-md shadow-md w-full object-cover"/>
                            <div className="w-full flex flex-col gap-y-4">
                                <h2 className="five-title tracking-tight font-medium">
                                    Matei Boanca
                                </h2>
                                <p className="text-fit">
                                    Hi, I'm Matei, a current Senior in the International Baccalaureate program at John Randolph Tucker 
                                    High School. Each time I mowed and edged my parents' and neighbors' lawns, I always felt satisfied by the process 
                                    of bettering my commnunity. Therfore, I decided to embark on this journey with my friends to expand on our joy 
                                    of helping others restore pride in their lawns.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
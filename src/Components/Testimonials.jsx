import React from 'react'

const Testimonials = () => {
  return (
    <div className='bg-main py-20 font-outfit text-white px-8'>
        <div className='max-w-[85rem] mx-auto flex flex-col gap-y-20 lg:grid grid-cols-12 gap-20'>

            <div className="w-full lg:col-span-5 space-y-4">
                <p className='tracking-widest two-title font-light'>
                    TESTIMONIALS
                </p>
                <p className='six-title font-medium tracking-tight'>
                    Let's see what our clients have to say about us.
                </p>
                <button className='text-main bg-white px-6 py-2 rounded-full tracking-widest w-max shadow-md'>
                    CONTACT US
                </button>
            </div>

            <div className="w-full lg:col-span-7 flex flex-col gap-y-10">

                <div className='space-y-8'>
                    <h2 className='three-title font-light'>
                        "Sehaj, Aryan, and their team is very helpful in maintaining my lawn and backyard. Certainly recommend them for
                        your lawn and other jobs."
                    </h2>
                    <div className='flex items-center gap-x-4 pb-6 border-b border-opacity-30 border-white'>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt="Blank user pic"
                            className='rounded-full size-12'
                        />
                        <div>
                            <h4 className='font-medium one-title'>Siva Malempati</h4>
                            <p className='text-slate-300'>
                                Client (March 2023)
                            </p>
                        </div>
                    </div>
                </div>

                <div className='space-y-8'>
                    <h2 className='three-title font-light'>
                        "Sehaj and his team completed a third lawn maintenance project in as many months for us having previously 'overdelivered' two major ones on a residential property. 
                        Sehaj is a gentleman who worked patientlyy around our schedule and we strongly recommend him and his enthusiastic team members for similar projects or other work they may offer."
                    </h2>
                    <div className='flex items-center gap-x-4 pb-6 border-b border-opacity-30 border-white'>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt="Blank user pic"
                            className='rounded-full size-12'
                        />
                        <div>
                            <h4 className='font-medium one-title'>Bill B.</h4>
                            <p className='text-slate-300'>
                                Customer (August 2023)
                            </p>
                        </div>
                    </div>
                </div>

                <div className='space-y-8'>
                    <h2 className='three-title font-light'>
                        "Sehaj and his team showed up on a very short-term notice and provided an excellent quality of service. I highly 
                        recommend Clean Green for everything lawn-related. They certainly know what they're doing."
                    </h2>
                    <div className='flex items-center gap-x-4 pb-6 border-b border-opacity-30 border-white'>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt="Blank user pic"
                            className='rounded-full size-12'
                        />
                        <div>
                            <h4 className='font-medium one-title'>Pranav Konjeti</h4>
                            <p className='text-slate-300'>
                                Customer (July 2024)
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react'

const Locations = () => {
    const locations = [
        "Henrico", "Richmond",
        "Glen Allen", "Goochland",
        "Mechanicsville", "West End",
        "Tuckahoe", "Highland Springs",
        "Lakeside"
      ];
    
      return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-outfit">
          <div className="max-w-7xl mx-auto">
            <p className="tracking-widest font-light text-main mb-2">CITIES WE SERVICE</p>
            <h2 className="six-title font-semibold text-gray-900 mb-8">We Service a wide <br /> range of locations</h2>
            
            <div className="flex justify-center items-start">

              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="border-b border-gray-300 pb-2 one-title">
                      {location}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* <div className="w-full lg:w-1/3 bg-green-800 rounded-lg">
                <img 
                  src="/placeholder.svg?height=200&width=400" 
                  alt="Family enjoying lawn" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Prioritize what matters most</h3>
                  <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">
                    Get Free Quote
                  </button>
                </div>
              </div> */}
              
            </div>
          </div>
        </div>
      );
}

export default Locations
"use client"
import Image from "next/image";
const Best = () => {
    const scrollLeft = () => {
      const slider = document.getElementById("slider");
      if (slider) {
        slider.scrollLeft -= 300; 
      }
    };
  
    const scrollRight = () => {
      const slider = document.getElementById("slider");
      if (slider) {
        slider.scrollLeft += 300; 
      }
    };
  
    return (
      <section className=" w-full py-10 bg-white flex flex-col items-start px-4 md:px-10">
        {/* Left Side Heading */}
        <div className="w-full mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Best of Air Max</h2>
        </div>
  
        {/* Slider Section */}
        <div className="relative w-full flex items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hidden md:block"
            onClick={scrollLeft}
          >
            &#8249;
          </button>
  
          {/* Image Cards */}
          <div
            id="slider"
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide w-full"
          >
            {/* Image Card 1 */}
            <div className="flex-shrink-0 w-[70%] md:w-1/3">
              <Image
                src="/images/shoe1.png" 
                alt="Nike Air Max Pulse"
                width={480}
                height={480}
                className="object-cover rounded-md w-full"
              />
              <h2 className="text-base font-semibold mt-2 text-center">
                Nike Air Max Pulse
              </h2>
              <p className="text-sm text-gray-600 text-center">{`Women's Shoes`}</p>
              <p className="text-lg font-bold mt-1 text-center">₹ 13,995</p>
            </div>
  
            {/* Image Card 2 */}
            <div className="flex-shrink-0 w-[70%] md:w-1/3">
              <Image
                src="/images/shoe2.png" 
                alt="Nike Air Max 97"
                width={480}
                height={480}
                className="object-cover rounded-md w-full"
              />
              <h2 className="text-base font-semibold mt-2 text-center">
                Nike Air Max 97
              </h2>
              <p className="text-sm text-gray-600 text-center">{`Men's Shoes`}</p>
              <p className="text-lg font-bold mt-1 text-center">₹ 13,995</p>
            </div>
  
            {/* Image Card 3 */}
            <div className="flex-shrink-0 w-[70%] md:w-1/3">
              <Image
                src="/images/shoe3.png" 
                alt="Nike Air Max 97 SE"
                width={480}
                height={480}
                className="object-cover rounded-md w-full"
              />
              <h2 className="text-base font-semibold mt-2 text-center">
                Nike Air Max 97 SE
              </h2>
              <p className="text-sm text-gray-600 text-center">{`Unisex Shoes`}</p>
              <p className="text-lg font-bold mt-1 text-center">₹ 16,995</p>
            </div>
  
            {/* Shop Section */}
            <div className="flex-shrink-0 w-[70%] md:w-1/3 flex flex-col justify-center items-center bg-gray-100 rounded-md p-6">
              <h2 className="text-2xl font-bold">Shop Now</h2>
              <p className="text-gray-600 mt-2 text-center">
                Discover more products in our store!
              </p>
            </div>
          </div>
  
          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hidden md:block"
            onClick={scrollRight}
          >
            &#8250;
          </button>
        </div>
      </section>
    );
  }
  export default Best ;
  
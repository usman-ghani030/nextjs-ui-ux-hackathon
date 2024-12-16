
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className=" relative max-w-[1440px] mx-auto  flex flex-col items-center text-center px-4 py-4">
    
    <div className="z-10 max-w-[1440px] text-black py-2  text-center space-x-1">
      <h1 className="text-xl md:text-xl mb-4">Hello Nike App</h1>
      <p>Download the app to access everything Nike. Get Your Great</p>
    </div>

    {/* hero image */}
    <div className="relative w-full h-auto">
      <Image
        src="/images/hero.png" 
        alt="Hero Image"
        width={1400}  
        height={600} 
        className="object-cover"
      />
    </div>

    {/* hero content */}
    <div className="z-10 text-black mt-6 mb-6">
      <h3 className="text-lg md:text-xs mb-2 mt-2">First Look</h3>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Nike Air Max Pulse</h1>
      <p className="text-base md:text-lg font-medium text-gray-600 mb-6">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse designed to push you past your limits and help you go to the
        max.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
          Notify Me
        </button>
        <button className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
          Shop Air Max
        </button>
      </div>
    </div>
  </section>
  )
}

export default HeroSection;
import Image from "next/image";

const Featured = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Featured</h2>
        </div>
        
    
        <div className="relative mt-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/feature.png"
              alt="Running outdoors"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              STEP INTO WHAT FEELS GOOD
            </h3>
            <p className="mt-4 text-base md:text-lg text-gray-500">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <button className="mt-6 inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
              Find Your Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured;
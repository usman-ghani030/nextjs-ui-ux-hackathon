import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DontMiss = () => {
  return (
    <section className="dont-miss w-full">
      
      <div className="w-full px-6 py-2 md:py-4">
        <h1 className="text-xl md:text-2xl font-bold text-black">
          Don’t Miss
        </h1>
      </div>

   
      <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center px-2 overflow-hidden">
        <Image
          src="/images/dontmiss.png" 
          alt="Don't Miss Out"
          layout="fill"
          objectFit="contain" 
          objectPosition="center" 
          className="rounded-none"
        />
      </div>

      <div className="text-center py-10 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          FLIGHT ESSENTIALS
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <Link href="/product-list">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800">
            Shop
          </button>
        </Link>
      </div>
    </section>
  )
}

export default DontMiss;
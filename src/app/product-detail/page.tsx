import Image from "next/image";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center gap-x-16 px-8">
      
      <div className="flex-1 max-w-lg mb-8 md:mb-0">
        <Image
          src="/images/Rectangle (11).png" 
          alt="Nike"
          width={600}
          height={600}
          className="rounded-md"
        />
      </div>

      
      <div className="flex-1 max-w-lg md:pl-12">
        <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="text-gray-600 mb-6">
          {`Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside-out" inspired
          construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan
          Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected
          shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.`}
        </p>
        <p className="text-xl font-bold mb-4">₹ 8,695.00</p>
        <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2">
          <span>Add To Cart</span>
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18l-2 14H5L3 3zm6 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm10 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
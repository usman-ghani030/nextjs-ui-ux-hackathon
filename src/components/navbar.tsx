import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white  px-4 md:px-8 py-5">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        <div className="flex items-center">
          <Image
            src="/images/logo2.png" 
            alt="Logo"
            width={50} 
            height={50}
          />
        </div>

        {/*  Navigation Links */}
        <nav className="hidden md:flex space-x-6 ml-4">
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            New & Featured
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Men
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Women
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Kids
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Sale
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            SNKRS
          </Link>
        </nav>

        {/*  Search bar and Icons */}
        <div className="flex items-center  space-x-4 md:space-x-8">
          {/* Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border bg-gray-100 rounded-full py-3 px-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <IoIosSearch
              className="absolute left-3 text-gray-500 text-lg" 
            />
          </div>

          {/* Heart Icon */}
          <button
            className="text-gray-600 hover:text-black focus:outline-none text-lg"
            aria-label="Wishlist"
          >
            <CiHeart className="text-[24px] text-black font-medium"/>
          </button>

          {/*  Icon */}
          <Link href="/product-list">
          <button
            className="text-gray-600 hover:text-black focus:outline-none text-lg"
            aria-label="Cart"
          >
            <IoBagOutline className="text-[24px] text-black font-medium"/>
          </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
     <>
          <header className="bg-[#f5f5f5]">
            <div className="max-w-[1440] mx-auto px-2 md:px-12 py-2 flex items-center justify-between">

              <div>
                <Image src={"/images/logo1.png"} alt="logo" width={24} height={24}/>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-black">
                    <Link href={"/"} className="" >Find a Store</Link>
                    <span>|</span>
                    <Link href={"/help"}>Help</Link>
                    <span>|</span>
                    <Link href={"/join"}>Join Us</Link>
                    <span>|</span>
                    <Link href={"/sign-in"}>Sign in</Link>
              </div>

            </div>
          </header>
       </>
  )
}

export default Topbar;
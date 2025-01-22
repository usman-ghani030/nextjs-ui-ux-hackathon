import { SlMagnifier } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";   

const stores = [
  {
    name: "Nike NYC - House of Innovation 000",
    address1: "650 5th Ave.",
    address2: "New York, NY, 10019, US",
    status: "Closed",
    openingTime: "11:00 am",
  },
  {
    name: "Nike By Upper East Side",
    address1: "1131 3rd Ave.",
    address2: "New York, NY, 10065, US",
    status: "Closed",
    openingTime: "11:00 am",
  },
  {
    name: "Nike By Flatiron",
    address1: "156 Fifth Ave.",
    address2: "New York, NY, 10010, US",
    status: "Closed",
    openingTime: "11:00 am",
  },
];

export default function Store() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row w-full h-full items-center p-5">
        
        <div className="bg-white w-full lg:w-[40%] xl:w-[40%] p-10 overflow-y-auto">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Find a Nike store</h2>

            
            <div className="flex w-full p-2 gap-3 items-center border rounded">
              <SlMagnifier />
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search Location"
                className="outline-none w-full"
              />
            </div>

            
            <div className="flex items-center justify-between w-full">
              <p className="text-sm text-gray-700">{stores.length} stores near you</p>
            </div>

            
            {stores.map((store, index) => (
              <div key={index} className="flex flex-col gap-1 py-5 border-t">
                <h2 className="text-sm font-bold">{store.name}</h2>
                <p className="text-xs text-gray-600">{store.address1}</p>
                <p className="text-xs text-gray-600">{store.address2}</p>
                <p className="text-xs text-gray-600">
                  <span className="text-sm text-red-600">{store.status}</span> • Opens at{" "}
                  {store.openingTime}
                </p>
              </div>
            ))}

            
            <Link className="underline font-bold" href={"#"}>
              View all stores
            </Link>
          </div>
        </div>

        
        <div className="w-full h-[100vh] bg-gray-200">
          <Image
            src="/images/Map.png"
            alt="Nike Store Locations"
           width={400}
           height={400}
            className=" w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
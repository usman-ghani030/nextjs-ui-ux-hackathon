import Image from "next/image";

const Gear = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* heading */}
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Gear Up</h2>

        {/* sliders */}
        <div className="flex flex-col md:flex-row gap-x-6 justify-between">
          {/* men's Section */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Shop Men`s</h3>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {/* card 1 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearman.png"
                  alt="Men's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Dri-FIT ADV TechKnit Ultra</h4>
                <p className="text-gray-600 text-sm">{`Men's Short-Sleeve Running Top`}</p>
                <p className="text-lg font-bold mt-1">₹ 3,895</p>
              </div>

              {/* card 2 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearman2.png"
                  alt="Men's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Dri-FIT Challenger</h4>
                <p className="text-gray-600 text-sm">{ `Men's 18cm (approx.) 2-in-1 Shorts`}</p>
                <p className="text-lg font-bold mt-1">₹ 2,495</p>
              </div>
            </div>
          </div>

          {/* women's Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{`Shop Women's`}</h3>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {/* card 3 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearwoman.png"
                  alt="Women's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Dri-FIT ADV Run Division</h4>
                <p className="text-gray-600 text-sm">{`Women's Long-Sleeve Running Top`}</p>
                <p className="text-lg font-bold mt-1">₹ 5,295</p>
              </div>

              {/* card 4 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearwoman2.png"
                  alt="Women's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Fast</h4>
                <p className="text-gray-600 text-sm">
                  {`Women's Mid-Rise 7/8 Running Leggings with Pockets`}
                </p>
                <p className="text-lg font-bold mt-1">₹ 3,795</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gear;
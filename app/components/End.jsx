import Image from "next/image";
import CardsIma from "../fonts/image.png";

export default function End() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-white from-white to-white flex items-center justify-center p-4">
      <div className="w-full mb-[10]  h-[100vh] bg-white rounded-3xl shadow-lg overflow-hidden relative">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center z-10 relative">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
              BEST PRICE
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Agate Phone Grip
            </h1>
            <div className="flex items-center mb-4">
              <span className="text-xl sm:text-2xl text-gray-400 line-through mr-2">
                44.50$
              </span>
              <span className="text-3xl sm:text-5xl font-bold text-red-500">
                19.50$
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-light mb-6">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
            <button
              variant="outline"
              className="rounded-xl border-2 w-[130px] border-sky-500 px-5 py-3 text-sm sm:text-base font-medium text-navy-700 transition duration-200 hover:bg-cyan-400 active:bg-gray-300/10 dark:border-white/20 dark:bg-white dark:text-white dark:hover:bg-cyan-600 dark:active:bg-white text-sky-500 hover:text-white"
            >
              Buy Now
            </button>
          </div>

          {/* Right Section - Image Content */}
          <div className="md:w-1/2 relative z-10">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={CardsIma}
                  alt="Agate Phone Grip"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-60 w-full bg-blue-800 z-0"></div>
      </div>
    </div>
  );
}

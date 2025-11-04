import React from 'react'
import { useNavigate } from 'react-router'

const Lamding = () => {
    const navigate = useNavigate()
    const tryit = () =>{
        navigate("/home")
    }
  return (
    <div
      className='flex flex-col items-center min-h-screen bg-linear-to-b from-[#FFEFE1] to-[#FFBAA3]'
    >
      {/* ✅ Navbar */}
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 sm:py-6 bg-transparent">
        <div className="text-[#F55926] font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide">
          Dishify
        </div>
        <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#F55926] text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-[#e14d1f] transition-all" onClick={tryit}>
          Try Now
        </button>
      </nav>

      {/* ✅ Main Section */}
      <div className='w-full max-w-[960px] mt-2.5 px-4 sm:px-6'>
        <div className='w-full p-2 sm:p-4 relative flex flex-col items-center'>
          <img src='/landing.png' className='object-cover w-full rounded-xl max-h-[350px] sm:max-h-[400px] md:max-h-[500px]' alt='Landing' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center w-full px-2'>
            <h1 className='text-amber-50 text-3xl mt-10 md:mt-0 sm:text-5xl md:text-[58px] font-bold drop-shadow-lg'>Dishify</h1>
            <p className='text-amber-50 text-lg sm:text-2xl md:text-[26px] font-light mt-2 drop-shadow'>
              Snap a Dish. Discover Recipes Instantly.
            </p>
            <input
              type='button'
              value="Try it now"
              className='mt-6 px-4 sm:px-5 py-2 sm:py-3 bg-[#F55926] rounded-xl text-amber-50 text-base sm:text-lg font-medium hover:bg-[#e14d1f] transition-all shadow-lg'
              onClick={tryit}
            />
          </div>
        </div>

        {/* ✅ How It Works Section */}
        <div className='w-full mt-10'>
          <div className='px-2 sm:px-4 text-center'>
            <h1 className='text-2xl sm:text-3xl md:text-[32px] font-extrabold'>How it Works</h1>
            <p className='text-base sm:text-lg md:text-[16px] font-normal'>
              Discover recipes and food blogs in three simple steps.
            </p>
          </div>
          <div className='px-2 sm:px-4 mt-8 mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-[#fdb59e] p-4 rounded-2xl drop-shadow-2xl drop-shadow-[#ffdbbb] hover:scale-105 duration-200">
                <img
                  src="/img1.png"
                  className="w-full max-w-[280px] h-[120px] sm:h-[150px] md:h-[169px] mb-3 object-fill rounded-xl"
                  alt="Upload"
                />
                <div className="self-stretch mb-3 text-center">
                  <span className="text-[#1C110C] text-base">Upload</span><br/>
                  <span className="text-[#9B5E49] text-sm">
                    Upload a photo of your dish.
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center bg-[#fdb59e] p-4 rounded-2xl drop-shadow-2xl drop-shadow-[#ffdbbb] hover:scale-105 duration-200">
                <img
                  src="/img2.png"
                  className="w-full max-w-[280px] h-[120px] sm:h-[150px] md:h-[169px] mb-3 object-fill rounded-xl"
                  alt="Recognize"
                />
                <div className="self-stretch mb-3 text-center">
                  <span className="text-[#1C110C] text-base">Recognize</span><br/>
                  <span className="text-[#9B5E49] text-sm">
                    Our AI identifies the dish.
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center bg-[#fdb59e] p-4 rounded-2xl drop-shadow-2xl drop-shadow-[#ffdbbb] hover:scale-105 duration-200">
                <img
                  src="/img3.png"
                  className="w-full max-w-[280px] h-[120px] sm:h-[150px] md:h-[170px] mb-3 object-fill rounded-xl"
                  alt="Explore Recipes & Blogs"
                />
                <div className="self-stretch mb-3 text-center">
                  <span className="text-[#1C110C] text-base">Explore Recipes & Blogs</span><br/>
                  <span className="text-[#9B5E49] text-sm">
                    Access recipes and related food blogs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lamding

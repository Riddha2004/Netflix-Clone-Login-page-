import React from 'react'
import tv from "./assets/images/tv.png"

const Contents1 = () => {
  return (
    <div className="bg-black ">
      <section className="flex justify-center max-w-[80vw] m-auto items-center bg-black">
         <div className='text-white flex flex-col '>
          <span className="font-black text-[48px]">Enjoy on your TV</span>
          <span className="font-[400] text-[24px]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
         </div>
         <div className='mt-48'>
           <img src={tv} alt=""  className='w-[65vw] relative z-10'/>
           <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="infinite" className="relative w-[30vw] bottom-[55vh] left-[5.5vw] "><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>
         </div>
      </section>
      <div className="h-[7px] bg-[rgb(46,44,44)] "></div>
   </div>
  )
}

export default Contents1

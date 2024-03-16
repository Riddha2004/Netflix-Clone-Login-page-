import React from 'react'
import tv from "./assets/images/mobile-0819.jpg"

const Contents2 = () => {
  return (
    <div className="bg-black ">
    <section className="flex justify-center max-w-[80vw] m-auto items-center bg-black">
       <div className='mt-48'>
         <img src={tv} alt=""  className='w-[65vw] relative z-10'/>
         <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="infinite" className="relative w-[30vw] bottom-[55vh] left-[5.5vw] "><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>
       </div>
       <div className='text-white flex flex-col '>
        <span className="font-black text-[48px]">Download your shows to watch offline</span>
        <span className="font-[400] text-[24px]">Save your favourites easily and always have something to watch.</span>
       </div>
    </section>
    <div className="h-[7px] bg-[rgb(46,44,44)] "></div>
 </div>
  )
}

export default Contents2

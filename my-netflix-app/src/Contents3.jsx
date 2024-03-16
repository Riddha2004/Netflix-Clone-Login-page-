import React from 'react'
import tv from "./assets/images/device-pile-in.png"

const Contents3 = () => {
  return (
    <div className="bg-black ">
    <section className="flex justify-center max-w-[80vw] m-auto items-center bg-black">
       <div className='text-white flex flex-col '>
        <span className="font-black text-[48px]">Watch everywhere</span>
        <span className="font-[400] text-[24px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
       </div>
       <div className='mt-48'>
         <img src={tv} alt=""  className='w-[65vw] relative z-10'/>
         <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="infinite" className="relative w-[27vw] bottom-[64vh] left-[8.5vw] "><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/></video>      
       </div>
    </section>
    <div className="h-[7px] bg-[rgb(46,44,44)] "></div>
 </div>
  )
}

export default Contents3

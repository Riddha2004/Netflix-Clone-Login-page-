import React from 'react'
import tv from './assets/images/Children.png'

const Contents4 = () => {
  return (
    <div className="bg-black">
      <section className="flex justify-center max-w-[80vw] m-auto items-center bg-black">
        <div className='mt-48'>
           <img src={tv} alt=""  className='w-[65vw] relative z-10 mr-[60px]'/>
        </div>
         <div className='text-white flex flex-col '>
          <span className="font-black text-[48px]">Create profiles for kids</span>
          <span className="font-[400] text-[24px]">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
         </div>
      </section>
      <div className="h-[7px] bg-[rgb(46,44,44)] "></div>
    </div>
  )
}

export default Contents4

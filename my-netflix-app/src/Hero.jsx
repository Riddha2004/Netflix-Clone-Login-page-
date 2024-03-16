import React from 'react'
import logo from './assets/images/logo.svg'

const Hero = () => {
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-center bg-[length:max(1200px,125vw)] bg-no-repeat h-[78vh] w-[100%] relative" > 
        <nav className="max-w-[78vw] justify-between m-auto flex items-center h-[5vw] mb-4">
         <span><img className=" w-[144px] relative z-10 h-42 pt-4" src={logo} alt="" /></span>
         <div className=''>
         <button type="button" className='relative z-10 px-[16px] py-[3px] mx-4 w-[8vw] bg-[rgba(23,23,23,0.6)] border-[1px] border-slate-600 text-white'>English</button>
            <button type="button" className='relative z-10 bg-red-500 px-[10px] py-[3px] font-[400] text-white rounded-md'>Sign In</button>
         </div>
       </nav>
       <div className="box h-[78vh] w-[100%] opacity-[0.7] absolute top-0 bg-black">
       </div>
       <div className="hero h-[calc(100%-100px)] opacity-100 flex font-sans items-center justify-center flex-col text-white relative text-center p-0"> 
         <span className="font-black text-[48px]">The biggest Indian hits. The best Indian stories. All streaming here.</span>
         <span className='font-[400] text-[24px]'>Watch anywhere. Cancel anytime.</span>
         <span className='font-[400] text-[20px]'>Ready to watch? Enter your email to create or restart your membership.</span>
         <div className="pt-5 flex items-center justify-center ">
            <input type="text" placeholder="Email address" className="mr-2 w-[400px] h-14 text-sm px-[10px] rounded-[4px] bg-[rgba(23,23,23,0.6)] border-[1px] border-slate-600"  />
            <button type="button" className="bg-red-500 px-[10px] font-[450] h-14 w-[11.5rem] text-2xl rounded-[4px] ">Get Started &gt;</button>
         </div>
        </div>
        <div className="h-[7px] bg-[rgb(46,44,44)]"></div>
    </div>
  );
}

export default Hero

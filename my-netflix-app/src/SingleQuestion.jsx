import {useState} from 'react'
import React from 'react'

const SingleQuestion = ({title,info}) => {
    const [show,setshow]=useState(false)
  return (
    <article className=" flex flex-col justify-center items-center text-white mb-5 ">
        <div className="">
        <h3 className="flex items-center">
        <button className="flex flex-row bg-[rgba(45,45,45)] font-[400] text-[24px] " onClick={()=>setshow(!show)}> <span className=" px-6 py-6 w-[70vw] items-start">{title}</span>
        </button>
        </h3>
        </div>
        {show && <span className="bg-[rgba(45,45,45)] font-[400] text-[20px] px-6 py-4 w-[70vw]">{info}</span>}
    </article>
  )
}

export default SingleQuestion

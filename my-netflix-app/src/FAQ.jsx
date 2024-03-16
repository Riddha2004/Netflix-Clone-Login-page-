import {useState} from 'react'
import React from 'react'
import data from './Question'
import SingleQuestion from './SingleQuestion.jsx'

const FAQ = () => {
    const [questions,setquestion]=useState(data);
  return (
    <main className="bg-black ">
    <div>
      <div className="flex font-sans items-center justify-center flex-col text-white relative text-center pt-12">
      <h3 className="font-black text-[48px]">Frequently Asked Questions</h3>
      </div>
       <section className="mt-8">
        {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
        })}
       </section>
      </div>
    </main>
  )
}

export default FAQ

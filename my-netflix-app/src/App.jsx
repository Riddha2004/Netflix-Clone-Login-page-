import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './Hero.jsx'
import Contents1 from './Contents1.jsx'
import Contents2 from './Contents2.jsx'
import Contents3 from './Contents3.jsx'
import Contents4 from './Contents4.jsx'
import FAQ from './FAQ.jsx'
import Below from './Below.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   return (
      <body className="bg-black h-[100vh]">
         <Hero/>
         <Contents1/>
         <Contents2/>
         <Contents3/>
         <Contents4/>
         <FAQ/>
         <Below/>
      </body>
   );
}

export default App

import React from 'react'
import Hero from './Component/Hero';
import Achievements from './Component/Achievements';
import Technologies from './Component/Technologies';
import Testimonials from './Component/Testimonials';
const page = () => {
  return (
    <div>
     <Hero/>
     <Achievements/>
     <Technologies/>
     <Testimonials/>
    </div>
  )
}

export default page
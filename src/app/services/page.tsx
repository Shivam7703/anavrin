import Banner from '@/components/global/banner'
import Canadapnp from '@/components/home/canadapnp'
import Greenbox from '@/components/home/greenbox'
import Testimonials from '@/components/home/testimonial'
import VisaSlider from '@/components/home/visaslider'
import WhychooseSection from '@/components/home/whychoose'
import WorkProcessSlider from '@/components/home/workingprocess'
import { Whychoose } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <div>
       <Banner
              title={"Our Services"}
              para={
                "We offer a wide range of immigration services to help you achieve your global aspirations."
              }
              slug={"services"}
            />
            <Greenbox/>
            <VisaSlider/>
            <Canadapnp/>
            <WorkProcessSlider/>
            <Testimonials/>
<WhychooseSection data ={Whychoose}/>

            
    </div>
  )
}

export default page

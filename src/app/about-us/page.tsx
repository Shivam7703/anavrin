import MissionVisionValues from '@/components/about/mission'
import Banner from '@/components/global/banner'
import AboutSection from '@/components/home/AboutSection'
import CountDown from '@/components/home/Contdown'
import Partners from '@/components/home/partner'
import VisaSlider from '@/components/home/visaslider'
import WhychooseSection from '@/components/home/whychoose'
import { aboutdata } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <div>
       <Banner
        title={"About Us"}
        para={
          "We provide trusted immigration guidance, personalized support, and reliable visa solutions to help clients achieve their work, study, travel, and settlement goals with confidence."
        }
        slug={"about-us"}
      />
      <AboutSection  data ={aboutdata} />
      <MissionVisionValues/>
<CountDown />

      <VisaSlider/>
      <Partners/>
      
      <WhychooseSection/>
      
    </div>
  )
}

export default page

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
          "Experienced visa consultants in Noida deliver clear guidance, professional support, and reliable immigration solutions for global opportunities."
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

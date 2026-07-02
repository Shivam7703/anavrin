import ContactUsSection from '@/components/contact/condetail'
import Form from '@/components/contact/form'
import Banner from '@/components/global/banner'
import React from 'react'

function page() {
  return (
    <div>
       <Banner
   title={"Contact Us"}
   para={
   "Get in touch with our experts for quick, reliable, and personalized immigration assistance today. "}
   slug={"contact-us"} />
   <Form/>
   <ContactUsSection/>
    </div>
  )
}

export default page

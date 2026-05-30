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
   "We offer a wide range of immigration services to help you achieve your global aspirations."}
   slug={"contact-us"} />
   <Form/>
   <ContactUsSection/>
    </div>
  )
}

export default page

import Banner from '@/components/global/banner'
import Blogs from '@/components/home/blog'
import React from 'react'

function page() {
  return (
    <div>
      <Banner
                    title={"Blogs"}
                    para={
                      "We offer a wide range of immigration services to help you achieve your global aspirations."
                    }
                    slug={"blogs"}
                  />
<Blogs isHome={false} />
    </div>
  )
}

export default page

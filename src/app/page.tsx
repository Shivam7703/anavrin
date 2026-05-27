import AboutSection from "@/components/home/AboutSection";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import { aboutdata} from "@/data/homeData";
import FaqSection from "@/components/home/faq";
import VisaSlider from "@/components/home/visaslider";
import WorkProcessSlider from "@/components/home/workingprocess";
import Canadapnp from "@/components/home/canadapnp";
import WhychooseSection from "@/components/home/whychoose";
import Partners from "@/components/home/partner";
import Coaching from "@/components/home/coaching";
import Team from "@/components/global/team";

export default function Home() {
  return (
    <>
<div className="max-w-screen overflow-hidden  relative max-h-max">
   <div
  className="absolute -bottom-[3%]  rotate-[-35deg] -right-28 w-[800px] h-[300px] bg-color3 opacity-10 md:opacity-50"
/>
 <div
  className="absolute md:bottom-[37%] bottom-[40%] rotate-45 -right-48 w-[800px] h-[200px] bg-color3"
/>
<BannerSlider/>
<Greenbox/>
<AboutSection  data ={aboutdata} />
</div>
<VisaSlider/>
<Canadapnp/>
<CountDown />
<WorkProcessSlider/>
<Testimonials/>
<WhychooseSection/>
<Partners/>
<FaqSection/>
<Coaching/>
{/* <Team/> */}
<Blogs isHome={true} />
  </>
  );
}


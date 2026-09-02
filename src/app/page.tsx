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

<BannerSlider/>
<Greenbox/>
<AboutSection  data ={aboutdata} />
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


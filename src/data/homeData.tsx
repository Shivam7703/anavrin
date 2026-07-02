import {
  about2,
  banner,
  banner2,
  box1,
  box2,
  box3,
  cl1,

  famvisa,
  prvisa,
  business,
  touristvisa,
  logo2,
  process1,
  ukflag,
  visa1,
  canadaflag,
  back,
  canadaPR,
} from "@/assets";

import { FiSettings } from "react-icons/fi";
import { BsPassportFill } from "react-icons/bs";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { FaChartLine, FaFileAlt, FaFileSignature, FaGlobe, FaGlobeAmericas, FaLanguage, FaPlaneDeparture, FaShieldAlt, FaStethoscope, FaUniversity, FaUserGraduate } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineFlag, HiOutlineLightBulb } from "react-icons/hi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdAttachEmail, MdWifiCalling3 } from "react-icons/md";
import { RiSpeedMiniFill, RiUserCommunityFill, RiUserFollowLine } from "react-icons/ri";
import { TbTarget, TbBulb, TbDiamond } from "react-icons/tb";

export const navigationMenu = {
  primaryMenu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },
    { id: 3, label: "Blogs", href: "/blogs" },
    { id: 4, label: "News", href: "/news" },

    {
      id: 5,
      label: "Services",
      href: "/services",
      subNav: [
        { id: 1, label: "IELTS", href: "/services/ielts" },
        { id: 2, label: "PTE", href: "/services/pte-preparation" },
        { id: 3, label: "TOEFL", href: "/services/toefl" },
        { id: 4, label: "Visa Documentation", href: "/services/visa-documentation" },
        { id: 5, label: "Pre/Post Landing", href: "/services/pre-post-landing" },
        { id: 6, label: "Profile Marketing", href: "/services/profile-marketing" },
        { id: 7, label: "Immigration Service", href: "/services/immigration-service" },
      ],
    },

    { id: 6, label: "Contact Us", href: "/contact-us" },
  ],

  secondaryMenu: [
    {
      id: 1,
      label: "Migrate",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Canada Express Entry",
              href: "/visas/canada-express-entry",
            },
            {
              id: 2,
              label: "Federal Skilled Worker Program",
              href: "/visas/federal-skilled-worker-program",
            },
            {
              id: 3,
              label: "Federal Skilled Traders Program",
              href: "/visas/federal-skilled-traders-program",
            },
            {
              id: 4,
              label: "Canada Experience Class",
              href: "/visas/canada-experience-class",
            },
            {
              id: 5,
              label: "Canada Permanent Residency Visa",
              href: "/visas/canada-permanent-residency-visa",
            },
            {
              id: 6,
              label: "Occupation In Demand",
              href: "/visas/Top In-Demand Occupations for Skilled Migration",
            },
            {
              id: 7,
              label: "Family Sponsorship Program",
              href: "/visas/Family Sponsorship Program (Canada)",
            },
            {
              id: 8,
              label: "Rural Community Immigration Pilot Program",
              href: "/visas/rural-community-immigration-pilot-program",
            },
            {
              id: 9,
              label: "Canada Spouse Visa",
              href: "/visas/canada-spouse-visa",
            },
            {
              id: 10,
              label: "Self Employed Persons Program",
              href: "/visas/self-employed-persons-program",
            },
          ],
        },

        {
          id: 2,
          label: "Australia",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Australia Permanent Residency Visa",
              href: "/visas/australia-permanent-residency-visa",
            },
            {
              id: 2,
              label: "Skilled Independent Visa Subclass 189",
              href: "/visas/skilled-independent-visa-subclass-189",
            },
            {
              id: 3,
              label: "Skilled Nominated Visa Subclass 190",
              href: "/visas/skilled-nominated-visa-subclass-190",
            },
            {
              id: 4,
              label: "Subclass 489 (Skilled Regional Visa)",
              href: "/visas/subclass-489-skilled-regional-visa/",
            },
            {
              id: 5,
              label: "Subclass 476",
              href: "/visas/Subclass 476 (Skilled Recognised Graduate Visa)/",
            },
            {
              id: 6,
              label: "Subclass 491",
              href: "/visas/Subclass 491 (Skilled Work Regional Visa)/",
            },
          ],
        },

        {
          id: 3,
          label: "European Countries",
          href: "#",
          subNav: [
            { id: 1, label: "Poland", href: "/visas/Poland Work Visa" },
            { id: 2, label: "Luxembourg", href: "/visas/Luxembourg Work Visa" },
            { id: 3, label: "Ireland", href: "/visas/Ireland Work Visa" },
            { id: 4, label: "Malta", href: "/visas/Malta Work Visa" },
            { id: 5, label: "Sweden", href: "/visas/Sweden Work Visa" },
            // { id: 6, label: "Norway", href: "/visas/norway" },
            { id: 7, label: "UK", href: "/visas/UK Work Visa" },
            { id: 8, label: "Germany", href: "/visas/Germany Tourist Visa" },
            { id: 9, label: "Croatia", href: "/visas/Croatia Work Visa" },
          ],
        },

        {
          id: 4,
          label: "GCC Countries",
          href: "#",
          subNav: [
            { id: 1, label: "Qatar", href: "/visas/Qatar Work Visa" },
            { id: 2, label: "Oman", href: "/visas/Oman Work Visa" },
            { id: 3, label: "Dubai", href: "/visas/Dubai Work Visa" },
          ],
        },
      ],
    },

    {
      id: 2,
      label: "Work Visa",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada Work Permit Visa",
          href: "/visas/canada-work-permit-visa",
        },
        {
          id: 2,
          label: "Australia Work Permit Visa",
          href: "/visas/australia-work-permit-visa",
        },
        {
          id: 3,
          label: "Germany Job Seeker Visa",
          href: "/visas/germany-job-seeker-visa",
        },
        {
          id: 4,
          label: "Luxembourg Work Visa",
          href: "/visas/luxembourg-work-visa",
        },
        {
          id: 5,
          label: "Ireland Work Visa",
          href: "/visas/ireland-work-visa",
        },
        {
          id: 6,
          label: "Sweden Work Visa",
          href: "/visas/sweden-work-visa",
        },
        {
          id: 7,
          label: "Portugal Work Visa",
          href: "/visas/portugal-work-visa",
        },
        {
          id: 8,
          label: "Croatia Work Visa",
          href: "/visas/croatia-work-visa",
        },
        {
          id: 9,
          label: "Slovakia Work Visa",
          href: "/visas/slovakia-work-visa",
        },
        {
          id: 10,
          label: "UK Work Visa",
          href: "/visas/uk-work-visa",
        },
        {
          id: 11,
          label: "Greece Work Visa",
          href: "/visas/greece-work-visa",
        },
        {
          id: 12,
          label: "Malta Work Visa",
          href: "/visas/malta-work-visa",
        },
        {
          id: 13,
          label: "Poland Work Visa",
          href: "/visas/poland-work-visa",
        },
      ],
    },

    {
      id: 3,
      label: "Study Visa",
      href: "/study-visa",
    },

    {
      id: 4,
      label: "Tourist Visa",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada Tourist Visa",
          href: "/visas/canada-tourist-visa",
        },
        {
          id: 2,
          label: "Australia Tourist Visa",
          href: "/visas/australia-tourist-visa",
        },
        {
          id: 3,
          label: "UK Tourist Visa",
          href: "/visas/uk-tourist-visa",
        },
        {
          id: 4,
          label: "Germany Tourist Visa",
          href: "/visas/germany-tourist-visa",
        },
        {
          id: 5,
          label: "Dubai Tourist Visa",
          href: "/visas/dubai-tourist-visa",
        },
        {
          id: 6,
          label: "Luxembourg Tourist Visa",
          href: "/visas/luxembourg-tourist-visa",
        },
        {
          id: 7,
          label: "Malta Tourist Visa",
          href: "/visas/malta-tourist-visa",
        },
        {
          id: 8,
          label: "Ireland Tourist Visa",
          href: "/visas/ireland-tourist-visa",
        },
      ],
    },

    {
      id: 5,
      label: "PNP Programs",
      href: "#",
      subNav: [
        { id: 1, label: "Manitoba PNP", href: "/visas/manitoba-pnp-draw" },
        {
          id: 2,
          label: "Yukon Nominee Program",
          href: "/visas/yukon-nominee-program",
        },
        {
          id: 3,
          label: "Ontario PNP Program",
          href: "/visas/ontario-pnp",
        },
        {
          id: 4,
          label: "Nova Scotia PNP",
          href: "/visas/nova-scotia-pnp",
        },
        {
          id: 5,
          label: "Alberta PNP Program",
          href: "/visas/alberta-pnp",
        },
        {
          id: 6,
          label: "British Columbia PNP Program",
          href: "/visas/BC PNP",
        },
        {
          id: 7,
          label: "Quebec Skilled Worker Program",
          href: "/visas/quebec-skilled-worker-program",
        },
        {
          id: 8,
          label: "Saskatchewan PNP Program",
          href: "/visas/saskatchewan-pnp-program",
        },
        {
          id: 9,
          label: "New Brunswick PNP Program",
          href: "/visas/new-brunswick-pnp-program",
        },
      ],
    },

    {
      id: 6,
      label: "Points Calculator",
      href: "#",
      subNav: [
        { id: 1, label: "CRS Calculator", href: "/visas/crs-calculator" },
        {
          id: 2,
          label: "Canada 67 Points Calculator",
          href: "/visas/canada-67-points-calculator",
        },
        {
          id: 3,
          label: "SINP Points Calculator",
          href: "/visas/sinp-points-calculator",
        },
        {
          id: 4,
          label: "BC Points Calculator",
          href: "/visas/bc-points-calculator",
        },
        {
          id: 5,
          label: "Manitoba Points Calculator",
          href: "/visas/manitoba-points-calculator",
        },
        {
          id: 6,
          label: "Nova Scotia Points Calculator",
          href: "/visas/nova-scotia-points-calculator",
        },
        {
          id: 7,
          label: "Alberta Points Calculator",
          href: "/visas/alberta-points-calculator",
        },
        {
          id: 8,
          label: "Quebec Points Calculator",
          href: "/visas/quebec-points-calculator",
        },
        {
          id: 9,
          label: "Ontario Points Calculator",
          href: "/visas/ontario-points-calculator",
        },
      ],
    },
  ],
};

export const sliderContent = [
  {
    id: 1, 
    img: banner2,
    welcome: "Your Trusted Partner For Global Opportunities",
    title1: "Turn Your Overseas Dreams Into Reality ",
    title2: "",
    para: "Whether you want to work, study, visit, or settle abroad, our team provides reliable guidance at every step.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 2, 
    img: banner,
    welcome: "Helping You Move Forward With Confidence",
    title1: "Expert Immigration Solutions For Every Journey ",
    title2: "",
    para: "From visa applications to documentation support, we make the immigration process smooth, simple, and stress-free for you.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];


export const boxdata = [
  {
    id: 1,
    heading: "Visa Application Support",
    para: "We help you complete your visa application with confidence. Our team guides you through every stage, ensuring the process is clear, accurate, and completed according to the latest immigration requirements.",
    icon: <BsPassportFill />,
  },
  {
    id: 2,
    heading: "Documentation Assistance",
    para: "Proper documentation is important for a successful application. We assist in preparing, reviewing, and organizing your documents to help reduce mistakes and improve application readiness.",
    icon: <RiSpeedMiniFill />,
  },
  {
    id: 3,
    heading: "Personalized Immigration Guidance",
    para: "Every immigration journey is different. We provide personalized guidance based on your goals, helping you understand your options and make informed decisions throughout the process.",
    icon: <RiUserCommunityFill />,
  },
  {
    id: 4,
    heading: "Trusted Legal Compliance",
    para: "Our team follows current immigration rules and regulations to help ensure your application meets all requirements. We focus on accuracy, transparency, and professional support at every step.",
    icon: <HiOutlineDocumentCheck />,
  },
];


export const aboutdata = {
  img1: about2,
  img2: canadaPR,
  title1: "ABOUT US",
  title2: "Trusted Immigration Consultants For ",
  title3: " Your Global Goals",
  para: "We provide professional immigration and visa assistance to individuals, families, students, and skilled professionals looking to build opportunities abroad. With a client-focused approach, we guide you through every stage of the process, from profile assessment and documentation to application submission and follow-up support. Our team is committed to delivering transparent advice, reliable solutions, and personalized guidance that help make your immigration journey smoother, simpler, and more successful. We believe in building trust through honesty, expertise, and dedicated customer support.",
  skillBars: [
    { label: "Visa Assistance", percent: 95 },
    { label: "Immigration Services", percent: 98 },
  ],
  checklist: [
    { id: 1, label: "Visa Assistance" },
    { id: 2, label: "Immigration Services" },
  ],
  sideNote: "Professional guidance and reliable support for successful immigration journeys.",
};


// export const aboutdata2 = {
//   img1: about2,
//   img2: box2,
//   title1: "ABOUT US",
//   title2: "Visa Consultants in ",
//   title3: "Delhi",
//   para:
//     "Focused on accuracy and transparency, we are among the leading immigration consultants in Delhi, offering profile-based immigration guidance and complete visa support. Our expert team follows ethical practices and structured processes to help individuals and families achieve global opportunities with confidence.",

//   pointer: [
//     {
//       id: 1,
//       heading: "Trusted Immigration Consultancy",
//       text:
//         "Expert guidance and reliable support for your immigration journey.",
//       icon: <FaPlaneDeparture />,
//     },
//     {
//       id: 2,
//       heading: "Immigration Solutions That Deliver",
//       text:
//         "Structured processes to help you move abroad with clarity and confidence.",
//       icon: <IoSettingsOutline />,
//     },
//   ],
// };


export const visaSliderdata = {
  title1: "OUR SERVICES",
  title2: "Professional Immigration Support For A Brighter Future",

  cards: [
    {
      id: 1,
      img: visa1,
      heading: "Work Visa",
      text: "Helping professionals secure overseas employment opportunities through work visas.",
    },
    {
      id: 2,
      img: prvisa,
      heading: "PR Visa",
      text: "Supporting your journey towards permanent residency and long-term settlement.",
    },
    {
      id: 3,
      img: famvisa,
      heading: "Family Sponsorship Visa",
      text: "Reuniting families through reliable family sponsorship and immigration assistance.",
    },
    {
      id: 4,
      img: business,
      heading: "Business/Investor Visa",
      text: "Guiding entrepreneurs and investors towards global business expansion opportunities.",
    },
    {
      id: 5,
      img: touristvisa,
      heading: "Tourist/Visitor Visa",
      text: "Making international travel easier with smooth visitor visa assistance.",
    },
  ],
};

// export const countrytomigrate = {
//   title1: "Countries We Offer",
//   title2: "We Provide Expert Immigration And Destinations.",

//   cards: [
//     {
//       id: 1,
//       img: canadaflag,
//       heading: "United States",
//       link: "country/us",
//       points: [
//         "4 Years Business Visa",
//         "Visa Apply Online",
//         "Student Admission Visa",
//         "24/7 Support",
//       ],
//     },
//     {
//       id: 2,
//       img: ukflag,
//       heading: "United Kingdom",
//       link: "country/uk",
//       points: [
//         "4 Years Business Visa",
//         "Visa Apply Online",
//         "Student Admission Visa",
//         "24/7 Support",
//       ],
//     },
//     {
//       id: 3,
//       img: canadaflag,
//       heading: "Canada",
//       link: "country/canada",
//       points: ["PR Pathways", "Express Entry", "Student Visa", "24/7 Support"],
//     },
//     {
//       id: 4,
//       img: ukflag,
//       heading: "Australia",
//       link: "country/australia",
//       points: [
//         "Skilled Migration",
//         "Work Visa",
//         "Student Visa",
//         "24/7 Support",
//       ],
//     },
//   ],
// };


export const workingprocess = {
  title1: "WORKING PROCESS",
  title2: "4 Simple Steps To Start Your Immigration Journey",
  para: "Our streamlined process makes immigration easier and more organized. From your initial consultation to final application submission, we provide expert guidance and support at every stage to help you move forward with confidence.",
  cards: [
    {
      step: "01",
      heading: "Initial Consultation",
      text: "Discuss your goals with our experts and identify the most suitable immigration pathway.",
    },
    {
      step: "02",
      heading: "Profile Assessment",
      text: "We carefully evaluate your profile and explain available visa and immigration options.",
    },
    {
      step: "03",
      heading: "Documentation Support",
      text: "Receive guidance in preparing, organizing, and verifying all required application documents.",
    },
    {
      step: "04",
      heading: "Application Submission",
      text: "We assist with submission and provide support until your application process progresses.",
    },
  ],
};

export const canadapnp = {
  bgImg: back,
  title1: "COUNTRIES WE SERVE",
  title2: "Connecting Aspirations With Opportunities Around The Globe",
  cards: [
    {
      id: 1,
      img: banner2,
      flag: canadaflag,
      cat: "abroad",
      heading: "USA",
      points: [
        "• Processing: 3–6 Months",
        "• High Nomination Quota",
        "• Access opportunities for work, education, and long-term settlement goals",
      ],
      text: "Access opportunities for work, education, and long-term settlement goals",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: banner2,
      flag: canadaflag,
      cat: "mbbs",
      heading: "Canada",
      points: [
        "• Processing: 2–4 Months",
        "• Regular Invitation Rounds",
        "• Achieve your immigration goals through Canada's trusted visa pathways",
      ],
      text: "Achieve your immigration goals through Canada's trusted visa pathways",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: banner2,
      flag: canadaflag,
      cat: "abroad",
      heading: "Australia",
      points: [
        "• Processing: 4–6 Months",
        "• Lower CRS Possibility",
        "• Build your future with Australia's skilled migration and visa programs",
      ],
      text: "Build your future with Australia's skilled migration and visa programs",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: banner2,
      flag: canadaflag,
      cat: "abroad",
      heading: "New Zealand",
      points: [
        "• Processing: 2–5 Months",
        "• In-Demand Occupation Stream",
        "• Take the next step toward living and working in New Zealand",
      ],
      text: "Take the next step toward living and working in New Zealand",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: banner2,
      flag: canadaflag,
      cat: "mbbs",
      heading: "Europe",
      points: [
        "• Processing: 3–5 Months",
        "• Strong Provincial Support",
        "• Benefit from work, study, and residency opportunities across European countries",
      ],
      text: "Benefit from work, study, and residency opportunities across European countries",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: banner2,
      flag: canadaflag,
      cat: "mbbs",
      heading: "GCC",
      points: [
        "• Processing: 3–6 Months",
        "• Express Entry Priority",
        "• Secure career opportunities in leading Gulf countries with professional support",
      ],
      text: "Secure career opportunities in leading Gulf countries with professional support",
      link: "/canada-pnp",
    },
  ],
};

export const Whychoose = {
  img: box1,

  title1: "WHY CHOOSE US",
  title2: "Simple Solutions For Complex ",
  title3: "Immigration Processes",
  para: "We focus on providing reliable guidance, transparent communication, and personalized solutions to help clients achieve their immigration goals with confidence and peace of mind.",

  reasons: [
    {
      icon: <FaShieldAlt />,
      title: "Personalized Immigration Guidance",
      text: "Every client has unique goals. We provide tailored solutions and expert advice based on your profile and immigration requirements.",
    },
    {
      icon: <FaFileSignature />,
      title: "Transparent & Honest Process",
      text: "We keep you informed at every stage with clear communication, accurate information, and no hidden surprises.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Quick & Hassle-Free Process",
      text: "Our experienced team helps simplify procedures, ensuring your application process remains smooth and well-organized.",
    },
    {
      icon: <FaChartLine />,
      title: "Strong Success Record",
      text: "With careful documentation support and professional guidance, we help clients move forward with confidence toward their immigration goals.",
    },
  ],
};

export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "What Our Clients Say About ",
  title3: " Their Experience",
  para: "We are proud to support individuals and families in achieving their immigration goals. Read how our professional guidance, transparent process, and dedicated assistance have helped clients move forward with confidence.",

  testimonials: [
    {
      title: "Suresh Dixit",
      text: "I had a great experience with Anavrin Adviser while applying for my work visa. The team guided me through every step, explained the requirements clearly, and ensured my documents were properly prepared. Their professionalism and constant support made the entire process smooth and successful.",
      img: cl1,
    },
    {
      title: "Mohan Rane",
      text: "Choosing Anavrin Adviser for my PR application was one of the best decisions I made. The consultants were knowledgeable, responsive, and always available to answer my questions. Their guidance helped me complete the process confidently, and I am extremely satisfied with their service.",
      img: cl1,
    },
    {
      title: "Manoj Saini",
      text: "Anavrin Adviser provided exceptional assistance for my family sponsorship application. The team carefully reviewed all documents and kept me informed throughout the process. Their dedication and attention to detail helped us achieve a positive outcome, and I highly recommend their services.",
      img: cl1,
    },
    {
      title: "Sam Goyal",
      text: "I received excellent support from the Anavrin Adviser for my tourist visa application. The process was explained clearly, and the team helped me avoid common mistakes. Their prompt communication and a professional approach made everything simple, and my visa was approved without any issues.",
      img: cl1,
    },
  ],
};

// export const offercountry = {
//   title1: "Countries We Offer",
//   title2:
//     "Top global destinations with strong career and immigration opportunities",
//    cards: [
//     {
//       id: 1,
//       img: ontario,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Canada",
//       points: ["• High-Quality Education", "• Post-Study Work", "• PR Opportunities"],
//       text: "High-quality education with post-study work and PR opportunities",
//       link: "/canada-pnp",
//     },
//     {
//       id: 2,
//       img: bcPnpProgram,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in USA",
//       points: ["• Top Universities", "• Diverse Courses", "• Global Career Opportunities"],
//       text: "Top universities with diverse courses and global career opportunities",
//       link: "/canada-pnp",
//     },
//     {
//       id: 3,
//       img: alberta,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Australia",
//       points: ["• Quality Education", "• Work Opportunities", "• Student-Friendly Environment"],
//       text: "Quality education with work opportunities and a student-friendly environment",
//       link: "/canada-pnp",
//     },
//     {
//       id: 4,
//       img: saskatchewanPnp,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Dubai",
//       points: ["• Modern Education Hub", "• Global Exposure", "• Tax-Free Benefits"],
//       text: "Modern education hub with global exposure and tax-free benefits",
//       link: "/canada-pnp",
//     },
//     {
//       id: 5,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Italy",
//       points: ["• Affordable Education", "• Rich Culture", "• European Degree"],
//       text: "Affordable education with rich culture and European degree recognition",
//       link: "/canada-pnp",
//     },
//     {
//       id: 6,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in France",
//       points: ["• Quality Education", "• Low Fees", "• Global Opportunities"],
//       text: "Quality education with low fees and global career opportunities",
//       link: "/canada-pnp",
//     },
//     {
//       id: 7,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Malaysia",
//       points: ["• Affordable", "• International Universities", "• Modern Infrastructure"],
//       text: "Affordable education with international universities and modern infrastructure",
//       link: "/canada-pnp",
//     },
//     {
//       id: 8,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in New Zealand",
//       points: ["• Safe Country", "• Quality Education", "• Post-Study Work"],
//       text: "Safe country with quality education and post-study work options",
//       link: "/canada-pnp",
//     },
//     {
//       id: 9,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Ireland",
//       points: ["• Strong Job Market", "• Excellent Education", "• Career Growth"],
//       text: "Strong job market with excellent education and career growth",
//       link: "/canada-pnp",
//     },
//     {
//       id: 10,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in UK",
//       points: ["• Globally Recognized", "• Short Duration", "• Flexible Courses"],
//       text: "Globally recognized degrees with shorter course duration options",
//       link: "/canada-pnp",
//     },
//     {
//       id: 11,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "abroad",
//       heading: "Study in Singapore",
//       points: ["• World-Class Education", "• Industry Connections", "• Career Opportunities"],
//       text: "World-class education with strong industry connections and career opportunities",
//       link: "/canada-pnp",
//     },
//         {
//       id: 1,
//       img: ontario,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Philippines",
//       points: ["• Affordable Fees", "• English Medium", "• Good Clinical Exposure"],
//       text: "Affordable MBBS with English medium and good clinical exposure",
//       link: "/canada-pnp",
//     },
//     {
//       id: 2,
//       img: bcPnpProgram,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Russia",
//       points: ["• Globally Recognized", "• Affordable Fees", "• Quality Education"],
//       text: "Globally recognized degrees with affordable fees and quality education",
//       link: "/canada-pnp",
//     },
//     {
//       id: 3,
//       img: alberta,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Bangladesh",
//       points: ["• Indian Syllabus", "• High FMGE Rate", "• Affordable Option"],
//       text: "Similar syllabus to India with high FMGE passing rates",
//       link: "/canada-pnp",
//     },
//     {
//       id: 4,
//       img: saskatchewanPnp,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Mauritius",
//       points: ["• Safe Country", "• Multicultural Environment", "• Quality Education"],
//       text: "Quality education in a safe and multicultural environment",
//       link: "/canada-pnp",
//     },
//     {
//       id: 5,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Nepal",
//       points: ["• Indian Curriculum", "• Easy Travel", "• Cultural Similarity"],
//       text: "Indian-based curriculum with easy travel and cultural similarity",
//       link: "/canada-pnp",
//     },
//     {
//       id: 6,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Uzbekistan",
//       points: ["• Affordable Fees", "• Modern Infrastructure", "• Experienced Faculty"],
//       text: "Affordable fees with modern infrastructure and experienced faculty support",
//       link: "/canada-pnp",
//     },
//     {
//       id: 7,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Kazakhstan",
//       points: ["• Recognized Universities", "• Affordable", "• Good Facilities"],
//       text: "Recognized universities with affordable education and good facilities",
//       link: "/canada-pnp",
//     },
//     {
//       id: 8,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Belarus",
//       points: ["• High Quality Education", "• Advanced Labs", "• Strong Infrastructure"],
//       text: "High-quality medical education with advanced labs and infrastructure",
//       link: "/canada-pnp",
//     },
//     {
//       id: 9,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Georgia",
//       points: ["• European Standard", "• English Medium", "• Recognized Degree"],
//       text: "European standard education with English medium programs available",
//       link: "/canada-pnp",
//     },
//     {
//       id: 10,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Armenia",
//       points: ["• Affordable", "• Safe Country", "• Quality Education"],
//       text: "Affordable MBBS with quality education and a safe environment",
//       link: "/canada-pnp",
//     },
//     {
//       id: 11,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in China",
//       points: ["• Top Universities", "• Advanced Technology", "• Global Recognition"],
//       text: "Top universities with advanced technology and global recognition",
//       link: "/canada-pnp",
//     },
//     {
//       id: 12,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Poland",
//       points: ["• European Degree", "• High Standards", "• Global Opportunities"],
//       text: "European degree with high education standards and global opportunities",
//       link: "/canada-pnp",
//     },
//     {
//       id: 13,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Germany",
//       points: ["• Low Tuition Fees", "• Excellent Education", "• High Exposure"],
//       text: "Low tuition fees with excellent medical education and exposure",
//       link: "/canada-pnp",
//     },
//     {
//       id: 14,
//       img: novaScotia,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Malaysia",
//       points: ["• Affordable", "• Modern Campus", "• International Recognition"],
//       text: "Affordable education with modern campuses and international recognition",
//       link: "/canada-pnp",
//     },
//     {
//       id: 15,
//       img: manitoba,
//       flag: canadaflag,
//       cat: "mbbs",
//       heading: "MBBS in Kyrgyzstan",
//       points: ["• Budget Friendly", "• Easy Admission", "• Good Training"],
//       text: "Budget-friendly MBBS with a simple admission process and good training",
//       link: "/canada-pnp",
//     },
//   ],
// };


export const HomefaqData = {
  title1: "FAQs",
  title2: "Frequently Asked ",
  title3: " Questions",

  para: "Find clear answers to your most common queries about visas, eligibility, processing time, and required documents—all in one place.",

  faqs: [
    {
      que: "How do I know which visa is right for me?",
      ans: "Choosing the right visa depends on your purpose, qualifications, work experience, financial situation, and long-term goals. Our consultants assess your profile carefully and recommend the most suitable visa pathway based on current immigration requirements and eligibility criteria.",
    },
    {
      que: "Can I apply for immigration without professional assistance?",
      ans: "Yes, you can apply independently, but immigration procedures often involve complex documentation and changing regulations. Professional guidance helps reduce errors, improve application accuracy, and ensure you understand every step of the process before submission.",
    },
    {
      que: "How long does the immigration process usually take?",
      ans: "Processing times vary depending on the country, visa category, application volume, and individual circumstances. While some visas may be processed within weeks, others can take several months. We provide realistic timelines and regular updates throughout your application.",
    },
    {
      que: "What support will I receive during my application process?",
      ans: "Our team provides end-to-end assistance, including profile evaluation, visa guidance, document review, application preparation, and ongoing support. We stay connected throughout the process to answer questions, provide updates, and help you move forward confidently.",
    },
  ],
};

export const coachingData = {
  title1: "WHAT WE OFFER",
  title2: "Language Test Preparation For Global Opportunities",
  para: "Our IELTS and PTE coaching programs are designed to help you achieve your desired scores with confidence.",
  cards: [
    {
      title: "IELTS",
      text: "Comprehensive preparation support to improve English skills and achieve your desired IELTS score.",
      href: "visa/ielts",
      icon: <FaUniversity />,
    },
    {
      title: "PTE",
      text: "Structured training designed to enhance communication skills and maximize performance in PTE exams.",
      href: "visa/pte",
      icon: <FaFileAlt />,
    },
    {
      title: "TOEFL",
      text: "Expert guidance to strengthen English proficiency for academic and professional international requirements.",
      href: "visa/toefl",
      icon: <FaGlobe />,
    },
    {
      title: "OET",
      text: "Specialized preparation for healthcare professionals aiming to meet international English language standards.",
      href: "visa/oet",
      icon: <FaStethoscope />,
    },
    {
      title: "CELPIP",
      text: "Focused preparation to improve English proficiency and achieve strong results in CELPIP examinations.",
      href: "visa/celpip",
      icon: <FaLanguage />,
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "anavrinadvisercore is a trusted consulting firm delivering reliable immigration and visa solutions through expert guidance, transparent processes, and personalized support, helping individuals and families achieve their global aspirations with confidence.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2026 . Designed and Manage by ",
  list1: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "/services/ielts-coaching-preparation" },
      {
        id: 2,
        label: "PTE Exam",
        href: "/services/pte-exam-coaching-preparation",
      },
      {
        id: 3,
        label: "Post Landing Assistance",
        href: "/services/post-landing-assistance",
      },
      {
        id: 4,
        label: "Job Assistance",
        href: "/services/job-assistance",
      },
      {
        id: 5,
        label: "Immigration Services",
        href: "/services/immigration",
      },
    ],
  },

  list2: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "about" },
      { id: 2, label: "PTE Exam", href: "career" },
      { id: 3, label: "Post Landing Assistance", href: "sustainability" },
      { id: 4, label: "Job Assistance", href: "blogs" },
      { id: 5, label: "Immigration Services", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
  },
};

export let blogData = {
  title1: "Latest Blogs",
  title2: "Get Updated With Our Recent Articles",
  blog: [
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Name",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Category",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Section",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Country",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
  ],
};

// about us
export const mission = [
  {
    number: "01",
    title: "Mission",
    icon: TbTarget,
    body: "To provide reliable immigration solutions, professional guidance, and personalized support that help clients achieve their global goals with confidence and ease.",
    bg: "bg-color1",
    badge: "bg-color1 ",
    iconColor: "#92400e",
  },
  {
    number: "02",
    title: "Vision",
    icon: TbBulb,
    body: "To become a preferred immigration partner known for trust, transparency, and successful outcomes for individuals and families worldwide.",
    bg: "bg-color2",
    badge: "bg-color2 ",
    iconColor: "#1e40af",
  },
  {
    number: "03",
    title: "Values",
    icon: TbDiamond,
    body: "We believe in honesty, professionalism, accountability, and dedicated client service while maintaining the highest standards in every immigration process.",
    bg: "bg-color3",
    badge: "bg-color3 ",
    iconColor: "#065f46",
  },
];

export const whychooseus = {
  title1: "Why Choose Us",
  img: box3,
  points: [
    {
      icon: <FaGlobeAmericas />,
      heading: "Transparent & Ethical Guidance",
      para:
        "We operate as immigration consultants in Noida, offering honest advice, compliant processes, realistic timelines, and clear communication throughout the application journey.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Profile-Based Strategy",
      para:
        "Our team works as visa consultants in Noida, delivering profile-based strategies, accurate documentation, and program selection aligned with immigration regulations.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Experienced Professionals",
      para:
        "Experienced immigration consultants in Noida manage applications with regulatory knowledge, structured workflows, attention to detail, and consistent follow-ups for outcomes.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "End-to-End Support",
      para:
        "As visa consultants in Noida, we provide end-to-end support from assessment to post-landing assistance, ensuring clients are informed, supported, and confident.",
    },
  ],
};

// contat Us
export const contactBanner = {
  title: "Contact Us",
  para:
    "Connect With anavrinadviser For Reliable Crop Protection & Farming Support. We're Here to Help Your Agriculture Thrive With Expert Solutions.",
  slug: "contact-us",
  img: banner,
};

export const contactdetail = [
  {
    icon: <MdWifiCalling3 />,
    title: "Call Us",
    text: "+911234567890",
    slug: "tel:+911234567890",
  },
  {
    icon: <MdAttachEmail />,
    title: "Email Us",
    text: "info@anavrinadviser.com",
    slug: "mailto:info@anavrinadviser.com",
  },
  {
    icon: <FaMapLocationDot />,
    title: "Location",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    slug: "#",
  },
];



export const servicechoose = {
  img: box1,
  title1: "Why Choose Us",
  title2: "Why Choose Anavrin Adviser For Your ",
  title3: "Immigration Pathway?",
  para:
    "We provide structured, transparent immigration solutions designed to help individuals and families move abroad confidently through expert guidance, ethical practices, and end-to-end professional support.",

  vision: [
    {
      icon: HiOutlineLightBulb,
      heading: "Professional Immigration Expertise",
      para:
        "Customized guidance based on your profile and current international regulations.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Clear & Honest Procedures",
      para:
        "Well-defined steps, realistic timelines, and fully compliant documentation.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Complete Application Assistance",
      para: "Support provided from initial assessment to final visa approval.",
    },
  ],
};

import maru_main from "../assets/images/Projects/maru_main.png";
import maru1 from "../assets/images/Projects/maru.derm.png";
import maru_adminPannel from "../assets/images/Projects/maru_adminPannel.png";
import maru_admin2 from "../assets/images/Projects/admin2.png";
import maruAdmin_login from "../assets/images/Projects/maruAdmin_login.png";
import goWild from "../assets/images/Projects/goWild.png";
import goWild_sub from "../assets/images/Projects/gowild_sub.png";
import goWild_login from "../assets/images/Projects/gowild_login.png";
import multimart from "../assets/images/Projects/multimart.png";
import multimart2 from "../assets/images/Projects/multimart2.png";
import crystal from "../assets/images/Projects/crystal maple.png";
import openAdvisor from "../assets/images/Projects/openAdvisor.png";
import real_estate from "../assets/images/Projects/real estate.png";
import esatet2 from "../assets/images/Projects/reaal esatet2.png";
import social_app from "../assets/images/Projects/sicia_app.png";
import prizeManner from "../assets/images/Projects/prizeManner.png";
import prizeManner_login from "../assets/images/Projects/prizeManner_login.png";
import piecreMaker from "../assets/images/Projects/piece maker.png";
import piecreMaker_login from "../assets/images/Projects/pieceMakker_login.png";
import medical2 from "../assets/images/Projects/medical2.png";
import medical from "../assets/images/Projects/medical.png";
import london_cab from "../assets/images/Projects/london_cab.png";
import dispatch from "../assets/images/Projects/dispatc_dashboard.png";
import dispatch_login from "../assets/images/Projects/pelican_dispatch_login.png";
import dispatch_snippet from "../assets/images/Projects/snippet.jpeg";
import snippet_booking from "../assets/images/Projects/snippet_booking.jpeg";
import snippet_payment from "../assets/images/Projects/snippet_paypal.jpeg";
import cloudware from "../assets/images/Projects/cloud_ware.png";
import cloudware2 from "../assets/images/Projects/cloud_ware2.png";
const ProjectData = [
  {
    img: dispatch,
    name: "Pelickan Despatch",
    github_link: "",
    Project_des:
      "Managing an admin project involving driver, vehicle and booking system, including document uploads and verification. Utilizing React JS and Redux-Saga for seamless operations. Features encompass pickup and drop location verification, vehicle tracking on map.",
    live_link: "https://admin.test.pelickandespatch.com:8443/",
    technologies: [
      "React Js",
      "JavaScript",
      "Redux-toolKit",
      "Redux-Saga",
      "HTML5",
      "CSS",
      "Axios",
    ],
    images: [dispatch, dispatch_login],
  },
  {
    img: dispatch_snippet,
    name: "Pelickan Serach-Snippet",
    github_link: "#",
    Project_des:
      "Revolutionizing travel booking, our platform allows users to search and select their starting and destination addresses, specify one-way or return trips, and choose passenger count. Secure payments via Stripe or PayPal ensure a hassle-free experience.",
    live_link: "https://snippet.stag.pelickandespatch.com:8443/ ",
    technologies: [
      "React Js",
      "JavaScript",
      "Stripe",
      "Paypal",
      "HTML5",
      "CSS",
      "Axios",
    ],
    images: [snippet_booking, snippet_payment],
  },
  {
    img: maru_main,
    name: "Maru.derm e-commerce",
    github_link: "https://github.com/adnanhassan1234/Maru.derm-Ecommerce",
    Project_des:
      "Maru.Derm is a dynamic e-commerce website where users can seamlessly browse, purchase products, and share their valuable reviews. Our platform ensures a secure and efficient transaction experience by integrating the Stripe payment method through APIs.",
    live_link: "https://web.test.maruderm.co.uk:8443",
    technologies: [
      "HTML5",
      "NextJs",
      "Tailwind",
      "JavaScript",
      "Redux-toolKit",
      "Axios",
    ],
    images: [maru_main, maru1],
  },
  {
    img: maru_adminPannel,
    name: "Maru.derm admin panel",
    github_link: "https://github.com/adnanhassan1234/Maru.derm-Ecommerce",
    live_link: "https://admin.test.maruderm.co.uk:8443",
    Project_des:
      "This Maru.Derm's admin panel provides a streamlined interface for efficient management of your e-commerce platform. From product catalog updates to order tracking and customer management, our admin panel empowers you with intuitive tools. With real-time insights and user-friendly controls, it's the command center ensuring seamless operation and optimization of your Maru.Derm experience.",
    technologies: [
      "HTML5",
      "React Js",
      "Tailwind",
      "JavaScript",
      "Redux-toolKit",
      "Axios",
    ],
    images: [maru_adminPannel, maru_admin2, maruAdmin_login],
  },
  {
    img: goWild,
    name: "goWild Admin panel",
    github_link: "https://github.com/adnanhassan1234/goWild",
    Project_des:
      "GoWild Dynamic Project is an advanced admin panel facilitating seamless route creation, user management, track routes and access control. Empowering administrators with a user-friendly interface, it ensures efficient handling of tasks such as disabling users and creating hierarchical admin structures for streamlined operations. <br /> The dashboard provides a comprehensive overview, enabling administrators and sub-admin users to monitor user activities, track routes, and address any issues promptly. GoWild is designed to optimize the administrative process, fostering a secure and well-managed environment for users and administrators alike. ",
    live_link: "https://dreamy-cobbler-06ced2.netlify.app/",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "JavaScript",
      "Axios",
    ],
    images: [goWild, goWild_sub, goWild_login],
  },
  {
    img: multimart,
    name: "Multimart e-commerce",
    github_link:
      "https://github.com/adnanhassan1234/React-Multimart-Ecommerce-",
    live_link: "https://melodic-lamington-2c3c56.netlify.app/",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "Fire-base",
      "JavaScript",
      "Axios",
    ],
    images: [multimart, multimart2],
    Project_des: "",
  },
  {
    img: crystal,
    name: "Crystal Map",
    github_link: "https://github.com/adnanhassan1234/Crystal-Maple-Business",
    live_link: "https://crystalmaple.netlify.app/ ",
    technologies: ["HTML5", "css", "Bootstrap", "JavaScript"],
    images: [crystal, crystal],
    Project_des: "",
  },
  {
    img: openAdvisor,
    name: "openAdvisor",
    github_link: "https://github.com/adnanhassan1234/openAdvisor",
    live_link: "https://openadvisor.netlify.app/",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "JavaScript",
      "Axios",
    ],
    images: [openAdvisor, openAdvisor],
    Project_des: "",
  },
  {
    img: real_estate,
    name: "Real_estate property",
    github_link: "https://github.com/adnanhassan1234/Real_Estate_Property",
    live_link: "https://delightful-bubblegum-22fb9b.netlify.app/   ",
    technologies: ["HTML5", "css", "Bootstrap", "JavaScript"],
    images: [real_estate, esatet2],
    Project_des: "",
  },
  {
    img: social_app,
    name: "Facebook Social app",
    github_link: "https://github.com/adnanhassan1234/React-social-app",
    live_link: "https://visionary-centaur-8bcee9.netlify.app/",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "JavaScript",
      "Axios",
    ],
    images: [social_app, social_app],
    Project_des: "",
  },
  {
    img: prizeManner,
    name: "prizeManner Admin",
    github_link: "https://github.com/adnanhassan1234/prizeManner",
    live_link: "https://web.prizeminer.appscorridor.com/",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "JavaScript",
      "Axios",
    ],
    images: [prizeManner, prizeManner_login],
    Project_des: "",
  },
  {
    img: piecreMaker,
    name: "pieceMaker",
    github_link: "https://github.com/adnanhassan1234/pieceMaker",
    live_link: "https://piecemaker.netlify.app/",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "JavaScript",
      "Axios",
    ],
    images: [piecreMaker, piecreMaker_login],
    Project_des: "",
  },
  {
    img: medical2,
    name: "Medical",
    github_link: "https://github.com/adnanhassan1234/Medical",
    live_link: "https://630ef2fa6c785550ae34fe6a--chipper-daffodil-12eae1.netlify.app/",
    technologies: ["HTML5", "css", "Bootstrap", "JavaScript"],
    images: [medical2, medical],
    Project_des: "",
  },
  {
    img: london_cab,
    name: "London Cab Service",
    github_link: "#",
    live_link: "https://londonairportcabs.com/",
    technologies: ["HTML5", "css", "JavaScript"],
    images: [london_cab, london_cab],
    Project_des: "",
  },
  {
    img: cloudware,
    name: "CloudWare-Service",
    github_link: "https://github.com/adnanhassan1234/CloudWare-Service",
    Project_des:
      "Managed Public Cloud Solutions designed to elevate your business operations. From seamless scalability to robust security measures, our services ensure optimal performance and efficiency, allowing you to focus on your core objectives while we handle the complexities of cloud management.",
    live_link: "https://cloudware.netlify.app/",
    technologies: [
      "React Js",
      "JavaScript",
      "bootstrap",
      "HTML5",
      "SCSS",
      "Axios",
    ],
    images: [cloudware, cloudware2],
  },
];
export default ProjectData;

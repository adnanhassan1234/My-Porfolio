import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import ProjectDetailsModel from "./ProjectDetailModel/ProjectDetailsModel";

const projects = [
  {
    img: maru_main,
    name: "Maru.derm e-commerce",
    github_link: "#",
    Project_des:"Maru.Derm is a dynamic e-commerce website where users can seamlessly browse, purchase products, and share their valuable reviews. Our platform ensures a secure and efficient transaction experience by integrating the Stripe payment method through APIs.",
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
    github_link: "#",
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
    github_link: "",
    Project_des:
      "GoWild Dynamic Project is an advanced admin panel facilitating seamless route creation, user management, track routes and access control. Empowering administrators with a user-friendly interface, it ensures efficient handling of tasks such as disabling users and creating hierarchical admin structures for streamlined operations. <br /> The dashboard provides a comprehensive overview, enabling administrators and sub-admin users to monitor user activities, track routes, and address any issues promptly. GoWild is designed to optimize the administrative process, fostering a secure and well-managed environment for users and administrators alike. ",
    live_link: "https://highking01.netlify.app",
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
    github_link: "",
    live_link: "",
    technologies: [
      "HTML5",
      "css",
      "React-Bootstrap",
      "React Js",
      "JavaScript",
      "Axios",
    ],
    images: [multimart, multimart2],
    Project_des: "",
  },
  {
    img: crystal,
    name: "Crystal Map",
    github_link: "",
    live_link: "",
    technologies: ["HTML5", "css", "Bootstrap", "JavaScript"],
    images: [crystal, crystal],
    Project_des: "",
  },
  {
    img: openAdvisor,
    name: "openAdvisor",
    github_link: "",
    live_link: "",
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
    github_link: "",
    live_link: "",
    technologies: ["HTML5", "css", "Bootstrap", "JavaScript"],
    images: [real_estate, esatet2],
    Project_des: "",
  },
  {
    img: social_app,
    name: "Facebook Social app",
    github_link: "",
    live_link: "",
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
    github_link: "",
    live_link: "",
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
    name: "piecreMaker",
    github_link: "",
    live_link: "",
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
    github_link: "",
    live_link: "",
    technologies: ["HTML5", "css", "Bootstrap", "JavaScript"],
    images: [medical2, medical],
    Project_des: "",
  },
  {
    img: london_cab,
    name: "London Cab Service",
    github_link: "",
    live_link: "",
    technologies: ["HTML5", "css", "JavaScript"],
    images: [london_cab, london_cab],
    Project_des: "",
  },
];

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const selectedFunction = (item) => {
    console.log(item);
    if (show == true) {
      setShow(false);
      setSelectedData({});
    } else {
      setShow(true);
      setSelectedData(item);
    }
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex w-[80%] gap-6 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            pagination={pagination}
            breakpoints={{
              1800: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3,
              },
              1120: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects?.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="portfolios h-fit w-full  bg-slate-700 rounded-lg mb-[5rem]">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-tl-md rounded-tr-md"
                  />
                  <h3 className="text-xl my-3 ml-3">{project_info.name}</h3>
                  <div className="flex gap-3 pl-3 pr-3 pb-4">
                    <a
                      className="text-cyan-600 bg-gray-800 px-2 rounded-sm py-1 inline-block cursor-pointer"
                      onClick={() => selectedFunction(project_info)}
                    >
                      Details
                    </a>
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 rounded-sm px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 rounded-sm px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {show && (
        <ProjectDetailsModel
          show={show}
          selectedData={selectedData}
          onHide={() => setShow(false)}
        />
      )}
    </section>
  );
};

export default Project;

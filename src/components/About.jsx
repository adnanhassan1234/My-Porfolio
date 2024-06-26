import React from "react";
import aboutImg from "../assets/images/hassan.png";
import resume from "../assets/Adnan_hassan_2024.pdf";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "30" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8 2sm:mt-0">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg pb-12 ">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto 2sm:px-6">
          <div className="p-2 2sm:p-1">
            <div className="text-gray-300 my-3">
              <p className="text-left  w-[95%] leading-7  mx-auto  title">
                Hello, I'm Adnan Hassan, a proficient Computer Science graduate
                with 2 years of professional expertise, specializes in crafting
                cutting-edge frontend applications. Leveraging advanced
                technologies, particularly React and Next.js, I excel in
                developing dynamic web solutions and seamlessly integrating APIs
                to deliver optimal user experiences.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={resume} download="Adnan_hassan_2024.pdf">
                <button className="btn-primary">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

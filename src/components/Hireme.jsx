import React from "react";
import hireMe from "../assets/images/cut1.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center text-center">
        <div className="m-auto">
          <h2 className="text-2xl font-semibold text-center">
            Do you want any work from me?
          </h2>
          <p className="p-3 text-sm mt-4 text-gray-200 leading-6 title text-center">
            If you are seeking a frontend developer who is not only proficient
            in established technologies but also committed to maintaining
            quality, adopting new tech trends, and meeting deadlines, I am ready
            to contribute my skills to enhance your projects. Let's collaborate
            to create innovative and impactful digital experiences.
          </p>{" "}
          <center>
            {" "}
            <button className="btn-primary  text-center mt-6">
              Say Hello
            </button>
          </center>
        </div>
        {/* <img
          src={hireMe}
          alt=""
          className="lg:h-[27rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        /> */}
      </div>
    </section>
  );
};

export default Hireme;

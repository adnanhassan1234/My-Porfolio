import React from "react";
import hero from "../assets/images/hero.png";
import { TextLoop } from "react-text-loop-next";
// import TextLoop from "react-text-loop";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/adnan_hassan_tarar?igshid=MWVocTNvOTVxdXo5Nw==",
    },
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/profile.php?id=100005462919192&mibextid=ZbWKwL",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/adnan-hassan-5429301b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: "logo-twitter",
      link: "https://twitter.com/Adnan_Hassan32?t=fw-aOcfI2Iz0E-QDmAUong&s=09",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-9/12 h-full object-cover mt-10"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center 2sm:mt-10">
          <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Adnan hassan</span>
          </h1>
          <h4 className="text-2xl md:text-3xl lg:text-3xl text-secondary font-bold text-gray-600">
            I am a &nbsp;
            <TextLoop>
              <span className="text-2xl md:text-3xl lg:text-3xl text-secondary font-bold text-cyan-400">
                Frontend Developer
              </span>
              <span className="text-2xl md:text-3xl lg:text-3xl text-secondary font-bold text-cyan-400">
                React Js Developer
              </span>
              <span className="text-2xl md:text-3xl lg:text-3xl text-secondary font-bold text-cyan-400">
                Next Js Developer
              </span>
            </TextLoop>
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

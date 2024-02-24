import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Bot = () => {
  const whatsappNumber = "+923476275532";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="botBorder fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-[#0cbf52] text-4xl bg-[#fff] w-14 h-14 flex items-center justify-center rounded-full animate-bounce">
        <IoLogoWhatsapp />
      </div>
    </a>
  );
};

export default Bot;
;
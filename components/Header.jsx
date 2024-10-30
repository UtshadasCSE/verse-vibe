import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center ">
        <Image
          src={assets.logo}
          alt="VerseVibe"
          width={180}
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black text-black border-2">
          Get Started
          <Image src={assets.arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;

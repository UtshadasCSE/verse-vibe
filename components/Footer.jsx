import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center flex-col gap-2 sm:gap-0 sm:flex-row bg-black text-white py-5">
      <Image src={assets.logo_light} alt="VerseVibe logo" width={120} />
      <p>All Rights Reserved {new Date().getFullYear()}</p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="Social logo" width={40} />
        <Image src={assets.twitter_icon} alt="Social logo" width={40} />
        <Image src={assets.googleplus_icon} alt="Social logo" width={40} />
      </div>
    </div>
  );
};

export default Footer;
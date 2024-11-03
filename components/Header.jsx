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
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black text-black border-2 shadow-[-7px_7px_0px_#000000]">
          Get Started
          <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium text-black">
            Latest Blogs
          </h1>
          <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base text-black">
            Discover stories, ideas, and insights curated for the curious.
            VerseVibe is where every word finds its rhythm.Explore the beat of
            ideas and stories that inspire. VerseVibe brings you unique
            perspectives and creative insights on topics that matter.
          </p>
          <form
            action=""
            className="flex justify-between max-w-[500px] mx-auto scale-75 sm:scale-100 border-2 border-black text-black my-4 shadow-[-7px_7px_0px_#000000]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-4 outline-none"
            />
            <button
              type="submit"
              className=" border-l border-black p-4 sm:px-8 active:bg-gray-600 active:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;

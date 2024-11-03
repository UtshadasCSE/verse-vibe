/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/components/Footer";
import { assets, blog_data } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogdata = () => {
    const data = blog_data.find((item) => Number(params.id) === item.id);
    setData(data);
  };
  console.log(data);

  useEffect(() => {
    fetchBlogdata();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 p-5 md:px-12 lg:px-28 text-black">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              alt=""
              width={180}
              className="w-[130] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black text-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="Arrow" width={20} />
          </button>
        </div>
        <div className="text-center text-black my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt="Author profile"
            width={60}
            height={60}
            className="mx-auto mt-5 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 mx-auto max-w-[740px]">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 bg-white">
        <Image
          src={data.image}
          alt="Thumbnail"
          width={1280}
          height={720}
          className="border-4 border-white"
        />
        <h2 className="text-black my-8 text-[26px] font-semibold">Intro</h2>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step-1: Self reflection and goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step-1: Self reflection and goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step-1: Self reflection and goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur dignissimos temporibus modi, molestias excepturi facilis
          soluta itaque ipsum quis.
        </p>
        <div className="my-24">
          <p className="font-semibold text-black my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="Social icon" width={50} />
            <Image src={assets.twitter_icon} alt="Social icon" width={50} />
            <Image src={assets.googleplus_icon} alt="Social icon" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;

import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ id, title, description, category, image }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`} className="">
        <Image
          src={image}
          alt="Blog thumbnail"
          width={400}
          height={400}
          className="border-b border-black"
        />
        <p className="ml-5 mt-5 inline-block bg-black text-white text-sm">
          {category}
        </p>
        <div className="p-5">
          <h5 className="font-medium mb-2 text-lg tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {description}
          </p>
          <div className="inline-flex items-center py-2 text-center font-semibold">
            Read More{" "}
            <Image
              src={assets.arrow}
              alt="Right arrow"
              width={22}
              className="ml-2"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;

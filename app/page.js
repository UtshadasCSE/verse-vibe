"use client";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

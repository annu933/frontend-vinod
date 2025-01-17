"use client";

import CustomButton from "@/components/button/page";
import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function About() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div id="about" className="container mx-auto px-4 py-8 bg-[#f3f3f3] ">
      <section className="lg:mt-40">
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 my-10">
          {/* Left Image */}
          <div className="flex justify-center ">
            <img
              src="/images/aboutUs.jpg"
              alt="aboutUs"
              className="w-full max-w-[450px] h-auto lg:h-[600px]"
            />
          </div>

          {/* Right Content */}
          <div className="relative w-full lg:w-1/2">
            <div className="shadow-xl p-4 bg-white relative lg:absolute lg:-left-20 lg:top-[3rem] z-50">
              <h1 className="text-xl lg:text-2xl text-orange flex items-center font-montserrat">
                About Us <TfiLayoutLineSolid className="ml-2" />
              </h1>
              <p className="text-2xl lg:text-4xl font-bold text-blue my-4 text-left">
                We Provide Best Tour Packages In Your Budget
              </p>
              <p className="text-gray-600 text-sm lg:text-base lg:w-3/4 font-medium font-heebo">
                Find amazing travel experiences with our affordable tour
                packages. Whether you want adventure, relaxation, or to explore
                new cultures, we have something for everyone. Let us help you
                plan your perfect trip today!
              </p>
              <div className="flex flex-wrap gap-4 my-4">
                <img
                  src="/images/jaipur2.jpg"
                  alt="about1"
                  className="w-[120px] lg:w-[250px] rounded-sm"
                />
                <img
                  src="/images/about2.jpg"
                  alt="about2"
                  className="w-[120px] lg:w-[250px] rounded-sm"
                />
                <img
                  src="/images/about1.jpg"
                  alt="about2"
                  className="w-[120px] lg:w-[250px] rounded-sm"
                />
              </div>
              <CustomButton
                label="Book Now"
                onClick={handleClick}
                className="bg-orange hover:bg-[#0F172B]  text-white px-4 py-2 rounded-sm hover:shadow-[4px_4px_0px_0px_orange]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

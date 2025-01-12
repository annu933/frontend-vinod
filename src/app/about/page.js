"use client";

import CustomButton from "@/components/button/page";
import React from "react";

function About() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-6 my-10">
          {/* Left Image */}
          <div className="flex justify-center ">
            <img
              src="/images/aboutUs.jpg"
              alt="About Us"
              className="w-full max-w-[450px] h-auto lg:h-[600px]"
            />
          </div>

          {/* Right Content */}
          <div className="relative w-full lg:w-1/2">
            <div className="shadow-xl p-4 bg-white relative lg:absolute lg:-left-20 lg:top-[3rem] z-50">
              <p className="text-2xl lg:text-4xl font-bold text-blue my-4 text-left">
                We Provide Best Tour Packages In Your Budget
              </p>
              <p className="text-gray-600 text-sm lg:text-base lg:w-3/4 font-medium">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo.
              </p>
              <div className="flex flex-wrap gap-4 my-4">
                <img
                  src="/images/about1.jpg"
                  alt="About 1"
                  className="w-[120px] lg:w-[250px] rounded-sm"
                />
                <img
                  src="/images/about2.jpg"
                  alt="About 2"
                  className="w-[120px] lg:w-[250px] rounded-sm"
                />
              </div>
              <CustomButton
                label="Click Me"
                onClick={handleClick}
                className="bg-orange text-white px-4 py-2 rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

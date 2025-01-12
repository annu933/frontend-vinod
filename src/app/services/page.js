"use client";
import CustomCard from "../../components/card/page";
import React from "react";
import { FaHotel } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Service() {
  return (
    <div className="container mx-auto px-4 py-8 bg-red-50">
      <div>
        <h1 className="text-2xl font-medium text-orange mb-2 text-center flex items-center justify-center">
          <TfiLayoutLineSolid className="mr-1" />
          Our Services <TfiLayoutLineSolid className="ml-1" />
        </h1>
        <p className="text-4xl font-bold text-orange mb-4 text-center">
          <span className="text-black">Explore Our</span> Services
        </p>
      </div>
      <section>
        <div className="flex flex-wrap w-full gap-8 justify-center items-center my-10">
          <CustomCard
            title="Rooms & Appartment"
            content="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
          <CustomCard
            title="Food & Restaurant"
            content="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
          <CustomCard
            title="Spa & Fitness"
            content="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
          <CustomCard
            title="Sports & Gaming"
            content="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
          <CustomCard
            title="Event & Party"
            content="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
          <CustomCard
            title="GYM & Yoga"
            content="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
        </div>
      </section>
    </div>
  );
}

export default Service;

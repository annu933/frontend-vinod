"use client";
import CustomCard from "../../components/card/page";
import React from "react";
import { FaHotel, FaSpa, FaGlassCheers } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { MdRestaurant, MdSportsTennis } from "react-icons/md";
import { CgGym } from "react-icons/cg";

function Service() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#0F172B]">
      <div>
        <h1 className="text-2xl font-medium text-orange mb-2 text-center flex items-center justify-center">
          <TfiLayoutLineSolid className="mr-1" />
          Our Services <TfiLayoutLineSolid className="ml-1" />
        </h1>
        <p className="text-4xl font-bold text-orange mb-4 text-center">
          <span className="text-white">Explore Our</span> Services
        </p>
      </div>
      <section>
        <div className="flex flex-wrap w-full gap-8 justify-center items-center my-10">
          <CustomCard
            title="Rooms & Appartment"
            content="Enjoy a comfortable stay in our well-furnished rooms."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />
          <CustomCard
            title="Food & Restaurant"
            content="Indulge in delicious meals with a variety of cuisines to satisfy every craving."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<MdRestaurant />}
          />
          <CustomCard
            title="Spa & Fitness"
            content="Rejuvenate with relaxing spa treatments and maintain your fitness on the go."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaSpa />}
          />
          <CustomCard
            title="Sports & Gaming"
            content="Enjoy exciting sports activities and gaming facilities for all ages."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<MdSportsTennis />}
          />
          <CustomCard
            title="Event & Party"
            content="Host memorable events and parties in our premium venues."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaGlassCheers />}
          />
          <CustomCard
            title="Gym & Yoga"
            content="Stay active with our modern gym equipment and relaxing yoga sessions."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<CgGym />}
          />
        </div>
      </section>
    </div>
  );
}

export default Service;

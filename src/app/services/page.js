"use client";
import CustomCard from "../../components/card/page";
import React from "react";
import { FaHotel, FaSpa, FaGlassCheers } from "react-icons/fa";
import {
  FaUmbrellaBeach,
  FaLandmarkFlag,
  FaLocationDot,
} from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";

function Service() {
  return (
    <div>
      <section>
        <div className="flex flex-wrap w-full gap-8 justify-center items-center my-10">
          <CustomCard
            title="Travel Guide"
            content="Discover detailed and top destinations to make your journey memorable."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaLocationDot />}
          />
          <CustomCard
            title="Ticket Booking"
            content="Easily book tickets for flights, trains, and buses with our reliable service."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<HiTicket />}
          />
          <CustomCard
            title="Hotel Booking"
            content="Find and book the best hotels to ensure a comfortable stay during your travels."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaHotel />}
          />

          <CustomCard
            title="Tourist Transportation"
            content="Explore local and outstation attractions with our guided and comfortable transport options."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaLandmarkFlag />}
          />
          <CustomCard
            title="Holiday Packages"
            content="Discover curated holiday packages for families, couples, and solo travelers."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaUmbrellaBeach />}
          />
          <CustomCard
            title="Luxury Vehicle Rentals"
            content="Travel in style with our premium and luxury vehicle rental services."
            className="bg-white hover:bg-orange hover:text-white w-full sm:w-1/2 lg:w-1/4"
            icon={<FaSpa />}
          />
        </div>
      </section>
    </div>
  );
}

export default Service;

import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex justify-center items-center text-white "
      style={{
        backgroundImage: `url('/images/home.jpg')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 "></div>
      <div className="relative text-center z-10">
        <p className="text-2xl md:text-5xl font-bold mb-4 font-montserrat">
          "Travel is the only thing you buy that makes you richer."
        </p>
        <p className="text-lg md:text-xl mb-6 font-medium">
          Discover new destinations and create unforgettable memories.
        </p>
        <button className="px-6 py-3 text-lg bg-[#F75416] hover:bg-orange rounded shadow transition duration-300">
          Book Ticket
        </button>
      </div>
    </div>
  );
};

export default Hero;

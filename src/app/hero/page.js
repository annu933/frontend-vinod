import CustomButton from "@/components/button/page";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[550px] bg-cover bg-center flex justify-center items-center text-white "
      style={{
        backgroundImage: `url('/images/hero3.jpg')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative text-center z-10">
        <p className="text-sm md:text-3xl font-bold mb-4 font-montserrat">
          Tours & Travel
        </p>
        <p className="text-2xl md:text-5xl font-bold mb-4 font-montserrat">
          {/* "Travel is the only thing you buy that makes you richer." */}
          Let's Discover The World Together
        </p>
        <p className="text-lg md:text-xl mb-6 font-medium">
          Travel is the only thing you buy that makes you richer.
        </p>
        {/* <button className="px-6 py-3 text-lg bg-[#F75416] hover:bg-orange rounded shadow transition duration-300">
          Book Ticket
        </button> */}
        <CustomButton
          label="Book Now"
          className="px-10 py-3 rounded-sm  bg-orange  text-white text-lg hover:shadow-[4px_4px_0px_0px_#fff] transition duration-200"
        />
      </div>
    </div>
  );
};

export default Hero;

// "use client";
// import { motion } from "framer-motion";
// import React from "react";
// import { ImagesSlider } from "@/components/ui/images-slider";

// const Hero = () => {
//   const images = [
//     // img1,
//     "/images/hero3.jpg",
//     "/images/hero.jpg",
//     "/images/hero2.jpg",
//     "/images/home.jpg",
//     "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];
//   return (
//     <ImagesSlider
//       className="h-[40rem]"
//       images={images}
//       slides={[
//         {
//           text: {
//             title: "Slide 1",
//             description: "This is the first slide's description.",
//           },
//           image: "/images/new.jpg",
//         },
//         {
//           text: {
//             title: "Slide 2",
//             description: "This is the second slide's description.",
//           },
//           image: "/path-to-image2.jpg",
//         },
//         {
//           text: {
//             title: "Slide 3",
//             description: "This is the third slide's description.",
//           },
//           image: "/path-to-image3.jpg",
//         },
//       ]}
//     >
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -80,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.6,
//         }}
//         className="z-50 flex flex-col justify-start items-start"
//       >
//         <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
//           The hero section slideshow <br /> nobody asked for
//         </motion.p>
//         <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center bg-orange relative mt-4">
//           <span>Book Now →</span>
//           <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//         </button>
//       </motion.div>
//     </ImagesSlider>
//   );
// };

// export default Hero;

// "use client";
// import { cn } from "@/app/utils/cn";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";

// export const ImagesSlider = ({
//   images,
//   children,
//   overlay = true,
//   overlayClassName,
//   className,
//   autoplay = true,
//   direction = "up",
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [loadedImages, setLoadedImages] = useState([]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     loadImages();
//   }, []);

//   const loadImages = () => {
//     setLoading(true);
//     const loadPromises = images.map((image) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve(image);
//         img.onerror = reject;
//       });
//     });

//     Promise.all(loadPromises)
//       .then((loadedImages) => {
//         setLoadedImages(loadedImages);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Failed to load images", error));
//   };
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrevious();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // autoplay
//     let interval;
//     if (autoplay) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       clearInterval(interval);
//     };
//   }, []);

//   const slideVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//       rotateX: 45,
//     },
//     visible: {
//       scale: 1,
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.645, 0.045, 0.355, 1.0],
//       },
//     },
//     upExit: {
//       opacity: 1,
//       y: "-150%",
//       transition: {
//         duration: 1,
//       },
//     },
//     downExit: {
//       opacity: 1,
//       y: "150%",
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const areImagesLoaded = loadedImages.length > 0;

//   return (
//     <div
//       className={cn(
//         "overflow-hidden h-full w-full relative flex items-center justify-center",
//         className
//       )}
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       {areImagesLoaded && children}
//       {areImagesLoaded && overlay && (
//         <div
//           className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//         />
//       )}
//       {areImagesLoaded && (
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={loadedImages[currentIndex]}
//             initial="initial"
//             animate="visible"
//             exit={direction === "up" ? "upExit" : "downExit"}
//             variants={slideVariants}
//             className="image h-full w-full absolute inset-0 object-cover object-center"
//           />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };

"use client";
import { cn } from "@/app/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-50 hover:bg-black"
      >
        <FaChevronLeft size={24} />
      </button>
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-50 hover:bg-black"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

// "use client";
// import { cn } from "@/app/utils/cn";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export const ImagesSlider = ({
//   slides, // Array of objects with { text: string, image: string }
//   className,
//   overlay = true,
//   overlayClassName,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === slides.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const slideVariants = {
//     initial: { opacity: 0, x: "100%" },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
//   };

//   return (
//     <div
//       className={cn(
//         "relative flex items-center justify-center h-full w-full overflow-hidden",
//         className
//       )}
//     >
//       {overlay && (
//         <div
//           className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//         />
//       )}
//       <AnimatePresence>
//         <motion.div
//           key={currentIndex}
//           className="absolute inset-0 flex items-center justify-center h-full w-full"
//           initial="initial"
//           animate="visible"
//           exit="exit"
//           variants={slideVariants}
//         >
//           {/* Slide Content */}
//           <div className="flex h-full w-full">
//             {/* Text Section */}
//             <div className="w-1/2 flex flex-col justify-center items-start p-8 bg-gray-900 text-white">
//               <h2 className="text-4xl font-bold mb-4 text-black">
//                 {slides[currentIndex].text.title}
//               </h2>
//               <p className="text-lg text-black">
//                 {slides[currentIndex].text.description}
//               </p>
//             </div>
//             {/* Image Section */}
//             <div className="w-1/2 h-full flex-auto">
//               <img
//                 src={slides[currentIndex].image}
//                 alt={slides[currentIndex].text.title}
//                 loading="lazy"
//                 className="h-1/2 w-1/2 m-auto"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Previous Button */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-50 hover:bg-black"
//       >
//         <FaChevronLeft size={24} />
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-50 hover:bg-black"
//       >
//         <FaChevronRight size={24} />
//       </button>
//     </div>
//   );
// };

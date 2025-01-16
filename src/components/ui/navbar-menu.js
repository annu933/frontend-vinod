"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// export const MenuItem = ({ setActive, active, item, children }) => {
//   return (
//     <div onMouseEnter={() => setActive(item)} className="relative flex">
//       <motion.p
//         transition={{ duration: 0.3 }}
//         className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
//       >
//         {item}
//       </motion.p>
//       {/* dropdown menus */}
//       {active !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}
//         >
//           {active === item && (
//             <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
//               <motion.div
//                 transition={transition}
//                 // layoutId ensures smooth animation
//                 layoutId="active"
//                 className="bg-orange dark:bg-black backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
//               >
//                 <motion.div
//                   // layout ensures smooth animation
//                   layout
//                   className="w-max h-full p-4"
//                 >
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };
// parent of navbar

export const MenuItem = ({ setActive, active, item, children }) => {
  const [isMobile, setIsMobile] = React.useState(false); // Detect mobile screen
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false); // For mobile dropdown

  // Detect screen size
  React.useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleItemClick = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown on click for mobile
    } else {
      setActive(item); // Set active item for desktop
    }
  };

  return (
    <div
      onMouseEnter={!isMobile ? () => setActive(item) : undefined}
      onMouseLeave={!isMobile ? () => setActive(null) : undefined}
      onClick={handleItemClick}
      className="relative flex flex-col lg:flex-row"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>

      {/* Dropdown Menus */}
      {((!isMobile && active === item && children) ||
        (isMobile && isDropdownOpen)) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className={`absolute ${
            isMobile
              ? "relative mt-2"
              : "top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
          }`}
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className={`bg-orange dark:bg-black backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl`}
          >
            <motion.div layout className="w-max h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative  border border-transparent dark:bg-black dark:border-white/[0.2] bg-blue shadow-input flex justify-center lg:space-x-4 px-8 py-6 flex justify-between items-center"
    >
      {children}
    </nav>
  );
};
// logo or images on navbar
export const ProductItem = ({ title, description, href, src, alt }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={alt}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-blue dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

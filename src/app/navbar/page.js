// "use client";
// import React, { useState } from "react";
// import {
//   HoveredLink,
//   Menu,
//   MenuItem,
//   ProductItem,
// } from "../../components/ui/navbar-menu";
// import { cn } from "@/app/utils/cn";
// import Link from "next/link";

// export default function Navbar({ className }) {
//   const [active, setActive] = useState(null);
//   return (
//     <div className={cn("", className)}>
//       <Menu setActive={setActive}>
//         <ProductItem href="#" src="/images/logo.png" alt="logo" />
//         <div className="flex gap-20">
//           <Link href={"#"}>
//             <MenuItem
//               setActive={setActive}
//               active={active}
//               item="Home"
//             ></MenuItem>
//           </Link>
//           <Link href={"#"}>
//             <MenuItem
//               setActive={setActive}
//               active={active}
//               item="Booking"
//             ></MenuItem>
//           </Link>
//           <MenuItem setActive={setActive} active={active} item="Our Services">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/services">All Services</HoveredLink>
//               <HoveredLink href="/booking">All Booking</HoveredLink>
//               <HoveredLink href="/blog">All blog</HoveredLink>
//               <HoveredLink href="/services">All Services</HoveredLink>
//             </div>
//           </MenuItem>
//           <Link href={"/contact"}>
//             <MenuItem
//               setActive={setActive}
//               active={active}
//               item="Contact Us"
//             ></MenuItem>
//           </Link>
//         </div>
//         <div>
//           <button className="signup px-4 py-2 rounded-md border border-black hover:border-white bg-orange hover:bg-blue text-black hover:text-white text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200 mr-2">
//             Sign up
//           </button>
//           <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
//             Login
//           </button>
//         </div>
//       </Menu>
//     </div>
//   );
// }

// responsive-14jan2025

"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../../components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        active !== null
      ) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <div className={cn("", className)}>
      <Menu setActive={setActive}>
        {/* Logo Section */}
        <ProductItem href="#" src="/images/logo.png" alt="logo" />

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navbar Items */}
        <div
          className={cn(
            "flex-col lg:flex-row lg:flex gap-8 lg:items-center lg:justify-center lg:static lg:visible",
            {
              "flex absolute top-[100%] left-0 w-full bg-blue text-white shadow-lg p-4 lg:p-0 lg:bg-transparent lg:shadow-none":
                isMobileMenuOpen,
              hidden: !isMobileMenuOpen,
            }
          )}
        >
          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Booking" />
          </Link>
          <div
            ref={dropdownRef}
            onClick={() =>
              setActive(active === "Our Services" ? null : "Our Services")
            }
          >
            <MenuItem setActive={setActive} active={active} item="Our Services">
              {active === "Our Services" && (
                <div className="flex flex-col space-y-4 text-sm text-center">
                  <HoveredLink href="/services">All Services</HoveredLink>
                  <HoveredLink href="/booking">All Booking</HoveredLink>
                  <HoveredLink href="/blog">All Blog</HoveredLink>
                  <HoveredLink href="/services">All Services</HoveredLink>
                </div>
              )}
            </MenuItem>
          </div>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>

          {/* Action Buttons */}
          <div className="flex gap-4 lg:ml-4   sm:block  lg:hidden">
            <button className="signup px-4 py-2 rounded-md border border-black hover:border-white bg-orange hover:bg-blue text-black hover:text-white text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
              Sign up
            </button>
            <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
              Login
            </button>
          </div>
        </div>
        {/* Action Buttons for desktop side */}
        <div className="  lg:ml-4 hidden lg:block">
          <button className=" px-4 py-2 rounded-md border border-black hover:border-white bg-orange hover:bg-blue text-black hover:text-white text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200 mr-3">
            Sign up
          </button>
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
            Login
          </button>
        </div>
      </Menu>
    </div>
  );
}

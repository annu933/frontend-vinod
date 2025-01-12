// "use client";
// import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import React, { useState } from "react";

// const navigation = [
//   { name: "Home", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
//   {
//     name: "Bookings",
//     href: "#",
//     current: false,
//     dropdown: [
//       { name: "Taxi Booking", href: "#taxi-booking" },
//       { name: "Bus Booking", href: "#bus-booking" },
//     ],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [dropdownOpen, setDropdownOpen] = useState({});

//   const toggleDropdown = (name) => {
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const closeDropdowns = () => {
//     setDropdownOpen({});
//   };

//   return (
//     <Disclosure as="nav" className="bg-blue shadow-lg">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-20 items-center justify-between">
//               {/* Logo */}
//               <div className="flex items-center h-20 w-auto">
//                 <img
//                   className="h-10 w-auto"
//                   src="/images/2jan-.png"
//                   alt="Your Company"
//                 />
//               </div>

//               {/* Mobile Menu Button */}
//               <Disclosure.Button className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 <span className="sr-only">Open main menu</span>
//                 {open ? (
//                   <XMarkIcon
//                     className="block h-6 w-6 text-white"
//                     aria-hidden="true"
//                   />
//                 ) : (
//                   <Bars3Icon
//                     className="block h-6 w-6 text-white"
//                     aria-hidden="true"
//                   />
//                 )}
//               </Disclosure.Button>

//               {/* Desktop Menu */}
//               <div className="hidden sm:block">
//                 <div className="flex space-x-4">
//                   {navigation.map((item) => (
//                     <div key={item.name} className="relative flex">
//                       {item.dropdown ? (
//                         <>
//                           <button
//                             onClick={() => toggleDropdown(item.name)}
//                             className={classNames(
//                               item.current
//                                 ? "text-orange"
//                                 : "text-white hover:text-orange",
//                               "rounded-md px-3 py-2 text-sm font-medium"
//                             )}
//                           >
//                             {item.name} <span className="ml-1">&#x25BC;</span>
//                           </button>
//                           {dropdownOpen[item.name] && (
//                             <div className="absolute left-0 mt-10 w-48 bg-white shadow-lg z-10">
//                               {item.dropdown.map((dropdownItem) => (
//                                 <a
//                                   key={dropdownItem.name}
//                                   href={dropdownItem.href}
//                                   className="block px-4 py-2 text-gray hover:bg-gray-200"
//                                   onClick={() => closeDropdowns()}
//                                 >
//                                   {dropdownItem.name}
//                                 </a>
//                               ))}
//                             </div>
//                           )}
//                         </>
//                       ) : (
//                         <a
//                           href={item.href}
//                           className={classNames(
//                             item.current
//                               ? "text-orange"
//                               : "text-white hover:text-orange",
//                             "rounded-md px-3 py-2 text-sm font-medium"
//                           )}
//                         >
//                           {item.name}
//                         </a>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Sign Up/Login Buttons */}
//               <div className="hidden sm:flex items-center space-x-4">
//                 <button className="text-white hover:text-orange bg-orange-500 hover:bg-orange-600 rounded-md px-4 py-2 text-sm font-medium">
//                   Sign Up
//                 </button>
//                 <button className="text-orange hover:text-white border hover:border-orange hover:bg-orange rounded-md px-4 py-2 text-sm font-medium">
//                   Login
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Panel */}
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <div key={item.name} className="relative">
//                   {item.dropdown ? (
//                     <>
//                       <button
//                         onClick={() => toggleDropdown(item.name)}
//                         className="block w-full text-left text-white rounded-md px-3 py-2 text-sm font-medium"
//                       >
//                         {item.name} <span className="ml-1">&#x25BC;</span>
//                       </button>
//                       {dropdownOpen[item.name] && (
//                         <div className="pl-4 bg-white shadow-lg">
//                           {item.dropdown.map((dropdownItem) => (
//                             <a
//                               key={dropdownItem.name}
//                               href={dropdownItem.href}
//                               className="block pl-2 py-2 text-blue hover:bg-gray-700 rounded-md"
//                               onClick={() => closeDropdowns()}
//                             >
//                               {dropdownItem.name}
//                             </a>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <a
//                       href={item.href}
//                       className="block text-white rounded-md px-3 py-2 text-sm font-medium"
//                     >
//                       {item.name}
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="px-4 pb-3">
//               <button className="w-full bg-orange-500 text-white rounded-md px-4 py-2 mb-2 text-sm font-medium">
//                 Sign Up
//               </button>
//               <button className="w-full border border-orange text-orange rounded-md px-4 py-2 text-sm font-medium hover:bg-orange hover:text-white">
//                 Login
//               </button>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-0 inset-x-0 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">All Services</HoveredLink>
            <HoveredLink href="/booking">All Booking</HoveredLink>
            <HoveredLink href="/blog">All blog</HoveredLink>
            <HoveredLink href="/services">All Services</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

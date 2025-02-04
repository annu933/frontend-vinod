"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

   const socialLinks = [
      { href: "https://www.facebook.com", icon: RiFacebookFill },
      { href: "https://www.twitter.com", icon: FaXTwitter },
      { href: "https://www.instagram.com", icon: FaInstagram },
      { href: "https://www.youtube.com", icon: AiFillYoutube },
    ];

    const handleMenuClick = () => {
      setIsOpen(false);
    };

  return (
    <nav className="bg-blue border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 right-0 left-0 z-50">
      <div className="relative flex flex-wrap items-center md:justify-start justify-between ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-[100px] md:w-[20%]">
          <img src="/images/logo.png" className="h-10 md:h-20" alt="Logo" />
        </a>
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            // Close (X) Icon
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-white outline-none focus-none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>)}
        </button>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-[80%]`}
          id="navbar-dropdown"
        >
          <div className="flex flex-col flex-start justify-start items-start">
            {/* top contact details */}
            <div className="flex justify-between bg-white px-5 py-3 md:flex hidden w-full">
            <div className="flex ">
              <a href="mailto:jaimaatravels008@gmail.com">
                <h5 className="text-gray lg:mr-2">
                  {" "}
                  <MdEmail
                    color="orange"
                    className="inline-block lg:mr-2"
                  />{" "}
                  jaimaatravels008@gmail.com
                </h5>
              </a>
              <h5 className="text-gray lg:mr-2">
                <FaPhone color="orange" className="inline-block lg:mr-2" />
                09634875631,9927239680,7417007921
              </h5>
              <a
                href="https://wa.me/096348 75631"
                target="_blank"
                className="text-gray"
              >
                <RiWhatsappFill
                  color="green"
                  className="inline-block lg:mr-2"
                />
                096348 75631
              </a>
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <a key={index} href={href} target="_blank" className="text-white">
                  <Icon color="orange" className="inline-block" />
                </a>
              ))}
            </div>
            </div>

            <ul
            className="flex flex-col font-medium py-4 xs:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full md:justify-between md:items-center"
            >
            <div className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:items-center">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:px-5 text-gray md:text-black md:bg-orange rounded-sm xs:bg-transparent md:text-blue-700 md:px-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                  onClick={handleMenuClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleMenuClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 text-gray rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleMenuClick}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleMenuClick}
                >
                  Contact
                </a>
              </li>
              </div>
              <li className="md:ml-auto">
                <a
                  href="#contact"
                  className="block py-2 px-3 md:px-5 text-gray md:text-black md:bg-orange rounded-sm xs:bg-transparent md:text-blue-700 md:px-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                  onClick={handleMenuClick}
                >
                  Book Your Ticket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;

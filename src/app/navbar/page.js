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
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

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
      <Menu setActive={setActive} className="gap-20 px-4">
        {/* Logo Section */}
        <div className="lg:p-7">
          <ProductItem href="#" src="/images/logo.png" alt="logo" />
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="flex flex-col xl:w-full hidden lg:block xl:block">
          <div className="flex justify-between bg-white px-5 py-3 ">
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
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-white"
              >
                <RiFacebookFill color="orange" className="inline-block" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-white"
              >
                <FaXTwitter color="orange" className="inline-block" />
              </a>
              <a
                className="text-white"
                href="https://www.instagram.com/jai_maa_travel_uk_04/"
                target="_blank"
              >
                <FaInstagram color="orange" className="inline-block" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="text-white"
              >
                <AiFillYoutube color="orange" className="inline-block" />
              </a>
            </div>
          </div>

          <div className="flex justify-between px-5 py-4">
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
              <Link href={"#about"}>
                <MenuItem setActive={setActive} active={active} item="About" />
              </Link>

              {/* <div
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
          </div> */}
              <Link href={"#services"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Services"
                />
              </Link>
              <Link href={"#booking"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Booking"
                />
              </Link>
              <Link href={"#contact"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Contact Us"
                />
              </Link>

              {/* Action Buttons */}
              <div className="flex gap-4 lg:ml-4   sm:block  lg:hidden">
                <a href="#contact">
                  <button className="signup px-4 py-2 rounded-md border border-black hover:border-white bg-orange hover:bg-blue text-black hover:text-white text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
                    Book You Ticket
                  </button>
                </a>
                {/* <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
                  Login
                </button> */}
              </div>
            </div>
            {/* Action Buttons for desktop side */}
            <div className="  lg:ml-4 hidden lg:block">
              <a href="#contact">
                <button className=" px-4 py-2 rounded-md border border-black hover:border-white bg-orange hover:bg-blue text-black hover:text-white text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200 mr-3">
                  Book You Ticket
                </button>
              </a>
              {/* <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200">
                Login
              </button> */}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}

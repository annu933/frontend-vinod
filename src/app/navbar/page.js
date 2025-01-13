"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import Image from "next/image";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("nav-parent ", className)}>
      <Menu setActive={setActive}>
        <div>
          <img
            src="/images/new2.jpeg"
            alt="Girl in a jacket"
            width="70"
            height="50"
          />
        </div>
        <div className="gap-20">
          <Link href={"#"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"#"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Booking"
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
        </div>
        <div>
          <button className="signup px-4 py-2 rounded-md border border-black bg-red-500 text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 mr-2">
            Sign up
          </button>
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Login
          </button>
        </div>
      </Menu>
    </div>
  );
}

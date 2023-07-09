import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 90) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          navColor
            ? "fixed top-0 z-50 flex h-20 w-full items-center justify-around bg-[var(--color5)] text-[var(--text-color)] transition duration-300  ease-in-out"
            : "fixed top-0 z-50 flex h-20 w-full items-center justify-around bg-white/40 text-[var(--color5)] transition duration-300 ease-in-out"
        }
      >
        <div className="text hidden md:flex md:flex-row  md:gap-12">
          <Link className="font-semibold hover:text-[--color3]" href="#home">
            Home
          </Link>
          <Link className="font-semibold hover:text-[--color3]" href="#about">
            About
          </Link>
          <Link
            className="font-semibold hover:text-[--color3]"
            href="#services"
          >
            Services
          </Link>
          <Link className="font-semibold hover:text-[--color3]" href="#team">
            Our Team
          </Link>
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <img
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="h-11 cursor-pointer md:hidden"
          src="/assets/menu.png"
        ></img>
        <img className="h-11 hover:scale-125" src="/assets/zymez-1.png"></img>
        <Link
          href="#contact"
          className={
            navColor
              ? "text-semibold my-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-[var(--text-color)] transition duration-300 ease-in-out hover:scale-110 hover:bg-[var(--color3)]"
              : "text-semibold my-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-[var(--color5)] transition duration-300 ease-in-out hover:scale-110 hover:bg-[var(--color3)]"
          }
        >
          Book Now
        </Link>
      </nav>
      {isNavExpanded == true && (
        <div
          className={
            navColor
              ? "fixed top-0 top-20  z-50 flex w-full flex-col items-center gap-4 bg-[var(--color5)] py-4 text-[var(--text-color)] transition duration-300 ease-in-out  md:hidden"
              : "fixed top-0 top-20  z-50 flex w-full flex-col items-center gap-4 bg-white/30 py-4 text-[var(--color4)] transition duration-300 ease-in-out  md:hidden"
          }
        >
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#about"
          >
            About
          </Link>
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#team"
          >
            Our Team
          </Link>
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

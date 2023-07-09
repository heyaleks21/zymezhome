import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import navImg from "/public/assets/menu.png";
import brandImg from "/public/assets/zymez-1.png";

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
            ? "fixed top-0 z-50 flex h-20 w-full items-center justify-around bg-[var(--color5)] text-[var(--text-color)] transition duration-300 ease-in-out"
            : "fixed top-0 z-50 flex h-20 w-full items-center justify-around bg-white/40 text-[var(--color5)] transition duration-300 ease-in-out"
        }
      >
        <div className="text hidden gap-12 md:flex md:flex-row">
          <Link className="font-semibold hover:text-[--color3]" href="#home">
            Home
          </Link>
          <Link className="font-semibold hover:text-[--color3]" href="#about">
            About
          </Link>
          <Link className="font-semibold hover:text-[--color3]" href="#team">
            Our Team
          </Link>
          <Link
            className="font-semibold hover:text-[--color3]"
            href="#services"
          >
            Services
          </Link>

          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#portfolio"
          >
            Portfolio
          </Link>
        </div>
        <Image
          height={42}
          alt=""
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="cursor-pointer md:hidden"
          src={navImg}
        ></Image>
        <Image
          width={100}
          alt=""
          className="hover:scale-125"
          src={brandImg}
        ></Image>
        <Link
          href="#contact"
          className={
            navColor
              ? "text-semibold my-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-[var(--text-color)] transition duration-300 ease-in-out hover:scale-110 hover:bg-[var(--color3)]"
              : "text-semibold my-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-[var(--color5)] transition duration-300 ease-in-out hover:scale-110 hover:bg-[var(--color3)]"
          }
        >
          Contact Us
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
            href="#team"
          >
            Our Team
          </Link>
          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#services"
          >
            Services
          </Link>

          <Link
            className="font-semibold hover:text-[var(--color3)]"
            href="#portfolio"
          >
            Portfolio
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

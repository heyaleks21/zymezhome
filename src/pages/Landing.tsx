import React from "react";
import Link from "next/link";
const Landing = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 items-center justify-center gap-12 sm:scale-100">
        <div className="flex w-96 flex-col items-center justify-start gap-4">
          <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Welcome to
            <span className="text-[var(--color4)]"> Zymez</span>
          </h1>
          <div className="pt-2 text-center text-2xl text-[var(--text-color)]">
            Driving Efficiency, Maximizing Impact
          </div>
          <div className="text-center text-[var(--text-color)]">
            Elevate your business today: work with Australia&apos;s Leading
            Provider of Exceptional Software Development and Support Services.
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href="#about"
              className="text-semibold my-1 rounded-full bg-[var(--color4)] px-4 py-2 font-semibold text-white no-underline transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--color3)]"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

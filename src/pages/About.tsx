import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-wrap items-center justify-center gap-12 lg:scale-100 xl:gap-56">
        <div className="flex w-96 flex-col items-center justify-start gap-4">
          <h1 className="flex items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            About Us
          </h1>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[var(--color4) flex flex text-center text-2xl font-semibold">
              Driving efficiency, maximizing impact
            </p>
            <p className="mb-1 mt-2 text-center text-sm text-[var(--text-color)] sm:text-base">
              Based in South Australia, Zymez specializes in delivering
              exceptional software development services customized to your
              specific business requirements. Our team delivers state-of-the-art
              solutions that fuel growth and enhance operational efficiency.
            </p>
            <p className="mb-2 text-center text-sm text-[var(--text-color)] sm:text-base">
              At Zymez, we specialize in developing robust, scalable, and
              user-friendly software solutions that empower businesses to thrive
              in the digital realm. Whether you require a web application,
              mobile app, or custom software, our experienced team possesses the
              expertise to transform your vision into a tangible reality.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href="#team"
                className="text-semibold my-1 rounded-full bg-[var(--color4)]  px-4 py-2 font-semibold text-white no-underline transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--color3)]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-96 flex-col items-center justify-start gap-2">
          <div className="mb-1 mt-4 text-base font-medium text-[var(--text-color)]">
            Web design
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="w-12/12 h-2.5 rounded-full bg-black/60"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            App development
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-11/12 rounded-full bg-black/60"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Managed hosting
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-10/12 rounded-full bg-black/50"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Database solutions
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-9/12 rounded-full bg-black/50"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Marketing
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-8/12 rounded-full bg-black/40"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Analytics
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-7/12 rounded-full bg-black/40"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            AI integration
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-7/12 rounded-full bg-black/30"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Support services
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-7/12 rounded-full bg-black/30"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

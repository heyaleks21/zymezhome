import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowImg from "/public/assets/right-arrow.png";

const About = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 lg:scale-100 lg:flex-row lg:flex-row ">
        <div className="flex w-10/12 flex-col items-center justify-start gap-4 lg:w-5/12">
          <h1 className="flex items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Our directive
          </h1>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[var(--color4) flex flex text-center text-2xl font-semibold">
              Identify. Solve. Excecute.
            </p>
            <p className="mt-2 text-center text-sm text-[var(--text-color)] sm:text-base md:flex md:w-2/3">
              Based in South Australia, Zymez specializes in delivering
              exceptional software development services customized to your
              specific business requirements. Our team delivers state-of-the-art
              solutions that fuel growth and enhance operational efficiency.
            </p>
            <p className="mb-2 text-center text-sm text-[var(--text-color)] sm:text-base md:flex md:w-2/3">
              At Zymez, we specialize in developing robust, scalable, and
              user-friendly software solutions that empower businesses to thrive
              in the digital realm. Whether you require a web application,
              mobile app, or custom software, our experienced team possesses the
              expertise to transform your vision into a tangible reality.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href="#services"
                className="text-semibold my-1 rounded-full bg-[var(--color4)]  px-4 py-2 font-semibold text-white no-underline transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[var(--color3)]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-10/12 flex-col items-center justify-start gap-4 lg:w-4/12">
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="hover:text-none flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">High-quality code</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-semibold lg:text-base">
                  Professionally designed websites and applications that
                  guarantee streamlined and resilient performance
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/60 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Full-stack teams</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-semibold lg:text-base ">
                  Highly skilled experts proficient in both frontend and backend
                  technologies, delivering robust solutions
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/50 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Agile approach</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg  [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-semibold lg:text-base ">
                  Flexible approach for smooth development, encouraging teamwork
                  and quick iterations
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/30 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Flexibility</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-semibold lg:text-base ">
                  Tailored designs and flexible workflows that can be customized
                  to perfectly suit your specific needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

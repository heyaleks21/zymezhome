import React from "react";
import Image from "next/image";
import arrowImg from "/public/assets/right-arrow.png";

const Services = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 xl:scale-75">
        <div className="flex w-10/12 flex-col items-center justify-start gap-4">
          <h1 className="flex items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Services
          </h1>
          <p className="text-[var(--color4) flex flex pb-4 text-center text-2xl font-semibold">
            Transforming your digital landscape
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="hover:text-none flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/90 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Web design</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-semibold lg:text-base lg:font-semibold">
                  Professionally designed websites and applications that
                  guarantee streamlined and resilient performance
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/80 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">App development</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Highly skilled experts proficient in both frontend and backend
                  technologies, delivering robust solutions
                </p>
              </div>
            </div>

            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Managed hosting</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg  [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Flexible approach for smooth development, encouraging teamwork
                  and quick iterations
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/60 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Database solutions</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Tailored designs and flexible workflows that can be customized
                  to perfectly suit your specific needs
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/50 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Marketing</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Tailored designs and flexible workflows that can be customized
                  to perfectly suit your specific needs
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/40 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Analytics</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Tailored designs and flexible workflows that can be customized
                  to perfectly suit your specific needs
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/30 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">AI integration</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Tailored designs and flexible workflows that can be customized
                  to perfectly suit your specific needs
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/20 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-48 xl:w-48">
              <p className="font-semibold">Support services</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
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

export default Services;

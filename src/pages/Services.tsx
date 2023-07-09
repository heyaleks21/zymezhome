import React from "react";
import Image from "next/image";
import arrowImg from "/public/assets/right-arrow.png";
import Link from "next/link";
import topImg from "/public/assets/upload.png";

const Services = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 xl:scale-75">
        <div className="flex w-10/12 flex-col items-center justify-start gap-5">
          <h1 className="flex items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Services
          </h1>
          <p className="text-[var(--color4) flex flex pb-4 text-center text-2xl font-semibold">
            Transforming your digital landscape
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="hover:text-none flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/90 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">Web design</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-semibold lg:text-base lg:font-semibold">
                  Customized, responsive and mobile-friendly web design for
                  seamless user experience across devices
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/80 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">App development</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Native mobile app development for iOS and Android platforms,
                  tailored to your business needs
                </p>
              </div>
            </div>

            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">Managed hosting</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg  [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Scalable hosting infrastructure that adapts to your business
                  growth and handles increased traffic
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/60 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">Database solutions</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Data migration and integration services to seamlessly transfer
                  data between systems
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/50 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">Marketing</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Comprehensive digital marketing strategies to increase brand
                  awareness and drive targeted traffic
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/40 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">Analytics</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  Data analytics services to uncover valuable insights from your
                  business data and improve decision-making
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/30 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">AI integration</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  AI-driven automation solutions to streamline business
                  processes and reduce manual workloads
                </p>
              </div>
            </div>
            <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/20 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-56 xl:w-56">
              <p className="font-semibold">Support services</p>
              <Image alt="" className="" src={arrowImg}></Image>
              <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                <p className="text-xs font-normal lg:text-base lg:font-semibold">
                  System monitoring and performance optimization to proactively
                  identify and resolve issues
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="#contact">
              <Image alt="" src={topImg} className="rotate-180"></Image>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

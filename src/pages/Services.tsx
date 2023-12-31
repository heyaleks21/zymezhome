import React from "react";
import Image from "next/image";
import Link from "next/link";
import topImg from "/public/assets/upload.png";

import webImg from "/public/assets/web.png";
import appImg from "/public/assets/app.png";
import hostImg from "/public/assets/hosting.png";
import dataImg from "/public/assets/database.png";
import marketImg from "/public/assets/marketing.png";
import analImg from "/public/assets/analytics.png";
import monitorImg from "/public/assets/monitoring.png";
import aiImg from "/public/assets/ai.png";

const Services = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-8 xl:scale-100">
        <div className="flex flex-col items-center justify-start gap-4">
          <h1 className="flex items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Services
          </h1>
          <p className="text-[var(--color4) flex flex pb-4 text-center text-2xl font-semibold">
            Transforming your digital landscape
          </p>
          <div className="flex flex-row items-center justify-start gap-4 sm:flex-col">
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              <div className="hover:text-none flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">Web design</p>
                <Image alt="" className="" src={webImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-semibold lg:text-base lg:font-semibold">
                    Customized, responsive and mobile-friendly web design for
                    seamless user experience across devices
                  </p>
                </div>
              </div>
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">App development</p>
                <Image alt="" className="" src={appImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    Native mobile app development for iOS and Android platforms,
                    tailored to your business needs
                  </p>
                </div>
              </div>

              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">Managed hosting</p>
                <Image alt="" className="" src={hostImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg  [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    Scalable hosting infrastructure that adapts to your business
                    growth and handles increased traffic
                  </p>
                </div>
              </div>
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">Data solutions</p>
                <Image alt="" className="" src={dataImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    Data migration and integration services to seamlessly
                    transfer data between systems
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">Marketing</p>
                <Image alt="" className="" src={marketImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    Comprehensive digital marketing strategies to increase brand
                    awareness and drive targeted traffic
                  </p>
                </div>
              </div>
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">Analytics</p>
                <Image alt="" className="" src={analImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    Data analytics services to uncover valuable insights from
                    your business data and improve decision-making
                  </p>
                </div>
              </div>
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">AI integration</p>
                <Image alt="" className="" src={aiImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    AI-driven automation solutions to streamline business
                    processes and reduce manual workloads
                  </p>
                </div>
              </div>
              <div className="flex h-36 w-36 flex-col items-center justify-center gap-3 rounded bg-white/70 shadow-lg transition-all duration-500  [transform-style:preserve-3d]  hover:[transform:rotateX(180deg)] lg:h-44 lg:w-44 xl:h-52 xl:w-52">
                <p className="font-semibold">Support services</p>
                <Image alt="" className="" src={monitorImg}></Image>
                <div className="absolute inset-0 flex h-full w-full items-center items-center justify-center justify-center rounded bg-[var(--color5)] p-4 text-center text-[var(--color3)] shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  <p className="text-xs font-normal lg:text-base lg:font-semibold">
                    System monitoring and performance optimization to
                    proactively identify and resolve issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link href="#portfolio">
            <Image alt="" src={topImg} className="rotate-180"></Image>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;

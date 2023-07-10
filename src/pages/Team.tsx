import React from "react";
import Image from "next/image";
import aleks from "/public/assets/aleks.png";
import cal from "/public/assets/calum.png";
import anth from "/public/assets/anth.webp";
import Link from "next/link";
import topImg from "/public/assets/upload.png";

const Team = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-8 xl:scale-100">
        <div className="flex w-96 flex-col items-center justify-center gap-2">
          <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Meet Our
            <span className="text-[var(--color4)]"> Team</span>
          </h1>
          <div className="pb-2 pt-2 text-center text-2xl text-[var(--text-color)]">
            Over a decade of experience
          </div>
          <div className="text-center text-[var(--text-color)]">
            Strategically driving conversions, engaging customers, and
            delivering exceptional business results, setting you apart from the
            competition.
          </div>
          <div className="flex flex-col items-center justify-center"></div>
        </div>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-12">
          <div className="group h-40 w-40 [perspective:1000px] lg:h-48 lg:w-48 xl:h-52 xl:w-52">
            <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image
                  src={anth}
                  className="h-full w-full rounded-full bg-[url('/assets/anth.webp')] shadow-xl shadow-black/40"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-semibold">Anthony Dinino</h1>
                  <div className="text-md">CEO</div>
                  <div className="hidden text-sm xl:flex">fuck fat bitches</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-40 w-40 [perspective:1000px] lg:h-48 lg:w-48 xl:h-52 xl:w-52">
            <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image
                  src={cal}
                  className="h-full w-full rounded-full bg-[url('/assets/calum.png')] shadow-xl shadow-black/40"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-semibold">Calum Treloar</h1>
                  <div className="text-md">CEO</div>
                  <div className="hidden text-sm xl:flex">
                    who are these people
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-40 w-40 [perspective:1000px] lg:h-48 lg:w-48 xl:h-52 xl:w-52">
            <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image
                  src={aleks}
                  className="h-full w-full rounded-full bg-[url('/assets/aleks.png')] shadow-xl shadow-black/40"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-semibold">Aleks Manevski</h1>
                  <div className="text-md">CEO</div>
                  <div className="hidden text-sm xl:flex">
                    no no shutup weed healthy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-20">
          <Link className="" href="#services">
            <Image alt="" src={topImg} className="rotate-180"></Image>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Team;

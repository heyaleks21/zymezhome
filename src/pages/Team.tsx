import React from "react";

const Team = () => {
  return (
    <>
      <div className="min-w-screen 3xl:scale-100 flex min-h-screen scale-75 flex-col items-center justify-center gap-12">
        <div className="flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12">
          <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Meet our
            <span className="text-[var(--color4)]"> team</span>
          </h1>
          <div className="pt-2 text-center text-2xl text-[var(--text-color)]">
            For over a decade, we&apos;ve collaborated to build innovative tools
            and solutions, demonstrating a deep appreciation for software
            applications.
          </div>

          <div className="flex flex-col items-center justify-center"></div>
        </div>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-12">
          <div className="group h-40 w-40 [perspective:1000px] lg:h-48 lg:w-48 xl:h-60 xl:w-60">
            <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-full bg-[url('/assets/anth.webp')] bg-cover object-cover shadow-xl shadow-black/40"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Anthony Dinino</h1>
                  <div className="text-lg">CEO & President</div>
                  <div className="hidden xl:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-40 w-40 [perspective:1000px] lg:h-48 lg:w-48 xl:h-60 xl:w-60">
            <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-full bg-[url('/assets/calum.png')] bg-cover object-cover shadow-xl shadow-black/40"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Calum Treloar</h1>
                  <div className="text-lg">CEO & President</div>
                  <div className="hidden xl:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group h-40 w-40 [perspective:1000px] lg:h-48 lg:w-48 xl:h-60 xl:w-60">
            <div className="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-full bg-[url('/assets/aleks.png')] bg-cover object-cover shadow-xl shadow-black/40"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Aleks Manevski</h1>
                  <div className="text-lg">CEO & President</div>
                  <div className="hidden xl:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

import React from "react";

const Services = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 xl:scale-75">
        <div className="flex w-96 flex-col items-center justify-start gap-2">
          <h1 className="flex items-center justify-center pb-4 text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Services
          </h1>
          <p className="text-[var(--color4) flex flex pb-2 text-center text-2xl font-semibold">
            Transforming your digital landscape
          </p>
          <div className="mb-1 mt-4 text-base font-medium text-[var(--text-color)]">
            Web design
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="w-12/12 h-2.5 rounded-full bg-black/60"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Software development
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-11/12 rounded-full bg-black/60"></div>
          </div>
          <div className="mb-1 text-base font-medium text-[var(--text-color)]">
            Hosting
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
            AI & machine learning
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
            Marketing
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-[#ff8000]">
            <div className="h-2.5 w-6/12 rounded-full bg-black/30"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

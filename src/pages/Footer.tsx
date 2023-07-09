import React from "react";

const Footer = () => {
  return (
    <>
      <div className="z-40 flex h-16 w-full items-center justify-center bg-[var(--color4)] md:flex-row">
        <div className="scale-75 text-center text-[var(--text-color)] md:scale-100">
          © 2023 Designed & Developed By{" "}
          <span className="text-[var(--color3)]">Zymez</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

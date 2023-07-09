import React, { useState, useEffect } from "react";
import Link from "next/link";

const TopButton = () => {
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 90) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);
  return (
    <>
      <Link href="/">
        <img
          src="/assets/upload.png"
          className={
            navColor
              ? "fixed bottom-0 right-0 z-40 mb-4 mr-6 h-8 w-8"
              : "fixed bottom-0 z-40 hidden h-8 w-8"
          }
        ></img>
      </Link>
    </>
  );
};

export default TopButton;

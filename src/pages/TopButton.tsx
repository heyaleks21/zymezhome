import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import topImg from "/public/assets/upload.png";

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
        <Image
          alt=""
          src={topImg}
          className={
            navColor
              ? "fixed bottom-0 right-0 z-40 mb-4 mr-6 h-8 w-8 animate-bounce"
              : "fixed bottom-0 z-40 hidden h-8 w-8"
          }
        ></Image>
      </Link>
    </>
  );
};

export default TopButton;

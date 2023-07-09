import { useState } from "react";
import Image from "next/image";
import test from "/public/assets/test.jpeg";
import test1 from "/public/assets/test1.jpeg";
import test2 from "/public/assets/test2.jpeg";
import Link from "next/link";
import topImg from "/public/assets/upload.png";

const Carousel = () => {
  const images = [test, test1, test2];
  const length = 3;

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <>
      <div className="min-w-screen flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-5">
          <h1 className="flex items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[5rem] lg:font-extrabold">
            Portfolio
          </h1>
          <p className="text-[var(--color4) flex flex pb-8 text-center text-2xl font-semibold">
            Check out our recent work
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-8">
          <button className="" onClick={handlePrev}>
            <Image className="-rotate-90" src={topImg} alt="" />
          </button>
          <Image
            className="w-60 rounded bg-cover object-cover lg:w-96"
            alt=""
            src={test2}
          />
          <div>
            <button className="btn" onClick={handleNext}>
              <Image className="rotate-90" src={topImg} alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#contact">
            <Image alt="" src={topImg} className="mt-8 rotate-180"></Image>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carousel;

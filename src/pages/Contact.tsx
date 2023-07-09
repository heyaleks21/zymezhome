import React from "react";
import Image from "next/image";
import { useForm } from "@formspree/react";
import emailImg from "/public/assets/email.png";
import phoneImg from "/public/assets/phone-call.png";
import placeImg from "/public/assets/placeholder.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjadw");
  if (state.succeeded) {
    return (
      <>
        <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 lg:flex-row lg:flex-row xl:scale-100">
          <div className="pl:0 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pl-52">
            <div className="flex flex-col items-center justify-center gap-4 rounded rounded bg-[var(--color5)] px-9 pt-6">
              <div className="">
                <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                  Speak with
                </h1>
                <h1 className="flex-col items-center justify-center pb-3 text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                  an
                  <span className="text-[var(--color3)]"> expert</span>
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                  <Image alt="" className="w-6" src={emailImg}></Image>
                  Email
                </p>
                <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                  contact@zymez.com
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                  <Image alt="" className="w-6" src={phoneImg}></Image>Phone
                </p>
                <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                  +61 400 970 657
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                  <Image alt="" className="w-6" src={placeImg}></Image>Home
                </p>
                <p className="text-1xl pb-9 pt-2 text-center text-[var(--text-color)]">
                  Adelaide, South Australia
                </p>
              </div>
            </div>
          </div>
          <div className="pr:02 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pr-52">
            <form className="flex w-96 flex-col items-center justify-center gap-3 rounded bg-[var(--color5)] px-5 pb-4 pt-5">
              <h1 className="flex-col items-center justify-center pb-3 text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                What happens next?
              </h1>
              <p className="text-md flex flex pb-1 text-center font-semibold text-[var(--text-color)]">
                1. A member of our team reaches out within a few hours to
                organise a FREE consultation.
              </p>
              <p className="text-md flex flex pb-1 text-center font-semibold text-[var(--text-color)]">
                2. Meanwhile, we sign an NDA to ensure the privacy and
                protection of your idea.
              </p>
              <p className="text-md flex flex pb-1 text-center font-semibold text-[var(--text-color)]">
                3. We will conduct a FREE consultation to understand your
                business requirements and will answer any questions you may
                have.
              </p>
              <p className="text-md flex flex pb-6 text-center font-semibold text-[var(--text-color)]">
                4. Our expert strategist presents project estimates and
                approximate timelines.
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 lg:scale-100 lg:flex-row lg:flex-row">
        <div className="pl:0 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pl-52">
          <div className="flex flex-col items-center justify-center gap-4 rounded rounded bg-[var(--color5)] px-9 pt-6">
            <div className="">
              <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                Speak with
              </h1>
              <h1 className="flex-col items-center justify-center pb-3 text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                an
                <span className="text-[var(--color3)]"> expert</span>
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                <Image alt="" className="w-6" src={emailImg}></Image>
                Email
              </p>
              <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                contact@zymez.com
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                <Image alt="" className="w-6" src={phoneImg}></Image>Phone
              </p>
              <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                +61 400 970 657
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                <Image alt="" className="w-6" src={placeImg}></Image>Home
              </p>
              <p className="text-1xl pb-9 pt-2 text-center text-[var(--text-color)]">
                Adelaide, South Australia
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pr-52">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-3 rounded bg-[var(--color5)] px-5 pt-3"
          >
            <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
              Let&apos;s <span className="text-[var(--color3)]">chat</span>
            </h1>
            <p className="textmd flex flex pb-1 text-center font-semibold text-[var(--text-color)]">
              24x7 support, we&apos;re here to help
            </p>

            <input
              className="w-full rounded bg-white/40 px-1 text-[var(--text-color)] placeholder-white/50"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            ></input>
            <input
              className="w-full rounded bg-white/40 px-1 text-[var(--text-color)] placeholder-white/50"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
            ></input>
            <input
              className="w-full rounded bg-white/40 px-1 text-[var(--text-color)] placeholder-white/50"
              type="number"
              placeholder="Phone"
              name="phone"
              id="phone"
            ></input>
            <input
              className="w-full rounded bg-white/40 px-1 text-[var(--text-color)] placeholder-white/50"
              type="text"
              placeholder="Website"
              name="website"
              id="website"
            ></input>
            <input
              className="w-full rounded bg-white/40 px-1 text-[var(--text-color)] placeholder-white/50"
              type="text"
              placeholder="Organisation"
              name="org"
              id="org"
            ></input>
            <textarea
              className="w-full rounded bg-white/40 px-1 text-[var(--text-color)] placeholder-white/50"
              placeholder="Message..."
              name="message"
              id="message"
              required
              rows={5}
            />

            <button
              disabled={state.submitting}
              type="submit"
              className="rounded-full bg-white/40 px-2.5 py-0.5 font-semibold text-[var(--text-color)] transition duration-300 ease-in-out hover:scale-110 hover:bg-[var(--color3)]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

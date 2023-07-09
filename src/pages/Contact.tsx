import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbjadw");
  if (state.succeeded) {
    return (
      <>
        <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 lg:flex-row lg:flex-row xl:scale-100">
          <div className="pl:0 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pl-52">
            <div className="flex flex-col items-center justify-center gap-4 rounded rounded bg-black/20 px-9 pt-7">
              <div className="">
                <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                  Speak with
                </h1>
                <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                  an
                  <span className="text-[var(--color4)]"> expert</span>
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                  <img className="w-6" src="/assets/email.png"></img>
                  Email
                </p>
                <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                  contact@zymez.com
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                  <img className="w-6" src="/assets/phone-call.png"></img>Phone
                </p>
                <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                  +61 400 970 657
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                  <img className="w-6" src="/assets/placeholder.png"></img>Home
                </p>
                <p className="text-1xl pb-8 pt-2 text-center text-[var(--text-color)]">
                  Adelaide, South Australia
                </p>
              </div>
            </div>
          </div>
          <div className="pr:02 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pr-52">
            <form className="flex flex-col items-center justify-center gap-3 rounded bg-black/30 px-5 pt-3">
              <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                What happens next?
              </h1>
              <p className="text-[var(--color4) text-md flex flex pb-1 text-center font-semibold">
                1. A member of our team reaches out within a few hours to
                organise a FREE consultation.
              </p>
              <p className="text-[var(--color4) text-md flex flex pb-1 text-center font-semibold">
                2. Meanwhile, we sign an NDA to ensure the privacy and
                protection of your idea.
              </p>
              <p className="text-[var(--color4) text-md flex flex pb-1 text-center font-semibold">
                3. We will conduct a FREE consultation to understand your
                business requirements and will answer any questions you may
                have.
              </p>
              <p className="text-[var(--color4) text-md flex flex pb-4 text-center font-semibold">
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
      <div className="min-w-screen flex min-h-screen scale-75 flex-col items-center justify-center gap-12 lg:flex-row lg:flex-row xl:scale-100">
        <div className="pl:0 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pl-52">
          <div className="flex flex-col items-center justify-center gap-4 rounded rounded bg-black/30 px-9 pt-7">
            <div className="">
              <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                Speak with
              </h1>
              <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
                an
                <span className="text-[var(--color4)]"> expert</span>
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                <img className="w-6" src="/assets/email.png"></img>
                Email
              </p>
              <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                contact@zymez.com
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                <img className="w-6" src="/assets/phone-call.png"></img>Phone
              </p>
              <p className="text-1xl pt-2 text-center text-[var(--text-color)]">
                +61 400 970 657
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl flex flex-row items-center gap-1 pt-2 text-center font-semibold text-[var(--text-color)]">
                <img className="w-6" src="/assets/placeholder.png"></img>Home
              </p>
              <p className="text-1xl pb-8 pt-2 text-center text-[var(--text-color)]">
                Adelaide, South Australia
              </p>
            </div>
          </div>
        </div>
        <div className="pr:02 flex w-10/12 flex-col items-center justify-center gap-4 lg:w-4/12 2xl:pr-52">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-3 rounded bg-black/30 px-5 pt-3"
          >
            <h1 className="flex-col items-center justify-center text-center text-5xl tracking-tight text-white lg:text-[2rem] lg:font-extrabold">
              Let&apos;s chat
            </h1>
            <p className="text-[var(--color4) text-md flex flex pb-1 text-center font-semibold">
              24x7 support, we&apos;re here to help
            </p>

            <input
              className="w-full rounded bg-white/30 px-1 text-[var(--color5)] placeholder-black/40"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
              errors={state.errors}
            ></input>
            <input
              className="w-full rounded bg-white/30 px-1 text-[var(--color5)] placeholder-black/40"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              errors={state.errors}
            ></input>
            <input
              className="w-full rounded bg-white/30 px-1 text-[var(--color5)] placeholder-black/40"
              type="number"
              placeholder="Phone"
              name="phone"
              id="phone"
              errors={state.errors}
            ></input>
            <input
              className="w-full rounded bg-white/30 px-1 text-[var(--color5)] placeholder-black/40"
              type="text"
              placeholder="Website"
              name="website"
              id="website"
              errors={state.errors}
            ></input>
            <input
              className="w-full rounded bg-white/30 px-1 text-[var(--color5)] placeholder-black/40"
              type="text"
              placeholder="Organisation"
              name="org"
              id="org"
              errors={state.errors}
            ></input>
            <textarea
              className="w-full rounded bg-white/30 px-1 text-[var(--color5)] placeholder-black/40"
              placeholder="Message..."
              name="message"
              id="message"
              required
              errors={state.errors}
              rows={4}
            />

            <button
              disabled={state.submitting}
              type="submit"
              className="rounded-full bg-white/30 px-2.5 py-0.5 font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-[var(--color3)]"
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

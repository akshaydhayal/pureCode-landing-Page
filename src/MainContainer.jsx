import React from "react";
import { SiMui } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import Sidebar from "./Sidebar";
import CollapsedSidebar from "./CollapsedSideBar";
import { TypeAnimation } from "react-type-animation";
import Typed from "typed.js";
import { IoSend } from "react-icons/io5";

export default function MainContainer() {
  // var typed4 = new Typed("#typed4", {
  //   strings: ["Some strings without", "Some HTML", "Chars"],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   attr: "placeholder",
  //   bindInputFocusEvents: true,
  //   loop: true,
  // });

  const el = React.useRef(null);
  const el2 = React.useRef(null);

  // placeholder =
  // "Create a profile card that shows a person's name, username, and a picture
  //  on the left side, with contact buttons for phone and email on the rig";

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       `Construct a minimalist website header with a navigation bar.It should start with a left-aligned typographic logo reading 'Brand',followed by a navigation menu with links including 'Landing', 'Company',and a dropdown for 'Resources'. On the far right, incorporate a 'Join us' counter and a 'Log in' button with distinct styling.`,

  //       `I need a bottom section for our website that has our symbol, a little blurb about us, several categories with lists underneath like 'Services' and 'About Us', and 'Contact us'.`,
  //     ],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  React.useEffect(() => {
    if (el2) {
      const typed2 = new Typed("#el2", {
        // const typed2 = new Typed(el2.current, {
        strings: [
          `Construct a minimalist website header with a Navbar. It should start with a left-aligned typographic logo reading 'Brand',followed by nav menu with links for 'Landing', 'Company',& a 'Resources' dropdown. `,

          `I need a bottom section for our website that has our symbol, a little blurb about us, several categories with lists underneath like 'Services' and 'About Us', and 'Contact us'.`,
          `Create a Movies Card Component which includes movie name, description, rating, movie avatar image and where to watch link.`,
        ],
        typeSpeed: 60,
        backSpeed: 0,
        attr: "placeholder",
        bindInputFocusEvents: true,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed2.destroy();
      };
    }
  }, []);

  return (
    <div className="w-4/5 flex flex-col gap-6">
      {/* <div className="App">
        <span ref={el2} />
      </div> */}
      <div className="flex flex-col gap-6 mt-16">
        <p className="text-5xl font-bold text-center">
          Your Frontend{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            UI Copilot
          </span>
        </p>
        <p className="text-3xl font-normal text-center">
          Type to generate UI components with AI
        </p>
      </div>

      <div className="h-1/4 border border-slate-600 bg-[#20242c] rounded-lg">
        <textarea
          type="text"
          id="el2"
          // ref={el2}
          placeholder="Enter text"
          // placeholder={typed4}
          className="h-3/6 w-full bg-[#20242c] outline-none p-3
           placeholder-slate-400 placeholder placeholder:w-full"
        />
        <div className="flex gap-2 justify-between pt-3">
          <div className="flex gap-3 px-3">
            <div
              className="flex gap-2 border border-slate-700 p-1 px-2
              rounded-md w-max items-center hover:bg-[#2c313b] cursor-pointer"
            >
              <BiLogoTailwindCss className="text-sky-300" />
              <p className="">Tailwind</p>
            </div>
            <div
              className="flex gap-2 border border-slate-700 p-1 px-2
              rounded-md w-max items-center hover:bg-[#2c313b] cursor-pointer"
            >
              <SiMui className="text-sky-600" />
              <p className="">MUI</p>
            </div>
          </div>
          <div
            className="flex gap-2 bg-sky-400 p-1 px-2 items-center
           rounded-lg hover:bg-sky-600 hover:px-3 cursor-pointer"
          >
            <p className=" text-black font-semibold">Generate</p>
            <IoSend className="text-black" />
          </div>
        </div>
      </div>

      <div className="flex justify-between px-3 mt-8">
        <div className="flex flex-col gap-4">
          <div
            className="flex gap-2 border border-slate-700 p-1 px-2 
            rounded-md w-max items-center hover:bg-[#2c313b] cursor-pointer"
          >
            <AiOutlineDashboard className="text-white w-7 h-6" />
            <p className="text-sm text-slate-200">
              Create Admin Dashboard for SaaS Business
            </p>
          </div>
          <div
            className="flex gap-2 border border-slate-700 p-1 px-2
            rounded-md w-max items-center hover:bg-[#2c313b] cursor-pointer"
          >
            <FaCartShopping className="text-white w-6 h-6" />
            <p className="text-sm text-slate-300">
              Design add To Cart component for ecommerce site
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex gap-2 border border-slate-700 p-1 px-2
            rounded-md w-max items-center hover:bg-[#2c313b] cursor-pointer"
          >
            <TfiMenuAlt className="text-white w-6 h-6" />
            <p className="text-sm text-slate-200">
              Implement a Navbar menu for course wesbite
            </p>
          </div>
          <div
            className="flex gap-2 border border-slate-700 p-1 px-2 
            rounded-md w-max items-center hover:bg-[#2c313b] cursor-pointer"
          >
            <FaAddressCard className="text-white h-6 w-6" />
            <p className="text-sm text-slate-200">
              Create a Card Component for movies site
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-14 justify-center">
        <div className="flex gap-4">
          <p className="text-slate-400">Pro</p>
          <p className="text-slate-400">Careers</p>
          <p className="text-slate-400">Playground</p>
          <p className="text-slate-400">Blog</p>
          <p className="text-slate-400">Contact us</p>
        </div>
      </div>
    </div>
  );
}

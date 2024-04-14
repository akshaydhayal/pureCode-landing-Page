// import React from "react";
// import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightFromLine } from "react-icons/lu";
import { RxComponent1 } from "react-icons/rx";
import { BsMenuButtonWide } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
// import { MdAbc, MdArrowOutward } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";

export default function CollapsedSidebar({
  setIsNavOpen,
}: {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-[#222630] h-screen px-6">
      <div className="h-screen flex flex-col justify-between pb-8">
        <div className="flex flex-col gap-8 pt-6">
          <img src="/logo.png" className="w-12 h-12 cursor-pointer" />
          <div
            className="rounded-full border border-slate-500 
          flex justify-center items-center p-2 px-3 cursor-pointer hover:bg-[#393f4b] "
          >
            <p className="text-lg font-semibold">+</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="p-2 px-3 hover:bg-[#393f4b] cursor-pointer">
              <CiHome className="text-white h-7 w-7" />
            </div>
            <div className="p-2 px-3 hover:bg-[#393f4b] cursor-pointer">
              <RxComponent1 className="h-7 w-7 hover:bg-[#393f4b]" />
            </div>
            <div className="p-2 px-3 hover:bg-[#393f4b] cursor-pointer">
              <BsMenuButtonWide className="h-6 w-6 hover:bg-[#393f4b]" />
            </div>
            <div className="p-2 px-3 hover:bg-[#393f4b] cursor-pointer">
              <FaSignInAlt className="h-6 w-6 hover:bg-[#393f4b]" />
            </div>
          </div>

          <div className="p-2 px-3 hover:bg-[#393f4b] cursor-pointer">
            <TbBrandVscode className="text-blue-300 w-6 h-6" />
          </div>
        </div>
        <div className="p-2 px-3 hover:bg-[#393f4b] cursor-pointer">
          <LuArrowRightFromLine
            className="w-7 h-7"
            onClick={() => setIsNavOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}

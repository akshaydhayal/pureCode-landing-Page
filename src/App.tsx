import "./App.css";
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
import MainContainer from "./MainContainer";
import { useState } from "react";

function App() {
  const [isNavopen, setIsNavOpen] = useState(true);
  return (
    <div className="bg-[#16191f] w-screen h-screen flex">
      {isNavopen && (
        <div className="w-full flex">
          <div className="w-1/6">
            <Sidebar setIsNavOpen={setIsNavOpen} />
          </div>
          <div className="flex justify-center h-screen w-5/6">
            <MainContainer />
          </div>
        </div>
      )}
      {!isNavopen && (
        <div className="w-full flex">
          <div className="w-[7vw]">
            <CollapsedSidebar setIsNavOpen={setIsNavOpen} />
          </div>
          <div className="flex justify-center h-screen w-[93vw]">
            <MainContainer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import React from "react";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightFromLine } from "react-icons/lu";
import { RxComponent1 } from "react-icons/rx";
import { BsMenuButtonWide } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";

export default function Sidebar({ setIsNavOpen }) {
  return (
    <div className="bg-[#222630] h-screen px-6">
      <div className="h-screen flex flex-col justify-between pb-8">
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex gap-5 items-center">
            <svg
              width="214"
              height="34"
              viewBox="0 0 258 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4806_31563)">
                <path
                  d="M61.7091 1.47956C64.1557 1.47956 66.1958 2.29237 67.8296 3.92613C69.4877 5.55988 70.3168 7.58379 70.3168 10.006C70.3168 12.4282 69.4877 14.4358 67.8296 16.0858C66.1958 17.7196 64.1557 18.5324 61.7091 18.5324H56.4014V27.4327H52.1342V1.47956H61.7091ZM61.7091 14.5415C62.969 14.5415 64.0094 14.1188 64.8222 13.2816C65.635 12.42 66.0495 11.3309 66.0495 10.0141C66.0495 8.69735 65.6431 7.62443 64.8222 6.78723C64.0094 5.92565 62.969 5.48673 61.7091 5.48673H56.4014V14.5415H61.7091Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M86.2642 8.90055H90.2714V27.449H86.2642V25.0755C85.0531 26.9775 83.1348 27.9285 80.5176 27.9285C78.388 27.9285 76.673 27.2458 75.3643 25.8884C74.0557 24.531 73.3973 22.6615 73.3973 20.2881V8.90055H77.4045V19.8817C77.4045 21.2634 77.7784 22.3282 78.5181 23.076C79.2577 23.8157 80.2737 24.1896 81.558 24.1896C82.9642 24.1896 84.1021 23.7588 84.9718 22.8891C85.8334 21.995 86.2723 20.6538 86.2723 18.8494V8.90868L86.2642 8.90055Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M98.9603 12.0218C99.9763 9.72149 101.878 8.57542 104.674 8.57542V12.9158C103.138 12.8183 101.805 13.1841 100.667 14.0294C99.5293 14.8422 98.9603 16.2077 98.9603 18.1097V27.4571H94.9531V8.90055H98.9603V12.0136V12.0218Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M109.917 19.8817C110.218 21.2878 110.892 22.377 111.957 23.1492C113.022 23.8888 114.323 24.2627 115.851 24.2627C117.98 24.2627 119.573 23.4987 120.638 21.9625L123.938 23.8888C122.109 26.5874 119.403 27.9285 115.818 27.9285C112.803 27.9285 110.364 27.01 108.511 25.1812C106.658 23.328 105.731 20.9871 105.731 18.1666C105.731 15.3462 106.65 13.0865 108.478 11.2333C110.307 9.35573 112.656 8.41286 115.525 8.41286C118.248 8.41286 120.476 9.36385 122.199 11.2658C123.954 13.1678 124.832 15.4843 124.832 18.1991C124.832 18.6218 124.783 19.1745 124.686 19.8654H109.917V19.8817ZM109.885 16.6142H120.793C120.516 15.1023 119.89 13.9644 118.899 13.2003C117.931 12.4363 116.793 12.0543 115.485 12.0543C113.997 12.0543 112.762 12.4607 111.778 13.2816C110.787 14.0944 110.161 15.208 109.885 16.6223V16.6142Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M140.893 27.9285C136.984 27.9285 133.749 26.6443 131.172 24.0677C128.604 21.4748 127.311 18.2642 127.311 14.4602C127.311 10.6562 128.596 7.46187 131.172 4.88525C133.741 2.29237 136.984 0.991872 140.893 0.991872C143.242 0.991872 145.405 1.54459 147.388 2.65814C149.387 3.77169 150.948 5.28353 152.061 7.18551L148.355 9.33947C147.664 8.05522 146.648 7.03921 145.315 6.29955C144.006 5.5355 142.535 5.15348 140.902 5.15348C138.13 5.15348 135.878 6.03132 134.147 7.787C132.44 9.54267 131.587 11.7698 131.587 14.4683C131.587 17.1669 132.44 19.3858 134.147 21.1497C135.878 22.9053 138.13 23.7832 140.902 23.7832C142.535 23.7832 144.015 23.4093 145.356 22.6696C146.689 21.9056 147.697 20.8733 148.363 19.5891L152.07 21.7024C150.98 23.6044 149.436 25.1243 147.428 26.2623C145.453 27.3758 143.275 27.9285 140.902 27.9285H140.893Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M164.067 27.9285C161.344 27.9285 159.035 26.9857 157.133 25.1081C155.231 23.2305 154.28 20.9139 154.28 18.1748C154.28 15.4356 155.231 13.1191 157.133 11.2415C159.035 9.36385 161.352 8.42099 164.067 8.42099C166.781 8.42099 169.122 9.36385 171 11.2415C172.902 13.1191 173.853 15.4356 173.853 18.1748C173.853 20.9139 172.902 23.2305 171 25.1081C169.122 26.9857 166.806 27.9285 164.067 27.9285ZM159.946 22.3689C161.059 23.4824 162.433 24.0351 164.067 24.0351C165.7 24.0351 167.074 23.4824 168.188 22.3689C169.301 21.2553 169.854 19.8573 169.854 18.1748C169.854 16.4922 169.301 15.0942 168.188 13.9806C167.074 12.8671 165.7 12.3144 164.067 12.3144C162.433 12.3144 161.059 12.8671 159.946 13.9806C158.832 15.0942 158.279 16.4922 158.279 18.1748C158.279 19.8573 158.832 21.2553 159.946 22.3689Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M192.174 1.47956H196.181V27.449H192.174V24.7748C190.662 26.88 188.5 27.9285 185.679 27.9285C183.135 27.9285 180.957 26.9857 179.153 25.1081C177.348 23.2061 176.446 20.8896 176.446 18.1748C176.446 15.46 177.348 13.1191 179.153 11.2415C180.957 9.36385 183.135 8.42099 185.679 8.42099C188.5 8.42099 190.662 9.46139 192.174 11.5341V1.47956ZM182.119 22.442C183.233 23.5556 184.631 24.1083 186.313 24.1083C187.996 24.1083 189.394 23.5556 190.508 22.442C191.621 21.3041 192.174 19.8817 192.174 18.1748C192.174 16.4678 191.613 15.0617 190.508 13.9481C189.394 12.8102 187.996 12.2412 186.313 12.2412C184.631 12.2412 183.233 12.8102 182.119 13.9481C181.006 15.0617 180.453 16.4678 180.453 18.1748C180.453 19.8817 181.006 21.3041 182.119 22.442Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M204 19.8817C204.301 21.2878 204.976 22.377 206.04 23.1492C207.105 23.8888 208.406 24.2627 209.934 24.2627C212.063 24.2627 213.657 23.4987 214.721 21.9625L218.021 23.8888C216.192 26.5874 213.486 27.9285 209.893 27.9285C206.878 27.9285 204.439 27.01 202.586 25.1812C200.733 23.328 199.806 20.9871 199.806 18.1666C199.806 15.3462 200.725 13.0865 202.553 11.2333C204.382 9.35573 206.731 8.41286 209.601 8.41286C212.323 8.41286 214.542 9.36385 216.274 11.2658C218.029 13.1678 218.907 15.4843 218.907 18.1991C218.907 18.6218 218.859 19.1745 218.761 19.8654H203.992L204 19.8817ZM203.96 16.6142H214.868C214.599 15.1023 213.965 13.9644 212.974 13.2003C212.006 12.4363 210.869 12.0543 209.56 12.0543C208.072 12.0543 206.837 12.4607 205.853 13.2816C204.862 14.0944 204.236 15.208 203.96 16.6223V16.6142Z"
                  fill="#c1cee7"
                ></path>
                <path
                  d="M246.779 27.0913L245.072 21.8893H234.708L233.001 27.0913H228.653L237.496 1.26823H242.292L251.086 27.0832H246.77L246.779 27.0913ZM236.041 17.9065H243.763L239.902 6.25078L236.041 17.9065Z"
                  fill="url(#paint0_linear_4806_31563)"
                ></path>
                <path
                  d="M253.712 1.26823H257.711V27.0832H253.712V1.26823Z"
                  fill="url(#paint1_linear_4806_31563)"
                ></path>
                <path
                  d="M33.5776 1.55271C26.4817 1.55271 20.7107 7.34807 20.7107 14.4683C20.7107 18.1422 17.6627 21.0196 13.9319 21.0196H13.9156C10.1767 21.0196 7.12861 18.1422 7.13673 14.4683V25.1812C9.11187 26.3679 11.4284 27.0669 13.9156 27.0669H13.9319C21.0521 27.0669 26.8475 21.4748 26.8475 14.4683C26.8475 10.7375 29.8549 7.70571 33.5776 7.70571C35.4389 7.70571 37.1214 8.46163 38.3407 9.68898L42.673 5.34855C40.3402 3.00765 37.1296 1.56084 33.5776 1.56084V1.55271Z"
                  fill="url(#paint2_linear_4806_31563)"
                ></path>
                <path
                  d="M7.13674 14.3301C7.13674 10.6237 10.1848 7.51877 13.9156 7.51877C17.6464 7.51877 20.6945 10.6237 20.6945 14.3301H20.7189C20.7514 11.1764 21.9056 8.29907 23.8076 6.06383C21.4423 3.23524 17.8903 1.41453 13.9156 1.41453C6.79536 1.41453 1 7.26679 1 14.3301V35C4.38943 35 7.13674 32.2446 7.13674 28.8389V14.3301Z"
                  fill="url(#paint3_linear_4806_31563)"
                ></path>
                <path
                  d="M33.5532 21.2309C29.9118 21.2309 26.9531 18.3292 26.8312 14.704C26.7743 17.7846 25.5957 20.5726 23.6775 22.7265C26.0428 25.5714 29.5948 27.3839 33.5613 27.3839C37.1133 27.3839 40.3239 25.9371 42.6567 23.5962L38.3244 19.2477C37.1052 20.4669 35.4226 21.2309 33.5613 21.2309H33.5532Z"
                  fill="url(#paint4_linear_4806_31563)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_4806_31563"
                  x1="239.878"
                  y1="-2.33254"
                  x2="239.878"
                  y2="31.7813"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5809FF"></stop>
                  <stop offset="1" stop-color="#CE09FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4806_31563"
                  x1="255.711"
                  y1="-2.33254"
                  x2="255.711"
                  y2="31.7813"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5809FF"></stop>
                  <stop offset="1" stop-color="#CE09FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_4806_31563"
                  x1="51.8334"
                  y1="3.23524"
                  x2="-8.45303"
                  y2="27.0507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.1" stop-color="#05A6F4"></stop>
                  <stop offset="0.14" stop-color="#0593E5"></stop>
                  <stop offset="0.2" stop-color="#0576CD"></stop>
                  <stop offset="0.26" stop-color="#0560BB"></stop>
                  <stop offset="0.33" stop-color="#0550AE"></stop>
                  <stop offset="0.41" stop-color="#0546A6"></stop>
                  <stop offset="0.52" stop-color="#0544A4"></stop>
                  <stop offset="0.59" stop-color="#0548A7"></stop>
                  <stop offset="0.66" stop-color="#0555B1"></stop>
                  <stop offset="0.74" stop-color="#056AC3"></stop>
                  <stop offset="0.82" stop-color="#0587DB"></stop>
                  <stop offset="0.9" stop-color="#05ADF9"></stop>
                  <stop offset="0.91" stop-color="#05B4FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_4806_31563"
                  x1="19.906"
                  y1="-2.03992"
                  x2="-3.45422"
                  y2="35.5121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.67" stop-color="#FFB109"></stop>
                  <stop offset="1" stop-color="#FFCB09"></stop>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_4806_31563"
                  x1="45.4365"
                  y1="15.5087"
                  x2="-14.858"
                  y2="39.316"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB109"></stop>
                  <stop offset="1" stop-color="#FFCB09"></stop>
                </linearGradient>
                <clipPath id="clip0_4806_31563">
                  <rect
                    width="256.711"
                    height="34"
                    fill="white"
                    transform="translate(1 1)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
              <LuArrowLeftToLine
                className="w-6 h-5 cursor-pointer hover:bg-[#393f4b]"
                onClick={() => setIsNavOpen(false)}
                // onClick={setIsNavOpen(false)}
              />
          </div>
          <div
            className="border border-slate-400 p-1 text-center rounded-xl
          hover:border-sky-500 text-slate-200 w-4/5 cursor-pointer hover:bg-[#313641] "
          >
            New thread
          </div>
          <div>
            <div className="flex items-center p-2 px-3 gap-2 hover:bg-[#393f4b] rounded-lg cursor-pointer ">
              <CiHome className="text-white h-5 w-5" />
              <p className="text-slate-300 text-base font-medium hover:text-slate-100">
                Home
              </p>
            </div>
            <div className="flex items-center p-2 px-3 gap-2 hover:bg-[#393f4b] rounded-lg cursor-pointer">
              <RxComponent1 className="h-5 w-5" />
              <p className="text-slate-300 text-base font-medium hover:text-slate-100">
                Components
              </p>
            </div>
            <div className="flex items-center p-2 px-3 gap-2 hover:bg-[#393f4b] rounded-lg cursor-pointer">
              <BsMenuButtonWide />
              <p className="text-slate-300 text-base font-medium hover:text-slate-100">
                UI Elements
              </p>
            </div>
            <div className="flex items-center p-2 px-3 gap-2 hover:bg-[#393f4b] rounded-lg cursor-pointer">
              <FaSignInAlt className="h-4 w-4" />
              <p className="text-slate-300 text-base font-medium hover:text-slate-100">
                Sign in
              </p>
            </div>
          </div>
          <button
            className="p-1 px-4 bg-sky-400 w-full rounded-2xl
          text-black text-lg hover:bg-sky-500 cursor-pointer"
          >
            Sign up
          </button>
        </div>
        <div
          className="flex gap-1 items-center border border-slate-500 
          rounded-lg py-1 hover:bg-[#333842] cursor-pointer"
        >
          <TbBrandVscode className="text-blue-300 w-6 h-6" />
          <p className="text-base font-medium hover:text-slate-100">
            Download Extension
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-base font-medium text-white">Try Pro </p>
          <p className="text-sm">
            Upgrade for image upload, smarter AI, and more Pro Search.{" "}
          </p>
          <div className="flex items-center bg-[#333842] w-max px-4 p-1 rounded-lg cursor-pointer">
            <MdArrowOutward />
            <p className="hover:text-slate-100 text-slate-300">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

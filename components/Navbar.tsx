import Image from "next/image";
import React, { FC } from "react";
import Logo from "../assets/logo.png";

const Navbar: FC = () => {
  return (
    <nav className="bg-[#232536] w-full border-b border-slate-200 flex items-center justify-between px-10 py-5">
      <div>
        <a href="/">
          <Image src={Logo} alt="logo" />
        </a>
      </div>
      <div className="flex">
        <div className="w-[540px] hidden xl:block mr-12">
          <ul className="flex justify-between text-white text-base font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white text-white/[0.6]">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-white text-white/[0.6]">
              <a href="#">Company</a>
            </li>
            <li className="hover:text-white text-white/[0.6]">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-white text-white/[0.6]">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-white text-white/[0.6]">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div>
          <a href="#">
            <li className="text-[#ffd3af] flex font-medium mr-8">
              <a href="#">Clone project</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white ml-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

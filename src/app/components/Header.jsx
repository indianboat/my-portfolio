"use client";

import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  return (
    <>
      <nav className="md:py-3 sm:py-2 py-2 backdrop-blur-sm top-0 w-full z-10 mx-auto fixed shadow-sm">
        <div className="container md:w-10/12 sm:w-11/12 w-full mx-auto">
          <div className="p-2 flex md:justify-between sm:justify-between justify-center">
            <div
              className={`${pacifico.className} flex  font-medium text-4xl`}
            >
              <Link href={"/"}>Port-folio</Link>
            </div>
            <div className="justify-center hidden md:flex sm:flex">
              <ul className="flex justify-center items-center gap-x-4">
                <li className="flex">
                  <Link href={"/"} className="px-2 rounded-md transition-colors hover:text-[#8384FA]">Home</Link>
                </li>
                <li className="flex">
                  <Link href={"/#projects"} className="px-2 rounded-md transition-colors hover:text-[#8384FA]">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="md:flex sm:flex justify-center hidden">
              <ul className="flex justify-center items-center">
                <li className="flex">
                  <Link href={"/#contact"} className="px-2 py-1 rounded-full border border-[#aeafe9] text-center w-24">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

"use client";

import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  return (
    <>
      <nav className="md:py-3 sm:py-2 py-2 border backdrop-blur-sm  top-0 w-full z-10 mx-auto fixed">
        <div className="container md:w-10/12 sm:w-11/12 w-full mx-auto">
          <div className="border p-2 flex md:justify-between sm:justify-between justify-center">
            <div
              className={`${pacifico.className} hidden md:flex sm:flex font-medium text-4xl`}
            >
              Port-folio
            </div>
            <div className="border flex justify-center">
              <ul className="flex justify-center items-center gap-x-4">
                <li className="flex">
                  <Link href={"/"} className="px-2 rounded-md border">Home</Link>
                </li>
                <li className="flex">
                  <Link href={"/"} className="px-2 rounded-md border">About</Link>
                </li>
                <li className="flex">
                  <Link href={"/"} className="px-2 rounded-md border">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="border md:flex sm:flex justify-center hidden">
              <ul className="flex justify-center items-center">
                <li className="flex pl-4">
                  <Link href={"/"} className="px-2 rounded-md border ">Hire !</Link>
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

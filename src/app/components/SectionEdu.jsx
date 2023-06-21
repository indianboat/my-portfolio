import Link from "next/link";
import React from "react";
import { TbExternalLink } from "react-icons/tb";

const SectionEdu = () => {
  return (
    <>
      <div className="w-full rounded-3xl md:p-8 sm:p-6 p-5">
        <h2 className="text-4xl drop-shadow">Education</h2>
        <div className="grid mt-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
          <div className="flex flex-col w-full p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">
              Master of Computer Applications
            </h2>
            <h2 className="text-base text-gray-500">Dec 2021 to Dec 2023</h2>
            <h3 className="text-base mt-4 text-gray-700">
              Amrita Vishwa Vidyapeetham (Ahead online), Tamil Nadu
            </h3>
            <div className="mt-2 flex">
              <Link
                className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                href={"https://www.amrita.edu/ahead/mca/"}
                target="_blank"
              >
                Visit <TbExternalLink />
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">
              Bachelor of Computer Applications
            </h2>
            <h2 className="text-base text-gray-500">Aug 2017 to Oct 2020</h2>
            <h3 className="text-base mt-4 text-gray-700">
              Guru Gobind Singh Indraprastha University, New Delhi
            </h3>
            <div className="mt-2 flex">
              <Link
                className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                href={"http://www.ipu.ac.in/"}
                target="_blank"
              >
                Visit <TbExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionEdu;

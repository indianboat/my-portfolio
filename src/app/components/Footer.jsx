import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href={"/"} class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class="ml-3 text-xl">Portfolio</span>
          </Link>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Portfolio —
            <Link
              href="https://github.com/indianboat"
              class="text-gray-600 ml-1"
              target="_blank"
              aria-label="github2"
            >
              @pankaj
            </Link>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-3">
          <span className="">
                <Link
                  href={"https://github.com/indianboat"}
                  className="flex hover:bg-gray-200 text-gray-800 p-2 rounded-full"
                  target="_blank"
                  aria-label="github"
                >
                  <BsGithub size={18} />
                </Link>
              </span>
              <span className="">
                <Link
                  href={"https://www.linkedin.com/in/pankaj-014891194/"}
                  className="flex hover:bg-gray-200 text-gray-800 p-2 rounded-full"
                  target="_blank"
                  aria-label="linkedin"
                >
                  <BsLinkedin size={18} />
                </Link>
              </span>
              <span className="">
                <Link
                  href={"https://t.me/pankaj_xd"}
                  className="flex hover:bg-gray-200 text-gray-800 p-2 rounded-full"
                  target="_blank"
                  aria-label="telegram"
                >
                  <TbBrandTelegram size={18} />
                </Link>
              </span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

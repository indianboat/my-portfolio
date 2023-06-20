import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import {
  TbBrandNextjs,
  TbApi,
  TbBrandTelegram,
  TbExternalLink,
  TbPhone,
  TbLocation,
  TbMail,
} from "react-icons/tb";
import {
  SiReact,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiCanva,
  SiPostgresql,
  SiStrapi,
  SiBootstrap,
  SiVisualstudiocode,
  SiChakraui,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiSass,
  SiPython,
  SiGithub,
} from "react-icons/si";
import Image from "next/image";

export default function Home() {
  const skills = [
    { iconName: <SiHtml5 size={24} />, skillName: "HTML" },
    { iconName: <SiCss3 size={24} />, skillName: "CSS" },
    { iconName: <SiSass size={24} />, skillName: "Sass" },
    { iconName: <SiJavascript size={24} />, skillName: "JavaScript" },
    { iconName: <SiBootstrap size={24} />, skillName: "Bootstrap UI" },
    { iconName: <SiTailwindcss size={24} />, skillName: "Tailwind CSS" },
    { iconName: <SiChakraui size={24} />, skillName: "Chakra UI" },
    { iconName: <SiNodedotjs size={24} />, skillName: "Node Js" },
    { iconName: <SiExpress size={24} />, skillName: "Express Js" },
    { iconName: <TbApi size={24} />, skillName: "API" },
    { iconName: <SiPostman size={24} />, skillName: "Postman" },
    { iconName: <TbBrandNextjs size={24} />, skillName: "Next Js" },
    { iconName: <SiReact size={24} />, skillName: "React Js" },
    { iconName: <SiMongodb size={24} />, skillName: "MongoDB" },
    { iconName: <SiPostgresql size={24} />, skillName: "PostgreSQL" },
    { iconName: <SiPython size={24} />, skillName: "Basic Python" },
    { iconName: <SiStrapi size={24} />, skillName: "Strapi CMS" },
    { iconName: <SiGithub size={24} />, skillName: "Github" },
    { iconName: <SiCanva size={24} />, skillName: "Canva" },
    { iconName: <SiVisualstudiocode size={24} />, skillName: "VS Code" },
  ];

  return (
    <>
      <div className="bigdiv 2xl:container mx-auto w-full p-1">
        <section className="container md:w-10/12 sm:w-11/12 w-full mx-auto border border-rose-400 mt-24 mb-8 p-4 flex md:flex-row sm:flex-col flex-col gap-x-8 z-1">
          <div className="flex flex-col border md:w-[800px] sm:w-full w-full rounded-3xl md:p-8 sm:p-6 p-5 backdrop-blur-sm justify-center">
            <h2 className="text-4xl font-light drop-shadow tracking-normal leading-snug">
              Hi, I am Pankaj Kushwaha, a{" "}
              <strong className="font-extrabold">Full Stack Web Dev.il</strong>
            </h2>
            <h3 className="mt-5 mb-6 text-gray-700">
              I&apos;m a passionate and versatile full-stack developer with a knack
              for creating innovative and efficient solutions.
            </h3>
            <div className="w-full flex mt-4">
              <button className="hire-btn w-40 py-1 rounded-3xl bg-[#8384FA] text-white">
                Hire me...
              </button>
            </div>
          </div>

          <div className="border w-full rounded-3xl md:p-8 sm:p-6 p-5 backdrop-blur-sm flex justify-center">
            <Image src={"/home3.png"} alt="home" width={630} height={800} />
          </div>
        </section>

        <section className="container mx-auto md:w-10/12 sm:w-11/12 w-full border border-rose-400 p-4 flex gap-x-8 my-8">
          <div className="border w-full rounded-3xl md:p-8 sm:p-6 p-5 backdrop-blur-sm">
            <h2 className="text-4xl drop-shadow">What I can do ?</h2>
            <div className="mt-5">
              <ul className="text-justify text-gray-700 gap-y-4 flex flex-col">
                <li className="p-3 rounded-xl shadow">
                  With Next.js, I can build blazing-fast and SEO-friendly
                  applications, ensuring a delightful user experience.
                </li>
                <li className="p-3 rounded-xl shadow">
                  With a deep understanding of APIs, I can seamlessly integrates
                  data from various sources, allowing applications to
                  communicate and exchange information efficiently.
                </li>
                <li className="p-3 rounded-xl shadow">
                  Whether it&apos;s fetching data from a RESTful API or building
                  their own API endpoints, I have the expertise to handle
                  complex data flows, making their applications truly dynamic.
                </li>
                <li className="p-3 rounded-xl shadow">
                  I mostly prefer Tailwind CSS to design User Interface, other
                  UI libraries I can also use efficiently.
                </li>
                <li className="p-3 rounded-xl shadow">
                  From designing schemas to querying data, I ensure that
                  applications have a solid foundation for storing and
                  retrieving information, empowering businesses with valuable
                  insights using MongoDB.
                </li>
                <li className="p-3 rounded-xl shadow">
                  Whether it&apos;s AWS, Azure, Heroku or vercel, I can understand
                  the deployment process and can scale their applications to
                  handle increased traffic and demand.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container mx-auto md:w-10/12 sm:w-11/12 w-full border border-rose-400 p-4 flex gap-x-8 my-8">
          <div className="border w-full rounded-3xl md:p-8 sm:p-6 p-5 backdrop-blur-sm">
            <h2 className="text-4xl drop-shadow">My Advantages</h2>
            <div className="grid mt-8 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
              {skills.map((val, index) => {
                return (
                  <div key={index} className="flex flex-col w-full justify-center items-center border px-5 py-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                    {val.iconName}
                    <p className="mt-2 text-center">{val.skillName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto md:w-10/12 sm:w-11/12 w-full border border-rose-400 p-4 flex gap-x-8 my-8">
          <div className="border w-full rounded-3xl md:p-8 sm:p-6 p-5  backdrop-blur-sm">
            <h2 className="text-4xl drop-shadow">Education</h2>
            <div className="grid mt-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold">
                  Master of Computer Applications
                </h2>
                <h2 className="text-base text-gray-500">
                  Dec 2021 to Dec 2023
                </h2>
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

              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold">
                  Bachelor of Computer Applications
                </h2>
                <h2 className="text-base text-gray-500">
                  Aug 2017 to Oct 2020
                </h2>
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
        </section>

        <section className="container mx-auto md:w-10/12 sm:w-11/12 w-full border border-rose-400 p-4 flex gap-x-8 my-8">
          <div className="border w-full rounded-3xl md:p-8 sm:p-6 p-5  backdrop-blur-sm">
            <h2 className="text-4xl drop-shadow">Personal Projects</h2>
            <div className="grid mt-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold">ToDo List</h2>
                <h2 className="text-base text-gray-500">
                  Nextjs 13.4, MongoDB
                </h2>
                <h3 className="text-base mt-3 text-gray-700">
                  Used Latest Server Actions and Google Authentication
                </h3>
                <div className="mt-2 flex gap-x-3">
                  <Link
                    className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                    href={"https://todos-list-jet.vercel.app/"}
                    target="_blank"
                  >
                    Visit <TbExternalLink />
                  </Link>
                  <Link
                    className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                    href={"https://github.com/indianboat/todos-list"}
                    target="_blank"
                  >
                    Github <TbExternalLink />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold">Portfolio</h2>
                <h2 className="text-base text-gray-500">
                  Nextjs, Tailwind CSS
                </h2>
                <h3 className="text-base mt-3 text-gray-700"></h3>
                <div className="mt-2 flex gap-x-3">
                  <Link
                    className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                    href={"https://mera-portfolio.vercel.app/"}
                    target="_blank"
                  >
                    Visit <TbExternalLink />
                  </Link>
                  <Link
                    className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                    href={"https://github.com/indianboat/my-portfolio"}
                    target="_blank"
                  >
                    Github <TbExternalLink />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold">
                  Library Management System
                </h2>
                <h2 className="text-base text-gray-500">On Working</h2>
                <h3 className="text-base mt-3 text-gray-700">
                  Used Nextjs, NextUI, Formik, MongoDB etc.
                </h3>
                <div className="mt-2 flex gap-x-3">
                  <Link
                    className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                    href={"https://amrita-lms.vercel.app/"}
                    target="_blank"
                  >
                    Visit <TbExternalLink />
                  </Link>
                  <Link
                    className="text-base flex hover:bg-[#8384FA] hover:text-white transition-all duration-75 items-center px-3 py-1 rounded-xl text-[#8384FA] shadow gap-x-2"
                    href={
                      "https://github.com/indianboat/library-management-system"
                    }
                    target="_blank"
                  >
                    Github <TbExternalLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:w-10/12 sm:w-11/12 w-full border border-rose-400 p-4 flex gap-x-8 my-8">
          <div className="border w-full rounded-3xl md:p-8 sm:p-6 p-5  backdrop-blur-sm">
            <h2 className="text-4xl drop-shadow">Contact me</h2>
            <div className="grid mt-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold mb-6">
                  Looking forward to hearing from you
                </h2>
                <h3 className="text-base my-2 text-gray-700 flex items-center gap-x-3">
                  <TbMail size={20} />{" "}
                  <Link href="mailto: iampankaj852@gmail.com">
                    iampankaj852@gmail.com
                  </Link>
                </h3>
                <h3 className="text-base my-2 text-gray-700 flex items-center gap-x-3">
                  <TbLocation size={20} />
                  New Delhi, India
                </h3>
                <h3 className="text-base my-2 text-gray-700 flex items-center gap-x-3">
                  <TbPhone size={20} />{" "}
                  <Link href="tel:+918851611581">+91 8851 611581</Link>
                </h3>
                <div className="flex w-full border mt-4 gap-x-5 md:justify-start sm:justify-center justify-center">
                  <span className="">
                    <Link
                      href={"https://github.com/indianboat"}
                      className="flex bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                      target="_blank"
                    >
                      <BsGithub size={20} />
                    </Link>
                  </span>
                  <span className="">
                    <Link
                      href={"https://www.linkedin.com/in/pankaj-014891194/"}
                      className="flex bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                      target="_blank"
                    >
                      <BsLinkedin size={20} />
                    </Link>
                  </span>
                  <span className="">
                    <Link
                      href={"https://t.me/pankaj_xd"}
                      className="flex bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                      target="_blank"
                    >
                      <TbBrandTelegram size={20} />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-full border p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
                <form method="POST">
                  <div className="flex flex-col mb-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="border py-1 px-2"
                    />
                  </div>
                  <div className="flex flex-col mb-6">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Id"
                      className="border py-1 px-2"
                    />
                  </div>
                  <div className="flex flex-col mb-6">
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="your message"
                      className="border py-1 px-2"
                    />
                  </div>
                  <div className="flex flex-col mb-6">
                    <button
                      type="submit"
                      className="border py-1 px-2"
                    >Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

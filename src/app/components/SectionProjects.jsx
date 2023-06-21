import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const SectionProjects = () => {
  return (
    <>
      <div className="w-full rounded-3xl md:p-8 sm:p-6 p-5" id="projects">
        <h2 className="text-4xl drop-shadow">Personal Projects</h2>
        <div className="grid mt-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
          <div className="flex flex-col w-full p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">ToDo List</h2>
            <h2 className="text-base text-gray-500">Nextjs 13.4, MongoDB</h2>
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

          <div className="flex flex-col w-full p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Portfolio</h2>
            <h2 className="text-base text-gray-500">Nextjs, Tailwind CSS</h2>
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
          <div className="flex flex-col w-full p-6 rounded-3xl shadow hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">Library Management System</h2>
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
                href={"https://github.com/indianboat/library-management-system"}
                target="_blank"
              >
                Github <TbExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionProjects;

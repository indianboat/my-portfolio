import React from "react";
import {
  TbBrandNextjs,
  TbApi
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

const SectionSkills = () => {

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
      <div className="w-full rounded-3xl md:p-8 sm:p-6 p-5">
        <h2 className="text-4xl drop-shadow">My Advantages</h2>
        <div className="grid mt-8 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
          {skills.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full justify-center items-center border px-5 py-6 rounded-3xl shadow hover:shadow-xl transition-shadow"
              >
                {val.iconName}
                <p className="mt-2 text-center">{val.skillName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionSkills;

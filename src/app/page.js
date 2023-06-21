"use client";


import SectionName from "./components/SectionName";
import SectionWhat from "./components/SectionWhat";
import SectionSkills from "./components/SectionSkills";
import SectionEdu from "./components/SectionEdu";
import SectionProjects from "./components/SectionProjects";
import SectionContact from "./components/SectionContact";

export default function Home() {
  

  

  return (
    <>
    
      <div className=" 2xl:container mx-auto w-full p-1 border bg-[#FDFDFD]">
        <section className="container rounded-3xl md:w-10/12 sm:w-11/12 w-full mx-auto mt-24 mb-8 p-4 flex md:flex-row sm:flex-col flex-col gap-x-8 z-1 sm:gap-y-8 gap-y-8">
          <SectionName/>
        </section>

        <section className="rounded-3xl container mx-auto md:w-10/12 sm:w-11/12 w-full p-4 flex gap-x-8 my-8">
         <SectionWhat/>
        </section>

        <section className="rounded-3xl container mx-auto md:w-10/12 sm:w-11/12 w-full p-4 flex gap-x-8 my-8">
          <SectionSkills/>
        </section>

        <section className="rounded-3xl container mx-auto md:w-10/12 sm:w-11/12 w-full p-4 flex gap-x-8 my-8">
          <SectionEdu/>
        </section>

        <section className="rounded-3xl container mx-auto md:w-10/12 sm:w-11/12 w-full p-4 flex gap-x-8 my-8">
          <SectionProjects/>
        </section>

        <section className="rounded-3xl container mx-auto md:w-10/12 sm:w-11/12 w-full p-4 flex gap-x-8 my-8">
          <SectionContact/>
        </section>
      </div>
    </>
  );
}

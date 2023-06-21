import Image from "next/image";
import Link from "next/link";

const SectionName = () => {
  return (
    <>
      <div className="flex flex-col md:w-[800px] sm:w-full w-full rounded-3xl md:p-8 sm:p-6 p-5 justify-center md:text-left sm:text-center text-center">
        <h2 className="text-5xl font-light drop-shadow tracking-normal leading-snug">
          Hi, I am Pankaj Kushwaha, a{" "}
          <strong className="font-extrabold">Full Stack Web Dev.il</strong>
        </h2>
        <h3 className="mt-5 mb-6 text-gray-700">
          I&apos;m a passionate and versatile full-stack developer with a knack
          for creating innovative and efficient solutions.
        </h3>
        <div className="w-full flex mt-4 md:justify-start sm:justify-center justify-center">
          <Link href={"mailto:iampankaj852@gmail.com"} className="hire-btn w-40 py-1 rounded-3xl bg-[#8384FA] text-white text-center">
            Hire me...
          </Link>
        </div>
      </div>

      <div className="w-full rounded-3xl md:p-8 sm:p-6 p-5 lg:flex md:hidden sm:hidden hidden justify-center ">
        <Image
          src={"/home3.png"}
          alt="home"
          width={630}
          height={800}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SectionName;

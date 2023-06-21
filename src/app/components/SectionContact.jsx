import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbBrandTelegram, TbLocation, TbMail, TbPhone } from "react-icons/tb";

const SectionContact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    try {
      const res = await fetch("/api/msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.status == 201) {
        toast.success("Message sent successfully !");
        formik.resetForm({ values: "" });
      } else {
        toast.error("Internal server error, try again later");
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <>
      <Toaster />
      <div className="w-full rounded-3xl md:p-8 sm:p-6 p-5">
        <h2 className="text-4xl drop-shadow">Contact me</h2>
        <div className="grid mt-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8">
          <div className="flex flex-col w-full p-6 rounded-3xl">
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
            <div className="flex w-full mt-4 gap-x-5 md:justify-start sm:justify-center justify-center">
              <span className="">
                <Link
                  href={"https://github.com/indianboat"}
                  className="flex bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                  target="_blank"
                  aria-label="github"
                >
                  <BsGithub size={20} />
                </Link>
              </span>
              <span className="">
                <Link
                  href={"https://www.linkedin.com/in/pankaj-014891194/"}
                  className="flex bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                  target="_blank"
                  aria-label="linkedin"
                >
                  <BsLinkedin size={20} />
                </Link>
              </span>
              <span className="">
                <Link
                  href={"https://t.me/pankaj_xd"}
                  className="flex bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                  target="_blank"
                  aria-label="telegram"
                >
                  <TbBrandTelegram size={20} />
                </Link>
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full p-6 rounded-3xl">
            <form method="POST" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mb-6 p-4 rounded-2xl  shadow hover:shadow-xl transition-shadow">
                <label htmlFor="name">Name*</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="px-3 py-3 bg-gray-50 rounded-xl outline-none border-2 border-gray-200"
                  {...formik.getFieldProps("name")}
                />
              </div>
              <div className="flex flex-col mb-6 p-4 rounded-2xl  shadow hover:shadow-xl transition-shadow">
                <label htmlFor="email">Email Address*</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Id"
                  className="px-3 py-3 bg-gray-50 rounded-xl outline-none border-2 border-gray-200"
                  {...formik.getFieldProps("email")}
                />
              </div>
              <div className="flex flex-col mb-6 p-4 rounded-2xl  shadow hover:shadow-xl transition-shadow">
                <label htmlFor="message">Message*</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="your message"
                  className="px-3 py-3 bg-gray-50 rounded-xl outline-none border-2 border-gray-200"
                  {...formik.getFieldProps("message")}
                />
              </div>
              <div className="flex flex-col mb-6 items-end">
                <button type="submit" className="contact-btn px-3 py-3 rounded-3xl bg-[#8384FA] text-white md:w-40 sm:w-60 w-full outline-none">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionContact;

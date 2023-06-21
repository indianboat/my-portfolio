
const SectionWhat = () => {
  return (
    <>
      <div className="w-full rounded-3xl md:p-8 sm:p-6 p-5">
        <h2 className="text-4xl drop-shadow">What I can do ?</h2>
        <div className="mt-5">
          <ul className="text-justify text-gray-700 gap-y-4 flex flex-col">
            <li className="p-3 rounded-xl shadow">
              With Next.js, I can build blazing-fast and SEO-friendly
              applications, ensuring a delightful user experience.
            </li>
            <li className="p-3 rounded-xl shadow">
              With a deep understanding of APIs, I can seamlessly integrates
              data from various sources, allowing applications to communicate
              and exchange information efficiently.
            </li>
            <li className="p-3 rounded-xl shadow">
              Whether it&apos;s fetching data from a RESTful API or building
              their own API endpoints, I have the expertise to handle complex
              data flows, making their applications truly dynamic.
            </li>
            <li className="p-3 rounded-xl shadow">
              I mostly prefer Tailwind CSS to design User Interface, other UI
              libraries I can also use efficiently.
            </li>
            <li className="p-3 rounded-xl shadow">
              From designing schemas to querying data, I ensure that
              applications have a solid foundation for storing and retrieving
              information, empowering businesses with valuable insights using
              MongoDB.
            </li>
            <li className="p-3 rounded-xl shadow">
              Whether it&apos;s AWS, Azure, Heroku or vercel, I can understand
              the deployment process and can scale their applications to handle
              increased traffic and demand.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionWhat;

import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="m-4 p-6">
      <h2 className="text-3xl font-semibold">Education</h2>
      <div className="float-left pt-4">
        <FaSchool className="mr-4 mt-2 text-4xl" />
      </div>
      <div className="float-left w-[90%]">
        <p className="pt-6 text-xl font-semibold">
          Academy of Physical Education
          <span className="float-right mt-2 text-sm font-normal italic text-gray-700">
            2017 - 2022
          </span>
        </p>
        <hr className="my-2 h-[1px] border-t-0 bg-[#383838] opacity-100" />
        <p>Physical Education - Master Degree</p>
        <ul className="list-inside list-disc pt-2">
          <li>Certified instructor of acrobatics and gymnastics</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;

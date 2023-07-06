import Image from "../assets/photo.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoGmail, BiSolidDownload } from "react-icons/bi";

function Header() {
  return (
    <>
      <div className="relative min-h-screen font-montserrat">
        <section className="p-6 pt-20 text-center">
          <h1 className="mb-6 text-4xl font-bold">Karol Has</h1>
          <img
            src={Image}
            alt="avatar"
            className="mx-auto h-60 w-60 rounded-full object-cover"
          />
          <h2 className="mt-6 text-2xl">Front-End Developer</h2>
          <p className="font-light">Last update: July 06, 2023</p>
        </section>

        <section className="flex justify-center text-black">
          <ul className="text-lg">
            <li className="mt-4 flex items-center justify-center">
              <a
                href="https://github.com/karolhas"
                target="_blank"
                className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-400 px-4 py-1.5 shadow-xl duration-300 hover:bg-gray-600 hover:text-white"
              >
                <BsGithub /> <span className="ml-2">Github</span>
              </a>
            </li>
            <li className="mt-4 flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/karolhas"
                target="_blank"
                className="flex cursor-pointer items-center justify-center rounded-lg bg-blue-400 px-4 py-1.5 shadow-xl duration-300 hover:bg-blue-700 hover:text-white"
              >
                <BsLinkedin />
                <span className="ml-2">LinkedIn</span>
              </a>
            </li>
            <li className="mt-4 flex items-center justify-center">
              <a
                href="mailto: karolhas.kontakt@gmail.com"
                className="flex cursor-pointer items-center justify-center rounded-lg bg-red-300 px-4 py-1.5 shadow-xl duration-300 hover:bg-red-600 hover:text-white"
              >
                <BiLogoGmail />
                <span className="ml-2">Gmail</span>
              </a>
            </li>
            <li className="mt-4 flex items-center justify-center">
              <a
                href="#"
                target="_blank"
                className="flex cursor-pointer items-center justify-center rounded-lg bg-teal-500 px-4 py-1.5 shadow-xl duration-300 hover:bg-teal-600 hover:text-white"
              >
                <BiSolidDownload />
                <span className="ml-2">Download PDF</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Header;
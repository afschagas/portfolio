import { Link } from "react-scroll";

// Icons
import { FiDownload } from "react-icons/fi";

import { NavLogo } from "components";
import { SocialMedia } from "components";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full py-5">
      <div className="container mx-auto flex justify-evenly ">
        <NavLogo />
        <ul className="text-sm tracking-wide items-center flex gap-x-4">
          <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
            <Link activeClass="active" smooth spy to="sobre">
              SOBRE
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
            <Link activeClass="active" smooth spy to="skills">
              SKILLS
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
            <Link activeClass="active" smooth spy to="projetos">
              PROJETOS
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
            <Link activeClass="active" smooth spy to="contact">
              CONTATO
            </Link>
          </li>
          <SocialMedia />
        </ul>

        <a
          href="/download/AlexandreChagas.pdf"
          download="AlexandreChagas.pdf"
          type="application/pdf"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Curriculum &nbsp; <FiDownload />
        </a>
      </div>
    </nav>
  );
}

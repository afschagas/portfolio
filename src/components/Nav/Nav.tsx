import { NavLogo } from 'components';
import { SocialMedia } from 'components';
//import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';


//import './styles.css';

export function Nav() {
  return (

    <nav className="fixed top-0 left-0 w-full py-6">
      <div className="container mx-auto flex justify-evenly ">
        <NavLogo />
        <ul className="text-sm tracking-wide items-center flex gap-x-8">
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
              CONTACT ME
            </Link>

          </li>
          <SocialMedia />
        </ul>

      </div>
    </nav>
  )
}


//<ul className="text-sm tracking-wide items-center flex gap-x-8">
//<li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
// <a className="cursor-pointer" href="/sobre">Sobre</a>
//</li>
//</ul>

//<ul className="text-sm tracking-wide items-center flex gap-x-8">
//<li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
<a className="cursor-pointer" href="/skills">Habilidades</a>
//</li>
//</ul>

//<ul className="text-sm tracking-wide items-center flex gap-x-8">
//<li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
//  <a className="cursor-pointer" href="/contato">Contato</a>
//</li>
//</ul>

//<div className="flex items-center gap-4">

//<Link to="/sobre">
 // <Button variant='primary'>Sobre</Button>
//</Link>

//<Link to="/skills">
 // <Button variant='primary'>Skills</Button>
//</Link>

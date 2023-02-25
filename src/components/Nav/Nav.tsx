import { NavLogo } from 'components';
//import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full py-6">
      <div className="container mx-auto flex justify-between">
        <NavLogo />

        <ul className="text-sm tracking-wide items-center flex gap-x-8">
          <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
            <a className="cursor-pointer" href="/sobre">Sobre</a>
          </li>
        </ul>

        <ul className="text-sm tracking-wide items-center flex gap-x-8">
          <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
            <a className="cursor-pointer" href="/skills">Skills</a>
          </li>
        </ul>


      </div>
    </nav>
  )
}



//<div className="flex items-center gap-4">

//<Link to="/sobre">
 // <Button variant='primary'>Sobre</Button>
//</Link>

//<Link to="/skills">
 // <Button variant='primary'>Skills</Button>
//</Link>

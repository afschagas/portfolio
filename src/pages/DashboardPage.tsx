//import { Nav } from 'components';

//import { Button } from 'components';

import { Link } from 'react-router-dom';

import Ellipse from '../assets/image/Ellipse.png';
import JsLogo from '../assets/image/loading.png';
import WaveTres from '../assets/image/wave3.png';
import Wave from '../assets/image/wave.png';

export function DashboardPage() {
  return (

    <section className="bg-[#232425] h-screen flex px-[15%] py-[7%]">

      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 ">
        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute left-24 top-56"
          alt="Imagem circulo"
        />

        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute right-96 top-36"
          alt="Imagem circulo"
        />

        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute left-64 bottom-24"
          alt="Imagem circulo"
        />

        <img
          src={WaveTres}
          className="absolute bottom-2 right-36 w-96"
          alt="Imagem Onda"
        />

        <img
          src={Wave}
          className="absolute bottom-0 right-0 w-2/3"
          alt="Imagem Onda"
        />

        <img
          src={Ellipse}
          className="z-20 animate-ping w-6 absolute right-40 top-64"
          alt="Imagem circulo"
        />

        <div className="flex-1">
          <img
            src={JsLogo} className="w-9/12"
            alt="Imagem a lua e estrela com prédios"
          />
        </div>



        <div className="flex-1 pt-7">
          <div className="absolute">
            <h1 className="text-3xl leading-normal py-6">
              Seja Bem Vindo <br />
              ao meu<br />
              Portfolio! <br />

            </h1>
            <Link to="/sobre">
              <button className="bg-teal-600 px-7 rounded-full -tracking-wide py-3 text-xs hover:scale-110 duration-300">
                VAMOS COMEÇAR
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>


  )

}


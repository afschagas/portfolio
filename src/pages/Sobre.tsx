import { Nav } from 'components';
import { InfoFooter } from 'components'
import { ScrollToTop } from 'components';
import { TimeLine } from 'components';

import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import IconHtml from '../assets/image/icons-html.png';
import IconCss from '../assets/image/icons-css3.png';
import IconJavaScript from '../assets/image/icons-javascript.png';
import IconReact from '../assets/image/icons-react.png';
import IconGitHub from '../assets/image/icons-git.png';
import IconTailwind from '../assets/image/icons-tailwind-css.png';
import IconTypeScript from '../assets/image/icons-typescript.png';


export function Sobre() {
  return (
    <>
      <Nav />

      <section id="sobre" className="bg-[#232425] min-h-screen p-10">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-[6%]">

          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12">
              <br />
              <br />
              <br />
              <br />
              <img src="https://github.com/afschagas.png" className="shadow rounded-full max-w-full h-auto align-middle border-none transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" alt="Segurando uma caneca de café" />
              <br />
              <hr className="text-gray-500" />
              <h3 className="text-white font-semibold text-2xl">
                Tech Stack
              </h3>
              <div className="container flex max-w-screen-lg mx-auto">
                <div className="flex justify-center gap-2">
                  <i className="" title="HTML">
                    <img src={IconHtml} alt="Ícone da linguagem HTML" />
                  </i>

                  <i className="" title="CSS">
                    <img src={IconCss} alt="Ícone da linguagem CSS" />
                  </i>

                  <i className="" title="JavaScript">
                    <img src={IconJavaScript} alt="Ícone da linguagem JavaScript" />
                  </i>

                  <i className="" title="React">
                    <img src={IconReact} alt="Ícone da linguagem React" />
                  </i>

                  <i className="" title="TypeScript">
                    <img src={IconTypeScript} alt="Ícone da linguagem TypeScript" />
                  </i>

                  <i className="" title="GitHub">
                    <img src={IconGitHub} alt="Ícone da linguagem GitHub" />
                  </i>

                  <i className="" title="TailWindCSS">
                    <img src={IconTailwind} alt="Ícone da linguagem GitHub" />
                  </i>

                </div>
              </div>

            </div>

          </div>


          <div className="md:flex md:flex-col md:justify-center py-[-10%]">
            <ScrollToTop />
            <h1 className="text-white font-semibold text-2xl">
              Olá, Sou Alexandre Chagas!
            </h1>
            <br />
            <h2 className="text-gray-400 text-2xl md:text-4xl lg:text-4xl font-bold mb-2">
              Desenvolvedor Frontend
            </h2>
            <p className="md:text-lg text-withe">
              Atualmente trabalho como Desenvolvedor Full Stack Jr, nas quais atuo com Javascript, React, Material UI e typescript.
              <br />
              <br />
              Tive a oportunidade de transitar em algumas áreas da tecnologia, como analista de suporte, analista de implantação e analista de sistema. Experiências que me permitiram reafimar minha paixão pela área da Programação.
              <br />
              <br />
              Busco sempre se aprimorar. Gosto de estudar novas tecnologias, atualmente estou estudando Clean Code, Nodejs, React, React-Native, Javascript e API, mais a fundo.
              <br />
              <br />
              Objetivos definidos têm guiado minha vida para os resultados obtidos até aqui. Também aprecio vivenciar desafios, pois costumo enxergá-los como oportunidades de aprendizado e superação.

            </p>
          </div>

        </div>

      </section>


      <section id="skills" className="bg-[#232425] min-h-screen p-14">
        <TimeLine />
      </section>


      <section id="projetos" className="bg-[#232425] min-h-screen p-10">
        <h1 className="text-white font-semibold text-2xl">
          PROJETOS
        </h1>
      </section>

      <section id="contact" className="bg-[#232425] min-h-screen p-10">

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 py-[19%]">
          <div className="flex flex-wrap justify-center">
            <div>
              <IconContext.Provider value={{ color: "#9CA3AF", size: '2em' }}>
                <div className="py-2 grid justify-items-center">
                  <FaSearchLocation />
                  <br />
                  <h5 className="text-white font-semibold text-2xl">ONDE ME ENCONTRAR</h5>
                  <p> Diadema - São Paulo</p>
                </div>
              </IconContext.Provider>
            </div>
          </div>

          <div>
            <IconContext.Provider value={{ color: "#9CA3AF", size: '2em' }}>
              <div className="py-2 grid justify-items-center">
                <FaMailBulk />
                <br />
                <h5 className="text-white font-semibold text-2xl">ENVIE-ME UM EMAIL PARA</h5>
                <p>afschagas@gmail.com</p>
              </div>
            </IconContext.Provider>
          </div>

          <div>
            <IconContext.Provider value={{ color: "#9CA3AF", size: '2em' }}>
              <div className="py-2 grid justify-items-center">
                <FaPhoneAlt />
                <br />
                <h5 className="text-white font-semibold text-2xl">TELEFONE</h5>
                <p>(+55) 11 96909-5140</p>
              </div>
            </IconContext.Provider>
          </div>
        </div>

      </section>

      <InfoFooter />


    </>
  )
}

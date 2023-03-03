import { Nav } from 'components';
import { SocialMedia } from 'components';

import IconHtml from '../assets/image/icons-html.png';
import IconCss from '../assets/image/icons-css3.png';
import IconJavaScript from '../assets/image/icons-javascript.png';
import IconReact from '../assets/image/icons-react.png';
import IconGitHub from '../assets/image/icons-git.png';
import IconTailwind from '../assets/image/icons-tailwind-css.png';
import IconTypeScript from '../assets/image/icons-typescript.png';

//import { Button } from 'components';

import { InfoFooter } from 'components'

import { ScrollToTop } from 'components';


export function Sobre() {
  return (
    <>
      <Nav />

      <section id="sobre" className="bg-[#232425] min-h-screen p-10">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-[10%]">

          <div className="flex flex-wrap justify-center">

            <div className="w-6/12 sm:w-4/12 px-4">
              <img src="https://github.com/afschagas.png" className="shadow rounded-full max-w-full h-auto align-middle border-none transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" alt="Segurando uma caneca de café" />
            </div>
          </div>

          <div className="md:flex md:flex-col md:justify-center">
            <ScrollToTop />
            <h1 className="text-white font-semibold text-2xl">
              Olá, Sou Alexandre Chagas!
            </h1>
            <br />
            <h2 className="text-gray-400 text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              Desenvolvedor Frontend
            </h2>
            <p className="md:text-lg text-withe"> Auto didata entusiasmado e motivado em Tecnologia da Informação. Interessado em explorar sobre Desenvolvimento Web. Agora estou em busca de mais experiência na minha área.
            </p>
            <br />
            <SocialMedia />
            <br />
            <hr className="text-gray-500" />
            <br />
            <h3 className="text-white font-semibold text-2xl">
              Tech Stack
            </h3>

            <p></p>
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

      </section>

      <section id="skills" className="bg-[#232425] min-h-screen p-10">
        <h1 className="text-white font-semibold text-2xl">
          SKILLS
        </h1>

        <ul className="pl-5 space-y-3 text-gray-600 list-disc marker:text-blue-600">
          <li>Tailwind CSS list style with marker class 1</li>
          <li>Tailwind CSS list style with marker class 2</li>
          <li>Tailwind CSS list style with marker class 3</li>
        </ul>

      </section>

      <section id="projetos" className="bg-[#232425] min-h-screen p-10">
        <h1 className="text-white font-semibold text-2xl">
          PROJETOS
        </h1>
      </section>

      <section id="contact" className="bg-[#232425] min-h-screen p-10">
        <h1 className="text-white font-semibold text-2xl justify-items-center">
          CONTACT ME
        </h1>


      </section>

      <InfoFooter />


    </>
  )
}


// <figcaption className="mt-2 text-sm text-end text-gray-500 dark:text-gray-400">Sem café, eu não vivo...</figcaption>
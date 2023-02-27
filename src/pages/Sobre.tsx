import { Nav } from 'components';
import { SocialMedia } from 'components';

import IconHtml from '../assets/image/icons-html.png';
import IconCss from '../assets/image/icons-css3.png';
import IconJavaScript from '../assets/image/icons-javascript.png';
import IconReact from '../assets/image/icons-react.png';
import IconGitHub from '../assets/image/icons-git.png';
import IconTailwind from '../assets/image/icons-tailwind-css.png';

import { Button } from 'components';

import { InfoFooter } from 'components'

export function Sobre() {
  return (
    <>
      <Nav />
      <section className="bg-[#232425] min-h-screen p-10">

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-[12%]">

          <figure>
            <img className="shadow-2xl rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://github.com/afschagas.png" alt="Segurando uma caneca" />
            <figcaption className="mt-2 text-sm text-left text-gray-500 dark:text-gray-400">Sem café, eu não vivo...</figcaption>
          </figure>

          <div className="md:flex md:flex-col md:justify-center">
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

                <i className="" title="GitHub">
                  <img src={IconGitHub} alt="Ícone da linguagem GitHub" />
                </i>

                <i className="" title="TailWindCSS">
                  <img src={IconTailwind} alt="Ícone da linguagem GitHub" />
                </i>

              </div>
              <Button>

              </Button>
            </div>

          </div>

        </div>



      </section>

      <InfoFooter />
    </>
  )
}



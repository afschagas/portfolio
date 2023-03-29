import { Nav } from "components";
import { InfoFooter } from "components";
import { ScrollToTop } from "components";
import { TimeLine } from "components";

import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { IconContext } from "react-icons";

import IconHtml from "../assets/image/icons-html.png";
import IconCss from "../assets/image/icons-css3.png";
import IconJavaScript from "../assets/image/icons-javascript.png";
import IconReact from "../assets/image/icons-react.png";
import IconGitHub from "../assets/image/icons-git.png";
import IconTailwind from "../assets/image/icons-tailwind-css.png";
import IconTypeScript from "../assets/image/icons-typescript.png";

import NlwEsports from "../assets/image/projetos/nlwEsports.png";
import PetShop from "../assets/image/projetos/petShop.png";
import ProductCard from "../assets/image/projetos/productCard.png";
import LoginPage from "../assets/image/projetos/loginPage.png";
import Livros from "../assets/image/projetos/livros.png";

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
              <img
                src="https://github.com/afschagas.png"
                className="shadow rounded-full max-w-full h-auto align-middle border-none transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="Segurando uma caneca de café"
              />
              <br />
              <hr className="text-gray-500" />
              <h3 className="text-white font-semibold text-2xl">Tech Stack</h3>
              <div className="container flex max-w-screen-lg mx-auto">
                <div className="flex justify-center gap-2">
                  <i className="" title="HTML">
                    <img src={IconHtml} alt="Ícone da linguagem HTML" />
                  </i>

                  <i className="" title="CSS">
                    <img src={IconCss} alt="Ícone da linguagem CSS" />
                  </i>

                  <i className="" title="JavaScript">
                    <img
                      src={IconJavaScript}
                      alt="Ícone da linguagem JavaScript"
                    />
                  </i>

                  <i className="" title="React">
                    <img src={IconReact} alt="Ícone da linguagem React" />
                  </i>

                  <i className="" title="TypeScript">
                    <img
                      src={IconTypeScript}
                      alt="Ícone da linguagem TypeScript"
                    />
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
              Atualmente trabalho como Desenvolvedor Full Stack Jr, nas quais
              atuo com Javascript, React, Material UI e typescript.
              <br />
              <br />
              Tive a oportunidade de transitar em algumas áreas da tecnologia,
              como analista de suporte, analista de implantação e analista de
              sistema. Experiências que me permitiram reafimar minha paixão pela
              área da Programação.
              <br />
              <br />
              Busco sempre se aprimorar. Gosto de estudar novas tecnologias,
              atualmente estou estudando Clean Code, Nodejs, React,
              React-Native, Javascript e API, mais a fundo.
              <br />
              <br />
              Objetivos definidos têm guiado minha vida para os resultados
              obtidos até aqui. Também aprecio vivenciar desafios, pois costumo
              enxergá-los como oportunidades de aprendizado e superação.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#232425] min-h-screen p-14">
        <TimeLine />
      </section>

      <section id="projetos" className="bg-[#232425] min-h-screen ">
        <div className="p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="max-w-sm bg-[#232425] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://afschagas.github.io/nlwSports/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-t-lg object-cover h-48 w-96"
                src={NlwEsports}
                alt="Eventos de Jogos"
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Projeto desenvolvido no evento Next Level Week (NLW) da
                Rocketseat
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Nesse projeto utilizamos: HTML | CSS | GIT
              </p>
              <a
                href="https://github.com/afschagas/nlwSports"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visualizar o Código
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-[#232425] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://afschagas.github.io/petshop/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-t-lg object-cover h-48 w-96"
                src={PetShop}
                alt="Site Cachorro"
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Projeto desenvolvido em um treinamento on-line na Alura
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Nesse projeto utilizamos: NodeJS | ReactJS | Json-Server | Axios
                | Eslint | Prettier | GIT
              </p>
              <a
                href="https://github.com/afschagas/petshop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visualizar o Código
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-[#232425] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://afschagas.github.io/boraCodar/02/index"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-t-lg object-cover h-48 w-96"
                src={ProductCard}
                alt="Sofa"
              />
            </a>
            <br />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Projeto desenvolvido no evento #boraCodar da Rocketseat
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Nesse projeto utilizamos: HTML | CSS | JavaScript | GIT
              </p>
              <a
                href="https://github.com/afschagas/boraCodar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visualizar o Código
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-[#232425] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://afschagas.github.io/loginPage/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-t-lg object-cover h-48 w-96"
                src={LoginPage}
                alt="Pagina de Login"
              />
            </a>
            <br />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Projeto desenvolvido em um treinamento on-line FullStack
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Nesse projeto utilizamos: HTML | CSS | GIT
              </p>
              <a
                href="https://github.com/afschagas/loginPage"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visualizar o Código
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-[#232425] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://afschagas.github.io/front-end-controlePessoalDeLivros"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-t-lg object-cover h-48 w-96"
                src={Livros}
                alt="Controle de Livros"
              />
            </a>
            <br />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Projeto Controle Pessoal de Livros
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Nesse projeto utilizamos: React | Bootstrap | Node.js | Knex |
                SQLite | GIT
              </p>
              <a
                href="https://github.com/afschagas/front-end-controlePessoalDeLivros"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visualizar o Código
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#232425] min-h-screen p-10">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 py-[19%]">
          <div className="flex flex-wrap justify-center">
            <div>
              <IconContext.Provider value={{ color: "#9CA3AF", size: "2em" }}>
                <div className="py-2 grid justify-items-center">
                  <FaSearchLocation />
                  <br />
                  <h5 className="text-white font-semibold text-2xl">
                    ONDE ME ENCONTRAR
                  </h5>
                  <p> Diadema - São Paulo</p>
                </div>
              </IconContext.Provider>
            </div>
          </div>

          <div>
            <IconContext.Provider value={{ color: "#9CA3AF", size: "2em" }}>
              <div className="py-2 grid justify-items-center">
                <FaMailBulk />
                <br />
                <h5 className="text-white font-semibold text-2xl">
                  ENVIE-ME UM EMAIL PARA
                </h5>
                <p>afschagas@gmail.com</p>
              </div>
            </IconContext.Provider>
          </div>

          <div>
            <IconContext.Provider value={{ color: "#9CA3AF", size: "2em" }}>
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
  );
}

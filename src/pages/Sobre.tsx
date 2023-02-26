import { Nav } from 'components';

export function Sobre() {
  return (
    <>
      <Nav />
      <section className="bg-[#232425] h-screen flex px-[10%] py-[15%]">


        <div className="flex w-full md:flex-row">
          <div className="flex-1">
            <figure className="max-w-lg">
              <img className="h-auto max-w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://github.com/afschagas.png" alt="Segurando uma caneca" />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Sem café, eu não vivo...</figcaption>
            </figure>
          </div>
          <div className="md:w-3/6">
            <div className="flex flex-col w-full mt-12">
              <h1 className="text-xl text-gray-400">Oi, eu sou</h1>
              <h1 className="text-2xl font-bold">Alexandre Chagas</h1>
              <p className="text-xl font-bold text-gray-300">Desenvolvedor Frontend</p>
              <p className="text-md font-light text-gray-400 ">
                Auto didata entusiasmado e motivado em Tecnologia da Informação. Interessado em explorar sobre Desenvolvimento Web. Agora estou em busca de mais experiência na minha área.
              </p>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}



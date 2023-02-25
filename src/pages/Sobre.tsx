import { Nav } from 'components';

export function Sobre() {
  return (
    <>
      <Nav />
      <section className="bg-[#232425] h-screen flex px-[10%] py-[6%]">

        <div className="flex w-full md:flex-row">
          <div className="flex-1">
            <img className="w-9/12" src='https://github.com/afschagas.png' alt="" />
          </div>
          <div className="md:w-3/6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
            <div className="flex flex-col w-full mt-8">
              <h1 className="text-xl text-gray-400">Oi, eu sou</h1>
              <h1 className="text-2xl font-bold">Alexandre Chagas</h1>
              <p className="text-xl font-bold text-gray-300">Desenvolvedor Frontend</p>
              <p className="text-md font-light text-gray-400 ">Auto didata entusiasmado e motivado em Tecnologia da Informação. Interessado em explorar sobre Desenvolvimento Web. Agora estou em busca de mais experiência na minha área.</p>
            </div>
            <a href="http://blog.dama.ink" >
            </a>
          </div>
        </div>



      </section>
    </>
  )
}



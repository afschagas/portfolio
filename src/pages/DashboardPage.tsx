import { Link } from 'react-router-dom';

export function DashboardPage() {

  return (
    <div className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/01/69/56/13/360_F_169561381_OyknorO0aROyTrFCU5LGL8lPob140o6F.jpg')"
      }}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>

      <div className="flex px-[12%] py-[20%]">
        <div className="">

          <div className="flex-1 pt-10">
            <div className="absolute">

              <h1 className="text-white font-semibold text-5xl">
                Seja Bem Vindo ao meu Portfolio!
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Começar projetos novos sempre gera uma ansiedade,não sabemos o que vem pela frente e não conhecemos as pessoas com quem vamos nos relacionar.<br />
                <br />
                Por isso, estou compartilhando um pouco da minha história e meu trabalho.
              </p>
              <br />
              <Link to="/sobre">
                <button className="bg-teal-600 px-7 rounded-full -tracking-wide py-3 text-xs hover:scale-110 duration-300">
                  VAMOS COMEÇAR
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}





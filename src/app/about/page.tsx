import { BannerHome } from "../components/banner";
import { HeaderHome } from "../components/header";

export default function About() {
  return (
    <>
      <HeaderHome />
      <div className="w-full h-full flex flex-col items-center ">
        {/*componente hero-about*/}
        <div className="flex m-40 w-11/12 justify-between ">
          <h1 className="text-5xl font-semibold">
            Uma Equipe Visionária, Onde a Inquietação Criativa Ganha Vida
          </h1>

          <div className="flex flex-col gap-2.5 text-base">
            <p>
              A Vyva nasceu de uma colaboração que evoluiu de um projeto,
              revelando uma descoberta extraordinária. Nossa paixão é
              transformar desafios em soluções inovadoras, dedicando-nos a
              superar expectativas.{" "}
            </p>
            <p>
              Cada projeto conosco é mais que uma realização técnica; é uma
              promessa de comprometimento total, trazendo a expertise necessária
              para traduzir a visão do cliente em realidade digital impactante
            </p>
          </div>
        </div>
        {/*componente baner-about*/}
        <div className="w-full h-full flex items-center">
          <div className="flex flex-col">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="border-gray-500 mr-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>{" "}
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="border-gray-500 mr-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>{" "}
          </div>
          <div className="flex w-full bg-[url(/assets/m_HRfLhgABo.jpg)] h-[370px] bg-center bg-no-repeat bg-cover rounded-xl">
            <div className="flex flex-col justify-end w-full h-full bg-black bg-opacity-80 rounded-xl"></div>
          </div>{" "}
        </div>

        {/*componente about-us*/}
        <section className="m-40 w-full flex flex-col items-center justify-center">
          <header className="text-center">
            <h1 className="text-4xl font-semibold mb-14">Sobre Nós</h1>
            <h4 className="text-sm text-gray-500 mb-2">NOSSA AGÊNCIA</h4>
            <h2 className="text-2xl font-semibold mb-9">
              Na Vyva, o Sucesso dos Nossos Clientes é o Nosso Código.
            </h2>
          </header>
          <main>
            <p className="text-3xl">
              A Vyva é mais do que uma agência de desenvolvimento web, somos
              arquitetos digitais apaixonados por transformar visões em
              realidade online. Com habilidades técnicas afiadas e criatividade
              desenfreada, construímos experiências digitais memoráveis. Do
              conceito à implementação, cada projeto é uma jornada única, onde
              damos vida a marcas, fortalecendo sua presença no mundo digital
              dinâmico. Na Vyva, não apenas desenvolvemos websites; criamos
              soluções digitais inovadoras que impulsionam o sucesso de nossos
              clientes.{" "}
            </p>
          </main>
          <footer className="w-full flex justify-between mt-28">
            <p className="px-4 py-2 text-xs font-bold bg-neutral-900 rounded-full hover:bg-neutral-400 transition-colors duration-300 text-white m-auto">
              Conheça a Vyva
            </p>
            <p className="flex justify-end w-2/5 flex justify-center text-lg">
              Na Vyva, somos um estúdio cheio de ideias criativas e mentes
              curiosas. Nosso foco é criar experiências digitais especiais
              usando design e tecnologia de forma única.
            </p>
          </footer>
        </section>

        {/*componente nossa missao*/}
        <section className="w-full bg-black rounded-xl">
          <div className="my-24">
            <header className="text-center">
              <h1 className="text-white text-4xl font-semibold mb-14 mt-24">
                Nossa Missão
              </h1>
              <h4 className="text-white text-sm text-gray-500 mb-2">
                AJUDANDO SUA EMPRESA
              </h4>
              <h2 className="text-white text-2xl font-semibold mb-9">
                Vyva: Seu sucesso é nossa missão, elevando marcas, ampliando
                alcances.
              </h2>
            </header>

            <main className="flex flex-wrap mx-28 justify-center m-14">
              <div className="w-80 h-37 mr-5 mt-10">
                <h2 className="text-white text-2xl font-extrabold pb-5">
                  Sites Responsivos
                </h2>
                <p className="text-white text-sm text-gray-500">
                  Sites que se adaptam perfeitamente ao tamanho da tela do
                  computador, celular ou tablet.
                </p>
              </div>

              <div className="w-80 h-37 mr-5 mt-10">
                <h2 className="text-white text-2xl font-extrabold pb-5">
                  User Experience{" "}
                </h2>
                <p className="text-white text-sm text-gray-500">
                  Estratégias de UX/UI Design focadas em otimizar a experiência
                  do usuário, melhorar a usabilidade, navegação e conversão.
                </p>
              </div>

              <div className="w-80 h-37 mr-5 mt-10">
                <h2 className="text-white text-2xl font-extrabold pb-5">
                  Layout Personalizado
                </h2>
                <p className="text-white text-sm text-gray-500">
                  O layout é exclusivo e desenvolvido por especialistas. Formas,
                  cores, imagens, ícones. Tudo isso é pensado nos mínimos
                  detalhes, especialmente para você.
                </p>
              </div>

              <div className="w-80 h-37 mr-5 mt-10">
                <h2 className="text-white text-2xl font-extrabold pb-5">
                  Páginas Rápidas
                </h2>
                <p className="text-white text-sm text-gray-500">
                  Carregamento das páginas de forma rápida para aumentar o
                  número de conversões, através de otimização e servidor cloud
                  de alta performance.
                </p>
              </div>
              <div className="w-80 h-37 mr-5 mt-10">
                <h2 className="text-white text-2xl font-extrabold pb-5">
                  Suporte Contínuo{" "}
                </h2>
                <p className="text-white text-sm text-gray-500">
                  Conte com um time de especialistas para dar suporte às suas
                  necessidades. Tudo isso feito sob-demanda, quando precisar.
                </p>
              </div>
              <div className="w-80 h-37 mr-5 mt-10">
                <h2 className="text-white text-2xl font-extrabold pb-5">
                  Personalização Total{" "}
                </h2>
                <p className="text-white text-sm text-gray-500">
                  Desenvolvemos todos os sites de forma personalizada, layouts
                  100% exclusivos para a sua marca. Uma aparência moderna e
                  profissional, para transmitir confiança a seus visitantes.
                </p>
              </div>
            </main>
          </div>
        </section>

        {/*componente orçamento*/}
        <section className="flex w-full my-16">
          <p className="ml-16 text-center text-3xl font-semibold w-1/2">
            Solicite seu orçamento e leve sua visão ao próximo nível digital
            conosco.
          </p>
          <p className="px-4 py-2 text-xl font-bold bg-neutral-900 rounded-full hover:bg-neutral-400 transition-colors duration-300 text-white m-auto">
            Solicite seu Orçamento
          </p>
        </section>

        {/*componente mentes criativas*/}
        <section className="w-full bg-black rounded-xl">
          <div className="my-24">
            <header className="text-center">
              <h1 className="text-white text-4xl font-semibold mb-14 ">
                Conheça as Mentes Criativas
              </h1>
              <h4 className="text-white text-sm text-gray-500 mb-2">
                Por trás de todo negócio de sucesso, existe um time de sucesso.{" "}
              </h4>
              <h2 className="text-white text-2xl font-semibold mb-9">
                Conheça pessoas talentosas que são apaixonadas pelo que fazem
              </h2>
            </header>

            <main className="flex justify-center m-auto mt-16 w-4/5">
              <div className="flex flex-wrap gap-28 justify-center">
                <div>
                  <div className="flex w-80 bg-[url(/assets/samuel-preto-branco.jpg)] h-[370px] bg-center bg-no-repeat bg-cover rounded-xl"></div>
                  <div className="pt-6">
                    <h2 className="text-white text-3xl font-semibold">
                      Samuel Fernandes
                    </h2>
                    <h3 className="text-white p-2 text-sm font-semibold">
                      Fundador
                    </h3>
                    <p className="text-white text-sm w-72">
                      Desde o primeiro contato com o cliente, capturando e
                      compreendendo requisitos. Desenvolve a interface e o
                      frontend do sistema com foco no feedback do cliente,
                      visando uma solução que atenda precisamente às suas
                      necessidades e expectativas, garantindo uma experiência de
                      projeto excelente.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex w-80 bg-[url(/assets/m_HRfLhgABo.jpg)] h-[370px] bg-center bg-no-repeat bg-cover rounded-xl"></div>
                  <div className="pt-6">
                    <h2 className="text-white text-3xl font-semibold">
                      Igor Souza
                    </h2>
                    <h3 className="text-white p-2 text-sm font-semibold">
                      Fundador
                    </h3>
                    <p className="text-white text-sm w-72">
                      Do primeiro contato à fase final, o desenvolvedor backend
                      captura requisitos, realiza o deploy da aplicação na nuvem
                      e busca soluções eficazes com base no feedback do cliente.
                      Garante uma experiência de projeto excelente, atendendo às
                      necessidades e expectativas até a entrega e manutenção.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
    </>
  );
}

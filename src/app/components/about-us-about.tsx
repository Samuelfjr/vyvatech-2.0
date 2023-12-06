export function AboutUs() {
    return (
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
    );
  }
  
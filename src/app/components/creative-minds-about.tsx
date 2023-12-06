export function CreativeMinds() {
  return (
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
                  compreendendo requisitos. Desenvolve a interface e o frontend
                  do sistema com foco no feedback do cliente, visando uma
                  solução que atenda precisamente às suas necessidades e
                  expectativas, garantindo uma experiência de projeto excelente.
                  Até a entrega e manutenção.
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
                  captura requisitos, realiza o deploy da aplicação na nuvem e
                  busca soluções eficazes com base no feedback do cliente.
                  Garante uma experiência de projeto excelente, atendendo às
                  necessidades e expectativas até a entrega e manutenção.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

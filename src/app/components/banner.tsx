import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function BannerHome() {
  return (
    <>
      <div className="flex w-full gap-16">
        <div className="flex w-9/12 bg-[url(/assets/m_HRfLhgABo.jpg)] h-[500px] bg-center bg-no-repeat bg-cover rounded-xl sm:h-[600px] ">
          <div className="flex flex-col justify-end w-full h-full bg-black bg-opacity-80 rounded-xl">
            <h1 className="items-start invisible p-10 mb-12 text-3xl font-bold text-white lg:text-3xl xl:text-4xl sm:visible">
              {"Linha de Código por Linha de Sucesso </>"}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 w-full">
          <div className="flex flex-col w-full p-4 space-y-10 rounded-xl bg-zinc-50">
            <h1 className="text-justify text-start md:text-xl lg:text-2xl xl:text-2xl">
              Gostaria de obter uma estimativa para o seu projeto?
            </h1>

            <div className="flex items-center justify-center">
              <ArrowDown className="w-10 h-10 text-black animate-bounce" />
            </div>
            <Button variant={"link"}>Entrar em Contato</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-20 space-x-16 sm:space-x-24 md:space-x-32 lg:space-x-40">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h1 className="text-3xl font-bold xl:text-4xl">+80</h1>
          <h2 className="text-xs font-semibold text-center text-zinc-400">
            Projetos entregues
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h1 className="text-3xl font-bold xl:text-4xl">+50</h1>
          <h2 className="text-xs font-semibold text-center text-zinc-400">
            Clientes satisfeitos
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h1 className="text-3xl font-bold xl:text-4xl">+14</h1>
          <h2 className="text-xs font-semibold text-center text-zinc-400">
            Anos de experiência
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <h1 className="text-3xl font-bold xl:text-4xl">+80</h1>
          <h2 className="text-xs font-semibold text-center text-zinc-400">
            Projetos entregues
          </h2>
        </div>
      </div>
    </>
  );
}

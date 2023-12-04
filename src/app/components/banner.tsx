import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function BannerHome() {
  return (
    <>
      <div className="flex gap-16">
        <div className="flex w-3/4 bg-[url(/assets/m_HRfLhgABo.jpg)] h-[600px] bg-center bg-no-repeat bg-cover rounded-xl">
          <div className="flex flex-col justify-end w-full h-full bg-black bg-opacity-80 rounded-xl">
            <h1 className="text-4xl font-bold text-white p-10 items-start mb-12">
              {"Linha de Código por Linha de Sucesso </>"}
            </h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center ">
          <div className="flex flex-col rounded-xl w-full space-y-10 p-4 bg-zinc-50">
            <h1 className="text-4xl text-start">
              Gostaria de obter uma estimativa para o seu projeto?
            </h1>

            <div className="flex items-center justify-center">
              <ArrowDown className="w-10 h-10 text-black animate-bounce" />
            </div>
            <Button variant={"link"}>Entrar em Contato</Button>
          </div>
        </div>
      </div>

      <div className="flex mt-20 w-full space-x-40 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">+80</h1>
          <h2 className="text-xs text-zinc-300 font-semibold">
            Projetos entregues
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">+50</h1>
          <h2 className="text-xs text-zinc-300 font-semibold">
            Clientes satisfeitos
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">+14</h1>
          <h2 className="text-xs text-zinc-300 font-semibold">
            Anos de experiência
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">+80</h1>
          <h2 className="text-xs text-zinc-300 font-semibold">
            Projetos entregues
          </h2>
        </div>
      </div>
    </>
  );
}

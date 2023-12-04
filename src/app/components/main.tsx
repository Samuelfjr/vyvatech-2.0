/* eslint-disable @next/next/no-img-element */

import { Separator } from "@/components/ui/separator";

const CardsList = {
  card1: {
    title: "Profissionalismo Excepcional",
    description:
      "Garantimos um alto padrão de profissionalismo em todos os projetos, com ênfase na ética de trabalho, comunicação transparente e cumprimento rigoroso de prazos, fundamentais para o sucesso colaborativo com nossos clientes.",
    image: "/app.webp",
  },
  card2: {
    title: "Expertise Técnica Abrangente",
    description:
      "Nossa equipe altamente qualificada é especialista em diversas tecnologias. A expertise técnica abrangente nos capacita a oferecer soluções personalizadas e eficazes, adaptadas às demandas específicas de cada projeto.",
    image: "/mobile.webp",
  },
  card3: {
    title: "Foco na Experiência do Usuário",
    description:
      "Priorizamos o usuário no desenvolvimento, assegurando uma experiência envolvente e intuitiva. Cada projeto é meticulosamente projetado para superar as expectativas, proporcionando uma experiência do usuário que cativa e encanta.",
    image: "/website.webp",
  },
};

export function MainHome() {
  return (
    <>
      <div className="w-full rounded-3xl h-[1200px] mt-[200px]">
        <div className="text-center">
          <p className="font-mono text-xl text-gray-300">
            NOSSAS QUALIDADES DE DESENVOLVIMENTO
          </p>
          <h1 className="text-4xl font-bold">
            Impulsionamos a excelência em desenvolvimento web <br />
            para dar vida aos seus produtos, em todo o <br />
            mundo.
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-14 mt-14">
          {Object.values(CardsList).map((card, index) => (
            <div key={index} className="flex flex-row items-center">
              <img
                src={card.image}
                alt={`Imagem ${index + 1}`}
                className="rounded-2xl"
              />
              <div className="ml-10">
                <h1 className="text-2xl font-bold">{card.title}</h1>
                <p className="w-[600px]">{card.description}</p>
                <button className="px-4 py-2 mt-4 text-xs font-bold bg-neutral-900 rounded-full hover:bg-neutral-400 transition-colors duration-300 text-white">
                  Saber mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

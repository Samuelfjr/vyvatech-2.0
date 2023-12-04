/* eslint-disable @next/next/no-img-element */
import { ArrowDown, ArrowRightIcon } from "lucide-react";

export function CardsHome() {
  return (
    <div className="flex flex-col mb-20 space-y-8">
      <h1 className="flex text-3xl items-center gap-4 justify-center font-semibold">
        ALGUNS DE NOSSOS PROJETOS <ArrowDown />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {renderCards()}
      </div>
    </div>
  );
}
const sites = [
  {
    title: "Blog Rubens Machado",
    src: "/assets/rubens.png",
    href: "https://rubensmachado.com.br",
    about: "DESENVOLVIMENTO DE SITES",
  },
  {
    title: "Vyva Tube",
    src: "/assets/tube.png",
    href: "https://vyvatube-5835f7363435.herokuapp.com",
    about: "DESENVOLVIMENTO DE SITES",
  },
  {
    title: "Big Hosting",
    src: "/assets/big.png",
    about: "DESENVOLVIMENTO DE SITES",
  },
  {
    title: "Frutopia Geleias",
    src: "/assets/frutopia.png",
    about: "DESENVOLVIMENTO DE SITES",
  },
];

const imageSize = { width: 500, height: 400 };

function renderCards() {
  return sites.map(({ title, src, href, about }, index) => (
    <div className="flex flex-col gap-5" key={index}>
      <div className="flex justify-center bg-gray-100 rounded-2xl px-3 py-20">
        <img src={src} alt="note" {...imageSize} />
      </div>

      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <p className="font-semibold text-sm text-zinc-400/80">{about}</p>
          <h1 className="font-bold text-3xl">{title}</h1>
        </div>
        <div className="ml-auto">
          <a href={href} target="_blank">
            <div className="rounded-full border border-zinc-400/80 p-2">
              <ArrowRightIcon size={24} color="transparent" stroke="black" />
            </div>
          </a>
        </div>
      </div>
    </div>
  ));
}

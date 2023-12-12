/* eslint-disable @next/next/no-img-element */
import { HeaderHome } from "@/app/components/header";
import { BannerHome } from "@/app/components/banner";
import { FooterHome } from "@/app/components/footer";
import { MainHome } from "@/app/components/main";
import { CardsHome } from "@/app/components/cards";
import { BadgesHome } from "@/app/components/badges";
import { AccordionHome } from "./components/accordion";
import { StagesDevelopment } from "./components/stages-development";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { About } from "./components/about";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderHome />

      <BannerHome />

      <div className="flex bg-[url(/assets/CHVTt0aGbx0.jpg)] bg-center bg-no-repeat bg-cover text-white space-y-12 h-[350px] my-24 items-center justify-center">
        <div className="flex w-full h-full bg-black opacity-80">
          <div className="flex flex-col items-center justify-center p-16">
            <h1 className="text-6xl">
              Vamos impulsionar o sucesso da sua empresa no mundo digital juntos
            </h1>
            <Button className="p-6" variant={"secondary"}>
              Iniciar Projeto <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </div>

      <MainHome />

      <Separator />
      <About />

      <CardsHome />

      <StagesDevelopment />

      <AccordionHome />
      <FooterHome />
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function About() {
  return (
    <>
      <div className="grid grid-cols-2 my-12 ">
        <div className="bg-[url(/assets/DuHKoV44prg.jpg)] bg-center bg-no-repeat bg-contain h-[350px] w-[800px]"></div>

        <Tabs defaultValue="1" className="w-[400px] mb-60 ">
          <TabsList className="grid w-full grid-cols-3 gap-8">
            <TabsTrigger value="1">SOBRE NÓS</TabsTrigger>
            <TabsTrigger value="2">NOSSA MISSÃO</TabsTrigger>
            <TabsTrigger value="3">NOSSA EQUIPE</TabsTrigger>
          </TabsList>
          <TabsContent value="1">
            <p className="text-justify text-sm mt-12 h-32">
              A Vyva é mais que uma agência web, somos arquitetos digitais
              apaixonados por transformar visões em realidade online. Com
              habilidades técnicas e criatividade, construímos experiências
              digitais únicas, dando vida a marcas e fortalecendo presenças
              online.
            </p>
          </TabsContent>
          <TabsContent value="2">
            <p className="text-justify text-sm mt-12 h-32">
              Guiados pela paixão pela tecnologia e criatividade, estamos
              empenhados em criar jornadas digitais memoráveis e contribuir para
              o crescimento contínuo de nossos clientes no cenário digital
              dinâmico.
            </p>
          </TabsContent>
          <TabsContent value="3">
            <p className="text-justify text-sm mt-12 h-32">
              Acreditamos que o sucesso de nossos projetos é impulsionado pela
              força coletiva de nossa equipe. Estamos comprometidos em cultivar
              um ambiente de trabalho inspirador, onde o talento floresce,
              resultando em soluções digitais excepcionais para nossos clientes.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionHome() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col mx-60 my-40 justify-center space-y-8"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Perguntas frequentes</h1>
      </div>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Quais são os principais serviços oferecidos para desenvolvimento web?
        </AccordionTrigger>
        <AccordionContent>
          Oferecemos uma ampla gama de serviços de desenvolvimento web,
          incluindo design responsivo, desenvolvimento de aplicativos web,
          e-commerce, integração de API e muito mais, adaptados às necessidades
          específicas de cada cliente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Como funciona o processo de personalização de projetos web?
        </AccordionTrigger>
        <AccordionContent>
          Nosso processo de personalização inicia com uma análise detalhada das
          necessidades do cliente, seguida por um design personalizado,
          desenvolvimento iterativo e feedback contínuo para garantir que cada
          projeto reflita a identidade única de nossos clientes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Pode explicar o passo a passo do trabalho em desenvolvimento web?
        </AccordionTrigger>
        <AccordionContent>
          O processo envolve desde a consulta inicial e planejamento até o
          design, desenvolvimento, teste e lançamento. Nosso foco é assegurar
          uma abordagem transparente e colaborativa, mantendo nossos clientes
          informados em cada etapa.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Como a agência assegura a segurança das soluções web desenvolvidas?
        </AccordionTrigger>
        <AccordionContent>
          Garantimos a segurança por meio de práticas robustas, como codificação
          segura, atualizações regulares, auditorias de segurança e
          implementação de protocolos avançados. A privacidade e proteção de
          dados dos nossos clientes são prioridades fundamentais.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Quais inovações digitais destacam a expertise da empresa nesse campo?
        </AccordionTrigger>
        <AccordionContent>
          Estamos na vanguarda das inovações digitais, utilizando tecnologias
          emergentes como inteligência artificial, realidade aumentada e machine
          learning para criar experiências web únicas e eficientes,
          proporcionando aos nossos clientes uma vantagem competitiva.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

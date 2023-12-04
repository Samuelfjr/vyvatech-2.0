import Image from "next/image";

export function StagesDevelopment() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black rounded-2xl">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl p-14">
            Etapas de Desenvolvimento
          </h1>

          <h3 className="text-gray-300 text-sm">NOSSA METODOLOGIA</h3>
          <h2 className="text-white text-3xl pt-2">
            Etapas Vyva: Transformando Visões em Realidade Digital.
          </h2>
        </div>
        <div className="flex items-center p-10">
          <Image
            src="/assets/methodology.svg"
            alt="metodologia"
            width={800}
            height={600}
          />
        </div>
      </div>
    </>
  );
}

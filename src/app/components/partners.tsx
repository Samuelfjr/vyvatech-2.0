import Image from "next/image";
import Link from "next/link";

export function PartnersHome() {
  return (
    <>
      <div className="flex flex-col mt-8 mb-20">
        <div className="grid grid-cols-3 mb-20 justify-center">
          <div className="flex justify-center">
            <Image
              src="/aws.png"
              width={85}
              height={25}
              alt="aws"
              className="opacity-30"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/vercel5.png"
              width={85}
              height={25}
              alt="vercel"
              className="opacity-30"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/react.png"
              width={85}
              height={25}
              alt="react"
              className="opacity-30"
            />
          </div>
        </div>

        <p className="font-mono text-sm text-zinc-400/80 -mt-10">
          FAZENDO A DIFERENÇA
        </p>
      </div>
    </>
  );
}

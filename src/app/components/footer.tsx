/* eslint-disable @next/next/no-img-element */
import siteConfig from "@/config/site";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function FooterHome() {
  return (
    <footer
      className="text-white mb-10 bg-black rounded-2xl"
      style={{ maxHeight: "520px" }}
    >
      <div className="flex flex-col">
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "320px" }}
        >
          <p className="font-mono text-gray-300" id="contact">
            Contate-Nos
          </p>
          <p className="text-4xl font-bold text-center">
            Vamos fazer sua empresa
            <br />
            decolar no digital
          </p>

          <button className="mt-5 px-12 py-2 text-sm font-bold text-gray-950 bg-white/90 rounded-full hover:bg-white transition-colors duration-300">
            <Link href="/">Iniciar Projeto</Link>
          </button>
        </div>

        <div className="flex" style={{ height: "100px" }}>
          <div className="flex-1 flex items-center text-xs font-mono ml-12">
            <a href="/about">
              <img src="/logo-white.png" width={60} height={60} alt="Logo" />
            </a>
          </div>
          <div className="flex-1 flex items-center  text-xs font-mono gap-8 mr-72">
            <a href="/">Home</a>
            <a href="#">Serviços</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Contato</a>
          </div>
          <div className="flex items-center justify-end text-xs font-mono mr-3">
            <a href={siteConfig.links.linkedin}>
              {" "}
              <LinkedinIcon size={20} />
            </a>
          </div>
          <div className="flex items-center justify-end text-xs font-mono mr-12">
            <a href={siteConfig.links.github}>
              <GithubIcon size={20} />
            </a>
          </div>
        </div>

        <hr className="ml-12 mr-12 bg-white" />

        <div className="flex" style={{ height: "100px" }}>
          <div className="flex-1 flex items-center text-xs font-mono ml-12">
            Copyright © 2023 VyvaTech, Inc. Todos os direitos reservados.
          </div>
          <div className="flex-1 flex items-center justify-end text-xs font-mono gap-8 mr-12">
            <p>Política de Privacidade</p>
            <p>FAQ</p>
            <p>Termos de Serviço</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

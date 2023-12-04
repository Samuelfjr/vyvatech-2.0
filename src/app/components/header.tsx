/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight, ArrowRightFromLine, HeartHandshake } from "lucide-react";
import Link from "next/link";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function HeaderHome() {
  return (
    <header className="my-8 p-2 flex items-center justify-between">
      <img src="/logo.png" alt="" className="h-12" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="text-base font-medium flex gap-1 mb-3">
                      <HeartHandshake size={25} />A Era Digital
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Transformando <br />
                      Impulsionando
                      <br />
                      Conectando <br />
                      Inovando.
                    </p>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="Desenvolvimento Web">
                  Transformamos ideias em websites exclusivos que cativam a
                  audiência.
                </ListItem>
                <ListItem href="#" title="Otimização de Desempenho Digital">
                  Maximize a presença online com websites otimizados para
                  velocidade e eficácia.
                </ListItem>
                <ListItem href="#" title="Integração de Aplicações e API">
                  Conectamos e aprimoramos sistemas digitais, proporcionando uma
                  experiência integrada e eficiente.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Quem Somos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contato
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div></div>
    </header>
  );
}

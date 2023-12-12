import { Metadata } from "next";
import "../styles/globals.css";

import { Inter } from "next/font/google";
import siteConfig from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} mx-10 lg:mx-20 xl:mx-40`}>
        {children}
      </body>
    </html>
  );
}

import { AboutUs } from "../components/about-us-about";
import { AccordionHome } from "../components/accordion";
import { BannerHome } from "../components/banner";
import { BannerAbout } from "../components/banner-about";
import { Budget } from "../components/budget-about";
import { CreativeMinds } from "../components/creative-minds-about";
import { FooterHome } from "../components/footer";
import { HeaderHome } from "../components/header";
import { HeroAbout } from "../components/hero-about";
import { OurMission } from "../components/our-mission-about";

export default function About() {
  return (
    <>
      <HeaderHome />
      <div className="w-full h-full flex flex-col items-center">
        <HeroAbout />
        <BannerAbout />
        <AboutUs />
        <OurMission />
        <Budget />
        <CreativeMinds />
      </div>
      <AccordionHome />
      <FooterHome />
    </>
  );
}

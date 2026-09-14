import AboutPreview from "./sections/AboutPreview";
import CTA from "./sections/CTA";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import SectionDivider from "../../Components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <AboutPreview />
      <SectionDivider />
      <FeaturedProjects />
      <CTA/>
    </>
  )
}

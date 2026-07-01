import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import About from "@/components/About";
import LeadershipDesk from "@/components/LeadershipDesk";
import Services from "@/components/Services";
import ResearchInnovation from "@/components/ResearchInnovation";
import Incubator from "@/components/Incubator";
import Infrastructure from "@/components/Infrastructure";
import Team from "@/components/Team";
import Startups from "@/components/Startups";
import SuccessStories from "@/components/SuccessStories";
import Events from "@/components/Events";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <About />
      <LeadershipDesk />
      <Services />
      <ResearchInnovation />
      <Incubator />
      <Infrastructure />
      <Team />
      <Startups />
      <SuccessStories />
      <Events />
      <Resources />
      <Contact />
    </>
  );
}

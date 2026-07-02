import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import LeadershipDesk from "@/components/LeadershipDesk";
import PillarsDashboard from "@/components/PillarsDashboard";
import Events from "@/components/Events";

export default function Home() {
  return (
    <>
      {/* 1. Main Welcome/Hero Section with Neural Networks & CountUps */}
      <Hero />

      {/* 2. Horizontal Infinite Accreditions Marquee */}
      <TrustBanner />

      {/* 3. Official Messages from Minister & Director */}
      <LeadershipDesk />

      {/* 4. Pillars Dashboard - Directory Links to Dedicated Subpages */}
      <PillarsDashboard />

      {/* 5. Calendar of Upcoming Workshops & Institutional Events */}
      <Events />
    </>
  );
}

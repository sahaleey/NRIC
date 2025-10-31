// src/pages/Home.jsx
import HeroSection from "../sections/HeroSection";
import AnnouncementsTicker from "../sections/AnnouncementsTicker";
import WelcomeIntro from "../sections/WelcomeIntro";
import StatsBar from "../sections/StatsBar";
import HighlightCards from "../sections/HighlightCards";
import ContactCTA from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnnouncementsTicker />
      <WelcomeIntro />
      <StatsBar />
      <HighlightCards />
      <ContactCTA />
    </>
  );
}

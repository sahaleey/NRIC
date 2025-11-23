import HeroSection from "../sections/HeroSection";
import AnnouncementsTicker from "../sections/AnnouncementsTicker";
import WelcomeIntro from "../sections/WelcomeIntro";
import StatsBar from "../sections/StatsBar";
import HighlightCards from "../sections/HighlightCards";
import ContactCTA from "../sections/ContactCTA";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. Blending Islamic scholarship with modern excellence."
      />
      <HeroSection />
      <AnnouncementsTicker />
      <WelcomeIntro />
      <StatsBar />
      <HighlightCards />
      <ContactCTA />
    </>
  );
}

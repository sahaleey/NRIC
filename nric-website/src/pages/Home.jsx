import HeroSection from "../sections/HeroSection";
import AnnouncementsTicker from "../sections/AnnouncementsTicker";
import WelcomeIntro from "../sections/WelcomeIntro";
import StatsBar from "../sections/StatsBar";
import HighlightCards from "../sections/HighlightCards";
import ContactCTA from "../sections/ContactCTA";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nahjurrashad Islamic College | Home</title>
        <meta
          name="description"
          content="Official website of Nahjurrashad Islamic College (NRIC), Chamakkala. An institute blending Islamic scholarship with modern education and moral excellence."
        />

        <link rel="canonical" href="https://nric-chamakkala.vercel.app/" />
      </Helmet>
      <HeroSection />
      <AnnouncementsTicker />
      <WelcomeIntro />
      <StatsBar />
      <HighlightCards />
      <ContactCTA />
    </>
  );
}

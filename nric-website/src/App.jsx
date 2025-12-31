import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import { useOnlineStatus } from "./hooks/useOnlineStatus";
import OfflinePage from "./pages/OfflinePage";


// --- LAZY-LOADED PAGES ---

const Home = React.lazy(() => import("./pages/Home"));
const Departments = React.lazy(() => import("./pages/Departments"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const Sitemap = React.lazy(() => import("./pages/Sitemap"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Alumni = React.lazy(() => import("./pages/Alumni"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Donate = React.lazy(() => import("./pages/Donate"));


// --- "About" pages ---
const About = React.lazy(() => import("./pages/About"));
const AboutOverview = React.lazy(() => import("./pages/about/AboutOverview"));
const History = React.lazy(() => import("./pages/about/History"));
const Leadership = React.lazy(() => import("./pages/about/Leadership"));
const Campus = React.lazy(() => import("./pages/about/Campus"));
const Accreditation = React.lazy(() => import("./pages/about/Accreditation"));

// --- "Academics" pages ---
const Academics = React.lazy(() => import("./pages/Academics"));
const Curriculum = React.lazy(() => import("./pages/academics/Curriculum"));
const Faculty = React.lazy(() => import("./pages/academics/Faculty"));

export default function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
     
        <OfflinePage />
      
    );
  }
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader loading={true} />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              {/* --- "About" Nested Route --- */}
              <Route path="about" element={<About />}>
                <Route index element={<AboutOverview />} />
                <Route path="history" element={<History />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="campus" element={<Campus />} />
                <Route path="accreditation" element={<Accreditation />} />
              </Route>

              {/* --- "Academics" Nested Route --- */}
              <Route path="academics" element={<Academics />}>
                <Route index element={<Curriculum />} />
                <Route path="curriculum" element={<Curriculum />} />
                <Route path="faculty" element={<Faculty />} />
              </Route>

              <Route path="departments" element={<Departments />} />
              <Route path="contact" element={<Contact />} />
              <Route path="alumni" element={<Alumni />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="donate" element={<Donate />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
       
      </ErrorBoundary>
    </>
  );
}

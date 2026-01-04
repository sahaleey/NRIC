import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import { useOnlineStatus } from "./hooks/useOnlineStatus";
import OfflinePage from "./pages/OfflinePage";


// --- LAZY-LOADED PAGES ---

const Home = lazy(() => import("./pages/Home"));
const Departments = lazy(() => import("./pages/Departments"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Alumni = lazy(() => import("./pages/Alumni"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Donate = lazy(() => import("./pages/Donate"));


// --- "About" pages ---
const About = lazy(() => import("./pages/About"));
const AboutOverview = lazy(() => import("./pages/about/AboutOverview"));
const History = lazy(() => import("./pages/about/History"));
const Leadership = lazy(() => import("./pages/about/Leadership"));
const Campus = lazy(() => import("./pages/about/Campus"));
const Accreditation = lazy(() => import("./pages/about/Accreditation"));

// --- "Academics" pages ---
const Academics = lazy(() => import("./pages/Academics"));
const Curriculum = lazy(() => import("./pages/academics/Curriculum"));
const Faculty = lazy(() => import("./pages/academics/Faculty"));

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

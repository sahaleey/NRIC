// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Sitemap from "./pages/Sitemap";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// --- Import "About" pages ---
import About from "./pages/About";
import AboutOverview from "./pages/about/AboutOverview";
import History from "./pages/about/History";
import Leadership from "./pages/about/Leadership";
import Campus from "./pages/about/Campus";
import Accreditation from "./pages/about/Accreditation";

// --- Import NEW "Academics" pages ---
import Academics from "./pages/Academics";
import Curriculum from "./pages/academics/Curriculum";
import Faculty from "./pages/academics/Faculty";
import Alumni from "./pages/Alumni";

export default function App() {
  return (
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

        {/* --- NEW "Academics" Nested Route --- */}
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

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

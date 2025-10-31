// src/components/Layout.jsx
import { Outlet, ScrollRestoration } from "react-router-dom"; // 1. Import it here
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

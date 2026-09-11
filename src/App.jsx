import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/common/Loader";

import { LanguageProvider } from "./context/LanguageContext";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Chapters = lazy(() => import("./pages/Chapters"));
const Chapter = lazy(() => import("./pages/Chapter"));
const Search = lazy(() => import("./pages/Search"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));

function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-spiritual-cream">
      <Loader />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-spiritual-cream">
        <Navbar />

        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/adhyay" element={<Chapters />} />

              <Route path="/adhyay/:chapterNumber" element={<Chapter />} />

              <Route
                path="/adhyay/:chapterNumber/shloka/:shlokaNumber"
                element={<Chapter />}
              />

              <Route path="/search" element={<Search />} />

              <Route path="/bookmarks" element={<Bookmarks />} />

              <Route path="/about" element={<About />} />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/terms-and-conditions" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

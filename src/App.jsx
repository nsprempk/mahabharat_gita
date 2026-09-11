import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import Chapter from "./pages/Chapter";
import Search from "./pages/Search";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="min-h-screen bg-spiritual-cream">
      <Navbar />

      <main>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

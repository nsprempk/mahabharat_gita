import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Headphones, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import ChapterCard from "../components/gita/ChapterCard";
import { getChapters } from "../services/gitaService";

export default function Home() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadChapters = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getChapters();

        console.log("Home chapters:", data);

        setChapters(data);
      } catch (err) {
        console.error("Failed to load chapters:", err);

        setError("Unable to load chapters.");
      } finally {
        setLoading(false);
      }
    };

    loadChapters();
  }, []);

  return (
    <div>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff7e8] via-[#fffaf2] to-[#f7e5c5]" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* HERO CONTENT */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-saffron-200 bg-white/70 px-4 py-2 text-sm font-semibold text-saffron-700">
              <Sparkles size={16} />
              श्रीमद्भगवद्गीता
            </div>

            {/* Main heading */}
            <h1 className="sanskrit text-5xl font-extrabold leading-tight text-spiritual-brown sm:text-6xl">
              भगवद्गीता
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-2xl font-semibold text-saffron-700 sm:text-3xl">
              Gita Shloka — हर समस्या का समाधान
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              Read all 18 Adhyayas of the Bhagavad Gita in Sanskrit with clear
              Hindi and English meanings. Listen to Shlokas and their meanings
              with male and female voices.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Start Reading */}
              <Link
                to="/adhyay"
                className="flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 font-bold text-white shadow-lg transition hover:bg-orange-700"
              >
                <BookOpen size={19} />

                <span>Start Reading</span>

                <ArrowRight size={18} />
              </Link>

              {/* Search */}
              <Link
                to="/search"
                className="flex items-center gap-2 rounded-full border border-orange-300 bg-white px-6 py-3.5 font-bold text-orange-700 transition hover:bg-orange-50"
              >
                <Headphones size={19} />

                <span>Explore Shlokas</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-600">
              <div>
                <strong className="text-lg text-spiritual-brown">18</strong>{" "}
                Adhyayas
              </div>

              <div>
                <strong className="text-lg text-spiritual-brown">700</strong>{" "}
                Shlokas
              </div>

              <div>
                <strong className="text-lg text-spiritual-brown">2</strong>{" "}
                Languages
              </div>
            </div>
          </div>

          {/* =====================================================
              KRISHNA IMAGE
          ====================================================== */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#f4eadb] shadow-2xl">
            <img
              src="/images/krishna-mahabharata.png"
              alt="Lord Krishna from the Mahabharata"
              className="h-[620px] w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/55 p-6 text-white backdrop-blur-sm">
              <p className="sanskrit text-2xl font-bold">
                धर्मक्षेत्रे कुरुक्षेत्रे...
              </p>

              <p className="sanskrit mt-2 text-sm text-white/80">
                श्रीमद्भगवद्गीता
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-saffron-600">
            The timeless wisdom
          </p>

          <h2 className="sanskrit mt-3 text-3xl font-bold text-spiritual-brown sm:text-4xl">
            श्रीकृष्ण के दिव्य ज्ञान का अध्ययन करें
          </h2>

          <p className="mt-5 leading-8 text-stone-600">
            Explore every chapter of the Bhagavad Gita, understand each Shloka
            and listen to its wisdom in audio.
          </p>
        </div>
      </section>

      {/* =====================================================
          CHAPTERS
      ====================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header */}
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-saffron-600">
                Explore
              </p>

              <h2 className="sanskrit mt-2 text-3xl font-bold text-spiritual-brown">
                18 अध्याय
              </h2>
            </div>

            <Link
              to="/adhyay"
              className="hidden items-center gap-2 font-semibold text-saffron-600 transition hover:text-saffron-700 sm:flex"
            >
              View All
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Loading */}
          {loading && (
            <div className="py-12 text-center text-gray-500">
              Loading chapters...
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="font-medium text-red-700">{error}</p>
            </div>
          )}

          {/* Chapters */}
          {!loading && !error && chapters.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {chapters.slice(0, 6).map((chapter) => {
                const chapterNumber = chapter.chapterNumber ?? chapter.number;

                return (
                  <Link
                    key={chapterNumber}
                    to={`/adhyay/${chapterNumber}`}
                    className="block h-full"
                  >
                    <ChapterCard chapter={chapter} />
                  </Link>
                );
              })}
            </div>
          )}

          {/* No chapters */}
          {!loading && !error && chapters.length === 0 && (
            <div className="rounded-3xl border border-saffron-100 bg-saffron-50 p-10 text-center">
              <BookOpen size={40} className="mx-auto text-saffron-500" />

              <p className="mt-4 font-semibold text-gray-700">
                No chapters available yet.
              </p>

              <Link
                to="/adhyay"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-5 py-2.5 font-semibold text-white hover:bg-saffron-600"
              >
                View Chapters
                <ArrowRight size={17} />
              </Link>
            </div>
          )}

          {/* Mobile View All */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/adhyay"
              className="inline-flex items-center gap-2 font-semibold text-saffron-600"
            >
              View All Chapters
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "ॐ",
              title: "Sanskrit Shlokas",
              text: "Read the original Sanskrit Shlokas in a clear and beautiful format.",
            },
            {
              icon: "अ",
              title: "Hindi & English",
              text: "Switch between Hindi and English meanings while Sanskrit remains unchanged.",
            },
            {
              icon: "🔊",
              title: "Listen & Understand",
              text: "Listen to Shlokas and meanings using male or female voices.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-saffron-100 bg-white p-8 text-center shadow-spiritual"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-saffron-100 text-xl font-bold text-saffron-700">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-spiritual-brown">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

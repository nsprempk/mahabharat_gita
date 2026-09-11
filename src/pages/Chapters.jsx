import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

import ChapterCard from "../components/gita/ChapterCard";
import Loader from "../components/common/Loader";

import { getChapters } from "../services/gitaService";

export default function Chapters() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadChapters = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getChapters();

      console.log("Chapters received:", data);

      /*
       * Make sure every chapter has a reliable chapter number.
       * Supports both:
       * chapterNumber
       * number
       */
      const normalizedChapters = Array.isArray(data)
        ? data
            .map((chapter, index) => ({
              ...chapter,
              chapterNumber:
                Number(
                  chapter?.chapterNumber ??
                    chapter?.number ??
                    chapter?.chapter ??
                    index + 1,
                ) || index + 1,
            }))
            .sort((a, b) => a.chapterNumber - b.chapterNumber)
        : [];

      setChapters(normalizedChapters);
    } catch (err) {
      console.error("Failed to load chapters:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load chapters. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChapters();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-spiritual-cream">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-spiritual-cream px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="font-medium text-red-700">{error}</p>

          <button
            type="button"
            onClick={loadChapters}
            className="mt-5 rounded-full bg-saffron-600 px-6 py-3 font-semibold text-white transition hover:bg-saffron-700"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-spiritual-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-saffron-700">
            श्रीमद्भगवद्गीता
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bhagavad Gita Adhyay
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Explore all 18 chapters of the Bhagavad Gita, with Sanskrit shlokas
            and their meanings in Hindi and English.
          </p>
        </div>

        {/* EMPTY STATE */}
        {chapters.length === 0 ? (
          <div className="rounded-3xl border border-saffron-100 bg-white p-12 text-center shadow-sm">
            <BookOpen size={42} className="mx-auto text-saffron-600" />

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              No chapters available
            </h2>

            <p className="mt-2 text-gray-600">
              Please check your database and try again.
            </p>
          </div>
        ) : (
          <>
            {/* CHAPTER COUNT */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-bold text-gray-700">
                {chapters.length} Chapters
              </p>

              <p className="text-sm font-semibold text-gray-500">
                श्रीमद्भगवद्गीता
              </p>
            </div>

            {/* CHAPTERS */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.chapterNumber}
                  to={`/adhyay/${chapter.chapterNumber}`}
                  className="block h-full"
                >
                  <ChapterCard chapter={chapter} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Loader from "../components/common/Loader";
import ShlokaCard from "../components/gita/ShlokaCard";
import ChapterNavigation from "../components/gita/ChapterNavigation";
import { getChapter, getShlokas } from "../services/gitaService";
import { useLanguage } from "../context/LanguageContext";

export default function Chapter() {
  const { chapterNumber, shlokaNumber } = useParams();
  const navigate = useNavigate();

  const { language } = useLanguage();

  const [chapter, setChapter] = useState(null);
  const [shlokas, setShlokas] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [bookmarked, setBookmarked] = useState([]);

  const currentChapterNumber = Number(chapterNumber);

  const requestedShlokaNumber = shlokaNumber ? Number(shlokaNumber) : null;

  /*
   * Get a reliable shloka number from the API object.
   */
  const getVerseNumber = (shloka) => {
    return (
      shloka?.verseNumber ??
      shloka?.number ??
      shloka?.verse ??
      shloka?.shlokaNumber ??
      shloka?.verse_no ??
      null
    );
  };

  /*
   * Load chapter and shlokas
   */
  useEffect(() => {
    const loadChapter = async () => {
      try {
        setLoading(true);
        setError("");

        if (
          !Number.isInteger(currentChapterNumber) ||
          currentChapterNumber < 1 ||
          currentChapterNumber > 18
        ) {
          setError("Invalid chapter number.");
          return;
        }

        const [chapterData, shlokaData] = await Promise.all([
          getChapter(currentChapterNumber),
          getShlokas(currentChapterNumber),
        ]);

        console.log("Chapter:", chapterData);
        console.log("Shlokas:", shlokaData);

        setChapter(chapterData);
        setShlokas(Array.isArray(shlokaData) ? shlokaData : []);
      } catch (err) {
        console.error("Failed to load chapter:", err);

        setChapter(null);
        setShlokas([]);

        setError(
          err?.response?.data?.message ||
            "Unable to load this chapter. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadChapter();
  }, [currentChapterNumber]);

  /*
   * Find requested shloka.
   *
   * If no shloka number is present,
   * show the first shloka.
   */
  const currentIndex = useMemo(() => {
    if (!shlokas.length) {
      return -1;
    }

    if (!requestedShlokaNumber) {
      return 0;
    }

    return shlokas.findIndex(
      (shloka) => Number(getVerseNumber(shloka)) === requestedShlokaNumber,
    );
  }, [shlokas, requestedShlokaNumber]);

  const currentShloka = currentIndex >= 0 ? shlokas[currentIndex] : null;

  const currentVerseNumber = currentShloka
    ? getVerseNumber(currentShloka)
    : null;

  /*
   * Open a specific shloka
   */
  const openShloka = (verseNumber) => {
    if (verseNumber === null || verseNumber === undefined) {
      return;
    }

    navigate(`/adhyay/${currentChapterNumber}/shloka/${verseNumber}`);
  };

  /*
   * Previous shloka
   */
  const goPreviousShloka = () => {
    if (currentIndex <= 0) {
      return;
    }

    const previous = shlokas[currentIndex - 1];

    openShloka(getVerseNumber(previous));
  };

  /*
   * Next shloka
   */
  const goNextShloka = () => {
    if (currentIndex < 0 || currentIndex >= shlokas.length - 1) {
      return;
    }

    const next = shlokas[currentIndex + 1];

    openShloka(getVerseNumber(next));
  };

  /*
   * Previous chapter
   */
  const goPreviousChapter = () => {
    if (currentChapterNumber <= 1) {
      return;
    }

    navigate(`/adhyay/${currentChapterNumber - 1}`);
  };

  /*
   * Next chapter
   */
  const goNextChapter = () => {
    if (currentChapterNumber >= 18) {
      return;
    }

    navigate(`/adhyay/${currentChapterNumber + 1}`);
  };

  /*
   * Bookmark
   */
  const toggleBookmark = (verseNumber) => {
    setBookmarked((current) => {
      if (current.includes(verseNumber)) {
        return current.filter((number) => number !== verseNumber);
      }

      return [...current, verseNumber];
    });
  };

  /*
   * Loading
   */
  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-spiritual-cream">
        <Loader />
      </div>
    );
  }

  /*
   * Error
   */
  if (error) {
    return (
      <section className="min-h-screen bg-spiritual-cream px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
          <h1 className="text-xl font-bold text-red-800">
            Unable to Load Chapter
          </h1>

          <p className="mt-3 text-red-700">{error}</p>

          <Link
            to="/adhyay"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
          >
            <ArrowLeft size={18} />
            Back to Chapters
          </Link>
        </div>
      </section>
    );
  }

  /*
   * Chapter wasn't returned
   */
  if (!chapter) {
    return (
      <section className="min-h-screen bg-spiritual-cream px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">Chapter Not Found</h1>

          <p className="mt-3 text-gray-600">
            Chapter {currentChapterNumber} could not be found.
          </p>

          <Link
            to="/adhyay"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-bold text-white"
          >
            <ArrowLeft size={18} />
            Back to Chapters
          </Link>
        </div>
      </section>
    );
  }

  /*
   * Invalid shloka URL
   */
  if (requestedShlokaNumber && !currentShloka) {
    return (
      <section className="min-h-screen bg-spiritual-cream px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">Shloka Not Found</h1>

          <p className="mt-3 text-gray-600">
            Shloka {requestedShlokaNumber} does not exist in this chapter.
          </p>

          <Link
            to={`/adhyay/${currentChapterNumber}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-bold text-white"
          >
            <ArrowLeft size={18} />
            View Chapter
          </Link>
        </div>
      </section>
    );
  }

  /*
   * Chapter information
   */
  const chapterTitle =
    language === "hi"
      ? chapter.hindiName || chapter.nameHindi || ""
      : chapter.englishName || chapter.nameEnglish || "";

  const chapterDescription =
    language === "hi"
      ? chapter.descriptionHindi || ""
      : chapter.descriptionEnglish || "";

  const chapterNumberDisplay =
    chapter.number || chapter.chapterNumber || currentChapterNumber;

  const chapterSanskrit = chapter.sanskritName || chapter.nameSanskrit || "";

  const totalShlokas =
    chapter.totalShlokas || chapter.shlokaCount || shlokas.length || 0;

  return (
    <section className="min-h-screen bg-spiritual-cream px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* BACK TO CHAPTERS */}
        <Link
          to="/adhyay"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition hover:text-orange-800"
        >
          <ArrowLeft size={17} />

          {language === "hi" ? "सभी अध्याय" : "All Chapters"}
        </Link>

        {/* CHAPTER HEADER */}
        <div className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                {/* CHAPTER NUMBER */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-extrabold text-white shadow-md">
                  {chapterNumberDisplay}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                    {language === "hi"
                      ? `अध्याय ${chapterNumberDisplay}`
                      : `Chapter ${chapterNumberDisplay}`}
                  </p>

                  <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {chapterTitle}
                  </h1>
                </div>
              </div>

              {chapterSanskrit && (
                <p
                  className="mt-5 text-lg font-bold leading-8 text-orange-700"
                  lang="sa"
                >
                  {chapterSanskrit}
                </p>
              )}

              {chapterDescription && (
                <p className="mt-4 leading-8 text-gray-600">
                  {chapterDescription}
                </p>
              )}
            </div>

            {/* SHLOKA COUNT */}
            <div className="shrink-0 rounded-2xl bg-orange-50 px-5 py-4 text-center">
              <BookOpen size={22} className="mx-auto text-orange-600" />

              <p className="mt-2 text-2xl font-bold text-orange-700">
                {totalShlokas}
              </p>

              <p className="text-xs font-semibold text-gray-600">
                {language === "hi" ? "श्लोक" : "Shlokas"}
              </p>
            </div>
          </div>
        </div>

        {/* CHAPTER NAVIGATION */}
        <div className="mt-6">
          <ChapterNavigation
            chapterNumber={currentChapterNumber}
            onPrevious={goPreviousChapter}
            onNext={goNextChapter}
          />
        </div>

        {/* SHLOKA NAVIGATION */}
        {currentShloka && (
          <div className="mt-8 rounded-3xl border border-saffron-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-3">
              {/* PREVIOUS SHLOKA */}
              <button
                type="button"
                onClick={goPreviousShloka}
                disabled={currentIndex <= 0}
                className="flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-bold text-orange-700 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={18} />

                <span className="hidden sm:inline">
                  {language === "hi" ? "पिछला श्लोक" : "Previous Shloka"}
                </span>

                <span className="sm:hidden">Previous</span>
              </button>

              {/* CURRENT SHLOKA NUMBER */}
              <div className="min-w-[80px] text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {language === "hi" ? "श्लोक" : "Shloka"}
                </p>

                <p className="mt-1 text-xl font-extrabold text-orange-700">
                  {currentVerseNumber || "—"}
                  {" / "}
                  {shlokas.length}
                </p>
              </div>

              {/* NEXT SHLOKA */}
              <button
                type="button"
                onClick={goNextShloka}
                disabled={currentIndex >= shlokas.length - 1}
                className="flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="hidden sm:inline">
                  {language === "hi" ? "अगला श्लोक" : "Next Shloka"}
                </span>

                <span className="sm:hidden">Next</span>

                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* CURRENT SHLOKA */}
        {currentShloka ? (
          <div className="relative mt-8">
            {/* Bookmark */}
            <button
              type="button"
              onClick={() => toggleBookmark(currentVerseNumber)}
              title={
                bookmarked.includes(currentVerseNumber)
                  ? "Remove bookmark"
                  : "Bookmark shloka"
              }
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-orange-50 hover:text-orange-600"
            >
              {bookmarked.includes(currentVerseNumber) ? (
                <BookmarkCheck size={20} className="text-orange-600" />
              ) : (
                <Bookmark size={20} />
              )}
            </button>

            <ShlokaCard shloka={currentShloka} language={language} />
          </div>
        ) : (
          <div className="mt-8 rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-gray-600">
              {language === "hi"
                ? "इस अध्याय में अभी कोई श्लोक उपलब्ध नहीं है।"
                : "No shlokas are available in this chapter yet."}
            </p>
          </div>
        )}

        {/* SHLOKA LIST */}
        {shlokas.length > 1 && (
          <div className="mt-10 rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-900">
                {language === "hi" ? "श्लोक सूची" : "Shloka List"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {language === "hi"
                  ? "किसी भी श्लोक को पढ़ने के लिए चुनें"
                  : "Select a shloka to read it"}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
              {shlokas.map((shloka, index) => {
                const shlokaNumber = getVerseNumber(shloka) ?? index + 1;

                const isCurrent =
                  Number(shlokaNumber) === Number(currentVerseNumber);

                return (
                  <button
                    key={shloka._id || shlokaNumber || index}
                    type="button"
                    onClick={() => openShloka(shlokaNumber)}
                    className={`min-h-11 rounded-xl px-2 py-2.5 text-sm font-extrabold transition ${
                      isCurrent
                        ? "bg-orange-600 text-white shadow-md"
                        : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                    }`}
                  >
                    {shlokaNumber}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM NAVIGATION */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={goPreviousChapter}
            disabled={currentChapterNumber <= 1}
            className="flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-5 py-4 font-bold text-orange-700 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft size={19} />

            {language === "hi" ? "पिछला अध्याय" : "Previous Chapter"}
          </button>

          <button
            type="button"
            onClick={goNextChapter}
            disabled={currentChapterNumber >= 18}
            className="flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-5 py-4 font-bold text-white shadow-sm transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {language === "hi" ? "अगला अध्याय" : "Next Chapter"}

            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}

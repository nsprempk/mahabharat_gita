import { Bookmark, BookmarkCheck } from "lucide-react";

import AudioPlayer from "./AudioPlayer";

export default function ShlokaCard({ shloka, language = "hi" }) {
  if (!shloka) {
    return null;
  }

  /*
   * --------------------------------------------------
   * Shloka number
   * --------------------------------------------------
   *
   * Support multiple possible backend field names.
   */
  const verseNumber =
    shloka?.verseNumber ??
    shloka?.number ??
    shloka?.verse ??
    shloka?.shlokaNumber ??
    shloka?.verse_no ??
    "";

  /*
   * --------------------------------------------------
   * Sanskrit
   * --------------------------------------------------
   */
  const sanskrit =
    shloka?.sanskrit ?? shloka?.textSanskrit ?? shloka?.text ?? "";

  /*
   * --------------------------------------------------
   * Hindi meaning
   * --------------------------------------------------
   */
  const hindiMeaning =
    shloka?.hindiMeaning ?? shloka?.hindi ?? shloka?.meaningHindi ?? "";

  /*
   * --------------------------------------------------
   * English meaning
   * --------------------------------------------------
   */
  const englishMeaning =
    shloka?.englishMeaning ?? shloka?.english ?? shloka?.meaningEnglish ?? "";

  const meaning = language === "hi" ? hindiMeaning : englishMeaning;

  /*
   * --------------------------------------------------
   * Clean meaning for text-to-speech
   * --------------------------------------------------
   */
  const cleanMeaningForAudio = (text) => {
    if (!text) {
      return "";
    }

    return (
      text
        // Remove numbering such as ।।1.1।।
        .replace(/।।\s*[०-९0-9]+\s*[.:।-]\s*[०-९0-9]+\s*।।/g, "")

        // Remove commentary references
        .replace(
          /\(\s*टिप्पणी\s*प[०-९0-9oO0]*\.?\s*[०-९0-9]+(?:\.[०-९0-9]+)?\s*\)/gi,
          "",
        )

        // Remove extra spaces
        .replace(/\s{2,}/g, " ")

        .trim()
    );
  };

  const meaningAudioText = cleanMeaningForAudio(meaning);

  /*
   * --------------------------------------------------
   * Audio
   * --------------------------------------------------
   */
  const shlokaAudio = shloka?.audio?.shloka ?? null;

  const meaningAudio =
    language === "hi"
      ? (shloka?.audio?.hindiMeaning ?? null)
      : (shloka?.audio?.englishMeaning ?? null);

  /*
   * --------------------------------------------------
   * Bookmark
   * --------------------------------------------------
   *
   * UI only for now.
   */
  const isBookmarked = false;

  return (
    <article className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-4">
        {/* SHLOKA NUMBER */}
        <span
          className="
            inline-flex
            min-h-10
            items-center
            justify-center
            rounded-full
            bg-orange-600
            px-5
            py-2
            text-sm
            font-extrabold
            text-white
            shadow-sm
          "
        >
          {language === "hi"
            ? `श्लोक ${verseNumber || "—"}`
            : `Shloka ${verseNumber || "—"}`}
        </span>

        {/* BOOKMARK */}
        <button
          type="button"
          title={isBookmarked ? "Remove Bookmark" : "Bookmark Shloka"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-orange-50 hover:text-orange-600"
        >
          {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
        </button>
      </div>

      {/* SANSKRIT */}
      <div className="mt-8">
        {sanskrit ? (
          <p
            className="
              whitespace-pre-line
              text-center
              text-xl
              font-bold
              leading-[2.2]
              text-gray-900
              sm:text-2xl
            "
            lang="sa"
          >
            {sanskrit}
          </p>
        ) : (
          <p className="text-center text-sm italic text-gray-400">
            Sanskrit shloka is not available yet.
          </p>
        )}
      </div>

      {/* SANSKRIT AUDIO */}
      <div className="mt-7">
        <AudioPlayer
          audio={shlokaAudio}
          text={sanskrit}
          language="sa"
          label={language === "hi" ? "श्लोक सुनें" : "Listen to Shloka"}
        />
      </div>

      {/* MEANING */}
      <div className="mt-8 border-t border-gray-100 pt-7">
        <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600">
          {language === "hi" ? "अर्थ" : "Meaning"}
        </h3>

        {meaning ? (
          <p
            className="mt-4 text-base leading-8 text-gray-700"
            lang={language === "hi" ? "hi" : "en"}
          >
            {meaning}
          </p>
        ) : (
          <p className="mt-4 text-sm italic text-gray-400">
            {language === "hi"
              ? "हिंदी अर्थ उपलब्ध नहीं है।"
              : "English meaning is not available yet."}
          </p>
        )}
      </div>

      {/* MEANING AUDIO */}
      <div className="mt-6">
        <AudioPlayer
          audio={meaningAudio}
          text={meaningAudioText}
          language={language}
          label={
            language === "hi" ? "हिंदी अर्थ सुनें" : "Listen to English Meaning"
          }
        />
      </div>
    </article>
  );
}

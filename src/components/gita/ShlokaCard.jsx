import { Bookmark, BookmarkCheck } from "lucide-react";

import AudioPlayer from "./AudioPlayer";

export default function ShlokaCard({ shloka, language = "hi" }) {
  /*
   * Support MongoDB and older frontend field names.
   */

  const verseNumber =
    shloka?.verseNumber ?? shloka?.number ?? shloka?.verse ?? "";

  const sanskrit = shloka?.sanskrit ?? shloka?.textSanskrit ?? "";

  const hindiMeaning =
    shloka?.hindiMeaning ?? shloka?.hindi ?? shloka?.meaningHindi ?? "";

  const englishMeaning =
    shloka?.englishMeaning ?? shloka?.english ?? shloka?.meaningEnglish ?? "";

  const meaning = language === "hi" ? hindiMeaning : englishMeaning;

  /*
   * Audio URLs.
   *
   * If these exist in MongoDB, AudioPlayer will use
   * the real audio file.
   *
   * If they don't exist, AudioPlayer automatically
   * uses browser Text-to-Speech.
   */

  const shlokaAudio = shloka?.audio?.shloka ?? null;

  const meaningAudio =
    language === "hi"
      ? (shloka?.audio?.hindiMeaning ?? null)
      : (shloka?.audio?.englishMeaning ?? null);

  /*
   * Bookmark UI.
   *
   * Bookmark API will be connected later.
   */
  const isBookmarked = false;

  return (
    <article className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-saffron-50 px-4 py-1.5 text-sm font-bold text-saffron-700">
          {language === "hi" ? `श्लोक ${verseNumber}` : `Shloka ${verseNumber}`}
        </span>

        <button
          type="button"
          title={isBookmarked ? "Remove Bookmark" : "Bookmark Shloka"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-saffron-50 hover:text-saffron-600"
        >
          {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
        </button>
      </div>

      {/* Sanskrit */}
      <div className="mt-8">
        <p
          className="whitespace-pre-line text-center text-xl font-bold leading-[2.2] text-gray-900 sm:text-2xl"
          lang="sa"
        >
          {sanskrit}
        </p>
      </div>

      {/* Sanskrit Audio */}
      <div className="mt-7">
        <AudioPlayer
          audio={shlokaAudio}
          text={sanskrit}
          language="hi"
          label={language === "hi" ? "श्लोक सुनें" : "Listen to Shloka"}
        />
      </div>

      {/* Meaning */}
      <div className="mt-8 border-t border-gray-100 pt-7">
        <h3 className="text-sm font-bold uppercase tracking-wider text-saffron-600">
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

      {/* Meaning Audio */}
      <div className="mt-6">
        <AudioPlayer
          audio={meaningAudio}
          text={meaning}
          language={language}
          label={
            language === "hi" ? "हिंदी अर्थ सुनें" : "Listen to English Meaning"
          }
        />
      </div>
    </article>
  );
}

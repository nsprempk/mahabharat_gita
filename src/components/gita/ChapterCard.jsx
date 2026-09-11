import { ArrowRight, BookOpen } from "lucide-react";

export default function ChapterCard({ chapter }) {
  if (!chapter) return null;

  /*
   * Get chapter number from all possible API field names.
   * This makes the number visible even if MongoDB returns
   * number, chapterNumber, chapter, or chapter_no.
   */
  const chapterNumber =
    chapter.chapterNumber ??
    chapter.number ??
    chapter.chapter ??
    chapter.chapter_no ??
    "";

  const nameSanskrit =
    chapter.nameSanskrit ?? chapter.sanskritName ?? chapter.sanskrit ?? "";

  const nameHindi =
    chapter.nameHindi ?? chapter.hindiName ?? chapter.hindi ?? "";

  const nameEnglish =
    chapter.nameEnglish ?? chapter.englishName ?? chapter.english ?? "";

  const descriptionHindi = chapter.descriptionHindi ?? "";

  const descriptionEnglish = chapter.descriptionEnglish ?? "";

  const totalShlokas =
    chapter.totalShlokas ?? chapter.shlokaCount ?? chapter.totalVerses ?? 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* TOP */}
      <div className="flex items-center justify-between">
        {/* Chapter Number */}
        <div
          className="
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-full
            bg-orange-600
            text-xl
            font-extrabold
            leading-none
            text-white
            shadow-md
          "
          aria-label={`Chapter ${chapterNumber}`}
        >
          {chapterNumber || "—"}
        </div>

        {/* Book Icon */}
        <BookOpen
          size={24}
          strokeWidth={2}
          className="text-orange-500 transition duration-300 group-hover:text-orange-700"
        />
      </div>

      {/* CHAPTER NAMES */}
      <div className="mt-6 min-h-[120px]">
        {nameSanskrit && (
          <p className="text-lg font-bold leading-8 text-gray-900" lang="sa">
            {nameSanskrit}
          </p>
        )}

        {nameHindi && (
          <h2 className="mt-2 text-xl font-bold leading-8 text-orange-700">
            {nameHindi}
          </h2>
        )}

        {nameEnglish && (
          <p className="mt-2 text-sm leading-6 text-gray-600">{nameEnglish}</p>
        )}
      </div>

      {/* DESCRIPTION */}
      {(descriptionHindi || descriptionEnglish) && (
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {descriptionHindi || descriptionEnglish}
        </p>
      )}

      {/* BOTTOM */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        {/* Shloka Count */}
        <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
          {totalShlokas} Shlokas
        </span>

        {/* Read */}
        <span className="flex items-center gap-1 text-sm font-bold text-orange-600 transition-all duration-200 group-hover:gap-2">
          Read
          <ArrowRight size={17} />
        </span>
      </div>
    </article>
  );
}

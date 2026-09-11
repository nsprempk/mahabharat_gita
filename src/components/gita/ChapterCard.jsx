import { ArrowRight, BookOpen } from "lucide-react";

export default function ChapterCard({ chapter }) {
  // Support MongoDB fields and older frontend fields
  const chapterNumber = chapter?.chapterNumber ?? chapter?.number ?? "";

  const nameSanskrit = chapter?.nameSanskrit ?? chapter?.sanskritName ?? "";

  const nameHindi = chapter?.nameHindi ?? chapter?.hindiName ?? "";

  const nameEnglish = chapter?.nameEnglish ?? chapter?.englishName ?? "";

  const descriptionHindi = chapter?.descriptionHindi ?? "";

  const descriptionEnglish = chapter?.descriptionEnglish ?? "";

  const totalShlokas = chapter?.totalShlokas ?? 0;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Chapter number and icon */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-500 font-bold text-white shadow-md">
          {chapterNumber}
        </div>

        <BookOpen
          size={22}
          className="text-saffron-400 transition duration-300 group-hover:text-saffron-600"
        />
      </div>

      {/* Chapter names */}
      <div className="mt-6">
        {nameSanskrit && (
          <p className="text-lg font-bold leading-8 text-gray-900" lang="sa">
            {nameSanskrit}
          </p>
        )}

        {nameHindi && (
          <h2 className="mt-2 text-xl font-bold text-saffron-700">
            {nameHindi}
          </h2>
        )}

        {nameEnglish && (
          <p className="mt-2 text-sm leading-6 text-gray-600">{nameEnglish}</p>
        )}
      </div>

      {/* Description */}
      {(descriptionHindi || descriptionEnglish) && (
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {descriptionHindi || descriptionEnglish}
        </p>
      )}

      {/* Bottom */}
      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="rounded-full bg-saffron-50 px-3 py-1.5 text-xs font-bold text-saffron-700">
          {totalShlokas} Shlokas
        </span>

        <span className="flex items-center gap-1 text-sm font-bold text-saffron-600 transition-all duration-200 group-hover:gap-2">
          Read
          <ArrowRight size={17} />
        </span>
      </div>
    </article>
  );
}

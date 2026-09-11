import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ChapterNavigation({
  chapterNumber,
  onPrevious,
  onNext,
}) {
  const isFirstChapter = Number(chapterNumber) <= 1;
  const isLastChapter = Number(chapterNumber) >= 18;

  return (
    <div className="rounded-3xl border border-stone-300 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-4">
        {/* Previous Chapter */}
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstChapter}
          className="flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:bg-orange-50 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={17} />

          <span className="hidden sm:inline">Previous Chapter</span>

          <span className="sm:hidden">Previous</span>
        </button>

        {/* Chapter Number */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Chapter
          </p>

          <p className="mt-1 text-base font-bold text-stone-900">
            {chapterNumber} / 18
          </p>
        </div>

        {/* Next Chapter */}
        <button
          type="button"
          onClick={onNext}
          disabled={isLastChapter}
          className="flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="hidden sm:inline">Next Chapter</span>

          <span className="sm:hidden">Next</span>

          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ChapterNavigation({
  chapterNumber,
  onPrevious,
  onNext,
}) {
  const currentChapter = Number(chapterNumber) || 1;

  const isFirstChapter = currentChapter <= 1;
  const isLastChapter = currentChapter >= 18;

  return (
    <div className="w-full rounded-3xl border border-stone-200 bg-white p-4 shadow-md sm:p-5">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Previous Chapter */}
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstChapter}
          aria-label="Previous Chapter"
          className="flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-orange-50 hover:text-orange-700 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5"
        >
          <ArrowLeft size={17} />

          <span className="hidden sm:inline">Previous Chapter</span>

          <span className="sm:hidden">Previous</span>
        </button>

        {/* Chapter Number */}
        <div className="min-w-[70px] rounded-2xl bg-orange-50 px-3 py-2 text-center sm:min-w-[100px] sm:px-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600 sm:text-xs">
            Chapter
          </p>

          <p className="mt-0.5 text-lg font-extrabold leading-tight text-orange-700 sm:text-xl">
            {currentChapter} / 18
          </p>
        </div>

        {/* Next Chapter */}
        <button
          type="button"
          onClick={onNext}
          disabled={isLastChapter}
          aria-label="Next Chapter"
          className="flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full bg-orange-600 px-3 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5"
        >
          <span className="hidden sm:inline">Next Chapter</span>

          <span className="sm:hidden">Next</span>

          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

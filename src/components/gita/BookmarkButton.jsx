import { Bookmark } from "lucide-react";
import { useState } from "react";

export default function BookmarkButton({ chapterNumber, verseNumber }) {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked((previous) => !previous);
  };

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
        bookmarked
          ? "bg-orange-100 text-orange-700"
          : "text-gray-400 hover:bg-orange-50 hover:text-orange-600"
      }`}
    >
      <Bookmark size={19} fill={bookmarked ? "currentColor" : "none"} />
    </button>
  );
}

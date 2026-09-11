import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

import { searchGita } from "../services/gitaService";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setResults([]);
      return;
    }

    const data = await searchGita(query);
    setResults(data);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="sanskrit text-4xl font-bold text-spiritual-brown">
          श्लोक खोजें
        </h1>

        <p className="mt-3 text-stone-600">
          Search Sanskrit Shlokas, Hindi meanings or English meanings.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex overflow-hidden rounded-full border border-saffron-200 bg-white p-1 shadow-sm"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="min-w-0 flex-1 bg-transparent px-5 py-3 outline-none"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-saffron-500 px-6 font-semibold text-white hover:bg-saffron-600"
          >
            <SearchIcon size={18} />
            Search
          </button>
        </form>
      </div>

      <div className="mt-12 space-y-5">
        {results.map((result) => (
          <Link
            key={`${result.chapterNumber}-${result.number}`}
            to={`/adhyay/${result.chapterNumber}/shloka/${result.number}`}
            className="block rounded-2xl border border-saffron-100 bg-white p-6 shadow-spiritual hover:border-saffron-300"
          >
            <div className="text-sm font-bold text-saffron-600">
              Chapter {result.chapterNumber} · Shloka {result.number}
            </div>

            <p className="sanskrit mt-4 whitespace-pre-line text-xl font-bold leading-9 text-spiritual-brown">
              {result.sanskrit}
            </p>

            <p className="mt-4 line-clamp-2 text-sm leading-7 text-stone-600">
              {result.hindi}
            </p>
          </Link>
        ))}

        {query && results.length === 0 && (
          <div className="py-12 text-center text-stone-500">
            No Shlokas found.
          </div>
        )}
      </div>
    </section>
  );
}

import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Bookmarks() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
          <Heart size={28} />
        </div>

        <h1 className="sanskrit mt-5 text-4xl font-bold text-spiritual-brown">
          मेरे पसंदीदा श्लोक
        </h1>

        <p className="mt-4 text-stone-600">
          Your bookmarked Shlokas will appear here.
        </p>

        <Link
          to="/adhyay"
          className="mt-7 inline-block rounded-full bg-saffron-500 px-6 py-3 font-semibold text-white hover:bg-saffron-600"
        >
          Explore Shlokas
        </Link>
      </div>
    </section>
  );
}

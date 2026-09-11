import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-saffron-100 bg-[#3d2b1f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="sanskrit mb-3 text-2xl font-bold">भगवद्गीता</div>

          <p className="max-w-md text-sm leading-7 text-stone-300">
            Read the Bhagavad Gita in Sanskrit with Hindi and English meanings
            and experience the wisdom of the Gita through audio.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>

          <div className="space-y-3 text-sm text-stone-300">
            <Link className="block hover:text-white" to="/">
              Home
            </Link>
            <Link className="block hover:text-white" to="/adhyay">
              All Adhyayas
            </Link>
            <Link className="block hover:text-white" to="/search">
              Search Shlokas
            </Link>
            <Link className="block hover:text-white" to="/about">
              About
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>

          <p className="text-sm text-stone-300">Support</p>

          <a
            href="mailto:support@bhagavadgita.site"
            className="mt-1 block text-sm text-saffron-300 hover:text-white"
          >
            support@bhagavadgita.site
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Bhagavad Gita. All rights reserved.
      </div>
    </footer>
  );
}

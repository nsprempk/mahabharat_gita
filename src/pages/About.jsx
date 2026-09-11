import { Link } from "react-router-dom";
import { BookOpen, Heart, Languages, Volume2 } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-spiritual-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-saffron-600">
              BhagavadGita.site
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              About Us
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              A simple online resource for reading, exploring, and understanding
              the teachings of the Bhagavad Gita.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-saffron-50 p-6 text-center">
              <BookOpen className="mx-auto text-saffron-600" size={28} />
              <h2 className="mt-4 font-bold text-gray-900">18 Chapters</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore the chapters of the Bhagavad Gita.
              </p>
            </div>

            <div className="rounded-2xl bg-saffron-50 p-6 text-center">
              <Languages className="mx-auto text-saffron-600" size={28} />
              <h2 className="mt-4 font-bold text-gray-900">
                Multiple Languages
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Read available meanings in Hindi and English.
              </p>
            </div>

            <div className="rounded-2xl bg-saffron-50 p-6 text-center">
              <Volume2 className="mx-auto text-saffron-600" size={28} />
              <h2 className="mt-4 font-bold text-gray-900">Audio</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Listen to available shloka and meaning audio.
              </p>
            </div>

            <div className="rounded-2xl bg-saffron-50 p-6 text-center">
              <Heart className="mx-auto text-saffron-600" size={28} />
              <h2 className="mt-4 font-bold text-gray-900">Easy to Explore</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Designed for a simple and comfortable reading experience.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8 leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>

              <p className="mt-4">
                The Bhagavad Gita contains timeless teachings about duty,
                knowledge, action, devotion, self-discipline, and spiritual
                wisdom.
              </p>

              <p className="mt-4">
                Our goal is to make this knowledge easier to access online
                through a clean, organized, and user-friendly website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                What You Can Find
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>All 18 chapters of the Bhagavad Gita.</li>
                <li>Individual shlokas organized by chapter.</li>
                <li>Sanskrit verses.</li>
                <li>Hindi meanings.</li>
                <li>English meanings.</li>
                <li>Available audio features.</li>
                <li>Chapter and shloka navigation.</li>
                <li>Search functionality.</li>
                <li>Bookmark functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Content and Sources
              </h2>

              <p className="mt-4">
                BhagavadGita.site presents Bhagavad Gita-related material in an
                organized digital format. Some translations and reference
                material may originate from publicly available sources.
              </p>

              <p className="mt-4">
                Translations and interpretations can differ between authors,
                traditions, and sources. We encourage readers to consult
                appropriate original or scholarly sources when accuracy is
                important for academic, religious, or research purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment
              </h2>

              <p className="mt-4">
                We aim to provide a useful, accessible, and respectful
                experience for people interested in reading and learning about
                the Bhagavad Gita.
              </p>

              <p className="mt-4">
                We continuously work to improve the website, its content
                presentation, navigation, and functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Have Feedback?
              </h2>

              <p className="mt-4">
                If you notice an issue, have a suggestion, or would like to
                contact us, we would be happy to hear from you.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex rounded-full bg-saffron-500 px-6 py-3 font-bold text-white transition hover:bg-saffron-600"
              >
                Contact Us
              </Link>
            </section>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <Link
              to="/"
              className="font-semibold text-saffron-700 hover:text-saffron-800"
            >
              ← Back to BhagavadGita.site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

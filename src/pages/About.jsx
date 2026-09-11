export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <div className="rounded-3xl border border-saffron-100 bg-white p-8 shadow-spiritual sm:p-12">
        <div className="text-center">
          <div className="text-5xl text-saffron-500">ॐ</div>

          <h1 className="sanskrit mt-5 text-4xl font-bold text-spiritual-brown">
            भगवद्गीता के बारे में
          </h1>
        </div>

        <div className="mt-10 space-y-6 leading-8 text-stone-700">
          <p>
            Bhagavad Gita is a timeless spiritual dialogue between Lord Krishna
            and Arjuna, presented in the great Mahabharata.
          </p>

          <p>
            This website is designed to make the wisdom of the Bhagavad Gita
            accessible through Sanskrit Shlokas, Hindi meanings and English
            meanings.
          </p>

          <p>
            Users can also listen to Shlokas and meanings using audio playback.
          </p>

          <p>
            Our goal is to provide a simple, peaceful and accessible reading
            experience for everyone.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-saffron-50 p-6 text-center">
          <p className="sanskrit text-2xl font-bold text-saffron-800">
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।
          </p>
        </div>
      </div>
    </section>
  );
}

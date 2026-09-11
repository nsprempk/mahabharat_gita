import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-spiritual-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-10">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-saffron-100">
              <MessageSquare
                className="text-[#7a421f]"
                size={26}
                strokeWidth={2.5}
              />
            </div>

            <h1 className="mt-5 text-3xl font-bold text-gray-900">
              Contact Us
            </h1>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
              Have a question, suggestion, or feedback? We'd be happy to hear
              from you.
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Email Support */}
            <div className="rounded-2xl bg-saffron-50 p-6">
              <Mail className="text-[#7a421f]" size={26} strokeWidth={2.5} />

              <h2 className="mt-4 text-xl font-bold text-gray-900">
                Email Support
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                For questions, corrections, suggestions, or website-related
                concerns, contact us by email.
              </p>

              <a
                href="mailto:support@bhagavadgita.site"
                className="mt-5 inline-block font-semibold text-[#7a421f] hover:text-[#542b18]"
              >
                support@bhagavadgita.site
              </a>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                  <h2 className="text-xl font-bold text-green-800">
                    Thank You
                  </h2>

                  <p className="mt-3 leading-7 text-green-700">
                    Your message has been received. We appreciate your feedback.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-xl bg-[#7a421f] px-5 py-3 font-bold text-white transition hover:bg-[#542b18]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#7a421f] focus:ring-2 focus:ring-[#7a421f]/20"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#7a421f] focus:ring-2 focus:ring-[#7a421f]/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#7a421f] focus:ring-2 focus:ring-[#7a421f]/20"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7a421f] px-5 py-3.5 font-bold text-white shadow-md transition duration-200 hover:bg-[#542b18] hover:shadow-lg active:scale-[0.99]"
                  >
                    <Send size={18} strokeWidth={2.5} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

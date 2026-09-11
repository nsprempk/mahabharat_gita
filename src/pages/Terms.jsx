import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <section className="min-h-screen bg-spiritual-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="mb-10 border-b border-gray-100 pb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-saffron-600">
              BhagavadGita.site
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Terms &amp; Conditions
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Last updated: September 12, 2026
            </p>
          </div>

          <div className="space-y-8 leading-8 text-gray-700">
            <section>
              <p>
                Welcome to <strong>BhagavadGita.site</strong>. By accessing or
                using this website, you agree to these Terms &amp; Conditions.
              </p>

              <p className="mt-4">
                If you do not agree with these terms, please discontinue use of
                the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                1. Use of the Website
              </h2>

              <p className="mt-3">
                BhagavadGita.site provides online access to Bhagavad
                Gita-related educational and informational content, including
                chapters, shlokas, translations, audio features, search, and
                related website functionality.
              </p>

              <p className="mt-3">
                You agree to use the website only for lawful purposes and in a
                manner that does not interfere with the website's operation or
                security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                2. Educational and Informational Purpose
              </h2>

              <p className="mt-3">
                The content provided by BhagavadGita.site is primarily intended
                for educational, informational, and personal study purposes.
              </p>

              <p className="mt-3">
                Translations and interpretations of the Bhagavad Gita may differ
                between authors, traditions, and sources.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                3. Accuracy of Information
              </h2>

              <p className="mt-3">
                We make reasonable efforts to provide useful and accurate
                information. However, errors, omissions, translation
                differences, technical issues, or outdated information may
                occur.
              </p>

              <p className="mt-3">
                We do not guarantee that all information available on the
                website is completely accurate, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                4. Third-Party Services
              </h2>

              <p className="mt-3">
                The website may use third-party services for hosting, analytics,
                advertising, audio, content delivery, or other functionality.
              </p>

              <p className="mt-3">
                Third-party services may have their own terms and privacy
                policies. We are not responsible for third-party websites or
                services that are outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                5. Intellectual Property
              </h2>

              <p className="mt-3">
                The website design, original graphics, logos, software, and
                other original materials created for BhagavadGita.site may be
                protected by applicable intellectual property laws.
              </p>

              <p className="mt-3">
                Third-party materials remain the property of their respective
                owners.
              </p>

              <p className="mt-3">
                You may not reproduce, modify, distribute, or commercially
                exploit protected website materials without appropriate
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                6. Prohibited Activities
              </h2>

              <p className="mt-3">You agree not to:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Use the website for unlawful activities.</li>
                <li>Attempt unauthorized access to our systems.</li>
                <li>Interfere with website operation.</li>
                <li>Introduce malicious software or code.</li>
                <li>Attempt to disrupt website services.</li>
                <li>Abuse website forms or functionality.</li>
                <li>Use automated methods to harm or overload the website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                7. Advertising
              </h2>

              <p className="mt-3">
                BhagavadGita.site may display advertisements provided by
                third-party advertising networks, including Google AdSense.
              </p>

              <p className="mt-3">
                Advertisements are provided by third parties and do not
                necessarily represent an endorsement or recommendation by
                BhagavadGita.site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                8. Website Availability
              </h2>

              <p className="mt-3">
                We make reasonable efforts to keep the website available and
                functioning properly.
              </p>

              <p className="mt-3">
                However, we do not guarantee that the website will always be
                available, uninterrupted, secure, or free from technical
                problems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                9. Limitation of Liability
              </h2>

              <p className="mt-3">
                To the extent permitted by applicable law, BhagavadGita.site and
                its operators will not be responsible for losses or damages
                arising from your use of, or inability to use, the website or
                its content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                10. External Links
              </h2>

              <p className="mt-3">
                The website may contain links to third-party websites. We do not
                control those websites and are not responsible for their
                content, availability, security, or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                11. Changes to These Terms
              </h2>

              <p className="mt-3">
                We may update these Terms &amp; Conditions from time to time.
                Changes will be posted on this page together with an updated
                date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                12. Contact Us
              </h2>

              <p className="mt-3">
                If you have questions about these Terms &amp; Conditions, please
                contact us.
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-flex font-semibold text-saffron-700 hover:text-saffron-800"
              >
                Contact Us →
              </Link>
            </section>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-6">
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

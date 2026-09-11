import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-spiritual-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-saffron-100 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="mb-10 border-b border-gray-100 pb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-saffron-600">
              BhagavadGita.site
            </p>

            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Privacy Policy
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Last updated: September 12, 2026
            </p>
          </div>

          <div className="space-y-8 leading-8 text-gray-700">
            <div>
              <p>
                Welcome to <strong>BhagavadGita.site</strong>. We respect your
                privacy and are committed to being transparent about how
                information may be collected and used when you visit our
                website.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                1. Information We Collect
              </h2>

              <p className="mt-3">
                We may collect limited information depending on how you use our
                website.
              </p>

              <h3 className="mt-5 font-bold text-gray-900">
                Information You Provide
              </h3>

              <p className="mt-2">
                If you contact us, you may voluntarily provide information such
                as your name, email address, and the contents of your message.
              </p>

              <h3 className="mt-5 font-bold text-gray-900">
                Information Collected Automatically
              </h3>

              <p className="mt-2">
                When you visit our website, certain technical information may be
                collected automatically. This may include your IP address,
                browser type, device type, operating system, pages visited,
                referring website, and general website usage information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                2. Cookies and Similar Technologies
              </h2>

              <p className="mt-3">
                BhagavadGita.site may use cookies and similar technologies to
                provide website functionality, understand website traffic,
                improve the website, and support advertising services.
              </p>

              <p className="mt-3">
                Third-party advertising providers may use cookies, web beacons,
                IP addresses, or similar technologies to serve, measure, and
                personalize advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                3. Google AdSense
              </h2>

              <p className="mt-3">
                BhagavadGita.site may use Google AdSense to display
                advertisements.
              </p>

              <p className="mt-3">
                Google and its advertising partners may use cookies or similar
                technologies to provide, measure, and personalize advertising.
              </p>

              <p className="mt-3">
                Google may use information collected through advertising
                technologies when users visit websites that use Google's
                services.
              </p>

              <p className="mt-3">
                Users can manage certain advertising preferences through
                Google's advertising settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                4. How We Use Information
              </h2>

              <p className="mt-3">Information may be used to:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Operate and maintain the website.</li>
                <li>Improve website content and functionality.</li>
                <li>Respond to questions and support requests.</li>
                <li>Understand how visitors use the website.</li>
                <li>Detect and prevent security issues or abuse.</li>
                <li>Analyze website performance.</li>
                <li>Support advertising and monetization.</li>
                <li>Comply with applicable legal requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                5. Third-Party Services
              </h2>

              <p className="mt-3">
                We may use third-party services such as hosting providers,
                analytics services, advertising services, and other
                infrastructure necessary to operate the website.
              </p>

              <p className="mt-3">
                These third parties may process information according to their
                own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                6. External Links
              </h2>

              <p className="mt-3">
                Our website may contain links to external websites. We are not
                responsible for the privacy practices, content, or security of
                third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                7. Data Security
              </h2>

              <p className="mt-3">
                We take reasonable measures to protect information handled
                through our website. However, no method of Internet transmission
                or electronic storage can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                8. Children's Privacy
              </h2>

              <p className="mt-3">
                BhagavadGita.site is intended for a general audience. We do not
                knowingly collect personal information from children for the
                purpose of creating personal profiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                9. Your Privacy Choices
              </h2>

              <p className="mt-3">
                Depending on your location, you may have rights concerning your
                personal information, including rights to request access,
                correction, deletion, or information about how your data is
                used.
              </p>

              <p className="mt-3">
                You can contact us if you have a privacy-related request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                10. Changes to This Privacy Policy
              </h2>

              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page together with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                11. Contact Us
              </h2>

              <p className="mt-3">
                If you have questions about this Privacy Policy, please contact
                us.
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

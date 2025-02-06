import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Join() {
  return (
    <>
      <Navbar />

      {/* Join Page Content */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-pink-600">
            Join Sisters in Sync
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            S.I.S. (Sisters in Sync) is an initiative that bridges
            encouragement, sisterhood, and mentorship. Being part of
            our network is key to the Sisters in Sync movement! We can go far
            together but first, YOU have to sign up! And here's the best
            part...it's free! Yep, this a community that aims to reach for you
            and not your pocket! Read the information below and join the Sisters
            in Sync Network today!
          </p>
        </div>

        {/* Sections */}
        <div className="max-w-5xl mx-auto mt-10">
          {/* What is Sisters in Sync? */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">
              What is Sisters in Sync?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              The term "sis" has been thrown around so loosely that women have
              forgotten how important it is to support one another. **S.I.S.**
              is a re-commitment to sisters truly being one another's
              cheerleaders and confidants.
            </p>
          </div>

          {/* Who is S.I.S. for? */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">
              Who is S.I.S. for?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              The **S.I.S.** network has been crafted for young women between
              the ages of **18-28**. This pivotal age gap is essential for
              establishing one's life. Between these ages, a young lady is no
              longer a child, and she is not quite the woman that she hopes to
              become.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We have found that this is the prime intersection between
              mentorship and potential, drive and sustainability. So, whether
              you are fresh out of high school and entering college or diving
              into the workforce, **S.I.S. has something for you!**
            </p>
          </div>

          {/* How will this work? */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">
              How will this work? What are Truth Be Told Tuesdays?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Our main points of connection are digital. **Truth Be Told
              Tuesdays (T.B.T.)** are the sacred times of each month when we
              gather for group mentoring sessions.
            </p>
            <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
              <li>
                🗓️ **First Tuesday** of each month: *Mentor Moment is
                published.*
              </li>
              <li>
                🎙️ **Third Tuesday** of each month: *Podcast/Video is released,
                discussing the Mentor Moment and answering your questions.*
              </li>
              <li>
                📅 **One-on-one mentoring** is available upon appointment
                between T.B.T. sessions.
              </li>
            </ul>
          </div>

          {/* Sign Up Button */}
          <div className="text-center mt-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0QIojFy6pyYf9YdQzbh47ADWMFRX-qRsk78x61IP2GHVgaA/viewform?usp=send_form"
              target="_blank"
            >
              <button className="px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-700 transition">
                Sign Up for S.I.S.
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

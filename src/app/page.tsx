import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Sisters in Sync
          </h1>
          <Link href="/about">
            <button className="mt-6 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-700 transition">
              Enter
            </button>
          </Link>
        </div>
      </section>

      {/* Our Mission & Hours of Operation Section */}
      <section className="py-16 bg-[#321647] px-6 mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Our Mission - Left Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-lg text-white max-w-md">
              Our mission is to celebrate, uplift, and mentor young women as
              they blossom into the women they were created to be. Our mission
              is carried out through our digital mentoring model.
            </p>
          </div>

          {/* Hours of Operation - Right Side */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Hours of Operation</h2>
            <div className="mt-6 text-lg text-white">
              <p>Mon: 8:00pm - 11:00pm</p>
              <p>Tue: 8:00pm - 11:00pm</p>
              <p>Thurs: 8:00pm - 11:00pm</p>
              <p>Fri: 8:00pm - 11:00pm</p>
              <p>Sat: 8:00pm - 11:00pm</p>
              <p className="text-sm mt-2 text-white">
                *Times are in Eastern Standard Time
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

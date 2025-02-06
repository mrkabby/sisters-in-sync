import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Founder Section */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Founder Image - Left Side */}
          <div className="w-full md:w-1/2">
            <Image 
              src="/Natalie 2.jpg" // Update with the actual image filename
              alt="Natalie McKinney - Founder of Sisters in Sync"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Founder Information - Right Side */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-8">
            <h2 className="text-4xl font-bold text-gray-800">Our Founder</h2>
            <p className="mt-4 text-lg text-gray-700">
              Author, friend, confidant, visionary, mentor, and strategist are but a few words that describe **Natalie McKinney**.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Natalie is the founder of **Sisters in Sync**. She has a passion for using her gifts to inspire others.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Sisters in Sync is an initiative that Natalie believes can change the trajectory of young women's lives, one Tuesday at a time.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Sisterhood has become a pillar in Natalie's life, and she is excited to extend that space of connection to every young woman in the **S.I.S.** network.
            </p>

            {/* A Word from the Founder */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">A Word from Our Founder:</h3>
            <p className="mt-4 text-lg text-gray-700">
              "Honestly, I should have launched **S.I.S.** in 2018. I had been given the first wave of ideas, but I let fear hold me hostage. 
              I let my head narratives get the best of me. By the end of 2018, I became frustrated with fear.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              I got tired of flirting with my purpose and never entertaining it properly. I got tired of running from my assignment.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              So, I submitted to my purpose. I launched **S.I.S.** in the fourth quarter of 2019, not only because it was time, but because I believe that it was needed.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Young women in college and early adulthood need a place where they can be uplifted, celebrated, and mentored. That place may only be digital, but it exists. 
              That place is the **Sisters in Sync (S.I.S.)** network. Welcome home, my sisters."
            </p>

            <p className="mt-6 font-bold text-pink-600 text-xl">In Sync,</p>
            <p className="text-lg text-gray-700">Natalie McKinney</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

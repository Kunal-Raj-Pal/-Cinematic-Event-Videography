import annu from "../assets/img/ProfileImg/Annu.jpg";

function About({ dslrRef }) {
  return (
    <>
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-8">
                Behind the <span className="bg-red-600">Lens</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  With over a decade of experience capturing life's most
                  precious moments, I believe that every story deserves to be
                  told with artistry and authenticity.
                </p>

                <p>
                  <span className="bg-red-400 text-gray-300">
                    My approach combines cinematic techniques with
                    documentary-style storytelling,
                  </span>{" "}
                  ensuring that your memories are preserved not just as videos,
                  but as emotional experiences that transport you back to those
                  perfect moments.
                </p>

                <p>
                  From intimate weddings to grand celebrations, I'm passionate
                  about creating films that reflect the unique essence of each
                  couple and event.
                </p>
              </div>

              <div class="absolute w-32 h-32 bg-red-500 rounded-lg blur-3xl"></div>
              <div className="mt-12 grid grid-cols-3 gap-8 bg-white/10 p-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="font-serif font-black text-3xl text-red-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Weddings Filmed
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-black text-3xl text-red-600 mb-2">
                    7+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-black text-3xl text-red-600 mb-2">
                    10k+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    All Social Media Followers
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src={annu}
                  alt="Professional videographer"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-7 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-[0_0_15px_#ff0000]">
                  <div className="font-serif font-bold text-lg">
                    Anurag Singh
                  </div>
                  <div className="text-sm opacity-90">Lead Videographer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

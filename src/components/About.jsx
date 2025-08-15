import annu from "../assets/img/ProfileImg/Annu.jpg"

function About() {
  return (
    <>
         <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-8">Behind the Lens</h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over a decade of experience capturing life's most precious moments, I believe that every story
                deserves to be told with artistry and authenticity.
              </p>

              <p>
                My approach combines cinematic techniques with documentary-style storytelling, ensuring that your
                memories are preserved not just as videos, but as emotional experiences that transport you back to those
                perfect moments.
              </p>

              <p>
                From intimate weddings to grand celebrations, I'm passionate about creating films that reflect the
                unique essence of each couple and event.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-serif font-black text-3xl text-purple-600 mb-2">100+</div>
                <div className="text-sm text-gray-600 font-medium">Weddings Filmed</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-black text-3xl text-purple-600 mb-2">7+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-black text-3xl text-purple-600 mb-2">10k+</div>
                <div className="text-sm text-gray-600 font-medium">All Social Media Followers</div>
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
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="font-serif font-bold text-lg">Anurag Singh</div>
                <div className="text-sm opacity-90">Lead Videographer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
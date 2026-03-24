import { Projects } from "../Data/Projects";

function Potfolio() {
  return (
    <>
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">
              Our <span className="bg-red-600">Portfolio & Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Each project tells a unique story. Discover how we capture the
              essence of every moment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {Projects.map((item) => (
              <div
                key={item.pk}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              >
                <div className="group relative aspect-video overflow-hidden">
                  <img
                    src={`${item.image}`}
                    alt={item.name}
                    className="w-full object-top transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg border border-red-500 border md:border-2 "
                  />
                </div>
                {/* <p className="text-center py-2">{item.fields.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Potfolio;

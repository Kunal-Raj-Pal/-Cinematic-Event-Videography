import { Play, Heart, Users, Camera } from "lucide-react";
import Setup from "../assets/img/PortfolioImg/Setup.jpg";
import Neckless from "../assets/img/PortfolioImg/Neckless.jpg";
import Watch from "../assets/img/PortfolioImg/Watch.jpg";

function Potfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "My All Tools",
      category: "Personal",
      thumbnail: Setup,
      icon: Camera,
      description: "Dynamic coverage of my all tools",
    },
    {
      id: 2,
      title: "Interest",
      category: "Personal",
      thumbnail: Watch,
      icon: Heart,
      description: "Personal Interest To Click Something Unique",
    },
    {
      id: 3,
      title: "Fashion Week Backstage",
      category: "Fashion",
      thumbnail: Neckless,
      description: "Behind-the-scenes moments from fashion week",
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">
              Our <span className="bg-purple-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each project tells a unique story. Discover how{" "}
              <span className="bg-purple-300">
                we capture the essence of every moment.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              >
                <div className="group relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg"
                  />

                  {/* Overlay */}
                  <div className="bg:white/10 group-hover:backdrop-blur absolute inset-0 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-serif font-bold text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Potfolio;

import { Heart, Camera } from "lucide-react";
import Setup from "../assets/img/PortfolioImg/Setup.jpg";
import Neckless from "../assets/img/PortfolioImg/Neckless.jpg";
import Watch from "../assets/img/PortfolioImg/Watch.jpg";

function Potfolio() {
  const portfolioItems = [
    {
      id: 1,
      thumbnail: Setup,
      icon: Camera,
      service: "Event Coverage",
    },
    {
      id: 2,
      thumbnail: Watch,
      icon: Heart,
      service: "Reels & Highlights",
    },
    {
      id: 3,
      thumbnail: Neckless,
      service: "Weeding & Events",
    },
  ];

  // useGSAP(()=>{
  //   let lt = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: portfolioRef.current,
  //       start:"top 20%",
  //       end: "bottom 40%",
  //       scrub:2,
  //       // markers: true,
  //     }
  //   });

  //     lt.to(dslrRef.current,{
  //       rotate: 372,
  //       y: "203vh",
  //     })
  // });

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
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              >
                <div className="group relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg border border-red-500 border md:border-2 "
                  />
                </div>
                <p className="text-center py-2">{item.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Potfolio;

import { Heart, Camera } from "lucide-react";
import Setup from "../assets/img/PortfolioImg/Setup.jpg";
import Neckless from "../assets/img/PortfolioImg/Neckless.jpg";
import Watch from "../assets/img/PortfolioImg/Watch.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { offlineData } from "./offline";

function Potfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/api/projects`);
        const Data = res.data;
        // console.log(Data)
        setProjects(Data);
        setLoading(false);
      } catch (error) {
        console.log("Problem With Server...");
        setLoading(true);
        setProjects(offlineData);
      }
    };
    fetchData();
  }, []);

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
          {/* LoadingAnimationStart */}
          {loading && (
            <h3 className="bg-red-600 inline-block p-1 rounded-sm mb-5">
              Loading...{" "}
              <div className="border border-3 border-[#f3f3f3] border-t-[#3498db] h-5 w-5 inline-block rounded-full animate-spin"></div>
            </h3>
          )}
          {/* LoadingAnimationEnd */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((item) => (
              <div
                key={item.pk}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              >
                <div className="group relative aspect-video overflow-hidden">
                  <img
                    src={
                      loading
                        ? item.fields.image
                        : `https://res.cloudinary.com/dpvxrkuzb/${item.fields.image}`
                    }
                    alt={item.fields.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg border border-red-500 border md:border-2 "
                  />
                </div>
                <p className="text-center py-2">{item.fields.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Potfolio;

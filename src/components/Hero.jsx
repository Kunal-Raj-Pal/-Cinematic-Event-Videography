import About from "./About";
import Contact from "./Contact";
import cam from "../assets/img/ProfileImg/dslr.png";
import { Link } from "react-router-dom";
import {
  ClapperboardIcon,
  FilmIcon,
  Music4Icon,
  SlidersIcon,
  YoutubeIcon,
} from "lucide-react";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { api } from "../api/api";
import { offlineData } from "./offline";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Hero() {
  const camRef = useRef();

  useGSAP(() => {
    gsap.to(camRef.current, {
      rotateY: 15,
      scrollTrigger: {
        trigger: camRef.current,
        start: "top 10%",
        end: "bottom 80%",
        // markers: true,
        scrub: 2,
      },
    });
  });

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

  const sliceData = projects.slice(0, 3);

  return (
    <>
      {/* ---------------------- Hero Start ------------------------ */}
      <section className="hero py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:gap-12 items-center mt-6">
            <div className="space-y-5 md:space-y-8">
              <h1 className="md:text-5xl lg:text-6xl font-bold leading-tight">
                Anurag Video <br />
                <span className="text-primary">Mixing Zone</span>
              </h1>
              <p className="text-sm font-thin md:text-xl  text-gray-400">
                Premium Videography & Photography for Weddings, <br /> Events
                and More.
              </p>
              <div className="flex justify-between md:w-60 items-center ">
                <a
                  target="_blank"
                  href="https://www.instagram.com/anurag_video_mixing_zone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className=" bg-red-600 hover:bg-red/90 px-4 py-2 md:px-9 md:py-4 text-lg font-semibold rounded-lg shadow-[0_0_15px_#ff0000] transition-all duration-300 hover:shadow-[0_0_30px_#ff0000] hover:scale-105"
                >
                  Get started
                </a>
                <a
                  href="https://youtube.com/@cinematicvideoclips7445?si=vckNkmznkYM10jc5"
                  target="_blank"
                >
                  <YoutubeIcon className="w-8 h-8 md:w-12 md:h-12 mr-2 bg-red-600 rounded-lg py-1 shadow-[0_0_15px_#ff0000] hover:shadow-[0_0_30px_#ff0000] hover:scale-105 transition-all duration-300" />
                </a>
              </div>
            </div>
            <div className="relative inline-block">
              <img
                ref={camRef}
                src={cam}
                alt="Professional DSLR Camera"
                className="scale-125 md:scale-100 md:w-full md:h-auto rounded-lg"
              />
              <div className="absolute -top-5 -right-15 md:top-1/4 md:right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-red-500 rounded-full blur-[120px] opacity-60 mix-blend-screen"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-3 md:gap-5">
        <div className="card left bg-white/10 flex justify-evenly p-1 md:p-6">
          <div className="flex flex-col items-center">
            <FilmIcon className="w-20 h-20 md:w-30 md:h-30 text-red-600 drop-shadow-[0_0_8px_#ff0000]" />
            <h1 className="md:text-2xl">Video Editing</h1>
            <p className="text-center text-gray-400">
              Editing High Quality Videos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SlidersIcon className="w-20 h-20 md:w-30 md:h-30 text-red-600 drop-shadow-[0_0_8px_#ff0000]" />
            <h1 className="md:text-2xl">Video Mixing</h1>
            <p className="text-center text-gray-400">
              Have Great Skills in Video Mixing
            </p>
          </div>
        </div>
        <div className="card right bg-white/10 flex justify-evenly p-1 md:p-6">
          <div className="flex flex-col items-center">
            <Music4Icon className="w-20 h-20 md:w-30 md:h-30 text-red-600 drop-shadow-[0_0_8px_#ff0000]" />
            <h1 className="md:text-2xl">Background Score</h1>
            <p className="text-center text-gray-400 text-center">
              Perfect Background Scores
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ClapperboardIcon className="w-20 h-20 md:w-30 md:h-30 text-red-600 drop-shadow-[0_0_8px_#ff0000]" />
            <h1 className="md:text-2xl">Wedding/Events</h1>
            <p className="text-center text-gray-400">Best Moment Compiled</p>
          </div>
        </div>
      </div>
      {/* ---------------------- Hero End ------------------------ */}

      {/* ---------------------- Portfolio Start ------------------------ */}
      <section id="portfolio" className="pt-20">
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
            {sliceData.map((item) => (
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
          <center>
            <Link to="/Portfolio">
              <button className="bg-red-600 rounded-sm p-2 cursor-pointer">
                See All Projects
              </button>
            </Link>
          </center>
        </div>
      </section>
      {/* ---------------------- Portfolio End ------------------------ */}
      <About />
      <Contact />
    </>
  );
}

export default Hero;

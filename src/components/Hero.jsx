import Potfolio from "./Potfolio";
import About from "./About";
import Contact from "./Contact";
import cam from "../assets/img/ProfileImg/dslr.png";
import {
  ClapperboardIcon,
  FilmIcon,
  Music4Icon,
  SlidersIcon,
  YoutubeIcon,
} from "lucide-react";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
              <a href="https://youtube.com/@cinematicvideoclips7445?si=vckNkmznkYM10jc5" target="_blank"><YoutubeIcon className="w-8 h-8 md:w-12 md:h-12 mr-2 bg-red-600 rounded-lg py-1 shadow-[0_0_15px_#ff0000] hover:shadow-[0_0_30px_#ff0000] hover:scale-105 transition-all duration-300"/></a>
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

      <Potfolio />
      <About />
      <Contact />
    </>
  );
}

export default Hero;

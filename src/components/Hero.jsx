import Potfolio from "./Potfolio";
import About from "./About";
import Contact from "./Contact";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Hero({ dslrRef }) {
  const h1Ref = useRef(null);
  const button1Ref = useRef();
  const button2Ref = useRef();
  const pRef = useRef();
  
useGSAP(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: h1Ref.current,
      start: "top 10%",
      endTrigger: button1Ref.current,
      end: "bottom 50%",
      scrub: 2,
      // markers: true,
    },
  });

  tl.to(dslrRef.current,{
    rotate: 25,
    y: "66vh",
    x: "12vw",
    scale: .9,
  })
});




  return (
    <>
      {/* ---------------------- Hero Start ------------------------ */}
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Content */}
        <div class="absolute w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="home bg-white/10  backdrop-blur-md relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
          <h1 ref={h1Ref} className="font-serif font-black text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
            Crafting Timeless
            <span className="block text-purple-600">Memories</span>
            <span className="block text-4xl md:text-5xl font-normal">
              Through the Lens
            </span>
            {/* <img ref={dslrRef} src={dslr} alt="dslr" className="cam absolute z-10 w-50 h-50 top-20 left-15 sm:left-50 sm:top-0 md:top-15 md:left-135"/> */}
          </h1>

          <p ref={pRef} className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Elegant videography for your most cherished moments. Your story,
            beautifully told.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a ref={button1Ref}
              href="https://www.instagram.com/anurag_video_mixing_zone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              size="lg"
              className="bg-gradient-to-br from-purple-500/90 to-purple-700/70 backdrop-blur-md rounded-xl hover:bg-purple-700/70 transition duration-300 px-8 py-4 text-lg text-white"
              target="_blank"
            >
              View Our Work
            </a>

            <a ref={button2Ref}
              href="https://www.instagram.com/anu_pixelverse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              variant="outline"
              size="lg"
              className="border-gray-300 rounded-xl text-gray-700 hover:bg-gray-500 hover:text-white transition-all duration-200 px-8 py-4 text-lg flex items-center gap-2 bg-transparent border border-grey-300 border-2"
              target="_blank"
            >
              Watch Reel
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      {/* ---------------------- Hero End ------------------------ */}

      <Potfolio dslrRef={dslrRef} />
      <About dslrRef={dslrRef}  />
      <Contact />
    </>
  );
}

export default Hero;

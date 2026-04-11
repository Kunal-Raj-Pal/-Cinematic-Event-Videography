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
import { Projects } from "../Data/Projects";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

/* ─── Inline styles / keyframes injected once ─────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500&display=swap');

  :root {
    --red: #e8000d;
    --red-glow: rgba(232,0,13,0.55);
    --red-dim: rgba(232,0,13,0.12);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes filmFlicker {
    0%,100% { opacity: 1; }
    92%      { opacity: 1; }
    93%      { opacity: 0.6; }
    94%      { opacity: 1; }
    96%      { opacity: 0.75; }
    97%      { opacity: 1; }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .anu-hero-title {
    font-family: 'Playfair Display', serif;
    animation: fadeUp 1s cubic-bezier(.22,1,.36,1) both;
  }
  .anu-fade-up { animation: fadeUp 1s cubic-bezier(.22,1,.36,1) both; }
  .anu-fade-in { animation: fadeIn 1.2s ease both; }
  .anu-scale-in { animation: scaleIn 1s cubic-bezier(.22,1,.36,1) both; }
  .anu-body { font-family: 'Outfit', sans-serif; }

  .anu-film-grain::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 10;
    animation: filmFlicker 8s infinite;
  }

  .anu-scanline::before {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(232,0,13,0.25), transparent);
    animation: scanline 6s linear infinite;
    z-index: 11;
    pointer-events: none;
  }

  .anu-service-card {
    position: relative;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    transition: border-color .35s, transform .35s;
  }
  .anu-service-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--red-dim), transparent 60%);
    opacity: 0;
    transition: opacity .35s;
  }
  .anu-service-card:hover { border-color: var(--red); transform: translateY(-4px); }
  .anu-service-card:hover::before { opacity: 1; }

  .anu-portfolio-card {
    position: relative;
    overflow: hidden;
  }
  .anu-portfolio-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%);
    opacity: 0;
    transition: opacity .4s;
    border-radius: 8px;
  }
  .anu-portfolio-card:hover::after { opacity: 1; }
  .anu-portfolio-card img { transition: transform .6s cubic-bezier(.22,1,.36,1); }
  .anu-portfolio-card:hover img { transform: scale(1.08); }

  .anu-circle-text {
    animation: rotateSlow 12s linear infinite;
  }

  .anu-btn-primary {
    position: relative;
    overflow: hidden;
    background: var(--red);
    border: none;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    letter-spacing: .08em;
    text-transform: uppercase;
    box-shadow: 0 0 24px var(--red-glow);
    transition: box-shadow .3s, transform .3s;
  }
  .anu-btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 40%, rgba(255,255,255,.15) 50%, transparent 60%);
    transform: translateX(-100%);
    transition: transform .5s;
  }
  .anu-btn-primary:hover { box-shadow: 0 0 44px var(--red-glow); transform: translateY(-2px); }
  .anu-btn-primary:hover::after { transform: translateX(100%); }

  .anu-divider {
    width: 48px; height: 2px;
    background: var(--red);
    box-shadow: 0 0 10px var(--red-glow);
  }

  .anu-number {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: var(--red);
    text-shadow: 0 0 30px var(--red-glow);
  }
`;

/* ─── Service items ────────────────────────────────────────────────────── */
const services = [
  {
    icon: FilmIcon,
    label: "Video Editing",
    sub: "Cinematic cuts & colour grade",
  },
  {
    icon: SlidersIcon,
    label: "Video Mixing",
    sub: "Seamless multi-track blending",
  },
  {
    icon: Music4Icon,
    label: "Background Score",
    sub: "Emotion-driven soundscapes",
  },
  {
    icon: ClapperboardIcon,
    label: "Wedding / Events",
    sub: "Every moment, forever",
  },
];

/* ─── Component ────────────────────────────────────────────────────────── */
function Hero() {
  const camRef = useRef();
  const heroRef = useRef();
  const [loading, setLoading] = useState(true);
  const sliceData = Projects.slice(0, 3);

  /* inject global styles once */
  useEffect(() => {
    const id = "anufilms-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = globalStyles;
      document.head.appendChild(tag);
    }
  }, []);

  useGSAP(() => {
    gsap.to(camRef.current, {
      rotateY: 15,
      scrollTrigger: {
        trigger: camRef.current,
        start: "top 10%",
        end: "bottom 80%",
        scrub: 2,
      },
    });
  });

  return (
    <div
      className="anu-body"
      style={{ background: "#0a0a0b", color: "#f0ece4", minHeight: "100vh" }}
    >
      {/* ═══════════════════════ HERO ═══════════════════════════════════ */}
      <section
        ref={heroRef}
        className="anu-film-grain anu-scanline relative overflow-hidden"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* Background vignette & radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(232,0,13,0.13) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Top horizontal rule — film-strip feel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, var(--red), transparent)",
            zIndex: 5,
          }}
        />

        <div
          className="container"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 1.5rem 4rem",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* ── Left copy ── */}
            <div>
              {/* eyebrow */}
              <div
                className="anu-fade-up"
                style={{
                  animationDelay: "0s",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: ".25em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    fontWeight: 500,
                  }}
                >
                  Est. Since Day One
                </span>
                <div className="anu-divider" />
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "rgba(240,236,228,.35)",
                  }}
                >
                  Jaunpur, India
                </span>
              </div>

              {/* main title */}
              <h1
                className="anu-hero-title"
                style={{
                  animationDelay: "0.1s",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  lineHeight: 0.95,
                  fontWeight: 900,
                  margin: "0 0 1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Anu<span style={{ color: "var(--red)" }}>films</span>
              </h1>

              {/* tagline */}
              <p
                className="anu-fade-up"
                style={{
                  animationDelay: "0.25s",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  color: "rgba(240,236,228,.55)",
                  lineHeight: 1.7,
                  maxWidth: "360px",
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                Premium videography & photography for&nbsp;
                <em
                  style={{ color: "rgba(240,236,228,.8)", fontStyle: "italic" }}
                >
                  weddings, events
                </em>
                &nbsp;and every story worth telling.
              </p>

              {/* CTA row */}
              <div
                className="anu-fade-up"
                style={{
                  animationDelay: "0.4s",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/anuragflims"
                  className="anu-btn-primary"
                  style={{
                    padding: "0.85rem 2.2rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    color: "#fff",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Book a Session →
                </a>
                <a
                  href="https://youtube.com/@cinematicvideoclips7445?si=vckNkmznkYM10jc5"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(240,236,228,.6)",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    transition: "color .3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--red)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(240,236,228,.6)")
                  }
                >
                  <YoutubeIcon size={20} />
                  Watch YT
                </a>
              </div>

              {/* stat strip */}
              <div
                className="anu-fade-up"
                style={{
                  animationDelay: "0.55s",
                  display: "flex",
                  gap: "2.5rem",
                  marginTop: "3.5rem",
                }}
              >
                {[
                  ["500+", "Projects"],
                  ["8+", "Years"],
                  ["100%", "Satisfaction"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div
                      className="anu-number"
                      style={{
                        fontSize: "1.9rem",
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: ".15em",
                        textTransform: "uppercase",
                        color: "rgba(240,236,228,.35)",
                        marginTop: "4px",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right — camera ── */}
            <div
              className="anu-scale-in"
              style={{
                animationDelay: "0.2s",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* decorative ring */}
              <div
                style={{
                  position: "absolute",
                  width: "clamp(280px,42vw,520px)",
                  height: "clamp(280px,42vw,520px)",
                  border: "1px solid rgba(232,0,13,0.18)",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              {/* red glow blob */}
              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  background:
                    "radial-gradient(circle, rgba(232,0,13,0.4) 0%, transparent 70%)",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <img
                ref={camRef}
                src={cam}
                alt="Professional DSLR Camera"
                style={{
                  width: "clamp(240px,38vw,480px)",
                  height: "auto",
                  filter: "drop-shadow(0 0 40px rgba(232,0,13,0.35))",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              {/* floating badge */}
              <div
                className="hidden lg:inline-block"
                style={{
                  position: "absolute",
                  bottom: "8%",
                  right: "-4%",
                  background: "rgba(10,10,11,.85)",
                  border: "1px solid rgba(232,0,13,0.4)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "8px",
                  padding: "0.75rem 1.25rem",
                  zIndex: 3,
                  boxShadow: "0 0 20px rgba(232,0,13,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                  }}
                >
                  Now Available
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    marginTop: "2px",
                  }}
                >
                  Wedding Season 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to bottom, transparent, #0a0a0b)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />
      </section>

      {/* ═══════════════════════ SERVICES ══════════════════════════════ */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            className="anu-fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div className="anu-divider" />
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "rgba(240,236,228,.4)",
              }}
            >
              What We Do
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {services.map(({ icon: Icon, label, sub }, i) => (
              <div
                key={label}
                className="anu-service-card anu-fade-up"
                style={{
                  padding: "2.5rem 2rem",
                  animationDelay: `${0.1 * i}s`,
                }}
              >
                <Icon
                  size={32}
                  style={{
                    color: "var(--red)",
                    filter: "drop-shadow(0 0 8px var(--red-glow))",
                    marginBottom: "1.25rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {label}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(240,236,228,.4)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PORTFOLIO ══════════════════════════════ */}
      <section id="portfolio" style={{ padding: "2rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* heading */}
          <div className="anu-fade-up" style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div className="anu-divider" />
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "rgba(240,236,228,.4)",
                }}
              >
                Selected Work
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                maxWidth: "520px",
              }}
            >
              Stories We've{" "}
              <span style={{ color: "var(--red)" }}>Captured</span>
            </h2>
          </div>

          {/* grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {sliceData.map((item) => (
              <div
                key={item.pk}
                className="anu-portfolio-card anu-scale-in"
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={
                    loading
                      ? item.image
                      : `https://res.cloudinary.com/dpvxrkuzb/${item.image}`
                  }
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    border: "1px solid rgba(232,0,13,0.25)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Link to="/Portfolio">
              <button
                className="anu-btn-primary"
                style={{
                  padding: "0.85rem 2.2rem",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                View All Projects →
              </button>
            </Link>
            <div
              style={{
                height: "1px",
                flex: 1,
                background: "rgba(255,255,255,0.07)",
              }}
            />
          </div>
        </div>
      </section>

      <About />
      <Contact />
    </div>
  );
}

export default Hero;

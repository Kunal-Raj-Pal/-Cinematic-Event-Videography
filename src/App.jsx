import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Potfolio from "./components/Potfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Camera from "./components/Camera";
import { useRef } from "react";

function App() {
  const dslrRef = useRef(null);

  return (
    <>
      <Camera ref={dslrRef} />

      <Nav />
      <Routes>
        <Route path="/" element={<Hero dslrRef={dslrRef} />} />
        <Route path="/Portfolio" element={<Potfolio dslrRef={dslrRef} />} />
        <Route path="/About" element={<About dslrRef={dslrRef} />} />
        <Route path="/Contact" element={<Contact dslrRef={dslrRef} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

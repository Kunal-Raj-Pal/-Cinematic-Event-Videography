import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Potfolio from "./components/Potfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Portfolio" element={<Potfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

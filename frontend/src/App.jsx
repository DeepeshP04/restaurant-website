import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Gallery from "./pages/Gallery"
import Book from "./pages/Book"
import Contact from "./pages/Contact"
import Auth from "./pages/Auth"
import About from "./pages/About"
import Privacy from "./pages/Privacy"
import Agreement from "./pages/Agreement"
import Footer from "./components/Footer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function App() {
  const [navHeight, setNavHeight] = useState(80);

  useEffect(() => {
    const updateHeight = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () =>
      window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="main-content" style={{ paddingTop: `${navHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Agreement />} />
        </Routes>
      </div>
      <Footer />
      </>
  )
}
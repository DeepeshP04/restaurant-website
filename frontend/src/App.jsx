import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Book from "./pages/Book"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      </>
  )
}
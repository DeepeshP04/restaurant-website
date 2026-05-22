import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Footer from "./components/Footer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="main-content">
      <Home />
    </div>
    <Footer />
    </>
  )
}
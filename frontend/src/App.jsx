import Navbar from "./components/Navbar";
import Home from "./components/Home"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="main-content">
      <Home />
      </div>
    </>
  )
}
import { useState } from "react";
import "./Navbar.css"

function Navbar() {
    const isLoggedIn = useState(false, setLoggedIn)

    function setLoggedIn() {
        return true
    }

    return (
        <nav className="navbar bg-body-tertiary py-0">
  <div className="container-fluid bg-dark text-white py-3 px-10">
    <div className="d-flex align-items-center justify-content-evenly gap-3">
            <i class="fa-solid fa-utensils fs-3"></i>
            <a class="navbar-brand text-white" href="#">Restaurant</a>
        </div>
    <div className="nav-links d-flex justify-content-center gap-5 w-30">
            <a href="#" className="nav-link text-uppercase fs-14 fw-semibold">Home</a>
            <a href="#" className="nav-link text-uppercase fs-14 fw-semibold">Menu</a>
            <a href="#" className="nav-link text-uppercase fs-14 fw-semibold">Book</a>
            <a href="#" className="nav-link text-uppercase fs-14 fw-semibold">Contact</a>
            {isLoggedIn ? <a href="#" className="nav-link text-uppercase fs-14 fw-semibold"><i class="fa-solid fa-cart-shopping"></i></a> : <a href="#" className="nav-link text-uppercase fs-14 fw-semibold">Login</a>}
        </div>
  </div>
</nav>
    )
}

export default Navbar;
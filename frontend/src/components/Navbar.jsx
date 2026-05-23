import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check initial login state
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);

        // Listen for login status changes
        const handleLoginStatusChange = () => {
            const loggedIn = localStorage.getItem("isLoggedIn") === "true";
            setIsLoggedIn(loggedIn);
        };

        window.addEventListener("loginStatusChanged", handleLoginStatusChange);
        return () => window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        setIsLoggedIn(false);
    }

    return (
        <nav className="navbar bg-body-tertiary py-0 fixed-top">
  <div className="container-fluid bg-dark text-white py-3 px-10">
    <div className="d-flex align-items-center justify-content-evenly gap-3">
            <i className="fa-solid fa-utensils fs-3"></i>
            <Link className="navbar-brand text-white" to="/">Restaurant</Link>
        </div>
    <div className="nav-links d-flex justify-content-center gap-5 w-30" style={{ alignItems: 'center' }}>
            <Link to="/" className="nav-link text-uppercase fs-14 fw-semibold">Home</Link>
            <Link to="/menu" className="nav-link text-uppercase fs-14 fw-semibold">Menu</Link>
            <Link to="/book" className="nav-link text-uppercase fs-14 fw-semibold">Book</Link>
            <Link to="/contact" className="nav-link text-uppercase fs-14 fw-semibold">Contact</Link>
            {isLoggedIn ? (
                <>
                    <Link to="#" className="nav-link text-uppercase fs-14 fw-semibold">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                    <button 
                        onClick={handleLogout} 
                        className="nav-link text-uppercase fs-14 fw-semibold btn btn-link"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <Link to="/auth" className="nav-link text-uppercase fs-14 fw-semibold">Login</Link>
            )}
        </div>
  </div>
</nav>
    )
}

export default Navbar;
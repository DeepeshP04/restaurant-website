import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const handleLoginStatusChange = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    return () =>
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
  }, []);

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar py-0 fixed-top custom-navbar">
      <div className="container-fluid px-10 py-3">
        {/* LOGO */}
        <div className="d-flex align-items-center gap-3">
          {/* <i className="fa-solid fa-utensils fs-3"></i> */}
          <img src="../public/logo.png" alt="logo" style={{ height: "60px", width: "60px"}}/>

          <Link
            className="navbar-brand text-white d-flex flex-column mb-0"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <span className="brand-title">Kesar</span>

            <small className="brand-subtitle">Fine Indian Dining</small>
          </Link>
        </div>

        {/* NAV LINKS */}
<div className="nav-links d-flex align-items-center gap-5">

  <Link to="/" className="nav-link text-uppercase fs-12 fw-semibold">
    Home
  </Link>

  <Link
    to="/menu"
    className="nav-link text-uppercase fs-12 fw-semibold"
  >
    Menu
  </Link>

  <Link
    to="/gallery"
    className="nav-link text-uppercase fs-12 fw-semibold"
  >
    Gallery
  </Link>

  {/* DROPDOWN */}
  <div className="nav-dropdown" ref={dropdownRef}>
    <button
      className="nav-link dropdown-toggle-custom text-uppercase fs-12 fw-semibold"
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      More
      <i className="fa-solid fa-chevron-down dropdown-icon"></i>
    </button>

    <div
      className={`dropdown-menu-custom ${
        showDropdown ? "show-dropdown" : ""
      }`}
    >
      <Link
        to="/about"
        className="dropdown-item-custom"
        onClick={handleDropdownClose}
      >
        <i className="fa-solid fa-circle-info"></i>
        About
      </Link>

      <Link
        to="/contact"
        className="dropdown-item-custom"
        onClick={handleDropdownClose}
      >
        <i className="fa-solid fa-envelope"></i>
        Contact
      </Link>
    </div>
  </div>
</div>

{/* RIGHT SIDE ACTIONS */}
<div className="right-actions">

  <Link
    to="/book"
    className="book-btn"
  >
    Book Table
  </Link>

  {isLoggedIn ? (
    <>
      <Link
        to="/cart"
        className="nav-link text-uppercase fs-12 fw-semibold"
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>

      <button
        onClick={handleLogout}
        className="logout-btn"
      >
        Logout
      </button>
    </>
  ) : (
    <Link
      to="/auth"
      className="login-btn"
    >
      Login
    </Link>
  )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

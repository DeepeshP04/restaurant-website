import { useState } from "react";

function Navbar() {
    const isLoggedIn = useState(false, setLoggedIn)

    function setLoggedIn() {
        return true
    }

    return (
        <>
        <div className="logo">
            <img src="" alt="logo icon"/>
            <h1>Restaurant</h1>
        </div>
        <div className="nav-links">
            <a>Home</a>
            <a>Menu</a>
            <a>Book</a>
            <a>Contact</a>
            {isLoggedIn ? <a>Cart</a> : <a>Login</a>}
        </div>
        </>
    )
}

export default Navbar;
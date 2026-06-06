import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setLoginError("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      setLoginError("Invalid email format");
      return;
    }

    // Mock login (replace with actual API call)
    console.log("Login:", loginData);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", loginData.email);
    setLoginError("");
    setLoginData({ email: "", password: "" });
    // Trigger navbar update by dispatching custom event
    window.dispatchEvent(new Event("loginStatusChanged"));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!signupData.email || !signupData.password || !signupData.confirmPassword) {
      setSignupError("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
      setSignupError("Invalid email format");
      return;
    }

    if (signupData.password.length < 6) {
      setSignupError("Password must be at least 6 characters long");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setSignupError("Passwords do not match");
      return;
    }

    // Mock signup (replace with actual API call)
    console.log("Signup:", {
      email: signupData.email,
      password: signupData.password
    });
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", signupData.email);
    setSignupError("");
    setSignupData({ email: "", password: "", confirmPassword: "" });
    // Trigger navbar update by dispatching custom event
    window.dispatchEvent(new Event("loginStatusChanged"));
  };

  return (
    <div className="auth-page">
      {/* Header Section */}
      <div className="auth-header-section">
        <div className="auth-header-overlay"></div>
        <div className="auth-header-content">
          <h1>Account</h1>
          <p>Sign in to your account to access exclusive offers and manage your reservations</p>
        </div>
      </div>

      {/* Login & Signup Section */}
      <div className="auth-container">
        <div className="auth-wrapper">
          {/* Existing Customer Section */}
          <div className="auth-section">
            <h2 className="section-title">
              <i className="fa-solid fa-user"></i>
              Existing Customer
            </h2>
            <p className="section-subtitle">Login to your account</p>

            {loginError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {loginError}
              <button type="button" className="btn-close" onClick={() => setLoginError("")}></button>
            </div>}

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="login-email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control auth-input"
                  id="login-email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="login-password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control auth-input"
                  id="login-password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-auth w-100 mb-3">
                Login
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="auth-divider"></div>

          {/* Register Account Section */}
          <div className="auth-section">
            <h2 className="section-title">
              <i className="fa-solid fa-user-plus"></i>
              Register an Account
            </h2>
            <p className="section-subtitle">Create a new account</p>

            {signupError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {signupError}
              <button type="button" className="btn-close" onClick={() => setSignupError("")}></button>
            </div>}

            <form onSubmit={handleSignupSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control auth-input"
                  id="signup-email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="password-row">
                <div className="password-field">
                  <label htmlFor="signup-password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control auth-input"
                    id="signup-password"
                    name="password"
                    placeholder="Min 6 characters"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                  />
                </div>

                <div className="password-field">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control auth-input"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-auth w-100 mb-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

import React from "react";
import "../style/style.css";
import Login from "../pages/login";
import SignUp from "../pages/signup";

const Navbar = () => {
  return (
    <>
      {/* navbar login */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container px-0">
          <a className="navbar-brand" href="../index.html">
            <img
              src={require("../../src/images/EdMe Learning.png")}
              width={100}
              alt=""
            />
          </a>
          <div className="d-flex align-items-center order-lg-3 ms-lg-3">
            <div className="d-flex align-items-center">
              <div className="dropdown me-2">
                <button
                  className="btn  btn-icon rounded-circle d-flex align-items-center "
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  aria-label="Toggle theme (auto)"
                >
                  <i class="bi bi-globe text-secondary fs-5"></i>
                  <span className="visually-hidden bs-theme-text">
                    Toggle theme
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow"
                  aria-labelledby="bs-theme-text"
                >
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="light"
                      aria-pressed="false"
                    >
                      <i className="bi theme-icon bi-sun-fill" />
                      <span className="ms-2">Light</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="dark"
                      aria-pressed="false"
                    >
                      <i className="bi theme-icon bi-moon-stars-fill" />
                      <span className="ms-2">Dark</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center active"
                      data-bs-theme-value="auto"
                      aria-pressed="true"
                    >
                      <i className="bi theme-icon bi-circle-half" />
                      <span className="ms-2">Auto</span>
                    </button>
                  </li>
                </ul>
              </div>
              <a
                href="/login"
                target="_blank"
                className="btn btn-outline-dark me-2 btn mt-1 btn-white mb-1 btn btn-sm btn-light mb-0 bg-white border me-2"
              >
                <i className="bi bi-person-circle fs-6 me-1" />
                Login
              </a>

              <a
                href="/signup"
                className="btn text-white d-none d-md-block bg-dark btn btn-sm"
                target="_blank"
              >
                Join Now
              </a>
            </div>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-default5"
              aria-controls="navbar-default5"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar mt-0" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
          {/* Button */}
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbar-default5">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" id="navbarLanding">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="navbarLanding">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="navbarLanding">
                  Gallery
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarLanding"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarLanding">
                  <li>
                    <a
                      href="/certificate-verify"
                      class="dropdown-item"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-file-earmark-check mb-1 me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                      <span>Certificate Verification</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="../pages/landings/landing-courses.html"
                      class="dropdown-item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-journal-code mb-1 me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"
                        />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                      </svg>
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="../pages/landings/landing-education.html"
                      class="dropdown-item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-mortarboard mb-1 me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                      </svg>
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="../pages/landings/landing-job.html"
                      class="dropdown-item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-card-list mb-1 me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                      </svg>
                      Job Listing
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            IT LOG SYSTEM
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <Link to="/" className="nav-link">
                  Tasks
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/create" className="nav-link">
                  {" "}
                  Add Tasks
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/" className="nav-link">
                  Add IT Personnel
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar

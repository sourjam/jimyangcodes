import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Jim Yang
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/web-dev">
          Developer
        </Link>
        <Link className="navbar-item" to="/doing-now">
          Doing Now
        </Link>
        <br/>
        <Link className="navbar-item" to="/worked-at">
          Worked At
        </Link>
        <Link className="navbar-item" to="/hindsights">
          Hindsights
        </Link>
        <br/>
        <Link className="navbar-item" to="/version-history">
          Version 0.1
        </Link>
      </div>
      <div className="navbar-end">
        {/* <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </div>
    </div>
  </nav>
)

export default Navbar

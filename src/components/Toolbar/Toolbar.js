import React from 'react'
import { Link } from 'gatsby'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'
// import logo from '../../images/logo.png'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo fadeInRight animated">
        <Link to="/">FINE DIGITAL</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link
              to="/"
              activeClassName="fadeInDownBig animated"
              activeStyle={{ color: 'white' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="bounce animated"
              to="/services/"
              activeStyle={{ color: 'white' }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="bounce animated"
              to="/blog/"
              activeStyle={{ color: 'white' }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="bounce animated"
              to="/projects/"
              activeStyle={{ color: 'white' }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="bounce animated"
              to="/about/"
              activeStyle={{ color: 'white' }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="bounce animated"
              to="/contact"
              activeStyle={{ color: 'white' }}
              activeClassName="jackInTheBox animated"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar

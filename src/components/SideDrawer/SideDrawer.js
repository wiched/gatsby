import React from 'react'
import { Link } from 'gatsby'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <div className="heading__container">
        Menu
        <span onClick={props.drawerClickHandler}>X</span>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services/">Services</Link>
        </li>
        <li>
          <Link to="/web-design/">Web Design</Link>
        </li>
        <li>
          <Link to="/web-development/">Web Development</Link>
        </li>
        <li>
          <Link to="/seo/">SEO optimization</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/about/">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer

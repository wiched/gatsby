import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

// import logo from '../../images/logo.png'
const Toolbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #2a2a2a;
  height: 83px;
  z-index: 1;
  @media (max-width: 768px) {
    height: 40px;
  }
`
const Navigation = styled.nav`
  display: flex;
  height: 100%;
  padding: 0 1rem;
  align-items: center;
`
const Logo = styled.div`
  margin-left: 1rem;
  & a {
    color: white !important;
    text-decoration: none;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    & img {
      width: 100%;
      max-width: 100px;
      height: auto;
    }
  }
  @media (min-width: 769px) {
    margin-left: 0;
  }
`
const Spacer = styled.div`
  flex: 1;
`
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const Li = styled.li`
  padding: 0 1.5rem;
  & a {
    color: #828181;
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 83px;
  }
  & a:hover {
    color: #fff;
  }
`
const Items = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const ToggleButton = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`

const toolbar = props => (
  <Toolbar>
    <Navigation>
      <ToggleButton>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </ToggleButton>
      <Logo className="fadeInRight animated">
        <Link to="/">FINE DIGITAL</Link>
      </Logo>
      <Spacer />
      <Items>
        <Ul>
          <Li>
            <Link
              to="/"
              activeClassName="fadeInDownBig animated"
              activeStyle={{ color: 'white' }}
            >
              Home
            </Link>
          </Li>
          <Li>
            <Link
              className="bounce animated"
              to="/services/"
              activeStyle={{ color: 'white' }}
            >
              Services
            </Link>
          </Li>
          <Li>
            <Link
              className="bounce animated"
              to="/blog/"
              activeStyle={{ color: 'white' }}
            >
              Blog
            </Link>
          </Li>
          <Li>
            <Link
              className="bounce animated"
              to="/projects/"
              activeStyle={{ color: 'white' }}
            >
              Projects
            </Link>
          </Li>
          <Li>
            <Link
              className="bounce animated"
              to="/about/"
              activeStyle={{ color: 'white' }}
            >
              About Us
            </Link>
          </Li>
          <Li>
            <Link
              className="bounce animated"
              to="/contact"
              activeStyle={{ color: 'white' }}
              activeClassName="jackInTheBox animated"
            >
              Contact
            </Link>
          </Li>
        </Ul>
      </Items>
    </Navigation>
  </Toolbar>
)

export default toolbar

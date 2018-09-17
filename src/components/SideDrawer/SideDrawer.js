import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SideDrawer = styled.nav`
  height: 100%;
  background: #f3f3f3;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  & a {
    color: #2a2a2a;
    text-decoration: none;
    font-size: 1rem;
  }
  & a:after {
    content: '' !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    display: table-cell !important;
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    margin-top: 10px !important;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Li = styled.li`
  margin: 0.5rem 0;
  padding: 5px 0px;
`
const HeadingContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-content: center;
  font-size: 22px;
  width: 100%;
  margin-top: 15px;
  color: #663399;
`
const Span = styled.span`
  color: #2a2a2a;
  font-weight: 600;
`

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <SideDrawer className={drawerClasses}>
      <HeadingContainer>
        Menu
        <Span onClick={props.drawerClickHandler}>X</Span>
      </HeadingContainer>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/services/">Services</Link>
        </Li>
        <Li>
          <Link to="/web-design/">Web Design</Link>
        </Li>
        <Li>
          <Link to="/web-development/">Web Development</Link>
        </Li>
        <Li>
          <Link to="/seo/">SEO optimization</Link>
        </Li>
        <Li>
          <Link to="/blog/">Blog</Link>
        </Li>
        <Li>
          <Link to="/projects/">Projects</Link>
        </Li>
        <Li>
          <Link to="/about/">About Us</Link>
        </Li>
        <Li>
          <Link to="/contact">Contact</Link>
        </Li>
      </Ul>
    </SideDrawer>
  )
}

export default sideDrawer

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'styled-components'
import Header from './header'
import Footer from './footer'
import 'typeface-open-sans'

injectGlobal`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    -webkit-text-stroke: 0.45px !important;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1) !important;
    text-rendering: optimizeLegibility  !important;
    font: 14px/18px 'Open Sans', sans-serif;
    text-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.005) !important;
}

body {
    background: #ecebeb;
    color: #666;
}

h1, h2, h3, h4, h5, h6 {
    line-height: 1em;
    color: #2f2f2f;
    font-family: 'Open Sans',sans-serif;
    font-weight: bold;
    margin-top: 30px;
}

h2 {
    font-size: 25px;
}

.h2__home {
    margin-top: 0px;
    margin-bottom: 25px;
}

.link1 {
    color: #2f2f2f;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    text-decoration: none;
    margin-top: 10px;
    display: block;
}

.link1:hover {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-style: initial;
    text-decoration-color: initial;
}

p {
    -webkit-text-stroke: 0.025em rgba(51, 51, 51, 0.4) !important;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    line-height: 175%;
}

.p6 {
    padding-top: 16px;
    line-height: 175%;
}

.navbar {
    font-size: 22px;
    background: #252525;
    padding-bottom: 10px;
}

#main-nav {
    list-style-type: none;
    display: none;
    flex-direction: column;
}

#main-nav li {
    text-align: center;
    margin: 15px auto;
}

.nav-links {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
}

#logo {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
}

#logo:hover {
    color: white;
}

.nav-links:hover {
    color: white;
}

#logo {
    display: inline-block;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 20px;
    position: absolute;
    left: 0;
    justify-content: flex-start;
}

#navbar-toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 24px;
}

#navbar-toggle:hover {
    color: white;
}

@media screen and (min-width: 768px) {
    .navbar {
        display: flex;
        justify-content: center;
        padding-bottom: 0;
        height: 83px;
        align-items: center;
    }
    #main-nav {
        display: flex !important;
        margin-right: 30px;
        flex-direction: row;
        justify-content: flex-end;
    }
    #main-nav li {
        margin: 0;
    }
    .nav-links {
        margin-left: 60px;
    }
    #logo {
        margin-top: 0;
    }
    #navbar-toggle {
        display: none;
    }
}

.headerTitle {
    color: #ecebeb;
    font-size: 24px;
    line-height: 30px;
    max-width: 400px !important;
}

.uppercase {
    text-transform: uppercase;
}

.bold {
    display: inline-block;
    margin: 10px 0px;
    clear: both;
    font-size: 2rem;
    line-height: 36px;
}

.smaller {
    font-size: 22px;
}

.padding__none {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.margin__top-none {
    margin-top: 0;
}

.margin__top-header {
    margin-top: 83px;
}

strong {
    font-weight: bold;
}

@media only screen and (max-width: 992px) {
    p, span, strong {
        font-size: 18px !important;
    }
}

@media only screen and (max-width: 1460px) and (min-width: 900px) {
    .headerWrapper {
        background-position-x: 52% !important;
        background-position-y: 355px !important;
        height: 314px !important;
        background-repeat: initial !important;
    }
}

@media only screen and (max-width: 900px) {
    .margin__top-header {
        margin-top: 50px;
    }
    .p6 {
        padding-left: 10px;
    }
    p {
        padding: 10px;
    }
}

@media only screen and (min-width: 992px) {
    .container {
        max-width: 100%;
        width: 976px !important;
    }
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}

.animated.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
}

.animated.flipOutX, .animated.flipOutY, .animated.bounceIn, .animated.bounceOut {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
}

@-webkit-keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
}

@-webkit-keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
}

a {
    color: inherit;
}

a:visited, a:hover, a:active {
    color: inherit;
}

ul {
    list-style: none;
}

ul li {
    line-height: 35px;
    font-size: 16px;
}

ul li a {
    font-size: 16px;
}

.white {
    color: red !important;
    padding-left: 40px;
}

`
class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const WOW = require('../../node_modules/wowjs')
      const wow = new WOW.WOW({
        live: false,
      })
      wow.init()
    }
  }

  render() {
    return (
      <div>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <React.Fragment>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
              </Helmet>

              <Header siteTitle={data.site.siteMetadata.title} />
              {this.props.children}
              <Footer />
            </React.Fragment>
          )}
        />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

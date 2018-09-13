import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import 'typeface-open-sans'

import './layout.sass'

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

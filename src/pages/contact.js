import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
//import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './contact.sass'

import Layout from '../components/layout'
class ContactPage extends Component {
  render() {
    const { data } = this.props
    const mail = data.mail.childImageSharp.fluid

    return (
      <Layout>
        <aside>
          <Grid fluid className="headerWrapper headerWrapper__contact">
            <Grid>
              <Row className="full">
                <Col md={9} className="headerTitle wow bounceInLeft">
                  More traffic! More profit!
                  <br />
                  <span className="bold uppercase"> YOU WANT TO SUCCEED?</span>
                  <br />
                  <span className="smaller">
                    Do not wait for the circumstances - create them! Call us!
                  </span>
                </Col>
              </Row>
            </Grid>
          </Grid>
        </aside>
        <main>
          <Grid>
            <section>
              <Row>
                <Col md={5} className="col__order-services">
                  <h2 className="h2__home">Contact Us</h2>
                </Col>
                <Col md={7} className="col__order-blog">
                  <h2 className="h2__home">Send us a message</h2>
                </Col>
                <Col md={5}>
                  <ul>
                    <li>Manitoba Way, Worthing, West Sussex, BN13 2TJ</li>
                    <li>(+44) 7561 877 567</li>
                    <li>
                      <a href="mailto:office@finedigital.co.uk">
                        <Img fluid={mail} className="mail" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Fine.Digital.UK/?ref=br_rs">
                        FB/Fine.Digital.UK
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Fine.Digital.UK/?ref=br_rs">
                        Google+
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Fine.Digital.UK/?ref=br_rs">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </Col>

                <Col md={7}>
                  <section>
                    <form
                      action="https://formcarry.com/s/DskCCjAGaDs"
                      method="POST"
                      acceptCharset="UTF-8"
                    >
                      <input
                        type="text"
                        name="yourName"
                        placeholder="Your Name: "
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email: "
                      />

                      <input
                        type="tel"
                        name="number"
                        placeholder="Your Number: "
                      />

                      <textarea
                        name="message"
                        placeholder="Write your message here"
                      />
                      <input type="hidden" name="_gotcha" />
                      <br />
                      <input type="submit" value="Send" />
                    </form>
                  </section>
                </Col>
              </Row>
            </section>
          </Grid>
        </main>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    mail: file(relativePath: { regex: "/mail.png/" }) {
      childImageSharp {
        fluid(maxWidth: 222) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

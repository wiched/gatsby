import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
//import { Link } from 'gatsby'
//import Img from 'gatsby-image'

import Layout from '../components/layout'
class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <aside>
          <Grid fluid className="headerWrapper">
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
                  <h2 className="h2__home">Request a quote</h2>
                </Col>
                <Col md={5}>
                  <ul>
                    <li>Test</li>
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

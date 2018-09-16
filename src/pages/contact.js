import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
//import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import HeaderBG from '../images/contacts-slider.jpg'

const H2 = styled.h2`
  margin-top: 0px;
  margin-bottom: 25px;
`

const HeaderWrapper = styled(Grid)`
  height: 380px;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  background: url(${HeaderBG});
  > a
  text-decoration: none
  color: #2f2f2f
`

const Ul = styled.ul`
  font-family: 'Open Sans' !important;
  font-size: 16px iImportant;
`

const Li = styled.li`
  font-family: 'Open Sans' !important;
  font-size: 16px iImportant;
`

const MailImage = styled(Img)`
  max-width: 222px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Message = styled.textarea`
  height: 150px;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  resize: none;
  background: #fff;
  outline: none;
  border: 1px solid #dfdfdf;
  padding: 5px 9px;
  overflow: auto;
  color: #6d6d6d;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  display: block;
  max-width: 540px;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  outline: none;
  border: 1px solid #dfdfdf;
  color: #6d6d6d;
  background: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  padding: 5px 9px 7px;
  max-width: 540px;
  margin-bottom: 15px;
  display: inline-block;
`
const SubmitInput = styled(Input).attrs({ type: 'submit' })`
  cursor: pointer;
  background: #2a2a2a;
  color: #fff;
`
class ContactPage extends Component {
  render() {
    const { data } = this.props
    const mail = data.mail.childImageSharp.fluid

    return (
      <Layout>
        <aside>
          <HeaderWrapper fluid>
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
          </HeaderWrapper>
        </aside>
        <main>
          <Grid>
            <section>
              <Row>
                <Col md={5}>
                  <H2>Contact Us</H2>
                </Col>
                <Col md={7} className="col__order-blog">
                  <H2>Send us a message</H2>
                </Col>
                <Col md={5}>
                  <Ul>
                    <Li>Manitoba Way, Worthing, West Sussex, BN13 2TJ</Li>
                    <Li>(+44) 7561 877 567</Li>
                    <Li>
                      <a href="mailto:office@finedigital.co.uk">
                        <MailImage fluid={mail} />
                      </a>
                    </Li>
                    <Li>
                      <a href="https://www.facebook.com/Fine.Digital.UK/?ref=br_rs">
                        FB/Fine.Digital.UK
                      </a>
                    </Li>
                    <Li>
                      <a href="https://www.facebook.com/Fine.Digital.UK/?ref=br_rs">
                        Google+
                      </a>
                    </Li>
                    <Li>
                      <a href="https://www.facebook.com/Fine.Digital.UK/?ref=br_rs">
                        LinkedIn
                      </a>
                    </Li>
                  </Ul>
                </Col>

                <Col md={7}>
                  <section>
                    <form
                      action="https://formcarry.com/s/DskCCjAGaDs"
                      method="POST"
                      acceptCharset="UTF-8"
                    >
                      <Input
                        type="text"
                        name="yourName"
                        placeholder="Your Name: "
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email: "
                      />

                      <Input
                        type="tel"
                        name="number"
                        placeholder="Your Number: "
                      />

                      <Message
                        name="message"
                        placeholder="Write your message here"
                      />
                      <Input type="hidden" name="_gotcha" />
                      <br />
                      <SubmitInput value="Send" />
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

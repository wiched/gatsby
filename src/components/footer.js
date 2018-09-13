import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './footer.sass'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid fluid>
          <Grid>
            <Row>
              <Col xs={12} md={3}>
                <span>2016 - 2018 ©</span>
                <span>
                  <a href="/">FineDigital</a>
                </span>
              </Col>
              <Col xs={12} md={3}>
                <span>
                  <a href="/">
                    <span role="img" aria-label="Envelope">
                      ✉️
                    </span>{' '}
                    office@finedigital.co.uk
                  </a>
                </span>
              </Col>
              <Col xs={12} md={3}>
                <span>
                  <a href="/">Privacy Policy</a>
                </span>
              </Col>
            </Row>
          </Grid>
        </Grid>
      </footer>
    )
  }
}

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

const GridFooter = styled(Grid)`
  margin-top: 50px;
  background-color: #2a2a2a;
  height: 97px;
  color: #fff;
  display: flex;
  align-items: center;
`
const ColFooter = styled(Col)`
  text-align: center;
`

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <GridFooter fluid>
          <Grid>
            <Row>
              <ColFooter xs={12} md={3}>
                <span>2016 - 2018 ©</span>
                <span>
                  <a href="/">FineDigital</a>
                </span>
              </ColFooter>
              <ColFooter xs={12} md={3}>
                <span>
                  <a href="/">
                    <span role="img" aria-label="Envelope">
                      ✉️
                    </span>{' '}
                    office@finedigital.co.uk
                  </a>
                </span>
              </ColFooter>
              <Col xs={12} md={3}>
                <span>
                  <a href="/">Privacy Policy</a>
                </span>
              </Col>
            </Row>
          </Grid>
        </GridFooter>
      </footer>
    )
  }
}

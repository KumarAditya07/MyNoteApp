import React from 'react'
import './LandingPage.css'
import {
    Navbar,
    Button,
    Form,
    FormControl,
    Nav,
    NavDropdown,
    Container,Row,Col
  } from "react-bootstrap";
//   import {a} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome Note Maker</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button  variant="outline-success" size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  variant="outline-success"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage

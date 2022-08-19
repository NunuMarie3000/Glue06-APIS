import React, { Component } from 'react'

import { Outlet } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import walkerTexasRangerThemeSong from './media/walker-texas-ranger-theme-song.mp3'

export default class App extends Component {

  render() {
    return (
      <>
        <h1>Chuck Norris fan page</h1>
        <Navbar bg="dark" variant='dark'>
          <Container fluid>
            <Nav>
              <LinkContainer to='/home'>
                <Nav.Link>Deets</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/withcomponentdidmount'>
                <Nav.Link>With componentDidMount</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
        <Outlet/>
        <audio autoPlay loop>
          <source src={walkerTexasRangerThemeSong} type='audio/mp3'/>
        </audio>
        
      </>
    )
  }
}


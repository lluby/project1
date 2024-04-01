import {Navbar, Container, Nav} from "react-bootstrap"


const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/"><img src="/cazh.png" alt="CAZH Logo" width={80} className="custom-margin-left"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link href="#product" >About Us</Nav.Link>
              <Nav.Link href="#learn" >Product</Nav.Link>
              <Nav.Link href="#About" >Contact Us</Nav.Link>
              <Nav.Link href="#About" >Help</Nav.Link>
            </Nav>
            <div className="text-center">
              <button className="my-button btn btn-outline-light rounded-3 " >Request Demo</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
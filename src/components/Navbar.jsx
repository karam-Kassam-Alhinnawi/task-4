import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import img from '../assets/img/logo.png';
import Button from "./Button";
const navLinks = [
  {name: 'Home', href: '/'},
  {name: 'About', href: 'about'},
  {name: 'Services', href: 'services'},
  {name: 'Departments', href: 'departments'},
  {name: 'Doctors', href: 'doctors'},
  {name: 'Separated link', type: 'Dropdown'},
  {name: 'Contact', href: 'contact'},
]

const NavbarContainer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="position-sticky top-0 z-3 bg-light w-100">
      <Container>
        <Navbar.Brand href="./">
          <img src={img} className="responsive-logo" style={{width: '150px'}} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="ms-auto">
            
            {navLinks.map((link) => (
              <>
              {link.type == "Dropdown" ? (
                 <NavDropdown className="text-dark text-uppercase fw-bold" style={{fontSize: '13px'}} title="Dropdown" id="collapsible-nav-dropdown">
                 <NavDropdown.Item className="text-dark text-uppercase fw-bold" style={{fontSize: '13px'}} href="#action/3.4">{link.name}</NavDropdown.Item>
                 </NavDropdown>
              ) :<Nav.Link href={`#${link.href}`} className="text-dark text-uppercase" style={{fontSize: '13px', fontWeight: '500'}}>{link.name}</Nav.Link>}
              </>
            ))}

          </Nav>
        </Navbar.Collapse>
          <Button/>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

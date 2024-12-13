import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { Context } from "../../assets/context/ContextProvider";

function NavComponent() {
  const { /* state, */ dispatch } = useContext(Context);
  const handleLoginClick = () => {
    dispatch({ type: "OPEN_LOGIN" }); // Dispatch action to open the modal
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home">BUDGET TRIP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="#features" className="btn-menu">
              Transportation
            </Nav.Link>
            <Nav.Link href="#pricing" className="btn-menu">
              Accommodation
            </Nav.Link>
            <Nav.Link href="#pricing" className="btn-menu">
              Restaurant
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login" className="btn-account" onClick={handleLoginClick}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;

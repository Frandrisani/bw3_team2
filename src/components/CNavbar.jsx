import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Dropdown,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HouseDoorFill,
  SuitcaseFill,
  PeopleFill,
  ChatDots,
  BellFill,
  Grid3x3GapFill,
  Search,
  PersonCircle,
} from "react-bootstrap-icons";
import Logo from "/logoIn.png";

const CNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container
        fluid
        style={{
          paddingLeft: "150px",
          paddingRight: "80px",
          position: "relative",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="34"
            height="34"
            className="d-inline-block align-top"
            alt="LinkedIn logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="me-3 custom-search-form">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Cerca"
                aria-label="Cerca"
                className="border-0 bg-light"
                style={{ boxShadow: "none" }}
              />
              <InputGroup.Text className="bg-transparent border-0">
                <Search size={20} />
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <Nav
            className="me-auto justify-content-center text-center"
            style={{ flexGrow: 1 }}
          >
            <Nav.Item style={{ marginLeft: "24px" }}>
              <Nav.Link href="#home">
                <HouseDoorFill size={24} />
                <div>Home</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "24px" }}>
              <Nav.Link href="#rete">
                <PeopleFill size={24} />
                <div>Rete</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "24px" }}>
              <Nav.Link href="#lavoro">
                <SuitcaseFill size={24} />
                <div>Lavoro</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "24px" }}>
              <Nav.Link href="#messaggi">
                <ChatDots size={24} />
                <div>Messaggi</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "24px", position: "relative" }}>
              <Badge
                bg="danger"
                className="position-absolute translate-middle badge-custom"
                style={{ top: "7px", right: "3px" }}
              >
                4
              </Badge>{" "}
              <Nav.Link href="#notifiche">
                <BellFill size={24} />
                <div>Notifiche</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "24px" }}>
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="transparent"
                  id="dropdown-profile"
                  style={{ boxShadow: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <PersonCircle size={24} />
                    <div style={{ fontSize: "0.75rem", marginTop: "2px" }}>
                      Tu
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/3.1">
                    <strong>Account</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#action/3.2">
                    Impostazioni e privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#action/3.3">Guida</Dropdown.Item>
                  <Dropdown.Item href="#action/3.4">Lingua</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#action/3.5">Gestisci</Dropdown.Item>
                  <Dropdown.Item href="#action/3.6">
                    Post e attivitÃ
                  </Dropdown.Item>
                  <Dropdown.Item href="#action/3.7">
                    Account per la pubblicazione di offerte di lavoro
                  </Dropdown.Item>
                  <Dropdown.Item href="#action/3.8">Esci</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "24px" }}>
              <Nav.Link href="#altro">
                <Grid3x3GapFill size={24} />
                <div>Altro</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#premium" style={{ paddingRight: "40px" }}>
              <div className="text-primary" style={{ cursor: "pointer" }}>
                Prova Premium per 0 EUR
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CNavbar;

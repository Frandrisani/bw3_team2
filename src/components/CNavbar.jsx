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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalProfile } from "../redux/actions/index";
import Logo from "/logoIn.png";

const CNavbar = () => {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profile.profileDettagli);
  const spinner = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getPersonalProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {spinner === true ? (
        <p>Loading...</p>
      ) : (
        <Navbar bg="white" expand="lg" className="shadow-sm fixed-top mb-5">
          <Container
            fluid
            style={{
              paddingLeft: "160px",
              paddingRight: "100px",
              position: "relative",
              paddingTop: "0px",
              paddingBottom: "0px",
              marginTop: "-2px",
              marginBottom: "-10px",
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
              <Form className="me-3">
                <InputGroup>
                  <FormControl
                    type="search"
                    placeholder="Cerca"
                    aria-label="Cerca"
                    className="border-0 bg-light"
                    style={{ paddingRight: "50px", boxShadow: "none" }}
                  />
                  <InputGroup.Text
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: "5",
                      background: "none",
                      border: "none",
                    }}
                  >
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
                    <HouseDoorFill size={20} />
                    <div>Home</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ marginLeft: "24px" }}>
                  <Nav.Link href="#rete">
                    <PeopleFill size={20} />
                    <div>Rete</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ marginLeft: "24px" }}>
                  <Nav.Link href="#lavoro">
                    <SuitcaseFill size={20} />
                    <div>Lavoro</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ marginLeft: "24px" }}>
                  <Nav.Link href="#messaggi">
                    <ChatDots size={20} />
                    <div>Messaggi</div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ marginLeft: "24px", position: "relative" }}>
                  <Badge
                    bg="danger"
                    className="position-absolute translate-middle badge-custom"
                    style={{ top: "8px", right: "7px" }}
                  >
                    4
                  </Badge>{" "}
                  <Nav.Link href="#notifiche">
                    <BellFill size={20} />
                    <div>Notifiche</div>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item style={{ marginLeft: "24px" }}>
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-profile"
                      style={{
                        boxShadow: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0",
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={profilo.image}
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginTop: "8px",
                        }}
                        alt="Profilo"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        maxWidth: "250px",
                        padding: "0",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        zIndex: 9999,
                      }}
                    >
                      <Dropdown.Item href="#action/3.1">
                        <div className="d-flex">
                          <img
                            src={profilo.image}
                            width={50}
                            className="rounded-circle me-3"
                          />
                          <div className="fw-light">
                            <div className="fw-semibold ">
                              {profilo.name} {profilo.surname}
                            </div>
                            {profilo.title}
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#action/3.2">
                        Impostazioni e privacy
                      </Dropdown.Item>
                      <Dropdown.Item href="#action/3.3">Guida</Dropdown.Item>
                      <Dropdown.Item href="#action/3.4">Lingua</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#action/3.5">Gestisci</Dropdown.Item>
                      <Dropdown.Item href="#action/3.6">
                        Post e attività
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#action/3.7"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Account per la pubblicazione di offerte di lavoro
                      </Dropdown.Item>
                      <Dropdown.Item href="#action/3.8">Esci</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                {/* Div per la linea di separazione */}
                <Nav.Item
                  style={{
                    alignSelf: "stretch",
                    width: "1px",
                    backgroundColor: "#dcdcdc",
                    marginTop: "-2px",
                    marginBottom: "5px",
                    marginLeft: "25px",
                    marginRight: "-23px",
                  }}
                />

                <Nav.Item style={{ marginLeft: "24px" }}>
                  <Dropdown align="end"></Dropdown>
                </Nav.Item>
                {/* fine Div per la linea di separazione */}
                <Nav.Item style={{ marginLeft: "24px" }}>
                  <Nav.Link href="#altro">
                    <Grid3x3GapFill size={20} />
                    <div>Per le aziende</div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="justify-content-end">
                <Nav.Link href="#premium" style={{ paddingRight: "40px" }}>
                  <div className="text-primary" style={{ cursor: "pointer" }}>
                    Prova Premium
                    <br /> per 0 EUR
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default CNavbar;

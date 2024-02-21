import React, { useState, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const buttonStyle1 = {
  backgroundColor: "#ffffff",
  color: "#000000",
  border: "1px solid #d1d1d1",
  borderRadius: "20px",
  padding: "5px 15px",
  margin: "0 5px",
  boxShadow: "none",
  fontWeight: "bold",
};

const buttonStyle2 = {
  backgroundColor: "#0A66C2",
  color: "#ffffff",
  border: "none",
  borderRadius: "20px",
  padding: "5px 15px",
  margin: "0 5px",
  boxShadow: "none",
  fontWeight: "bold",
};

const buttonStyle3 = {
  backgroundColor: "#ffffff",
  color: "#0A66C2",
  border: "1px solid #0A66C2",
  borderRadius: "20px",
  padding: "5px 20px",
  margin: "0 5px",
  boxShadow: "0 2px 4px rgb(0 0 0 / 15%)",
  fontWeight: "bold",
};

const ProfileButtons = () => {
  return (
    <div>
      <Button style={buttonStyle1}>Altro</Button>
      <Button style={buttonStyle2}>Aggiungi sezione del profilo</Button>
      <Button style={buttonStyle3}>Disponibile per</Button>
    </div>
  );
};

const SubNavbarContent = () => {
  const username = "Nome Utente";
  const role = "Informatico";

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/*  'path-to-your-image.jpg' da cambiare con percorso immagine */}
          <img
            src="path-to-your-image.jpg"
            alt="Profile"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <div>
            <strong>{username}</strong>
            <div>{role}</div>
          </div>
        </div>
        <ProfileButtons />
      </div>
    </Container>
  );
};

const SottoNavbar = () => {
  // Stato per tenere traccia se la sottoNavbar deve essere mostrata
  const [showSubnav, setShowSubnav] = useState(false);

  const handleScroll = () => {
    // regolare "200" allo scrollY desiderato per mostrare la sottoNavbar
    if (window.scrollY > 200) {
      setShowSubnav(true);
    } else {
      setShowSubnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function per rimuovere l'event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    top: "69px",
    boxShadow: "0 4px 6px -6px #222",
    borderTop: "1px solid #d1d1d1",
    borderBottom: "none",
    height: "50px",
    zIndex: 1030,
    backgroundColor: "#fff",
  };

  return (
    <>
      {showSubnav && (
        <Navbar
          fixed="top"
          bg="white"
          className="shadow-sm"
          style={navbarStyle}
        >
          <Container>
            <SubNavbarContent />
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default SottoNavbar;

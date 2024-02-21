import React, { useState, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileButtons = () => {
  return (
    <div>
      <Button variant="outline-primary">Bottone 1</Button>
      <Button variant="outline-secondary">Bottone 2</Button>
      <Button variant="outline-success">Bottone 3</Button>
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

  return (
    <>
      {showSubnav && (
        <Navbar
          fixed="top"
          bg="white"
          className="shadow-sm"
          style={{ top: "56px", height: "50px" }} // Imposta l'altezza desiderata qui
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

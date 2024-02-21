import React from "react";
import { Button, Navbar } from "react-bootstrap";

const buttonStyle = {
  backgroundColor: "#ffffff", // Sfondo bianco
  border: "1px solid #d1d1d1", // Bordo grigio chiaro
  borderRadius: "20px", // Bordi arrotondati
  padding: "5px 20px", // Padding interno maggiore
  margin: "0 5px", // Margine esterno
  boxShadow: "none", // Nessuna ombra
  color: "#000", // Colore del testo nero
  fontWeight: "bold", // Grassetto per il testo
};

const ProfileButtons = () => {
  return (
    <div>
      <Button style={buttonStyle}>Bottone 1</Button>
      <Button style={buttonStyle}>Bottone 2</Button>
      <Button style={buttonStyle}>Bottone 3</Button>
    </div>
  );
};

const SubNavbarContent = () => {
  // Hardcoded per ora, ma puoi sostituirlo con le informazioni dinamiche da Redux
  const username = "Nome Utente";
  const role = "Informatico";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
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
  );
};

export default SubNavbarContent;

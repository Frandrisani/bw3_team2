import React from "react";
import { Button, Navbar } from "react-bootstrap";

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
  // Hardcoded per ora, sostituirlo con le informazioni dinamiche da Redux
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

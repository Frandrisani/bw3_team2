import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const LeftAside = () => {
  return (
    <div className="col-2">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="/path/to/profile-image.jpg" />
        <Card.Body>
          <Card.Title>Nome Utente</Card.Title>
          <Card.Text>Informatico</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Collegamenti: 5</ListGroup.Item>
          <ListGroup.Item>Espandi la tua rete</ListGroup.Item>
          {/* gli altri che metto tra poco */}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Scopri di più</Card.Link>
          {/* Altri link o azioni */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftAside;

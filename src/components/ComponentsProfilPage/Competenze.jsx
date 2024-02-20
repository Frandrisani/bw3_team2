import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Competenze = () => {
  const skills = [
    { id: 1, name: "HTML5" },
    { id: 2, name: "CSS" },
  ];

  return (
    <Card className="my-3 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4>Competenze</h4>
        <div>
          <Button variant="link" className="text-secondary">
            <PlusLg size={24} />
          </Button>
          <Button variant="link" className="text-secondary">
            <Pencil size={24} />
          </Button>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        {skills.map((skill) => (
          <ListGroupItem
            key={skill.id}
            className="d-flex justify-content-between align-items-center"
          >
            {skill.name}
            <Pencil />
          </ListGroupItem>
        ))}
      </ListGroup>
      <Card.Footer>
        <Button variant="link" className="text-black text-decoration-none">
          Mostra tutte le competenze (9)
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Competenze;

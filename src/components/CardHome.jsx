import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardHome() {
 

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text></Card.Text>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardHome;

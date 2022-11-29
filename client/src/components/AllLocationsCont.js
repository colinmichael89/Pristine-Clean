import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const AllLocationsCont = () => {

  return (
    <>
      {/* h1 location.business */}
      {/*  li location.manager */}
      {/*  li location.cleaners */}
      {/*  li location.cleaners */}
      {/* {locations.map((location) => (
        <Card>
          <Card.Header>{location.businessName}</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>{location._id}</ListGroup.Item>
              <ListGroup.Item>{location.address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))} */}
      <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 123456</ListGroup.Item>
              <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Target</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 123456</ListGroup.Item>
              <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>K-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 123456</ListGroup.Item>
              <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Big Lots</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 123456</ListGroup.Item>
              <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Dollar General</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 123456</ListGroup.Item>
              <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
    </>
  );
};

export default AllLocationsCont;

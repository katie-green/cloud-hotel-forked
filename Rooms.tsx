import * as React from 'react';
import './style.css';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import rooms from './data';


export default function Rooms({data}) {
  return (
    <Container>
      <Row>
        {rooms.map(data =>  (
        <Col>
        <Card className="shadow-sm bg-white rounded" >
        <Card.Img variant="top" src={data.image} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
          </div>
          <Card.Text className="text-secondary">{data.desc}</Card.Text>
          <button>Order Room</button>
          </Card.Body>
        </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
}
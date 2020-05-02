import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        <Row>
          <Col md={6}>Teste</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

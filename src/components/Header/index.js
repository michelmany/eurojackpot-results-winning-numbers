import React from "react";
import { Container } from "react-bootstrap";
import logo from "./logo.svg";

const header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <img src={logo} width={125} className="logo" alt="logo" />
        </Container>
      </header>
      <div className="navbar"></div>
    </>
  );
};

export default header;

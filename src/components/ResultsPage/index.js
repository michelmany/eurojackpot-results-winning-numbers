import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResultsTable from "../ResultsTable";
import "./style.sass";

const ResultsPage = () => {
  const [results, setResults] = useState([]);

  return (
    <section className="results-page">
      <Container>
        <h2 className="results-page__headline">EuroJackpot Result & Winning Numbers</h2>
        <Row>
          <Col md={6}>
            <h4>EuroJackpot Results for Friday 01 May 2020</h4>
            <ul className="results-balls">
              <li className="results-balls__item">6</li>
              <li className="results-balls__item">11</li>
              <li className="results-balls__item">12</li>
              <li className="results-balls__item">21</li>
              <li className="results-balls__item">41</li>
              <li className="results-balls__item">1</li>
              <li className="results-balls__item">2</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <ResultsTable results={results} />
          </Col>
          <Col md={4}>
            <div className="infoContainer">
              <h6>The EuroJackpot numbers for {`01.05.2020`}</h6>
              <p>
                <strong>
                  The {`424th`}th draw for the EuroJackpot was held on {`01.05.2020`}
                </strong>
                , as usual at 9pm in Helsinki.
              </p>
            </div>
            <div className="infoContainer">
              <h6>EuroJackpot numbers for {`01.05.2020`}</h6>
              <p>
                The balls used for the draw are made of a synthetic polymer, softer than ping-pong
                balls. The results are broadcast after the draw, with the draw-machines
                independently checked by the VTT Technical Research Center of Finland.
              </p>
              <p>
                Lottoland published the draw results immediately after the draw on {`01.05.2020`}.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResultsPage;

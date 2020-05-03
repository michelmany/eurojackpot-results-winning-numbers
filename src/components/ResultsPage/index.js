import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResultsTable from "../ResultsTable";
import SidebarBox from "../SidebarBox";

import { getTimeOnly, getDateOnly, getFullDate } from "../../helpers";

const ResultsPage = ({ results }) => {
  const { odds, drawingDate, nr, numbers, euroNumbers, currency, date } = results;
  const dateFormated = getDateOnly(drawingDate);
  const timeFormated = getTimeOnly(drawingDate);

  return (
    <section className="results-page">
      <Container>
        <h2 className="results-page__headline">EuroJackpot Result & Winning Numbers</h2>
        <Row>
          <Col md={6}>
            <h4 className="results-page__subline">
              <span>EuroJackpot</span> Results for {getFullDate(date)}
            </h4>
            <ul className="results-balls">
              {numbers.map((number) => (
                <li className="results-balls__item" key={number}>
                  {number}
                </li>
              ))}
              {euroNumbers.map((euroNumber) => (
                <li className="results-balls__item results-balls__item--extra" key={euroNumber}>
                  {euroNumber}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <ResultsTable odds={odds} currency={currency} />
          </Col>
          <Col md={4}>
            <SidebarBox>
              <h6>The EuroJackpot numbers for {dateFormated}</h6>
              <p>
                <span>
                  The {nr}th draw for the EuroJackpot was held on {dateFormated}
                </span>
                , as usual at {timeFormated} in Helsinki.
              </p>
            </SidebarBox>
            <SidebarBox>
              <h6>EuroJackpot numbers for {dateFormated}</h6>
              <p>
                The balls used for the draw are made of a synthetic polymer, softer than ping-pong
                balls. The results are broadcast after the draw, with the draw-machines
                independently checked by the VTT Technical Research Center of Finland.
              </p>
              <p>
                Lottoland published the draw results immediately after the draw on {dateFormated}.
              </p>
            </SidebarBox>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResultsPage;

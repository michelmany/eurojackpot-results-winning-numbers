import React from "react";
import { Table } from "react-bootstrap";

const ResultsTable = ({ odds }) => {
  const oddsArray = Object.keys(odds).map((key) => odds[key]);
  console.log("--");
  console.log(oddsArray);
  console.log("--");

  return (
    <div className="results-table">
      <Table responsive>
        <thead>
          <tr>
            <th>Tier</th>
            <th>Match</th>
            <th>Winners</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {oddsArray.map((odd, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{`5 Numbers + 2 EuroNumbers`}</td>
              <td>{`${odd.winners}x`}</td>
              <td>{`€${odd.prize}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultsTable;

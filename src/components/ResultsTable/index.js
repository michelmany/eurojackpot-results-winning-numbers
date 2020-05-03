import React from "react";
import { Table } from "react-bootstrap";
import { formatNumber, formatCurrency, romanize } from "../../helpers";

const ResultsTable = ({ odds }) => {
  const oddsArray = Object.keys(odds).map((key) => odds[key]);
  oddsArray.shift(); // Removing the first empty item
  oddsArray.sort((a, b) => a.winners - b.winners); // Sorting by winners

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
              <td>{romanize(index + 1)}</td>
              <td>
                {5} Numbers&nbsp; + {2} Euronumbers
              </td>
              <td>{formatNumber(odd.winners, "x")}</td>
              <td>{formatCurrency(odd.prize, "EUR")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultsTable;

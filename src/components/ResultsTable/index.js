import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const ResultsTable = ({ results }) => {
  return (
    <Table bordered={true}>
      <thead>
        <tr>
          <th>Tier</th>
          <th>Match</th>
          <th>Winners</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{`5 Numbers + 2 EuroNumbers`}</td>
          <td>{`0x`}</td>
          <td>{`€0`}</td>
        </tr>
      </tbody>
    </Table>
  );
};

ResultsTable.propTypes = {
  results: PropTypes.object.isRequired,
};

export default ResultsTable;

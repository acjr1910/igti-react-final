import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = ({
  name,
  points,
  wins,
  draws,
  loses,
  goalsAgainst,
  goalsFor,
  goalsDifference,
}) => {
  return {
    name,
    points,
    wins,
    draws,
    loses,
    goalsAgainst,
    goalsFor,
    goalsDifference,
  };
};

const rows = (items) => items.map((item) => createData(item));

const ResultsTable = ({ results }) => {
  console.log(results);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">V</TableCell>
            <TableCell align="right">E</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">GC</TableCell>
            <TableCell align="right">S</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows(results).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.wins}</TableCell>
              <TableCell align="right">{row.draws}</TableCell>
              <TableCell align="right">{row.loses}</TableCell>
              <TableCell align="right">{row.goalsFor}</TableCell>
              <TableCell align="right">{row.goalsAgainst}</TableCell>
              <TableCell align="right">{row.goalsDifference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;

import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StyledButton from "./StyledButton";
import Dialogbox from "./Dialogbox";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5663e1",
    color: theme.palette.common.white,
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    fontSize: 17,
    paddingTop: 1,
    paddingBottom: 1,
    color: "#707070",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DataTable({ data }) {
  const [openDialogbox, setOpenDialogbox] = useState(false);
  const [selectedElement, setSelectedElement] = useState();

  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>Pincode</StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          {data && data.data && data.data.data.length > 0 ? (
            <TableBody>
              {data.data.data.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{row.first_name}</StyledTableCell>
                  <StyledTableCell>{row.last_name}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.states}</StyledTableCell>
                  <StyledTableCell>{row.city}</StyledTableCell>
                  <StyledTableCell>{row.pincode}</StyledTableCell>
                  <StyledTableCell align="center">
                    <StyledButton bgcolor="#558fc9">EDIT</StyledButton>
                    <StyledButton
                      bgcolor="#c95555"
                      onClick={() => {
                        setSelectedElement(row);
                        setOpenDialogbox(!openDialogbox);
                      }}
                    >
                      DELETE
                    </StyledButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="right">No Task.</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </StyledTableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {selectedElement && (
        <Dialogbox
          open={openDialogbox}
          name={`${selectedElement.first_name + " " + selectedElement.last_name}`}
          onClose={() => setOpenDialogbox(!openDialogbox)}
        />
      )}
    </>
  );
}

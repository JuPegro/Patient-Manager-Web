import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const columns = [
  { id: "picture", label: "Picture" },
  { id: "id", label: "Code" },
  { id: "name", label: "Name" },
  { id: "lastname", label: "Lastname" },
  { id: "email", label: "Email" },
  { id: "username", label: "Username" },
  { id: "role", label: "Role" },
  { id: "status", label: "Status" },
  { id: "createdAt", label: "Created" },
  { id: "updateAt", label: "Updated" },
];

export default function DataTable() {
  // STATE FOR PAGINATION DATA TABLE
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setLoading(false);
        setUsers(data.users);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "96%",
        overflow: "hidden",
        height: "100%",
        margin: "1rem 3rem 0 2.2rem",
        background: "#f1f1f1",
      }}
    >
      <TableContainer
        sx={{ maxHeight: 440, overflowY: "auto", background: "#f1f1f1" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ background: "#fbfbfb", color: "#019b98" }}
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={user.id}
                    sx={{ fontSize: "0.1rem", color: '#014e60' }}
                  >
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      <Avatar alt="Remy Sharp" src={user.picture} />
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.id}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.name}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.lastname}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.email}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.username}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      <Typography
                        sx={
                          user.role === "ASSISTANT"
                            ? {
                                background: "#ffbfab",
                                border: "solid 1px #dd0025",
                                padding: "0.1rem 0.6rem",
                                borderRadius: 20,
                                color: "#dd0025",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                textAlign: "center",
                              }
                            : {
                                background: "#c1ffff",
                                border: "solid 1px #014e60",
                                padding: "0.1rem 0.6rem",
                                borderRadius: 20,
                                color: "#014e60",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                textAlign: "center",
                              }
                        }
                      >
                        {user.role}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography
                        sx={
                          user.status === "ACTIVE"
                            ? {
                                background: "#c1ffff",
                                border: "solid 1px #014e60",
                                padding: "0.1rem 0.6rem",
                                borderRadius: 20,
                                color: "#014e60",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                textAlign: "center",
                              }
                            : {
                                background: "#ffbfab",
                                border: "solid 1px #dd0025",
                                padding: "0.1rem 0.6rem",
                                borderRadius: 20,
                                color: "#dd0025",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                textAlign: "center",
                              }
                        }
                      >
                        {user.status}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.createdAt}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={{color: '#014e60'}}>
                      {user.updatedAt}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

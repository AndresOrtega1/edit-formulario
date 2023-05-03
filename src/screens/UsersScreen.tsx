import React from "react";
import Button from '@mui/material/Button';
import { users } from "../resources/Users.ts";
import { Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function UsersScreen() {

    return (
      <Container>
        <Grid container spacing={2} marginTop={3}>
          <Grid container>
          <Grid item xl={3} lg={2} md={1} sm={0}></Grid>
          <Grid item xl={6} lg={8} md={10} sm={12}>
            <Typography variant="h4">
              Users list
            </Typography>
            <Divider color="black" />
            </Grid>
          </Grid>
          <Grid item md={9}>
          <Grid container marginTop={2}>
            <Grid item xl={3} lg={2} md={1} sm={0}></Grid>
              <Grid item xl={6} lg={8} md={10} sm={12} >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Salary</TableCell>
                    <TableCell align="right">Actions
                      </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(({ id, name, address, role, salary }) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{id}</TableCell>
                      <TableCell align="right"> {name}</TableCell>
                      <TableCell align="right">{address}</TableCell>
                      <TableCell align="right">{role}</TableCell>
                      <TableCell align="right">{salary}</TableCell>
                      <NavLink to={`/Userscreens/${id}`} className=" btn btn-success sm-2">Edit</NavLink>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>
            </Grid>
            <Grid container>
              <Grid item xl={3} lg={2} md={1} sm={0}></Grid>
              <Grid item xl={6} lg={8} md={10} sm={12} >
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
  export default UsersScreen;
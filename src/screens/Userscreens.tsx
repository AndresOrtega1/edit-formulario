
import { TextField, Button } from "@mui/material";
import React from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useParams } from "react-router-dom";
import { users } from "../resources/Users.ts";
import { NavLink, Link } from "react-router-dom";
import {
  Box
} from "@mui/material";
import { useForm } from "react-hook-form";

const Userscreens = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nombre" defaultValue='' {...register("name", { required: true })}
        />
        <TextField
          label="Direccion" defaultValue=''  {...register("address", { required: true })}
        />
        <TextField
          label="Role" defaultValue=''  {...register("role", { required: true })}
        />
        <TextField
          label="Salario" defaultValue=''  {...register("salary", { required: true, pattern: /^[0-9]+$/ })}
        />
       
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
      <Box>
      <Link to="/users">
      <Button type="submit" variant="contained" color="primary">
          Regresar
        </Button>
      </Link>
      </Box>
     
    </div>
  );
};

export default Userscreens;

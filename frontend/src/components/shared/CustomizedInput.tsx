import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      name={props.name}
      type={props.type}
      label={props.label}
    ></TextField>
  );
};

export default CustomizedInput;

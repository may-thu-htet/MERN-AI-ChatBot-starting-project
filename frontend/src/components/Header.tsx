import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";

const Header = () => {
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo></Logo>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

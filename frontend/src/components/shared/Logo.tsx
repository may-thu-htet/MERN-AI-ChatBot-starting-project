import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          className="image-inverted"
          src="/openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
        />
      </Link>
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "20px" }}>MERN</span>-GPT
      </Typography>
    </div>
  );
};

export default Logo;

import { Box, Typography, Button } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import React, { useEffect } from "react";
import CustomizedInput from "../shared/CustomizedInput";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const name = formdata.get("name") as string;
    const email = formdata.get("email") as string;
    const password = formdata.get("password") as string;
    try {
      toast.loading("Signing up", { id: "signup" });
      await auth?.signup(name, email, password);
      // Dismiss the loading toast and show success toast
      toast.dismiss("signup");
      toast.success("Signed up successfully", { id: "signup" });
    } catch (error) {
      console.log(error);

      toast.error("Fail to log in", { id: "signin" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="airobot" style={{ width: "400px" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              padding={2}
              fontWeight={600}
            >
              Sign Up
            </Typography>
            <CustomizedInput type={"text"} name={"name"} label={"name"} />
            <CustomizedInput type={"email"} name={"email"} label={"email"} />
            <CustomizedInput
              type={"password"}
              name={"password"}
              label={"password"}
            />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400 px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;

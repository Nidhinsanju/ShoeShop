import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "./Constents/api";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: "250px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>Welcome Back Log-in</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center " }}>
        <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
          <TextField
            onChange={(e) => {
              setusername(e.target.value);
            }}
            size="medium"
            id="outlined-basic1"
            label="Username"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            id="outlined-basic2"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={async () => {
              try {
                const response = await axios.post(BACKEND_URL + "/user/login", {
                  username: username,
                  password: password,
                });
                const data = response.data;
                localStorage.setItem("token", data.token);
                window.location = "/";
                alert("Logged in Successfully");
              } catch (error) {
                if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request, "hi1");
                  alert("error");
                  console.log(error, "hi2");
                }
              }
            }}
          >
            Log In
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Login;

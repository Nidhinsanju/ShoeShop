import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [email, setmail] = useState("");
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
        <Typography>welcome to Shoeshop,Sign-up to continue</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center " }}>
        <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
          <TextField
            onChange={(e) => {
              setmail(e.target.value);
            }}
            size="medium"
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
            label="Password"
            variant="outlined"
            fullWidth={true}
            type={"password"}
          />
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={async () => {
              const response = await axios.post(BACKEND_URL + "/user", {
                username: email,
                password: password,
              });
              const data = response.data;
              localStorage.setItem("token", data.token);
              window.location = "/";
            }}
          >
            SignUp
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "./Constents/api";

function MyAccount() {
  const [userData, setuserData] = useState([{}]);
  const [currentpassword, setcurrentpassword] = useState("");
  const [changedPassword, setChangedPassword] = useState("");
  const [conform, setConform] = useState("");
  useEffect(() => {
    try {
      fetch(BACKEND_URL + "/user/me", {
        method: "Post",
      }).then((res) => {
        res.json().then((data) => {
          setuserData(data.userInfo);
        });
      });
    } catch (error) {
      console.log("Internal server error");
      console.log(error);
    }
  }, []);

  const userdata = userData[0];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "15%",
        }}
      >
        <Card
          variant="outlined"
          style={{
            width: "400px",
            padding: "20px",
          }}
        >
          <TextField
            disabled
            id="outlined-disabled"
            label="Email"
            defaultValue={userdata.username}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setcurrentpassword(e.target.value);
            }}
            id="outlined-basic1"
            label="Current Password"
            type="password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setChangedPassword(e.target.value);
            }}
            id="outlined-basic2"
            label="New Password"
            type="password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setConform(e.target.value);
            }}
            id="outlined-basic3"
            label="Conform Password"
            type="password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={async () => {
              if (changedPassword === conform) {
                const response = await axios.post(BACKEND_URL + "", {
                  customerID: customerID,
                  currentPassword: currentpassword,
                  updatePassword: conform,
                });
                const data = response.data;
                localStorage.setItem("token", data.token);
                window.location = "/";
              } else {
                alert("Password Mismatch");
              }
            }}
          >
            Update Password
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default MyAccount;

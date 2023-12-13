import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "./Constents/api";
import useFetchUser from "./Hooks/useFetchUser";

function MyAccount() {
  const navigate = useNavigate("");
  const [currentpassword, setcurrentpassword] = useState("");
  const [changedPassword, setChangedPassword] = useState("");
  const [conform, setConform] = useState("");
  const [user, setUser] = useFetchUser();

  useEffect(() => {
    if (!user) {
      console.log("wrong user");
    }
  }, [user]);

  if (user) {
    return (
      <div>
        {console.log(user)}
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
              defaultValue={user.username}
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
}
export default MyAccount;

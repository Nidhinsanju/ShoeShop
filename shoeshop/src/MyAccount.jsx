import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useState } from "react";
import axios from "axios";

function MyAccount() {
  const customerID = 1234;

  fetch("", {
    method: "Get",
    headers: {
      "Content-type": "application/json",
    },
    body: {
      customerID: customerID,
    },
  })
    .then((res) => {
      JSON.stringify(res);
    })
    .then((data) => {
      const userData = data;
      console.log(userData);
    });

  return (
    <div>
      <UpdateAccount />
    </div>
  );
  function UpdateAccount() {
    const [currentpassword, setcurrentpassword] = useState("");
    const [changedPassword, setChangedPassword] = useState("");
    const [conform, setConform] = useState("");
    const email = "current email";
    return (
      <div>
        <div>
          <main style={{ border: "2px sloid blue", backgroundColor: "blue" }}>
            <div>
              <Card
                variant="outlined"
                style={{ width: "400px", padding: "20px" }}
              >
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Email"
                  defaultValue={email}
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
                    console.log(changedPassword);
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
                    console.log(conform);
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
                      const response = await axios.post("http://", {
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
          </main>
        </div>
        <Oderlist />
      </div>
    );
  }
  function Oderlist() {
    fetch("", {
      headers: "Get",
      body: {
        customerID: "",
      },
    })
      .then((res) => {
        JSON.stringify(res);
      })
      .then((data) => {
        const result = data;
        console.log(result);
      });

    return (
      <div>
        <main style={{ display: "flex" }}>
          <content>HELO</content>
        </main>
      </div>
    );
  }
}
export default MyAccount;

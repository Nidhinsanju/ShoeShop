import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "./Constents/api";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const navigate = useNavigate();
  const [userData, setuserData] = useState([{}]);
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

  return (
    <div>
      <UpdateAccount userData={userData[0]} />
    </div>
  );
  function UpdateAccount(props) {
    const [currentpassword, setcurrentpassword] = useState("");
    const [changedPassword, setChangedPassword] = useState("");
    const [conform, setConform] = useState("");

    const userdata = props.userData;
    console.log(userdata);
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
          </main>
          <Button
            variant="outlined"
            style={{ color: "green", backgroundColor: "yellow" }}
            onClick={() => {
              navigate("/shophub/order");
            }}
          >
            Orders
          </Button>
        </div>
      </div>
    );
  }
}
export default MyAccount;

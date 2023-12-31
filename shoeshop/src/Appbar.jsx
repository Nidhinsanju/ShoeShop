import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { pages } from "./Constents/naviitems";
import { useEffect, useState } from "react";
import useFetchUser from "./Hooks/useFetchUser";

function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "grey",
        justifyContent: "space-between",
        alignContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "grey",
          alignItems: "center",
        }}
      >
        <div style={{ paddingLeft: "10px" }}>
          <button
            style={{ borderRadius: "50%", marginRight: "15px" }}
            onClick={() => {
              navigate("/shophub/");
            }}
          >
            <img
              style={{
                maxWidth: "20px",
                maxHeight: "20px",
                borderRadius: "50%",
              }}
              src="https://www.svgrepo.com/show/524957/shop.svg"
              alt="image"
            />
          </button>
        </div>
        <div>
          <button
            style={{
              borderRadius: "50%",
              marginRight: "15px",
            }}
            onClick={() => {
              navigate("/shophub/cart");
            }}
          >
            <img
              style={{ maxWidth: "20px", maxHeight: "20px" }}
              src="https://cdn-icons-png.flaticon.com/512/1174/1174408.png"
              alt="image"
            />
          </button>
        </div>
      </div>
      <div>
        <ul style={{ display: "flex" }}>
          {pages.map((data) => (
            <li style={{ display: "flex" }}>
              <a
                style={{
                  padding: "10px",
                  marginRight: "60px",
                  textDecoration: "none",
                }}
                href={data.link}
              >
                {data.title}
              </a>
            </li>
          ))}
        </ul>
        <Check />
      </div>
    </div>
  );

  function Check() {
    const token = localStorage.getItem("token");
    if (token != "null") {
      return (
        <div>
          <Button
            variant="contained"
            onClick={() => {
              localStorage.setItem("token", null);
              localStorage.setItem("CustomerID", null);
              navigate("/shophub/Login");
            }}
          >
            Logout
          </Button>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            backgroundColor: "grey",
            justifyContent: "space-between",
            alignContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "grey",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "10px" }}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/shophub/login");
                }}
              >
                Login
              </Button>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/shophub/Signup");
                }}
              >
                Signup
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Appbar;

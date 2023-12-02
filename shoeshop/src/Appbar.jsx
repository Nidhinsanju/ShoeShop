import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { pages } from "./Constents/naviitems";

function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "red",
        justifyContent: "space-between",
        alignContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "green",
          alignItems: "center",
        }}
      >
        <div style={{ paddingLeft: "10px" }}>
          <button
            style={{ borderRadius: "50%", marginRight: "10px" }}
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
          <button style={{ borderRadius: "50%", marginRight: "10px" }}>
            <img
              style={{ maxWidth: "20px", maxHeight: "20px" }}
              src="data:image/jpeg;base64,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"
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
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "blue",
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

export default Appbar;

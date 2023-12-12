import { useState, useEffect } from "react";
import { BACKEND_URL } from "../Constents/api";
import { useNavigate } from "react-router-dom";

export default function useFetchUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const CustomerID = localStorage.getItem("CustomerID");
        const value = { CustomerId: CustomerID };
        if (!token) {
          console.log(token);
          // return navigate("/login");
        } else {
          // console.log(JSON.stringify(value));
          fetch(BACKEND_URL + "/user/me", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: "bearer " + token,
            },
            body: JSON.stringify(value),
          }).then((res) => {
            if (res.status === 200) {
              res.json().then((data) => {
                setUser(data);
              });
            } else {
              console.log("server error with status", res.status);
            }
          });
        }
      } catch (error) {
        console.log("error in catch", error);
      }
    };
    fetchUser();
  }, [navigate]);

  return [user, setUser];
}

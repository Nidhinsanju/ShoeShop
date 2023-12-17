// import { useState, useEffect } from "react";
// import { BACKEND_URL } from "../Constents/api";
// import { Navigate, useNavigate } from "react-router-dom";

// export default function addproduct() {
//   const navigate = useNavigate;
//   const customerID = localStorage.getItem("CustomerID");
//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     try {
//       if (token === "null") {
//         navigate("shophub/login");
//         console.log(token);
//       } else {
//         const value = JSON.stringify({ CustomerId: customerID });
//         fetch(BACKEND_URL + "/user/addproduct" + ID, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + token,
//           },
//           body: value,
//         }).then((res) => {
//           if (res.status === 200) {
//             console.log("Done");
//             res.json().then((data) => {
//               setShop(true);
//               alert("Product added to cart");
//             });
//           } else {
//             setShop(false);
//             alert("Product not added to cart");
//           }
//         });
//       }
//     } catch (error) {
//       console.log("error in fetching", error);
//     }
//   }, []);
//   return addproduct;
// }

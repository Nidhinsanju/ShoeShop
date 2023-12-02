import Appbar from "./Appbar";
import "./App.css";
import Cart from "./Cart";
import Dashboard from "./DashBoard";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import MyAccount from "./MyAccount";
import Blog from "./Blog";
import Shop from "./Shop";
import Footer from "./Footer";
import Contact from "./Contact";
import Orderlist from "./Orderlist";

function App() {
  return (
    <>
      <div>
        <Router>
          <Appbar />
          <Routes>
            <Route path="/shophub/" element={<Dashboard />}></Route>
            <Route path="/shophub/login" element={<Login />}></Route>
            <Route path="/shophub/signup" element={<Signup />}></Route>
            <Route path="/shophub/cart" element={<Cart />}></Route>
            <Route path="/shophub/myaccount/" element={<MyAccount />}></Route>
            <Route path="/shophub/blog/" element={<Blog />}></Route>
            <Route path="/shophub/shop/" element={<Shop />}></Route>
            <Route path="/shophub/contact/" element={<Contact />}></Route>
            <Route path="/shophub/order/" element={<Orderlist />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;

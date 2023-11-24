import Appbar from "./Appbar";
import "./App.css";
import Cart from "./Cart";
import Dashboard from "./DashBoard";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Signup from "./Signup";

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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

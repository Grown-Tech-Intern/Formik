import Create_pass from "./components/Create_pass/Create_pass";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import {
  Routes,
  Route,
} from "react-router-dom";
import Forgot from "./components/Forgot_pass/Forgot";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpass" element={<Create_pass/>} />
        <Route path="/forgot" element={<Forgot/>} />
      </Routes>

    </div>
  );
}

export default App;

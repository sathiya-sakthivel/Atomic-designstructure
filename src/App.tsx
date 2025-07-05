import { Routes, Route } from "react-router-dom";
import Signin from "./components/pages/Auth/signIn";
import Signup from "./components/pages/Auth/signUp";
import ForgetPass from "./components/pages/Auth/forgetpass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPass />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login.component";
import Dashboard from "./components/Dashboard/Dashboard.component";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

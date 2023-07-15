import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="App">
      {/* <Login /> */}
      <Routes>
        <Route
          path="/"
          element={<Login formData={formData} setFormData={setFormData} />}
        />
        <Route path="/profile" element={<Profile formData={formData} />} />
      </Routes>
    </div>
  );
}

export default App;

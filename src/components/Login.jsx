import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container">
      <h1 className="heading">Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <p className="label c">
            Email <sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </label>
        <label>
          <p className="label">
            Password <sup>*</sup>
          </p>
          <input
            required
            type="password"
            value={formData.password}
            name="password"
            placeholder="Enter password"
            onChange={changeHandler}
          />
        </label>
        <p className="forgot_password">Forgot password?</p>
        <br />
        <button>LOGIN </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);

    if (formData.email.length === 0 || formData.password.length === 0) {
      setError(true);
    }
  }

  return (
    <div className="container">
      <h1 className="heading">Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <p className="label">
            Email <sup>*</sup>
          </p>
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </label>
        {error && formData.email.length <= 0 ? (
          <p className="errorMsg">Please enter email address</p>
        ) : (
          ""
        )}
        <label htmlFor="password">
          <p className="label">
            Password <sup>*</sup>
          </p>
          <input
            type="password"
            value={formData.password}
            name="password"
            placeholder="Enter password"
            onChange={changeHandler}
          />
        </label>
        {error && formData.password.length <= 0 ? (
          <p className="errorMsg">Please enter password</p>
        ) : (
          ""
        )}
        <p className="forgot_password">Forgot password?</p>
        <br />
        <button>LOGIN </button>
      </form>
    </div>
  );
};

export default Login;

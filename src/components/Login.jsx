import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //sample user login info
  const database = [
    { email: "test@gmail.com", password: "pass1" },
    { email: "admin@gmail.com", password: "pass123" },
  ];

  const error = {
    email: "invalid email id",
    pass: "invalid password",
  };

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    console.log(document.forms[0]);
  }

  const renderErrorMessage = (value) =>
    value === errorMessages.value && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="container">
      <h1 className="heading">Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <p className="label">
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
          {renderErrorMessage("email")}
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
          {renderErrorMessage("pass")}
        </label>
        <p className="forgot_password">Forgot password?</p>
        <br />
        <button>LOGIN </button>
      </form>
    </div>
  );
};

export default Login;

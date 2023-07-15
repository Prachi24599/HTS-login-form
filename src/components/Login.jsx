import React, { useState } from "react";
import "./Login.css";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [validEmailMsg, setValidEMailMsg] = useState("");
  let submitform = true;

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    //checking if the field is empty
    if (formData.email.length === 0 || formData.password.length === 0) {
      setError(true);
      submitform = false;
    }
    //email validation
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(formData.email) && formData.email.length > 0) {
      setValidEMailMsg("please enter valid email address");
      submitform = false;
    } else {
      setValidEMailMsg("");
    }

    if (submitform) {
      //print form data on console
      console.log(formData);
      navigate("/profile");
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
            type="text"
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
        <p className="errorMsg">{validEmailMsg}</p>
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

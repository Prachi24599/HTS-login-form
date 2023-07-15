import React from "react";

const Profile = ({ formData }) => {
  return (
    <div className="container">
      <h1 className="heading">Welcome</h1>
      <p>Email : {formData.email}</p>
      <p>Password : {formData.password}</p>
    </div>
  );
};

export default Profile;

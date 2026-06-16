import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ResetPassword() {

  const { token } = useParams();

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      `http://localhost:5000/api/auth/reset-password/${token}`,
      {
        password,
      }
    );

    alert("Password Updated");
  };

  return (
    <div className="container mt-5">

      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="password"
          className="form-control"
          placeholder="New Password"
          onChange={(e)=>
          setPassword(e.target.value)}
        />

        <button
          className="btn btn-success mt-3">
          Update Password
        </button>

      </form>

    </div>
  );
}

export default ResetPassword;
import axios from "axios";
import { useState } from "react";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/auth/forgot-password",
      { email }
    );

    alert("Email Sent");
  };

  return (
    <div className="container mt-5">

      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e)=>
          setEmail(e.target.value)}
        />

        <button
          className="btn btn-primary mt-3">
          Send Link
        </button>

      </form>
    </div>
  );
}

export default ForgotPassword;
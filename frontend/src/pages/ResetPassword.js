import { useState } from "react";

function ResetPassword() {
  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage(
        "Passwords do not match"
      );
      return;
    }

    setMessage(
      "Password updated successfully."
    );
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ width: "450px" }}
      >
        <div className="text-center mb-3">
          <h2 className="fw-bold">
            Reset Password
          </h2>

          <p className="text-muted">
            Create a new password
          </p>
        </div>

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              New Password
            </label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
            />
          </div>

          <button
            className="btn btn-success w-100"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;

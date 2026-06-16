import { Link } from "react-router-dom";

function LinkExpired() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg border-0 p-4 text-center"
        style={{ width: "450px" }}
      >
        <h2 className="text-danger fw-bold">
          Link Expired
        </h2>

        <p className="text-muted mt-3">
          Your password reset link has
          expired.
        </p>

        <Link
          to="/forgot-password"
          className="btn btn-primary mt-2"
        >
          Request New Link
        </Link>
      </div>
    </div>
  );
}

export default LinkExpired;

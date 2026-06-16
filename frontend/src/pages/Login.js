import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container mt-5">

      <h2>Login</h2>

      <input
        className="form-control"
        placeholder="Email"
      />

      <input
        className="form-control mt-3"
        placeholder="Password"
        type="password"
      />

      <button className="btn btn-primary mt-3">
        Login
      </button>

      <div className="mt-3">

        <Link to="/forgot-password">
          Forgot Password?
        </Link>

      </div>
    </div>
  );
}

export default Login;
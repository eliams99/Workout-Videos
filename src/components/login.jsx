import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/authService";
import $ from "jquery";

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    const username = $("#inputUsername").val();
    const password = $("#inputPassword").val();

    if (username != null && password != null) {
      auth.login(username, password);
      navigate("/videos", { replace: true });
    }
  }

  return (
    <div>
      <div className="breadcrumb py-4">
        <div className="container">
          <h2>Login</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3 row">
          <label for="inputUsername" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputUsername" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default Login;

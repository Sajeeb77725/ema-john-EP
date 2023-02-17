import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did not match.");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <p style={{ color: "red" }}>{error}</p>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConPassword}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div>
        <h1>Registration Hare</h1>
        <form>
          <input type="email" name="" id="3" placeholder="enter your email" />
          <br />
          <input type="password" name="" id="4" placeholder="password" />
          <br />
          <input type="password" name="" id="" placeholder="re-password" />
          <br />
          <input className="btn-regular" type="submit" value="Register" />
        </form>
        <p>
          You have already ? <Link to="/login">Login.</Link>
        </p>
        <div>---------------or--------------</div>
        <br />
        <button className="btn-regular">Google Login</button>
      </div>
    </div>
  );
};

export default Register;

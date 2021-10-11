import React from "react";
import { Link, useLocation ,useHistory} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/shop';

const handleGoogleLogIn=()=>{
  signInWithGoogle()
    .then((result) => {
      history.push(redirectUrl)
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

  return (
    <div className="login">
      <div>
        <h1>Login Hare</h1>
        <form>
          <input type="email" name="" id="1" placeholder="enter your email" />
          <br />
          <input type="password" name="" id="2" />
          <br />
          <input className="btn-regular" type="submit" value="Submit" />
        </form>
        <p>
          New to ema-jhon ? <Link to="/register">Create Account.</Link>
        </p>
        <div>---------------or--------------</div>
        <br />
        <button onClick={handleGoogleLogIn} className="btn-regular">
          Google Sing In
        </button>
      </div>
    </div>
  );
};

export default Login;

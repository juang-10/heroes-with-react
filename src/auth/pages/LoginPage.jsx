import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useContext } from "react";

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const onLogin = () => {
    login('Juan Gonzalez')
    navigate('/', { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}

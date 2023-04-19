import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  // Navegar a la ruta raíz ('/') de la aplicación, reemplazando la entrada actual en el historial
  const navigate = useNavigate();

  const onLogin = () => {
    // Navegar a la ruta raíz ('/') de la aplicación, reemplazando la entrada actual en el historial
    navigate('/', {
      replace: true
    })
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

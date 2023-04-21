import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

  // Obtener la función navigate de React Router
  const navigate = useNavigate();

  // Función para cerrar sesión
  const onLogout = () => {
    // Navegar a la ruta '/login', reemplazando la entrada actual en el historial
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link 
        className="navbar-brand" 
        to="/"
      >
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `}
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            Juan
          </span>
          {/* Botón para cerrar sesión */}
          <button className="nav-item nav-link btn"
            onClick={onLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

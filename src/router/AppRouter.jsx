import { Route, Routes } from "react-router-dom"
// import { MarvelPage } from "../heroes/pages/MarvelPage"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"

export const AppRouter = () => {
  return (
    <Routes>
      {/* Ruta para la página de inicio de sesión */}
      <Route path="/login" element={<LoginPage/>}/>
      {/* Ruta comodín para todas las demás rutas */}
      <Route path="/*" element={<HeroesRoutes/>}/>
    </Routes>
  )
}

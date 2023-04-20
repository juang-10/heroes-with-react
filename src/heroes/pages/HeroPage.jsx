import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  // Obtenemos el parámetro id de la URL con el hook useParams
  const { id, ...rest } = useParams();

  // Obtenemos el héroe correspondiente al id
  const hero = getHeroById(id);

  // Si el héroe no existe, redirigimos al usuario a la página de inicio de Marvel
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // Si el héroe existe, mostramos su nombre de superhéroe en un elemento h1
  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  );
};

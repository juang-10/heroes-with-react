import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  // Obtenemos el parámetro id de la URL con el hook useParams
  const { id, ...rest } = useParams();

  // Obtenemos el héroe correspondiente al id
  const hero = getHeroById(id);

  const navigate = useNavigate();


  const onNavigateBack = () => {
    if(hero.publisher === 'DC Comics') {
      navigate('/dc')
    } else {
      navigate('/marvel')
    }
  }

  // Si el héroe no existe, redirigimos al usuario a la página de inicio de Marvel
  if (!hero) {
    return <Navigate to="/marvel" />;
  }


  // Si el héroe existe, mostramos su nombre de superhéroe en un elemento h1
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${id}.jpg`} 
          alt={hero.superhero} 
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}  
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

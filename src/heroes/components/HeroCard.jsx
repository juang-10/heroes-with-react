import React from 'react'
import { Link } from 'react-router-dom'

const CharactersByHero = ({alter_ego, characters}) => {
  // if(alter_ego === characters) return (<></>);
  // return <p>{characters}</p>
  return (alter_ego === characters)
          ? (<></>)
          : <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  // Construir la URL de la imagen del héroe utilizando su ID
  const heroImageUrl = `/assets/heroes/${id}.jpg`

  // const charactersByHero = (<p>{characters}</p>)

  return (
    <div className='col'>
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            {/* Mostrar la imagen del héroe */}
            <img src={heroImageUrl} className='card-img' alt={superhero}/>
          </div>

          <div className="col-8">
            <div className="card-body">
              {/* Mostrar el nombre del héroe como título de la tarjeta */}
              <h5 className='card-title'>{superhero}</h5>
              {/* Mostrar la identidad secreta del héroe como texto secundario */}
              <p className='card-text'>{alter_ego}</p>

              {/* {
                (alter_ego !== characters) && charactersByHero
                (alter_ego !== characters) && <p>{characters}</p>
              } */}

              {/* Mostrar la lista de personajes, a menos que sea igual a la identidad secreta */}
              <CharactersByHero characters={characters} alter_ego={alter_ego}/>

              <p className='card-text'>
              {/* Mostrar la fecha de primera aparición */}
                <small className='text-muted'>{first_appearance}</small>
              </p>

              {/* Agregar un enlace para ir a la página del héroe */}
              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

import React from 'react'

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
              {/* Mostrar los personajes relacionados con el héroe */}
              <p>{characters}</p>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

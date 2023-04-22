import React from 'react'
import { HeroCard } from '../components/'
import { useForm } from '../../auth/hooks/useForms'
import { useLocation, useNavigate } from 'react-router-dom'

import queryString from 'query-string'
import { getHeroesByName } from '../helpers'


export const Search = () => {
  // Asignación de variables a través de hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Extracción de valores de búsqueda de la URL usando la biblioteca 'query-string'
  const {q = ''} = queryString.parse(location.search)

  const heroes = getHeroesByName(q);

  // Uso del hook 'useForm' para manejar el estado del input de búsqueda
  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  // Función que se ejecuta al enviar el formulario de búsqueda
  const onSearchSubmit = (e) => {
    e.preventDefault()
    if(searchText.trim().length <= 1) return

    // Navegación a la misma ruta pero con un query parameter 'q' que representa el texto de búsqueda
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange} 
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            Not hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }

        </div>
      </div>
    </>
  )
}

import { useMemo } from 'react'
import { HeroCard } from '../components'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {
  // Utilizamos useMemo para memorizar el resultado de la función getHeroesByPublisher con el publisher pasado como prop
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} 
            {...hero}
          />
        ))
      }
    </div>
  )
}

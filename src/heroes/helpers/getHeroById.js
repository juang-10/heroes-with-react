import { heroes } from "../data/heroes"

export const getHeroById = (id) => {
  // Utilizamos el método find para encontrar el héroe correspondiente al id
  return heroes.find(hero => hero.id === id)
}

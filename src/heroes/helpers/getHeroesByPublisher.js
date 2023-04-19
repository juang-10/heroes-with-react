import { heroes } from "../data/heroes";

// Función para obtener héroes de un editor específico
export const getHeroesByPublisher = (publisher) => {
  // Array de editores válidos
  const validPublisher = ["DC Comics", "Marvel Comics"];

  // Verificar si el editor es válido
  if (!validPublisher.includes(publisher)) {
    // Lanzar un error si el editor no es válido
    throw new Error(`${publisher} is not a valid publisher`);
  }

  // Filtrar los héroes por el editor
  return heroes.filter((heroe) => heroe.publisher === publisher);
};

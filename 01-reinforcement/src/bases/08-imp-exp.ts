import { heroes, type Hero } from "../data/heroes.data.ts";

const getHeroeById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    throw new Error(`Hero with id ${id} not found`);
  }

  return hero;
};

console.log(getHeroeById(2));

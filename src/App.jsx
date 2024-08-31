import { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";
import FilterInput from "./components/FilterInput";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-6 shadow-md">
        <h1 className="text-3xl font-bold text-white">Pokemon Explorer</h1>
        <FilterInput filter={filter} setFilter={setFilter} />
      </header>
      <main className="container mx-auto p-4">
        <div className="pokemon-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredPokemon.map((poke, index) => (
            <PokeCard key={index} poke={poke} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

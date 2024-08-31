/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const PokeCard = ({ poke }) => {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    fetch(poke.url)
      .then((response) => response.json())
      .then((data) => setPokeData(data))
      .catch((error) => console.error("Error fetching Pokémon data:", error));
  }, [poke.url]);

  if (!pokeData) return null;

  const { name, sprites, types, abilities, stats } = pokeData;

  return (
    <div className="poke-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      {/* Pokémon Image */}
      <div className="text-center">
        <img
          src={sprites.front_default}
          alt={name}
          className="w-32 h-32 mx-auto"
        />
      </div>

      {/* Pokémon Name */}
      <h2 className="text-2xl font-bold text-center capitalize mt-4">{name}</h2>

      {/* Pokémon Types */}
      <div className="flex justify-center mt-2">
        {types.map((typeInfo) => (
          <span
            key={typeInfo.slot}
            className={`type-badge px-2 py-1 mx-1 rounded-full text-white capitalize ${
              typeInfo.type.name === "grass"
                ? "bg-green-500"
                : typeInfo.type.name === "fire"
                ? "bg-red-500"
                : typeInfo.type.name === "water"
                ? "bg-blue-500"
                : "bg-gray-500"
            }`}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>

      {/* Pokémon Abilities */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Abilities:</h3>
        <ul className="list-disc list-inside">
          {abilities.map((abilityInfo) => (
            <li key={abilityInfo.slot} className="capitalize">
              {abilityInfo.ability.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Pokémon Stats */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Base Stats:</h3>
        <ul>
          {stats.map((statInfo) => (
            <li key={statInfo.stat.name} className="capitalize">
              <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeCard;

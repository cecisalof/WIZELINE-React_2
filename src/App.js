import React from "react";
import "./styles.css";
import { mockPokemonsData } from "../src/mock/pokeData.js";
import { PokeList } from "./components/PokeCards.jsx";

export default function App() {
  const pokemons = mockPokemonsData;
  console.log("data", pokemons);
  const { name, stripes, video } = pokemons;

  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      {pokemons.map((pokemon) => (
        <div className="container">
          <div className="child-container">
            <PokeList
              key={pokemon.id}
              name={name}
              stripes={stripes}
              video={video}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import "./styles.css";
import { mockPokemonsData } from "../src/mock/pokeData.js";
import { PokeList } from "./components/PokeCards.jsx";

export default function App() {
  const pokemons = mockPokemonsData;
  console.log("data", pokemons);
  // const { name, stripes, video } = pokemons;

  return (
    <div className="App">
      <h1>Loops</h1>
      {pokemons.map((pokemon, index) => (
        <div className="container">
          <div className="child-container" key={pokemon.id}>
            <PokeList
              name={pokemon.name}
              stripesFront={pokemon.sprites.front_default}
              stripesFront2={pokemon.sprites.front_shiny}
              stripesBack={pokemon.sprites.back_default}
              stripesBack2={pokemon.sprites.back_shiny}
              videoLink={pokemon.videoLink}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

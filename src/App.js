import React from "react";
import "./styles.css";
import { mockPokemonsData } from "../src/mock/pokeData.js";
import { PokeList } from "./components/PokeCards.jsx";

export default function App() {
  const pokemons = mockPokemonsData;
  console.log("data", pokemons);
  // const { name, sprites, video } = pokemons;

  return (
    <div className="App">
      <h1>Pokemon information</h1>
      {pokemons.map((pokemon, index) => (
        <div className="card-container">
          <div className="child-container">
            <PokeList
              key={pokemon.id}
              name={pokemon.name}
              spritesFront={pokemon.sprites.front_default}
              spritesFront2={pokemon.sprites.front_shiny}
              spritesBack={pokemon.sprites.back_default}
              spritesBack2={pokemon.sprites.back_shiny}
              videoLink={pokemon.videoLink}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
// import { mockPokemonsData } from "../mock/pokeData.js";

export const PokeList = (pokemons) => {
  console.log("pokemon", pokemons);
  const { name, sprites, video } = pokemons;

  return (
    <div>
      <h1>Poke cards</h1>
      <ul>
        <li>{name}</li>
        <li>
          <img className="card-img" src={sprites} alt="" />
        </li>
        <li>{video}</li>
      </ul>
    </div>
  );
};

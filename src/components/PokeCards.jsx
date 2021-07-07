import React from "react";
import { mockPokemonsData } from "../mock/pokeData.js";

export const PokeList = (pokemons) => {
  console.log("pokemon", pokemons);
  const { name, stripesFront, stripesBack, videoLink } = pokemons;

  return (
    <div>
      <h1>Poke cards</h1>
      <ul>
        <li>{name}</li>
        <a href={videoLink}>
          <img className="card-img" src={stripesFront} alt="" />
          <img className="card-img" src={stripesBack} alt="" />
        </a>
      </ul>
    </div>
  );
};

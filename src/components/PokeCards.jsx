import React from "react";
import "./PokeCard.css";

export const PokeList = (pokemons) => {
  console.log("pokemon", pokemons);
  const { name, spritesFront, spritesBack, videoLink } = pokemons;

  return (
    <div>
      {pokemons && (
        <>
          <h1>{name}</h1>
          {spritesFront ? (
            <a href={videoLink}>
              <img className="card-img" src={spritesFront} alt="" />
            </a>
          ) : (
            <a href={videoLink}>
              <img className="card-img" src={spritesBack} alt="" />
            </a>
          )}
        </>
      )}
    </div>
  );
};

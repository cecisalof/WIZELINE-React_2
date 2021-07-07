import React from "react";
import "./PokeCard.css";

export const PokeList = (pokemons) => {
  console.log("pokemon", pokemons);
  const {
    name,
    spritesFront,
    spritesFront2,
    spritesBack,
    spritesBack2,
    videoLink
  } = pokemons;

  function over(e) {
    spritesFront
      ? (e.currentTarget.src = spritesFront2)
      : (e.currentTarget.src = spritesBack2);
  }

  function out(e) {
    spritesFront2
      ? (e.currentTarget.src = spritesFront)
      : (e.currentTarget.src = spritesBack);
  }

  return (
    <div>
      {pokemons && (
        <>
          <h1>{name}</h1>
          {spritesFront ? (
            <a href={videoLink} target="_blank" rel="noopener noreferrer">
              <img
                id="poke-img"
                className="card-img"
                onMouseOver={over}
                onMouseOut={out}
                src={spritesFront}
                alt=""
              />
            </a>
          ) : (
            <a href={videoLink} target="_blank" rel="noopener noreferrer">
              <img
                id="poke-img"
                className="card-img"
                onMouseOver={over}
                onMouseOut={out}
                src={spritesBack}
                alt=""
              />
            </a>
          )}
        </>
      )}
    </div>
  );
};

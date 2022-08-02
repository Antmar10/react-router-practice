import React, { useEffect, useState } from "react";

//components
import Character from "../component/Character.jsx";

//create your first component
const Home = () => {
  const [characters, setCharacters] = useState([]);

  const getCharactersApi = async () => {
    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character`);
      let data = await response.json();

      if (response.ok) {
        setCharacters(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharactersApi();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
					{characters.map((character)=>{
						return(
							<Character key={`character-${character.id}`} character={character}/>
						);
					})}
        </div>
      </div>
    </>
  );
};

export default Home;

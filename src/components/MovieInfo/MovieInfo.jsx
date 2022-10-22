import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Div } from "./MovieInfo.style";
import swlogo from "../../assets/swlogo.png";
import { PacmanLoader } from "react-spinners";
const MovieInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [films, SetFilms] = useState({});

  const fetch = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/films/${id}`);
      SetFilms(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  let xters = [];
  // xters = [];

  const getCharacter = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://swapi.dev/api/films/${id}`);

      const characters = response.data.characters;

      characters.map(async (character) => {
        const response = await axios.get(character);
        const characterData = response.data;

        xters.push(characterData);
        setPeople(xters);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <PacmanLoader
          color="rgba(0, 0, 69)"
          cssOverride={{
            position: "absolute",
            top: "40%",
            right: "50%",
            // backgroundColor: "rgba(0, 0, 29)",
            // transform: "translate(50%,50%)",
          }}
          size={40}
          speedMultiplier={1}
        />
      ) : (
        <Div>
          <div className="header">
            <img src={swlogo} alt="swlogo" width={70} />
            <h1>{films.title}</h1>
            <marquee direction="down" padding-top="10">
              <p>{films.opening_crawl}</p>{" "}
            </marquee>
          </div>
          <div className="character-info">
            <h1>character List</h1>
            <table className="table">
              <tr className="col">
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
              </tr>

              {people.map((person) => {
                return (
                  <tr key={person.name} className="row">
                    <td>{person.name}</td>
                    <td>{person.height}</td>

                    <td>{person.mass}</td>

                    <td>{person.gender}</td>
                  </tr>
                );
              })}
            </table>
            {console.log(people)}
          </div>

          <Link to="/">
            <button>Go back</button>
          </Link>
        </Div>
      )}
    </>
  );
};

export default MovieInfo;

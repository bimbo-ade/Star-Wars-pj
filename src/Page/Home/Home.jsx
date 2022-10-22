import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUrlId } from "../../Data/Data";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import bgimg from "../../assets/bgimg.jpg";
import logo3 from "../../assets/logo3.png";

import jedi3 from "../../assets/jedi3.jpg";
import { Div } from "./Home.style";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/films");
        setPosts(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <Div>
      <div className="image-cont">
        <img src={bgimg} alt="logo" className="img-bg1" />

        <img src={jedi3} alt="logo" className="img-bg2" />
        <img src={logo3} alt="logo3" className="img-overlay" />
      </div>
      <div className="text">
        <div className="header">
          <h4>
            Explore Movies{" "}
            <span>
              <BsChevronDown />
            </span>{" "}
          </h4>

          {posts.map((el) => {
            return (
              <div className="ul-cont" key={el.url}>
                <ul>
                  <Link to={`/films/${getUrlId(el.url)}`} className="link">
                    <li>
                      {el.title}
                      <span className="li-span">
                        <BsChevronRight />
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Div>
  );
};

export default Home;

import "./search.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="search-bar exo fz400">
        <div className="rectangle18">
          <input placeholder="Search for a game..."></input>
          <div className="icon-container">
            <BiSearchAlt2 />
          </div>
        </div>
        <span className="search">Search 2349 595 games</span>
      </div>
    </>
  );
};

export default Search;

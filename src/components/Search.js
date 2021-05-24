import "./search.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ count }) => {
  return (
    <>
      <div className="search-bar exo fz400">
        <div className="rectangle18">
          <input type="text" placeholder="Search for a game..."></input>
          <div className="icon-container">
            <BiSearchAlt2 />
          </div>
        </div>
        <span className="search">Search {count} games</span>
      </div>
    </>
  );
};

export default Search;

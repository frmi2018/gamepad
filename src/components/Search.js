import "./search.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ count }) => {
  const txt = `Search ${count} games`;
  return (
    <>
      <div className="search-bar exo fz400">
        <div className="rectangle18">
          <input type="text" placeholder={txt}></input>
          <div className="icon-container">
            <BiSearchAlt2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

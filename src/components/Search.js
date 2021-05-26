import "./search.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = (props) => {
  const { count, setDisplaySearchResult, setSearch } = props;
  return (
    <>
      <div className="search-bar exo fz400">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a game..."
            onChange={(event) => {
              if (event.target.value) {
                setSearch(event.target.value);
                setDisplaySearchResult(true);
              } else {
                setDisplaySearchResult(false);
              }
            }}
          ></input>
          <div className="icon-container">
            <BiSearchAlt2 />
          </div>
        </div>
        <span className="txt3">Search {count} games</span>
      </div>
    </>
  );
};

export default Search;

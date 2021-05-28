import "./search.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = (props) => {
  const { count, setDisplaySearchResult, setSearch } = props;
  return (
    <div className="search-div0 exo fz400">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a game..."
          onKeyPress={(event) => {
            if (event.key === "Enter")
              if (event.target.value.length > 0) {
                setSearch(event.target.value);
                setDisplaySearchResult(true);
              } else {
                setDisplaySearchResult(false);
              }
          }}
        ></input>
        <div className="search-icon">
          <BiSearchAlt2 />
        </div>
      </div>
      <span className="search-txt1">Search {count} games</span>
    </div>
  );
};

export default Search;

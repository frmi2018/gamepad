import "./profil.css";
import { Link } from "react-router-dom";

const Profil = (props) => {
  const { setUserId, setToken } = props;
  return (
    <div className="profil-div0">
      <div className="profil-div1"></div>
      <Link to={`/`}>
        <div
          className="button-pink"
          onClick={() => {
            setToken(undefined);
            setUserId(undefined);
            // TODO effacer coockie
          }}
        >
          <span className="button-pink-txt exo fw500">Logout</span>
        </div>
      </Link>
    </div>
  );
};
export default Profil;

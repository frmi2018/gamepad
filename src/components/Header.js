import "./header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerleft">
          <div className="logo-container">
            <img src={logo} alt="logo gamepad" />
          </div>
          <span className="gamepad exo fw400">Gamepad</span>
        </div>
        <div className="headerright">
          <span className="mycollection exo fw500">My Collection</span>
          <div className="button-login">
            <span className="login exo fw500">Login</span>
          </div>
        </div>
      </div>
      <div className="line1"></div>
    </>
  );
};

export default Header;

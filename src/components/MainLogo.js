import "./mainlogo.css";
import logo from "../assets/logo.svg";

const MainLogo = () => {
  return (
    <div className="mainlogo-div0">
      <div className="logo-container">
        <img src={logo} alt="logo gamepad" />
      </div>
      <span className="gamepad exo">Gamepad</span>
    </div>
  );
};

export default MainLogo;

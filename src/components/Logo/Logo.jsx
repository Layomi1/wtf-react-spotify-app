import whiteLogo from "../../assets/images/whiteLogo.svg";
import blackLogo from "../../assets/images/blackLogo.svg";
import { Link } from "react-router-dom";

function Logo(props) {
  if (props.useWhite) {
    return (
      <Link to="/login">
        <img src={blackLogo} alt="logo" />
      </Link>
    );
  }
  return (
    <Link to="/">
      <img src={whiteLogo} alt="logo" />
    </Link>
  );
}
export default Logo;

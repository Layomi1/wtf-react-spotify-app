import whiteLogo from "../../assets/images/whiteLogo.svg";
import blackLogo from "../../assets/images/blackLogo.svg";
function Logo(props) {
  if (props.useWhite) {
    return (
      <a href="#/dashborad">
        <img src={blackLogo} alt="logo" />
      </a>
    );
  }
  return (
    <a href="#/dashborad">
      <img src={whiteLogo} alt="logo" />
    </a>
  );
}
export default Logo;

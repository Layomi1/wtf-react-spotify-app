import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <Logo useState={true} />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/premium">Premium</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
        <li className="register">|</li>
        <li>
          <Link to="sign-up" className="register">
            Sign up
          </Link>
        </li>
        <li>
          <Link to="/login" className="register">
            Log in
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;

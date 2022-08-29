import { Link } from "react-router-dom"
import logo from '../../assets/logo.png';
import { APP_NAME, HEADER_LINKS } from "../../constants";
import './Header.scss';

export const Header = ({ id }) => {

  return (
    <header className="header">
      <div className="header__img-container" >
        <img src={logo} alt='logo' />
        <p className="logoText">{APP_NAME}</p>
      </div>
      <nav>
        <ul className="navlist">
          {HEADER_LINKS.map((link, index) => (
            <li key={index}><Link to={`/${id}/${link.path}`} className="navlink">{link.title}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import style from "./Menu.module.scss";
import Logo from "../../assets/logo.png";
import Botao from "../Botao";

export default function Menu() {
  return(
    <header>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <GiHamburgerMenu size={35} />
      </label>
      <nav className={style.menu}>
        <div className={style.logo}>
          <Link className={style.portfolio} to="/">
            <img src={Logo} alt="Logo Mighty Blade"/>
          </Link>
        </div>
        <div className={style.navigation}>
          <Link className={style.linkMenu} to="/">
            Home
            <hr />
          </Link>
          <Link className={style.linkMenu} to="/Evolucao">
            Evolução
            <hr />
          </Link>
          <Link className={style.linkMenu} to="/habilidades">
            Habilidades
            <hr />
          </Link>
          <Link className={style.linkMenu} to="/equipamentos">
            Equipamentos
            <hr />
          </Link>
          <Link className={style.linkMenu} to="/salvar">
            Salvar
            <hr />
          </Link>
          <Link className={style.linkLogin} to="/login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
import { ReactComponent as LogoSvg } from "svg/logo.svg";
import { ReactComponent as AccountCircleSvg } from "svg/account-circle.svg"
import "./Header.css";

export default function Header() {
   return (
      <header className="header">

         <LogoSvg/>

         <nav>
            <a href="#" className="active">Календарь</a>
            <a href="#">Результаты</a>
            <a href="#">Рейтинги</a>
            <a href="#">FencingOne</a>
         </nav>

         <button aria-label="Открыть профиль">
            <AccountCircleSvg/>
         </button>
      </header>
   )
}
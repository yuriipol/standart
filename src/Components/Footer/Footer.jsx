import { Link, animateScroll as scroll } from "react-scroll";

import s from "./Footer.module.scss";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsArrowUpSquare,
} from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { ReactComponent as Logo } from "../../Shared/Images/Logo svg 1.svg";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.footerMainContainer}>
          <div className={s.reverseContainer}>
            <div className={s.telefon}>
              <h4 className={s.telefonTitle}>Зателефонуйте нам:</h4>
              <p className={s.telefonNumber}>+38(050)3004406</p>
              <p className={s.telefonTimeCall}>(дзвінки з 09:00 до 16:00) </p>
            </div>
            <div className={s.socialNetwork}>
              <h4 className={s.socialNetworkTitle}>
                Завітайте в наші соціальні мережі:
              </h4>
              <div className={s.socialNetworkIcons}>
                <BsFacebook className={s.socialNetworkIcon} />
                <BsInstagram className={s.socialNetworkIcon} />
                <BsTelegram className={s.socialNetworkIcon} />
                <FaViber className={s.socialNetworkIcon} />
              </div>
            </div>
            <div className={s.navigation}>
              <ul className={s.nav}>
                <li className={s.nav_item}>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Про нас
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Каталог
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.footerNavogationDesktop}>
            <ul className={s.footerNav}>
              <li className={s.footerNav_item}>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Про нас
                </Link>
              </li>
              <li className={s.footerNav_item}>
                <Link
                  activeClass="active"
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Каталог
                </Link>
              </li>
              <li className={s.footerNav_item}>
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Контакти
                </Link>
              </li>
            </ul>
            <Logo
              className={s.footerNavogationStandart}
              onClick={scrollToTop}
            />
          </div>
        </div>
        <div className={s.buttomContainer}>
          <div className={s.rights}>
            <p className={s.rightsReserved}>
              &copy;Всі права захищені Standart+
            </p>
          </div>
          <Logo className={s.logoStandart} onClick={scrollToTop}/>
        </div>
        <div className={s.arrowTop}>
          <BsArrowUpSquare className={s.arrowToTop} onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

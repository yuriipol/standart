import advantages from "../../Shared/Images/advent.png";
import s from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section id="about" className={s.aboutUsSection}>
      <h2 className={s.title}>Про нас</h2>
      <div className={s.aboutUs}>
        <div className={s.descriptionShop}>
          <p className={s.description}>
            <span className={s.standart}>Standart+</span>- це магазин з
            найбільшим асортиментом продукції в нашому районі. Обов’язково
            завітвайте до нас. Бо саме тут ви знайдете не тільки товари високої
            якості за найвигіднішими цінами, але й гарну консультацію фахівця та
            його влучну пораду.
          </p>
        </div>
        <div className={s.containerAbout}>
          <div className={s.advantages}>
            <div className={s.firstAdvantages}>
              <h3 className={s.nameAdvantages}>
                <span className={s.number}>10</span> років досвіду
              </h3>
              <p className={s.descAdvantages}>
                Якість обслуговування доведена роками довіри постійних клієнтів
              </p>
            </div>
            <div className={s.secondAdvantages}>
              <h3 className={s.nameAdvantages}>
                <span className={s.number}>20</span> тисяч товарів
              </h3>
              <p className={s.descAdvantages}>Найбільший асортимент в селищі</p>
            </div>
          </div>
          <img src={advantages} alt="advantages" className={s.fotoAdvantages} />
        </div>
        <div className={s.assest}>
          <p className={s.assestDesc}>
            Наші постійні клієнти обирають саме нас за наші сильні сторони та
            переваги:
          </p>
          <ul className={s.assestList}>
            <li className={s.assestListItem}>Надійність</li>
            <li className={s.assestListItem}>Зручність</li>
            <li className={s.assestListItem}>Якісні товари</li>
            <li className={s.assestListItem}>Гарний сервіс</li>
            <li className={s.assestListItem}>Вигідні ціни</li>
            <li className={s.assestListItem}>Багатий досвід</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

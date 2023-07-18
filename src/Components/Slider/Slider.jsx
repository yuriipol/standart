import Carousel from "react-bootstrap/Carousel";
import s from "./Slider.module.scss";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div className={s.cart}>
          <h4 className={s.name}>Юрій Полупан</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className={s.cart}>
          <h4 className={s.name}>Олександр Білик</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={s.cart}>
          <h4 className={s.name}>Олександр Новіков</h4>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

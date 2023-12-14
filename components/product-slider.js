import Swiper from "swiper";
import "swiper/scss";
import "swiper/scss/a11y";
import { getComponents } from "./utils";
(function () {
  const components = getComponents("slider");
  const sliders = document.querySelectorAll(
    "[data-component='product-slider']"
  );

  if (sliders.length <= 0) return;

  function initSwiper(el) {
    const { slidesPerView = 4.15 } = el.dataset;

    const swiper = new Swiper(el, {
      slidesPerView,
    });

    return swiper;
  }

  sliders.forEach((el) => {
    initSwiper(el);
  });
})();

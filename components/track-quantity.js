import { getComponents } from "./utils";

(function () {
  const components = getComponents("track-quantity");
  if (components.length <= 0) return;

  console.log(components);

  const trackQuantityButtons = document.querySelectorAll(
    "[data-component='track-quantity']"
  );

  if (trackQuantityButtons.length <= 0) return;

  function trackQuantity(el) {
    const input = el.querySelector(".js-input");
    const display = el.querySelector(".js-number");
    const minus = el.querySelector(".js-minus");
    const plus = el.querySelector(".js-plus");

    if (!input || !display || !minus || !plus) return;

    function updateNumber(value) {
      input.value = value;
      display.textContent = input.value;
    }

    let quantity = parseInt(input.value) || 1;

    minus.addEventListener("click", function (e) {
      e.preventDefault();
      if (quantity <= 1) return;
      quantity--;
      updateNumber(quantity);
    });

    plus.addEventListener("click", function (e) {
      e.preventDefault();

      quantity++;
      updateNumber(quantity);
    });

    input.value = quantity;
    display.textContent = quantity;
  }

  for (let button of trackQuantityButtons) {
    trackQuantity(button);
  }
})();

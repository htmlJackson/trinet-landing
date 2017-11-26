'use strict'

let toggler = document.querySelector(".contest__toggle");

toggler.addEventListener("click", function(event) {
  event.preventDefault();

  let item1 = document.querySelector(".contest__item:nth-of-type(4)");
  let item2 = document.querySelector(".contest__item:nth-of-type(5)");

  item1.classList.toggle("contest__item--hidden");
  item2.classList.toggle("contest__item--hidden");

  this.classList.toggle("open");

  if (this.classList.contains("open")) {
    this.innerHTML = "Свернуть";
  }
  else {
    this.innerHTML = "Загрузить больше";
  }
});

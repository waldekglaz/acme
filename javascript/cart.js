const cart = document.querySelector(".cart-container");
const cartBtn = document.querySelector(".cart");
const closeBtn = document.querySelector(".fa-times");

cartBtn.addEventListener("click", function () {
  console.log("click");
  cart.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  console.log("click");
  cart.classList.remove("active");
});

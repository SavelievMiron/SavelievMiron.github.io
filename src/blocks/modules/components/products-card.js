/* const mobileCard = document.querySelector(".product-card__cart-mobile");
mobileCard.onclick = () => {
  mobileCard.nextElementSibling.classList.toggle("d-flex");
  .querySelector(".product-card__cart_tap")
}; */

$(function () {
  $(".product-card__cart-mobile").click(function () {
    //use a class, since your ID gets mangled
    $(this).next(".product-card__cart_tap").toggleClass("d-flex"); //add the class to the clicked element
  });
});

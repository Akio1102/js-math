const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const result = document.querySelector("#result");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularDescuento);

function calcularDescuento() {
  const price = parseInt(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "Porfavor ingresar valoreces para calcular";
    return;
  }

  let discount;

  switch (coupon) {
    case "Akio1":
      discount = 30;
      break;
    case "Secret":
      discount = 20;
      break;
    default:
      pResult.innerText = "Cupon no valido";
      return;
  }
  //   if (coupon == "Akio1") {
  // discount = 30;
  //   } else if (coupon == "Secret") {
  // discount = 20;
  //   } else {
  // pResult.innerText = "Cupon no valido";
  // return;
  //   }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El precio aplicando el descuento es $ " + newPrice;
}

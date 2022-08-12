const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const result = document.querySelector("#result");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularDescuento);

// const couponObj = {
//   Akio: 50,
//   Akio1: 30,
//   Akio2: 25,
// };

const couponList = [];
couponList.push({
  name: "Akio",
  discount: 50,
});

function calcularDescuento() {
  const price = parseInt(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = "Porfavor ingresar valoreces para calcular";
    return;
  }

  let discount;

  function filtro(coupon2) {
    return coupon2.name == coupon;
  }

  const couponArray = couponList.find(filtro);

  if (couponArray) {
    discount = couponArray.discount;
  } else {
    pResult.innerText = "Cupon no valido";
    return;
  }

  console.log({
    coupon,
    discount,
    couponArray,
  });

  // if (couponObj[coupon]) {
  //   discount = couponObj[coupon];
  // } else {
  //   pResult.innerText = "Cupon no valido";
  //   return;
  // }
  // switch (coupon) {
  //   case "Akio1":
  //     discount = 30;
  //     break;
  //   case "Secret":
  //     discount = 20;
  //     break;
  //   default:
  //     pResult.innerText = "Cupon no valido";
  //     return;
  // }
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

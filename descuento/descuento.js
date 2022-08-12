const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const result = document.querySelector("#result");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularDescuento);

function calcularDescuento() {
  const price = parseInt(inputPrice.value);
  const discount = parseInt(inputDiscount.value);

  if (!price || !discount) {
    pResult.innerText = "Porfavor ingresar valoreces para calcular";
    return;
  }
  if (discount >= 100) {
    pResult.innerText = "No puede poner descuento de más de 100";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = "El precio aplicando el descuento es $ " + newPrice;
}

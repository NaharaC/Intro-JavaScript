let contador = 0;
const precio = 400000;
let totalPrice = precio * contador;

const precioSpan = document.querySelector(".precio-inicial");
const increment = document.getElementById("increment")
const decrease = document.getElementById("decrease")
var countLabel = document.getElementById("count")
let priceLabel = document.getElementById("totalPrice")
let totalSection = document.querySelector(".total-section")

precioSpan.innerText = precio;
countLabel.innerText = contador;
priceLabel.innerText = totalPrice;

increment.addEventListener('click', () => {
    contador ++
    totalPrice = precio * contador
    totalSection.innerHTML = `<p>Total a pagar: $${totalPrice} </p>`

    countLabel.innerText = contador;
})

decrease.addEventListener('click', () => {
    if (contador) contador --
    totalPrice = precio * contador
    totalSection.innerHTML = `<p>Total a pagar: $${totalPrice} </p>`

    countLabel.innerText = contador
})
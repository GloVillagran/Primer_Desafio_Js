const precioSpan = document.querySelector(".precio-inicial");
const precioTotal = document.querySelector(".valor-total");
const cantidadSpan = document.querySelector(".cantidad");

let precio = parseInt(precioSpan.innerHTML);
let cantidad = 0;

const sum = document.querySelector(".mas");
const rest = document.querySelector(".menos");

sum.addEventListener('click', () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad
    calcularTotal();
});


rest.addEventListener('click', () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        calcularTotal();
    }
});

function calcularTotal() {
    const resultado = precio * cantidad;
    precioTotal.innerHTML = resultado.toLocaleString('es-ES');
    
}

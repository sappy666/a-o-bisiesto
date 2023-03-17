// Ingresar un número que represente el año
// Ingresar un número
let anno;
const btnEnviar = document.getElementById("btn-enviar");  
const inputNumber = document.getElementById("nombre");
btnEnviar.addEventListener('click', () => {
  anno = inputNumber.value;
  bisiesto(anno);
});

// Verificar que el número sea mayor o igual a cero
function bisiesto(year){
  if (year >= 0) {
  // Verificar si el año es bisiesto
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    alert("El año ingresado es bisiesto");
  } else {
    alert("El año ingresado no es bisiesto");
  }
} else {
  alert("El número ingresado no es válido");
}
}

// Ingresar un número que represente el año
let year = prompt("Ingresa un número que represente un año:");

// Verificar que el número sea mayor o igual a cero
if (year >= 0) {
  // Verificar si el año es bisiesto
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("El año ingresado es bisiesto");
  } else {
    console.log("El año ingresado no es bisiesto");
    alert("El año ingresado no es bisiesto");
  }
} else {
  console.log("El número ingresado no es válido");
  alert("El número ingresado no es válido");
}

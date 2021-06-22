function estudiante(nombre, correo, pais) {
  this.nombre = nombre;
  this.correo = correo;
  this.pais = pais;
}
var estudiantes = [];
var nombre = prompt("¿Cuál es tu nombre?");
var correo = prompt("¿Cuál es tu correo electrónico?");
var pais = prompt("¿De que país eres?");
estudiantes.push(new estudiante(nombre, correo, pais));
console.log(estudiantes[0]);

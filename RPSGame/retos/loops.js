var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
  saludarEstudiante(estudiante);
}

while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiante(estudiante);
}

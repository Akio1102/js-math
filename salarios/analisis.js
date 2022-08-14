console.log(salarios);

const personaBuscada = "Juanita";

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
}

const persona = salarios.find((persona) => {
  return persona.name == personaBuscada;
});

function mediaXPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const mediaSalarios = Math2.calcularMediana(salarios);

  console.log(mediaSalarios);
}

console.log(salarios);

const personaBuscada = "Juanita";

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);
  //   const persona = salarios.find((persona) => {
  //     return persona.name == personaBuscada;
  //   });
}

function mediaXPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const mediaSalarios = Math2.calcularMediana(salarios);

  //   console.log(mediaSalarios);
  return mediaSalarios;
}

function proyeccionXPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajeCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCre = crecimiento / salarioPasado;
    porcentajeCrecimiento.push(porcentajeCre);
  }

  const medianaPorcentajeCrecimiento = Math2.calcularMediana(
    porcentajeCrecimiento
  );

  //   console.log({ porcentajeCrecimiento, medianaPorcentajeCrecimiento });

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}

const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({ empresas });

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else if (!empresas[nombre][year]) {
    console.warn("La empresa no dio dinero");
  } else {
    Math2.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionPorEmpresas(nombre) {
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else {
    const empresaYears = Object.entries(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });

    let porcentajeCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i].salario;
      const salarioPasado = listaMedianaYears[i - 1].salario;
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCre = crecimiento / salarioPasado;
      porcentajeCrecimiento.push(porcentajeCre);
    }

    const medianaPorcentajeCrecimiento = Math2.calcularMediana(
      porcentajeCrecimiento
    );

    const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimoMediana * medianaPorcentajeCrecimiento;
    const nuevoSalario = ultimoMediana + aumento;

    return nuevoSalario;
  }
}

function mediaGeneral() {
  const listasMedianas = salarios.map((persona) => mediaXPersona(persona.name));

  const mediana = Math2.calcularMediana(listasMedianas);

  return mediana;
}

function medianaTop10() {
  const listasMedianas = salarios.map((persona) => mediaXPersona(persona.name));

  const medianasOrdenadas = Math2.ordenarLista(listasMedianas);

  const cantidad = listasMedianas.length / 10;
  const limite = listasMedianas.length - cantidad;

  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

  const medianaTop10 = Math2.calcularMediana(top10);
  return medianaTop10;
}

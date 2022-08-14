function esPar(lista) {
  return !(lista.length % 2);
}
function esImPar(lista) {
  return lista.length % 2;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1Par = lista.length / 2 - 1;
    const indexMitad2Par = lista.length / 2;

    // Tambien sirve para calcular la mediana
    // const mitad1Par = lista[lista.length / 2 - 1];
    // const mitad2Par = lista[lista.length / 2];
    // const listaMitades = [lista[indexMitad1Par], lista[indexMitad2Par]];

    const listaMitades = [];
    listaMitades.push(lista[indexMitad1Par]);
    listaMitades.push(lista[indexMitad2Par]);
    const mediaListaPar = calcularPromedio(listaMitades);
    return mediaListaPar;
  } else {
    const indexMitadImpar = Math.floor(lista.length / 2);
    const mitadListaImpar = lista[indexMitadImpar];
    console.log(mitadListaImpar);
    return mitadListaImpar;
  }
}

function calcularPromedio(lista) {
  // Forma de recorrer un Array

  //   let sumaLista = 0;
  //   for (let i = 0; i < lista.length; i++) {
  //     sumaLista += lista[i];
  //   }

  // Function para pasar parametros al metodo reduce (metodo del Array)
  //   function sumarTodosElements(valorAcumulado, nuevoValor) {
  //     return valorAcumulado + nuevoValor;
  //   }

  //   Invocacion de la function para el metodo reduce
  //   const sumarTodosElements = (valorAcumulado, nuevoValor) =>
  //     valorAcumulado + nuevoValor;
  const sumaLista = lista.reduce(
    (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor
  );
  //   const sumaLista = lista.reduce(sumarTodosElements); con invocaion de function
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}

function ordenarLista(listaDesordenada) {
  // function ordenarListaSort(valorAcumulado, nuevoValor) {
  // if (valorAcumulado > nuevoValor) {
  //   return 1;
  // } else if (valorAcumulado == nuevoValor) {
  //   return 0;
  // } else if (valorAcumulado < nuevoValor) {
  //   return -1;
  // }
  // Para Js si el numéro es negativo hace el cambio la para asignarlo atras funcion
  // "sort" si es 0 no hace nada y si es positivo lo cambia para adelante

  //   return valorAcumulado - nuevoValor;
  // }

  // const lista = listaDesordenada.sort(ordenarListaSort);
  const lista = listaDesordenada.sort((a, b) => a - b);

  return lista;
}

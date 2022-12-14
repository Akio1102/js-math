const Math2 = {};

Math2.esPar = function esPar(lista) {
  return !(lista.length % 2);
};

Math2.esImPar = function esImPar(lista) {
  return lista.length % 2;
};

Math2.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento]++;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const ListaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = ListaMaxNumber[0];
  // console.log({ listaCount, listaArray, listaOrdenada, ListaMaxNumber });
  return moda;
};

Math2.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = Math2.ordenarLista(listaDesordenada);
  const listaEsPar = Math2.esPar(lista);

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
    const mediaListaPar = Math2.calcularPromedio(listaMitades);
    return mediaListaPar;
  } else {
    const indexMitadImpar = Math.floor(lista.length / 2);
    const mitadListaImpar = lista[indexMitadImpar];
    console.log(indexMitadImpar);
    console.log(mitadListaImpar);
    return mitadListaImpar;
  }
};

Math2.calcularPromedio = function calcularPromedio(lista) {
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
  // console.log(promedio);
  return promedio;
};

Math2.ordenarLista = function ordenarLista(listaDesordenada) {
  // function ordenarListaSort(valorAcumulado, nuevoValor) {
  // if (valorAcumulado > nuevoValor) {
  //   return 1;
  // } else if (valorAcumulado == nuevoValor) {
  //   return 0;
  // } else if (valorAcumulado < nuevoValor) {
  //   return -1;
  // }
  // Para Js si el num??ro es negativo hace el cambio la para asignarlo atras funcion
  // "sort" si es 0 no hace nada y si es positivo lo cambia para adelante

  //   return valorAcumulado - nuevoValor;
  // }

  // const lista = listaDesordenada.sort(ordenarListaSort);
  const lista = listaDesordenada.sort((a, b) => a - b);

  return lista;
};

Math2.ordenarListaBidimensional = function ordenarListaBidimensional(
  listaDesordenada,
  i
) {
  const lista = listaDesordenada.sort((a, b) => a[i] - b[i]);

  return lista;
};

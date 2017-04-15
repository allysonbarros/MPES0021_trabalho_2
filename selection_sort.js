function selection_sort(lista) {
    var menor_valor;
    var menor_indice;

    for (var i = 0; i < lista.length; i++) {
        menor_valor = lista[i];
        menor_indice = i;

        for (var j = i+1; j < lista.length; j++) {
            if (lista[j] < menor_valor) {
                menor_valor = lista[j]
                menor_indice = j;
            }   
        }

        lista[menor_indice] = lista[i];
        lista[i] = menor_valor;
    }

    return lista;
}

// Teste da ordenação por seleção
lista = [43, 22, 56, 7, 71, 54, 6, 44, 35, 4, 9, 34, 61, 26, 52, 10, 29, 75, 72, 23, 2, 95, 51, 90, 12, 20, 8, 80, 69, 50, 99, 59, 11, 5, 21, 33, 84, 88, 77, 24, 64, 47, 86, 41, 57, 17, 55, 91, 13, 30, 58, 42, 39, 46, 32, 31, 49, 74, 36, 82, 79, 100, 63, 73];
resultado = selection_sort(lista);
console.log(resultado);
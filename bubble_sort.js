function bubble_sort(lista) {
    var trocado;
    do {
        trocado = false;
        for (var i = 0; i < lista.length - 1; i++) {
            if (lista[i] > lista[i+1]) {
                var aux = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = aux;
                trocado = true;
            }
        }
    } while (trocado);
    
    return lista;
}

// Teste do algoritmo bubble sort.
lista = [43, 22, 56, 7, 71, 54, 6, 44, 35, 4, 9, 34, 61, 26, 52, 10, 29, 75, 72, 23, 2, 95, 51, 90, 12, 20, 8, 80, 69, 50, 99, 59, 11, 5, 21, 33, 84, 88, 77, 24, 64, 47, 86, 41, 57, 17, 55, 91, 13, 30, 58, 42, 39, 46, 32, 31, 49, 74, 36, 82, 79, 100, 63, 73];
resultado = bubble_sort(lista);
console.log(resultado);
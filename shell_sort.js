function shell_sort (lista) {
    for (var h = lista.length; h > 0; h = parseInt(h / 2)) {
        for (var i = h; i < lista.length; i++) {
            var k = lista[i];
            
            for (var j = i; j >= h && k < lista[j - h]; j -= h) {
                lista[j] = lista[j - h];
            }

            lista[j] = k;
        }
    }
    
    return lista;
}

// Teste do algoritmo shell sort.
lista = [43, 22, 56, 7, 71, 54, 6, 44, 35, 4, 9, 34, 61, 26, 52, 10, 29, 75, 72, 23, 2, 95, 51, 90, 12, 20, 8, 80, 69, 50, 99, 59, 11, 5, 21, 33, 84, 88, 77, 24, 64, 47, 86, 41, 57, 17, 55, 91, 13, 30, 58, 42, 39, 46, 32, 31, 49, 74, 36, 82, 79, 100, 63, 73];
resultado = shell_sort(lista);
console.log(resultado);
exports.insertion_sort = function(lista) {
    lista_ordenada = Array.from(lista);
    lista_ordenada.forEach(function(valor, i) {
        while ((i > 0) && (lista_ordenada[i-1] > valor)) {
            lista_ordenada[i] = lista_ordenada[i-1];
            i -= 1;
        }   

        lista_ordenada[i] = valor;
    });

    return lista_ordenada;
}
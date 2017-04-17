exports.selection_sort = function(lista) {
    lista_ordenada = Array.from(lista);
    var menor_valor;
    var menor_indice;

    for (var i = 0; i < lista_ordenada.length; i++) {
        menor_valor = lista_ordenada[i];
        menor_indice = i;

        for (var j = i+1; j < lista_ordenada.length; j++) {
            if (lista_ordenada[j] < menor_valor) {
                menor_valor = lista_ordenada[j]
                menor_indice = j;
            }   
        }

        lista_ordenada[menor_indice] = lista_ordenada[i];
        lista_ordenada[i] = menor_valor;
    }

    return lista_ordenada;
}
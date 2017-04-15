exports.selection_sort = function(lista) {
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
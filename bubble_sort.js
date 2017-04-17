exports.bubble_sort = function(lista) {
    lista_ordenada = Array.from(lista);
    var trocado;
    do {
        trocado = false;
        for (var i = 0; i < lista_ordenada.length - 1; i++) {
            if (lista_ordenada[i] > lista_ordenada[i+1]) {
                var aux = lista_ordenada[i];
                lista_ordenada[i] = lista_ordenada[i+1];
                lista_ordenada[i+1] = aux;
                trocado = true;
            }
        }
    } while (trocado);
    
    return lista_ordenada;
}
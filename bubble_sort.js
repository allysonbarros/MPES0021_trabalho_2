exports.bubble_sort = function(lista) {
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
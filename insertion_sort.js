exports.insertion_sort = function(lista) {
    lista.forEach(function(valor, i) {
        while ((i > 0) && (lista[i-1] > valor)) {
            lista[i] = lista[i-1];
            i -= 1;
        }   

        lista[i] = valor;
    });

    return lista;
}
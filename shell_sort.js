exports.shell_sort = function(lista) {
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
exports.shell_sort = function(lista) {
    lista_ordenada = Array.from(lista);
    for (var h = lista_ordenada.length; h > 0; h = parseInt(h / Math.floor(Math.random() * 10) + 1)) {
        for (var i = h; i < lista_ordenada.length; i++) {
            var k = lista_ordenada[i];
            
            for (var j = i; j >= h && k < lista_ordenada[j - h]; j -= h) {
                lista_ordenada[j] = lista_ordenada[j - h];
            }

            lista_ordenada[j] = k;
        }
    }
    
    return lista_ordenada;
}
function trocar_posicao(lista, i, j) {
    var aux = lista[i];
    lista[i] = lista[j];
    lista[j] = aux;
}

function particionar_lista(lista, salto, esquerda, direita) {
    var index = esquerda;
    var valor = lista[salto];

    trocar_posicao(lista, salto, direita);

    for(var v = esquerda; v < direita; v++) {
      if(lista[v] < valor) {
        trocar_posicao(lista, v, index);
        index++;
      }
    }

    trocar_posicao(lista, direita, index);
    return index;
}

exports.quick_sort = function(lista, esquerda=0, direita=0) {
    var lista_ordenada = Array.from(lista);
    var salto = null;

    if (esquerda < direita) {
        salto = esquerda + Math.ceil((direita - esquerda) * 0.5)
        novo_salto = particionar_lista(lista_ordenada, salto, esquerda, direita);
        
        sort(lista_ordenada, esquerda, novo_salto - 1);
        sort(lista_ordenada, novo_salto + 1, direita);
    }

    return lista_ordenada;
}
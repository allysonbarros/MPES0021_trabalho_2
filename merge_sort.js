// https://www.youtube.com/watch?v=e5ik2UGjHBk

function unir_listas(esquerda, direita) {
    var resultado = [];

    while(esquerda.length || direita.length) {
      if(esquerda.length && direita.length) {
        if(esquerda[0] < direita[0]) {
          resultado.push(esquerda.shift());
        } else {
          resultado.push(direita.shift());
        }
      } else if (esquerda.length) {
        resultado.push(esquerda.shift());
      } else {
        resultado.push(direita.shift());
      }
    }

    return resultado;
}

function merge_sort(lista) {
    lista_ordenada = Array.from(lista);
    
    var tamanho = lista_ordenada.length;
    var meio = Math.floor(tamanho * 0.5);
    var esquerda = lista_ordenada.slice(0, meio);
    var direita = lista_ordenada.slice(meio, tamanho);

    if(tamanho === 1) {
      return lista_ordenada;
    }

    return unir_listas(merge_sort(esquerda), merge_sort(direita));
}

exports.merge_sort = merge_sort;
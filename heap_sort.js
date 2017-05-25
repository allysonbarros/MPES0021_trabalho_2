// https://www.youtube.com/watch?v=51JGP4VVlDc

function trocar_posicao(lista, i, j) {
    var aux = lista[i];
    lista[i] = lista[j];
    lista[j] = aux;
}

function regenerar_arvore(lista, i, tamanho) {
    while (true) {
        var esquerda = i*2 + 1;
        var direita = i*2 + 2;
        var maior_valor = i;

        if (esquerda < tamanho && lista[esquerda] > lista[maior_valor]) {
            maior_valor = esquerda;
        }

        if (direita < tamanho && lista[direita] > lista[maior_valor]) {
            maior_valor = direita;
        }

        if (i == maior_valor) {
            break;
        }

        trocar_posicao(lista, i, maior_valor);
        i = maior_valor;
    }
}

function ordenar(lista, tamanho) {
    for (var i = Math.floor(tamanho/2); i >= 0; i--) {
        regenerar_arvore(lista, i, tamanho);
    }
}

exports.heap_sort = function(lista) {
    lista_ordenada = Array.from(lista);
    ordenar(lista_ordenada, lista_ordenada.length);

    for (var i = lista_ordenada.length - 1; i > 0; i--) {
        trocar_posicao(lista_ordenada, i, 0);
        regenerar_arvore(lista_ordenada, 0, i-1);
    }

    return lista_ordenada;
}
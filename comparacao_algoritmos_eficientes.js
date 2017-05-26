// Importando os algoritmos de ordenação mais eficientes.
const heap_sort = require('./heap_sort');
const quick_sort = require('./quick_sort');
const merge_sort = require('./merge_sort');
const radix_sort = require('./radix_sort');

// Importando e declarando as listas de valores utilizados pelos testes.
const variaveis = require('./variaveis');
var listas = [variaveis.lista_1, variaveis.lista_2, variaveis.lista_3, variaveis.lista_4];

// Executando a comparação entre os algoritmos;
listas.forEach(function(lista, index) {
    console.log('\n');
    console.log('--- Iniciando os testes com a ' + parseInt(index+1) + 'ª lista que contém ' + lista.length + ' elementos.');

    console.time('heap_sort');
    resultado = heap_sort.heap_sort(lista);
    console.timeEnd('heap_sort');

    console.time('quick_sort');
    resultado = quick_sort.quick_sort(lista);
    console.timeEnd('quick_sort');

    console.time('merge_sort');
    resultado = merge_sort.merge_sort(lista);
    console.timeEnd('merge_sort');

    console.time('radix_sort');
    resultado = radix_sort.radix_sort(lista);
    console.timeEnd('radix_sort');
});
console.log('\n');
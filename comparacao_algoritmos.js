// Importando os algoritmos de ordenação menos eficientes.
const bubble_sort = require('./bubble_sort');
const insertion_sort = require('./insertion_sort');
const selection_sort = require('./selection_sort');
const shell_sort = require('./shell_sort');

// Importando os algoritmos de ordenação mais eficientes.
const heap_sort = require('./heap_sort');
const quick_sort = require('./quick_sort');
const merge_sort = require('./merge_sort');
// const radix_sort = require('./radix_sort');

// Importando e declarando as listas de valores utilizados pelos testes.
const variaveis = require('./variaveis');
var listas = [variaveis.lista_1, variaveis.lista_2, variaveis.lista_3, variaveis.lista_4];

// Executando a comparação entre os algoritmos;
listas.forEach(function(lista, index) {
    console.log('\n');
    console.log('--- Iniciando os testes com a ' + parseInt(index+1) + 'ª lista que contém ' + lista.length + ' elementos.');
    
    // console.time('bubble_sort');
    // var resultado = bubble_sort.bubble_sort(lista);
    // console.timeEnd('bubble_sort');

    // console.time('insertion_sort');
    // var resultado = insertion_sort.insertion_sort(lista);
    // console.timeEnd('insertion_sort');

    // console.time('selection_sort');
    // resultado = selection_sort.selection_sort(lista);
    // console.timeEnd('selection_sort');

    // console.time('shell_sort');
    // resultado = shell_sort.shell_sort(lista);
    // console.timeEnd('shell_sort');

    console.time('heap_sort');
    resultado = heap_sort.heap_sort(lista);
    console.timeEnd('heap_sort');

    console.time('quick_sort');
    resultado = quick_sort.quick_sort(lista);
    console.timeEnd('quick_sort');

    console.time('merge_sort');
    resultado = merge_sort.merge_sort(lista);
    console.timeEnd('merge_sort');
});
console.log('\n');
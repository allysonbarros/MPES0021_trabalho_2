const bubble_sort = require('./bubble_sort');
const insertion_sort = require('./insertion_sort');
const selection_sort = require('./selection_sort');
const shell_sort = require('./shell_sort');
const variaveis = require('./variaveis')

// Executando a comparação entre os algoritmos;
var listas = [variaveis.lista_1, variaveis.lista_2, variaveis.lista_3, variaveis.lista_4];
listas.forEach(function(lista, index) {
    console.log('\n');
    console.log('--- Iniciando os testes com a ' + parseInt(index+1) + 'a lista que contém ' + lista.length + ' elementos.');
    
    console.time('bubble_sort');
    var resultado = bubble_sort.bubble_sort(lista);
    console.timeEnd('bubble_sort');

    console.time('insertion_sort');
    var resultado = insertion_sort.insertion_sort(lista);
    console.timeEnd('insertion_sort');

    console.time('selection_sort');
    resultado = selection_sort.selection_sort(lista);
    console.timeEnd('selection_sort');

    console.time('shell_sort');
    resultado = shell_sort.shell_sort(lista);
    console.timeEnd('shell_sort');    
});
console.log('\n');
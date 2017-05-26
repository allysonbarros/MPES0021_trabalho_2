// https://www.youtube.com/watch?v=YXFI4osELGU

function get_digito(numero, index) {
  var digito = 0;
  while(index--){
    digito = numero % 10
    numero = Math.floor((numero - digito) / 10)
  }
  return digito
}

exports.radix_sort = function(lista) {
    var lista_ordenada = Array.from(lista);
    var maximo = Math.floor(Math.log10(Math.max.apply(Math, lista_ordenada)));
    var array_digitos = [];
    var idx = 0;

    for(var i = 0;i < maximo + 1; i++) {
        array_digitos = []

        for(var j = 0; j < lista_ordenada.length; j++) {
            var digito = get_digito(lista_ordenada[j], i+1);
            array_digitos[digito] = array_digitos[digito] || [];
            array_digitos[digito].push(lista_ordenada[j]);
        }

        idx = 0
        for(var t = 0; t < array_digitos.length; t++){
            if(array_digitos[t] && array_digitos[t].length > 0) {
                for(j = 0; j < array_digitos[t].length; j++) {
                    lista_ordenada[idx++] = array_digitos[t][j];
                }
            }
        }
    }

    return lista_ordenada;
}
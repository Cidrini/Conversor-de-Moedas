const precoGasolina = 5.59;
const precoEtanol = 3.39
const gastoMedio = 13;
const kmDistancia = 1456;


const litrosConsumidos = kmDistancia / gastoMedio; 
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2))
function formataMoeda(numero) {
    return "R$ " + numero.toFixed(2).replace(".", ",")
 }
 
 function pegaNumero(frase){
     return parseFloat(prompt(frase).replace(",", "."))
 }
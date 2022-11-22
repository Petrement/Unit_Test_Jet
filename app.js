// one euro is:
let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}
//fromEuroToDollar------------------------------------
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}
//fromDollarToYen	------------------------------------
const fromDollartoEuro = function(valueInDolar){
    let valueInEuro = Math.floor(valueInDolar / oneEuroIs.USD);
    return valueInEuro;
}
const fromDollarToYen = function(valueInDollar){     
     let valueInYen = fromDollartoEuro(valueInDollar) * oneEuroIs.JPY;
     return valueInYen;
}
//fromYenToPound------------------------------------
const fromYentoEuro = function(valueInYen){
   let valueInEuro = Math.floor(valueInYen / oneEuroIs.JPY);
   return valueInEuro;
}
const fromYenToPound = function(valueInYen){
    let valueInBp = fromYentoEuro(valueInYen) * oneEuroIs.GBP;
    return valueInBp;
}


module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound}

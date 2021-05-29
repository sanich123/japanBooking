let getRandomNumber = function (min, max) {
  if (min >= 0 && max > 0) {
   let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
   return(Math.round(randomNumber));
  }
  return(console.log("Function doesn't work"));
}

console.log(getRandomNumber(0,2));

//Решение разбирал с https://learn.javascript.ru/task/random-min-max
//Math.random() генерит случайное число из диапазона от 0 до 1. Дальше вопрос чисто к округлению,
// либо использовать Math.round, тогда диапазон будет от min - 0.5 до max - min, либо Math.floor, соответственно диапазон будет от min до max + 1,
// с отрицательными числами не понял, что делать в самой задаче

let getRandomNumberFixed = function(min, max, decimalPlaces) {
  if (min >= 0 && max > 0 && decimalPlaces >=0) {
   let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
   return(+randomNumber.toFixed(decimalPlaces));
  }
  return(console.log("Function doesn't work"));
}
console.log(getRandomNumberFixed(0, 23, 9));

//Тоже самое, но без округления и немного пришлось погуглить метод toFixed
// С отрицательными значениями не понял, что делать надо
// и большие значения после запятой почему-то не работают, не знаю, типа 25, 30 и так далее.

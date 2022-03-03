let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("ex1")
for(let numeros of numbers){
    console.log(numeros)
}
let resultado =0;
for(let i=0;i < numbers.length;i++){
    console.log(numbers[i]);
resultado = resultado + numbers[i];
}
console.log("soma = " + resultado + "media = " + resultado/2);
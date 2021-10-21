
array = process.argv;
/*parseArray2 = parseInt(array[2])
parseArray3 = parseInt(array[3])
parseArray4 = parseInt(array[4])

console.log("array 2: ", array[2]);
console.log("Soma: ", parseArray2 + parseArray3 + parseArray4);*/



const novoArray = [];
var soma = 0;
for (i=0; i<array.length; i++){
    
    var numInt = 0
    
    if(i > 1){
        addNovoArray = novoArray.push(array[i])
    }
    
}

for (ia=0; ia<novoArray.length; ia++){
    soma += parseInt(novoArray[ia]);
}

console.log(soma)
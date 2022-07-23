let arraySize = 50;
let minArrayValue = 1;
let maxArrayValue = 300;
let array = [arraySize];
let sortedArray = [arraySize];

generateArray();
function generateArray(){
    for(var i = 0; i < arraySize; i++){
        array[i] = generateArrayValue(minArrayValue , maxArrayValue);
    }
}

function generateArrayValue(minArrayValue , maxArrayValue){
    let value = Math.floor(Math.random()*(maxArrayValue - minArrayValue)+ minArrayValue);
    return value;
}
console.log(array);

// Bubble Sort 

bubbleSort(array);
function bubbleSort(array){
    sortedArray = Array.from(array);
    for(var i = 0; i < arraySize; i++){
        for(var j = 0; j < arraySize - i - 1; j++){
            if(sortedArray[j] > sortedArray[j + 1]){
                var temp = sortedArray[j];
                sortedArray[j] = sortedArray[j+1];
                sortedArray[j+1] = temp;
            }
        }
    }
}
console.log(sortedArray);
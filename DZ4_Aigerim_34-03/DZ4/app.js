function sumNumbers (arr1){
     var sums = 0
     for (var i = 0; i < arr1.length; i++){
         if (arr1[i] % 2 === 0){
             sums += arr1[i] * arr1[i]
         }
     }
     return sums
}

var arr1 = [10,28,30,84,55,16]
var result  = sumNumbers(arr1)
console.log(result)

function numbers(average){
    var number = []
    for (var i = 0; i < average.length; i++){
        if(average[i] > 0){
            number = (average[i] + average[i]) / average.length
        }
    }
    return number
}

var average = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
var result2  = numbers(average)
console.log(result2)

function words(word) {
    var wordsWithLetters = []
    if (word.includes('t' && 'a')){
        console.log(word)
    }
    return wordsWithLetters
}
var word = ['text', 'frontend', 'apple', 'example', 'JavaScript']
var result3 = words(word)
console.log(result3)
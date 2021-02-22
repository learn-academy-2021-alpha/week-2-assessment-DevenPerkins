// const { calculateDSAPublic } = require("sshpk")
// const { array } = require("yargs")

// // var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// // var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// // const capNouns = (array) => {
// //     //will iterate through each value in the array and capitalize the first value
// //     cappedNouns = array.map(value => { 
// //         return value[0].toUpperCase() + value.substring(1)
// //     })
// //     return cappedNouns
// // }

// // console.log(capNouns(randomNouns1))

// var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// // Expected output: [-8, 0, 8, 46, 59, 107]

// var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// // Expected output: [-9, 0, 3, 18, 94]





// // b) Create the function that makes the test pass.

// //create a function named OnlySortedNumbers
// //takes in an argument that is an array
// const onlySortedNumbers = (array) => {
//     var sortedNumArray = array.filter(value => {
//         return typeof value === "number"
//     })
// return sortedNumArray.sort(function(a, b) {
//     return a - b
// });
// }
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

const firstVowel = (string) => {
    // Split the string into an array
    let strArray = string.split('');
    // Iterate through the string to look for the first vowel
    for (let i = 0; i<strArray.length; i++){
   let findFirstVow = strArray.findIndex([i])
    return findFirstVow
    }
}

console.log(firstVowel(vowelTester1))
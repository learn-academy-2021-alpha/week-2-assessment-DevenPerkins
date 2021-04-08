// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("when evenlyDivisible is called", () => {
    it("returns '15 is divisible by three' when called with 15", () => {
        //Arrange 
        const num1 = 15;

        //Act
        const actualDivisible = evenlyDivisible(num1);

        //Assert
        expect(actualDivisible).toEqual("15 is divisible by three");
    })
    it("returns '0 is divisible by three' when called with 0", () => {
        //Arrange 
        const num2 = 0;
    
        //Act
        const actualDivisible = evenlyDivisible(num2);
    
        //Assert
        expect(actualDivisible).toEqual("0 is divisible by three");
    })
    it("returns '-7 is not divisible by three' when called with -7", () => {
        //Arrange 
        const num3 = -7;
        
        //Act
        const actualDivisible = evenlyDivisible(num3);
        
        //Assert
        expect(actualDivisible).toEqual("-7 is not divisible by three");
    })
})
var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

//create a function called evenlyDivisible
// Takes in the argument of a number (num)
const evenlyDivisible = (num) => {
    // if the number is divisible by three return `${num} is divisible by three`
    if (num%3 ===0){
        return `${num} is divisible by three`
    // if the number is not divisible by three return `${num} is not divisible by three`
    }else if (num%3 !== 0){
        return `${num} is not divisible by three`
    // if there happens to be an edge case this will provide "there are no math laws involved here"
    }else{
        return "there are no math laws involved here"
    }
}




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("when capNouns is called", () => {
    it("returns randomNouns1 values with the words capitalized", () => {
        //Arrange 
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];

        //Act
        const actualCapNoun = capNouns(randomNouns1);

        //Assert
        expect(actualCapNoun).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
    })
    it("returns randomNouns2 values with the words capitalized", () => {
        //Arrange 
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"];
    
        //Act
        const actualCapNoun = capNouns(randomNouns2);
    
        //Assert
        expect(actualCapNoun).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);
    })
})

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.
//create a function called capNouns
//takes in an array as a argument
const capNouns = (array) => {
    // create a variable that will iterate through each value in the array
    let cappedNouns = array.map(value => { 
        //capitalize the first value then concatenate the rest of the word
        return value[0].toUpperCase() + value.substring(1)
    })
    // returns the the mapped values
    return cappedNouns
}


// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("when onlySortedNumbers is called", () => {
    it("returns mixedDataArray1 with only the numbers sorted from least to greatest", () => {
        //Arrange 
        const mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"];

        //Act
        const actualOnlySortNums = onlySortedNumbers(mixedDataArray1);

        //Assert
        expect(actualOnlySortNums).toEqual([-8, 0, 8, 46, 59, 107]);
    })
    it("returns mixedDataArray2 with only the numbers sorted from least to greatest", () => {
        //Arrange 
        const randomNouns2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"];
    
        //Act
        const actualOnlySortNums = onlySortedNumbers(mixedDataArray2);
    
        //Assert
        expect(actualOnlySortNums).toEqual([-9, 0, 3, 18, 94]);
    })
})



var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]





// b) Create the function that makes the test pass.

//create a function named OnlySortedNumbers
//takes in an argument that is an array
const onlySortedNumbers = (array) => {
    //crates a variable that stores the array and filters through it
    var sortedNumArray = array.filter(value => {
        // the filter will create a new array with only numbers
        return typeof value === "number"
    })
// return the mapped array then sort it by using sort. Sort alone typically sorts strings but adding the function a,b allows numbers to sort
return sortedNumArray.sort(function(a, b) {
    //return numbers in ascending order (point a - point b)
    return a - b
    });
}





// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("when firstVowel is called", () => {
    it("returns 1 when 'learn' is called", () => {
        //Arrange 
        const vowelTester1 = "learn";

        //Act
        const actualVowel = firstVowel(vowelTester1);

        //Assert
        expect(actualVowel).toEqual(1);
    })
    it("returns 0 when 'academy' is called", () => {
        //Arrange 
        const vowelTester2 = "academy";
    
        //Act
        const actualVowel = firstVowel(vowelTester2);
    
        //Assert
        expect(actualVowel).toEqual(0);
    })
    it("returns 2 when 'challenge' is called", () => {
        //Arrange 
        const vowelTester3 = "challenge";
        
        //Act
        const actualVowel = firstVowel(vowelTester3);
        
        //Assert
        expect(actualVowel).toEqual(2);
    })
})


var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2


// b) Create the function that makes the test pass.

//create a function called firstVowel
//takes in an argument that is a string
const firstVowel = (str) => {
    //the string will need to be split in order to give the function the ability to iterate through the indexes
    var makeStrArr = str.split("");
    //using the map method I iterate through strArr an have it return a boolean for each value
    let findVowelIndex = makeStrArr.map(value =>{
        //this will make an array of true or false
        return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
    })  
    //return the index of the first "true" value
    return findVowelIndex.indexOf(true)
}

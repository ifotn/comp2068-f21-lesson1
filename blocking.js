// reference node's filesystem library to read the text files
let fs = require('fs')

// read contents of food text file and store in variable called "food"
let food = fs.readFileSync('food.txt', 'utf8')

// display contents of file
console.log(food)
console.log('We ate this stuff')

// repeat for drinks
let drinks = fs.readFileSync('drinks.txt', 'utf8')
console.log(drinks)
console.log('We drank this stuff')
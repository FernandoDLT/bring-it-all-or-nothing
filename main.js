// *Variables*
// Declare a variable, assign it a boolean, and alert the value

// const ducksAreCool = true
//     alert(ducksAreCool)

// const catsAreCool = false
//     alert(catsAreCool)

// let ducksHaveWings = true
//     alert(ducksHaveWings)   

// let catsSuck = true
//     alert(catsSuck)


// Declare a variable, reassign it to your favorite color, and console log the value
// let favColor = 'red'
// favColor = 'blue'
// console.log(favColor)

// let favColor = 'red'
// favColor = 'blue'

// console.log(favColor)

// let favColor = 'red'
// favColor = 'blue'
// console.log(favColor)


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
// function sumThreeAndDivide(n1,n2,n3,n4) {
//     return (n1+n2+n3) / n4
// }
// sumThreeAndDivide(10,20,30,5)  
//  Remember: "return will call the num but it will disapear"

// function takesFourSumFirstThreeDivFourth (n1, n2, n3, n4) {
//     return (n1 + n2 + n3) / n4
// }
// takesFourSumFirstThreeDivFourth (10, 20, 30, 40)



// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function morePow (cat,dog) {
//     console.log( Math.pow(cat,dog) )
// }
// morePow(2,4)

// function maxPow (bird, cow) {
//     console.log( Math.pow(bird, cow) )
// }
// maxPow(5, 10)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// function alertOrLog(b, str) {
//     if(b){
//         alert(str)
//     }else{
//      console.log(str)
//     }
// }
//Exaple: 2

// ************* other ways to do it ************//

    // b ? alert(str) : console.log(str)
// Example: 3
// const alertOrLog = (b,str) => b ? alert(str)  : console.log(str)



//*Loops*
// Create a function that takes in a number. 
// Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" 
// instead of that number, if the number is divisible by 5 log 
// "buzz" instead of the number, and if the number is divisible
//  by 3 and 5 log "fizzbuzz" instead of that number.

// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         }else if(i % 3 === 0) {
//             console.log('Buzz')
//         }else if(i % 5 === 0 ) {
//             console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(10)

// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         }else if(i % 3 === 0) {
//             console.log('Buzz')
//         }else if(i % 5 === 0) {
//             console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// }

// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('FizzBuzz')
//         }else if(i % 3 === 0){
//             console.log('Buzz')
//         }else if(i % 5 === 0 ){
//             console.log('Fizz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(15)

// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         }else if(i % 3 === 0) {
//             console.log('Fizz')
//         }else if(i % 5 === 0) {
//             console.log('Buzz')
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(30)

// function fizzBuzz (num) {
//     for(let i = 1; i <= num;i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('FzzBuzz')
//         }else if(i % 3 === 0) {
//             console.log('Fizz')
//         }else if(i % 5 === 0) {
//             console.log('Buzz')
//         }else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(30)

function fizzBuzz(num){
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        }else if (i % 3 === 0) {
            console.log('Fizz')
        }else if (i % 5 === 0) {
            console.log('Buzz')
        }else (
            console.log(i)
        )
    }
}
fizzBuzz(30)
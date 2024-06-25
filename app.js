// {
//     // 1 - masala
//     // function numbers(arr) {
//     //     var result = [];
    
//     //     for (var i = 0; i < arr.length; i++) {
//     //         if (arr[i] > 0) {
//     //             result.push(arr[i]);
//     //         }
//     //     }
    
//     //     return result;
//     // }
    
//     // let a = [5, -2, 9, -1, 0, 6];
//     // console.log(numbers(a)); 
// }

// {
//     // 2 - masala 
//     // function reverseString(input) {
//     //     return input.split('').reverse().join('');
//     // }
    
//     // console.log( reverseString("Hello world!") );
// }

{

}

function reverseNumber(num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

// Foydalanish
let originalNumber = 12345;
let reversedNumber = reverseNumber(originalNumber);
console.log(reversedNumber); 
















// var numbers = [5, 2, 9, 1, 5, 6];

// // Ascending tartibda saralash
// numbers.sort(function(a, b) {
//     return a - b;
// });

// // Natijani ekranga chiqarish
// console.log(numbers); // Konsolga: [1, 2, 5, 5, 6, 9]
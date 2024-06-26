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

// {
//     // 3 - masala
//     // function reverseNumber(num) {
//     //     return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
//     // }
    
//     // // Foydalanish
//     // let originalNumber = 12345;
//     // let reversedNumber = reverseNumber(originalNumber);
//     // console.log(reversedNumber); 
// }

// {
//     // 4 - masala
//     // function getFalseValues(arr) {
//     //     return arr.filter(value => value === false);
//     // }
    
//     // let originalArray = [true, false, false, true, false, true];
//     // let falseArray = getFalseValues(originalArray);
//     // console.log(falseArray);
// }

// {
//     // 5 - masala
//     // function sumEvenNumbers(arr) {
//     //     return arr
//     //         .filter(value => value % 2 === 0)
    
//     //         .reduce((sum, value) => sum + value, 0);
//     // }
    
//     // let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     // let sumOfEvens = sumEvenNumbers(originalArray);
//     // console.log(sumOfEvens); 
// }

// {
//     // 6 - masala
//     // function squareNumbers(arr) {
//     //     return arr.map(value => value * value);
//     // }
    
//     // let originalArray = [1, 2, 3, 4, 5];
//     // let squaredArray = squareNumbers(originalArray);
//     // console.log(squaredArray); 
// }

// {
//     // 7 - masala
//     // function createArrayUpToN(n) {
//     //     return Array.from({ length: n }, (_, i) => i + 1);
//     // }
    
//     // let n = 10;
//     // let arrayUpToN = createArrayUpToN(n);
//     // console.log(arrayUpToN);
// }

// {
//     // 8 - masala 
//     // function getEvenNumbersBetween(a, b) {
//     //     let evenNumbers = [];
//     //     for (let i = a; i <= b; i++) {
//     //         if (i % 2 === 0) {
//     //             evenNumbers.push(i);
//     //         }
//     //     }
//     //     return evenNumbers;
//     // }
    
//     // let a = 3;
//     // let b = 15;
//     // let evenNumbers = getEvenNumbersBetween(a, b);
//     // console.log(evenNumbers);
// }

// {
//     // 9 - masala
//     // function capitalizeFirstLetter(name) {
//     //     if (!name) return name;
//     //     return name.charAt(0).toUpperCase() + name.slice(1);
//     // }
    
//     // let name = "john";
//     // let capitalized = capitalizeFirstLetter(name);
//     // console.log(capitalized); 
// }

// {
//     // 10 - masala 
//     // function repeatString(str, n) {
//     //     return str.repeat(n);
//     // }
    
//     // let originalString = "hello";
//     // let repeatedString = repeatString(originalString, 3);
//     // console.log(repeatedString); 
// }

// {
//     // 11 - masala
//     // function reverseArray(arr) {
//     //     return arr.slice().reverse();
//     // }
    
//     // let originalArray = [1, 2, 3, 4, 5];
//     // let reversedArray = reverseArray(originalArray);
//     // console.log(reversedArray);
//     // console.log(originalArray);
// }

// {
//     // 12 - masala
//     // function sortAscending(arr) {
//     //     return arr.slice().sort((a, b) => a - b);
//     // }
    
//     // let originalArray = [5, 2, 9, 1, 5, 6];
//     // let sortedArray = sortAscending(originalArray);
//     // console.log(sortedArray);
//     // console.log(originalArray);
// }
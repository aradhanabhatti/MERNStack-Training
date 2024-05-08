// sum of array not prime

// arr=[22,34,55,21]
// for(let i =0;i<arr.length;i++){

// }
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function digitSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  function printNumbersWithPrimeDigitSum(arr) {
    for (let num of arr) {
      if (isPrime(digitSum(num))) {
        console.log(num);
      }
    }
  }
  
  printNumbersWithPrimeDigitSum([12, 45, 79, 32, 56, 87]);
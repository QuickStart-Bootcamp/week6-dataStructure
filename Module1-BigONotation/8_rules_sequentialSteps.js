/*
Step 1: Identify each step’s complexity
  First loop → O(n)
  Second loop → O(n)

Step 2: Add them together
  Total complexity → O(n) + O(n) = O(2n)
  
Step 3: Simplify by dropping constants
O(2n) → O(n)
*/

function sequentialExample1(numbers) {
    // Step 1: Loop through numbers
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]); // O(n)
    }

    // Step 2: Loop through numbers again
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] * 2); // O(n)
    }
}

function sequentialExample2(numbers) {
    // Step 1: Loop through numbers
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]); // O(n)
    }

    // Step 2: Loop through numbers again
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0 ; j < numbers.leght ; j++) {
          
        }
    }
}

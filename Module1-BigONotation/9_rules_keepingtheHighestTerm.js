/*
Step 1: Count operations
  First loop → n operations → O(n)
  Nested loop → n * n = n² operations → O(n²)
  Total operations: O(n² + n)

Step 2: Keep the highest term
  n² grows faster than n as n becomes large.
  So we drop the smaller term: O(n² + n) → O(n²)
*/

function exampleFunction(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);   // O(n)
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            console.log(numbers[i], numbers[j]); // O(n²)
        }
    }
}

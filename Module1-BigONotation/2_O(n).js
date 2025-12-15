/**
 * O(n) — Linear Time Complexity
 *
 * Definition:
 * The execution time of the algorithm grows linearly with the input size (n).
 *
 * Explanation:
 * - The algorithm processes each element in the array once.
 * - As the number of elements increases, the number of operations
 *   increases at the same rate.
 *
 * Big-O Analysis:
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */

const numbers = [1, 270, 2, 8, 4, 250, 0, 90, 100];


// Example 1 — Iterate through the array
// Operation: Each element is accessed exactly once
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// Example 2 — Find the maximum value in the array
// Operation: Compare each element once to track the largest value
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);


// Example 3 — Count how many numbers are even
// Operation: Check each element once and increment a counter when the condition is met
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }
}

console.log(evenCount);
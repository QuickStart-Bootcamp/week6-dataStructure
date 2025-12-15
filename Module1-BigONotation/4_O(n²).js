// O(n²) — Quadratic Time Complexity
// Definition:
// The algorithm's execution time grows quadratically with input size n.
// This usually happens with **nested loops** iterating over the input array.
// Time Complexity: O(n²) — Two nested loops over n elements
// Space Complexity: O(1) — No extra memory besides loop counters

// Example 1
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          console.log(arr[i], arr[j]);
      }
  }
}

// Example 2
function hasPairWithSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
              return true;
          }
      }
  }
  return false;
}

// Example 3
function compareAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(`Comparing ${arr[i]} and ${arr[j]}`);
      }
    }
  }
  

  
const numbers = [64, 34, 25, 12, 22, 11, 90];


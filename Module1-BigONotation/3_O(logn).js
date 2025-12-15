// O(log n) — Logarithmic Time Complexity
// Definition:
// The algorithm's execution time grows logarithmically with the input size.
// A common example is binary search, where the input is halved each step.

// Example 1 - Binary Search
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return true;
      }
  
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return false;
  }
  
  let numbers = [1, 3, 5, 7, 9, 11];
  console.log(binarySearch(numbers, 7)); // true
  console.log(binarySearch(numbers, 4)); // false


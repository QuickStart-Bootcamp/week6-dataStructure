// O(1)
function getFirstElement (inputArr) {
  return (inputArr[0])
}

// O(n)
function printAllElements (inputArr) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// O(logn)
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

// O(n²)
function printAllPairs (inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
      for (let j = 0; j < inputArr.length; j++) {
          console.log(inputArr[i], inputArr[j]);
      }
  }
}

// O(2ⁿ)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
  
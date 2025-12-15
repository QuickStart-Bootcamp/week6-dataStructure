/*
Step 1: Identify each loop’s complexity
  Outer loop → O(n)
  Inner loop → O(n)

Step 2: Multiply because loops are nested
  Total complexity → O(n) * O(n) = O(n²)
*/

function nestedLoops(numbers) {
    for (let i = 0; i < numbers.length; i++) {      // Outer loop → O(n)
        for (let j = 0; j < numbers.length; j++) {  // Inner loop → O(n)
            console.log(numbers[i], numbers[j]);    // O(1)
        }
    }
}

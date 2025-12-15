/*
Step 1: Count operations
  First loop → n operations
  Second loop → n operations
  Total → n + n = 2n operations
Step 2: Drop constants
  In Big O notation, we ignore constants because we care about growth as n becomes large.
  So 2n becomes O(n)
*/
function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

/*
O(1) — Constant Time Complexity
 
Definition:
The execution time of this function is constant and does not change
based on the size of the input array.
 
1. Time Complexity (Big O)

The function always accesses the first element of the array (array[0]).
This operation does not depend on the size of the array.
Whether the array has 5 elements or 5 million elements, it always takes the same amount of time.

Time Complexity: O(1) — constant time

2. Space Complexity (Big O)
The function does not create any new data structures or use additional memory that grows with the input.
It only returns a reference to the first element.
Space Complexity: O(1) — constant space
*/

function getFirstElement(array) {
  return array[0]
}


const myArray = [10, 20, 30, 40, 50];
const myArray1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const myArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, 80, 90];


getFirstElement (myArray)   // array length = 5
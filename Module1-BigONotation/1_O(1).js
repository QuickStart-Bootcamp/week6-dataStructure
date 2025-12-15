/*
O(1) — Constant Time Complexity
 
Definition:
The execution time of this function is constant and does not change
based on the size of the input array.
 
Example 1: Accessing an Array Element
The function accesses a single element at a fixed index (index 0).
Array index access is a constant-time operation.
Whether the array contains 5 elements or 5 million elements,
the operation takes the same amount of time.
*/

function getFirstElement(array) {
  return array[0];
}


const myArray = [10, 20, 30, 40, 50];
const myArray1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const myArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, 80, 90];


getFirstElement (myArray)   // array length = 5
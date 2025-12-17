let studentsList = ["Roberto", "Bryan", "John", "Chase", "Kameron"]
let tasks = ["Buy groceries", "Finish homework", "Clean room"];
let playlist = ["Song A", "Song B", "Song C"];

// Insert elements at the end (push) ->  O(1)
console.log("Class List"); 
console.log(studentsList); 
studentsList.push ("Erica")
console.log(studentsList); 


// Insert element at the begining (unshift) -> O(n)
// Creates Space at the Start, Inserts New Element at the Beginning, Updates the Array Length
console.log("Adding element to the beginning of array:"); 
studentsList.unshift("Allie")
console.log(studentsList); 


// Remove from the Beginning (shift) → O(n)
// Identifies the First Element and Removes the First Element
// Shifts Remaining Elements, Updates the Array Length
// Modifies the Original Array, Decreases Array Length
console.log("Remove element from beginning of array:"); 
studentsList.shift()
console.log(studentsList); 


// Remove from the End (pop) → O(1)
// Identifies the Last Element, Removes the Last Element
// Modifies the Original Array, Decreases Array Length
console.log("Remove element form end of array:"); 
studentsList.pop()
console.log(studentsList); 


// Access / Update elements by index → O(1) 
console.log("Updatting one element of an array:");
studentsList[0] = "Sebastian";
console.log(studentsList);


// Search Element -> O(n)
console.log("Searching for an element of an array O(n):");
for (let i = 0; i < studentsList.length; i++) {
  if (studentsList[i] === "tom") return i;
}
console.log(studentsList.includes("John")); // true
console.log(studentsList.indexOf("Bryan")); // 1
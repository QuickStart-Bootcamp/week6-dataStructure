
function functionA () {
  debugger;
  console.log (`This is functionA`)
  functionB()
  console.log (`Bye from function A`)
}

function functionB () {
  console.log (`This is function B`)
  functionC()
  console.log (`Bye from function B`)
}

function functionC () {
  console.log (`This is function C`)
  functionD ()
  console.log (`Bye from function C`)
}

function functionD () {
  console.log (`This is function D`)
}

functionA()
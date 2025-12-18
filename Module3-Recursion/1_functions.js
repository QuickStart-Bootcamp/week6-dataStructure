

function functionA () {
  debugger
  console.log ('This is Function A')
  functionB()
  console.log ('End of Function A')
}


function functionB () {
  console.log ('This is Function B')
  functionC()
  console.log ('End of Function B')
}


function functionC () {
  console.log ('This is Function C')
  functionD()
  console.log ('End of Function C')
}


function functionD () {
  console.log ('This is Function D')
}

functionA()

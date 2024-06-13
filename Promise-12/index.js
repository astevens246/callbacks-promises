async function fetchTodos() {
  const fetch = (await import('node-fetch')).default;
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await res.json()
  return json
}

const p = fetchTodos()
console.log(p)

// Challenges 

// Run the code. What is returned on line 7?
// Promise { <pending> }


// The code above is a previous example. Notice that we are using the await 
// keyword to resolve the response/Promise returned from fetch(). This 
// Promise must be settled before we continue to the next line.

// Since `fetchTodos()` is async it returns a Promise. Resolve that 
// Promise and log the return value.




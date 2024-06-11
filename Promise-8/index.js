// Promise.all()

// 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second promise resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});

const promise4 = new Promise((resolve, reject) => { 
  setTimeout(() => {
    resolve("Fourth promise resolved");
  }, 10);
});

Promise.all([promise1, promise2, promise3, promise4]).then(results => {
  console.log(results);
})
.catch(error => {
  console.error('Error:', error);
});


// Challenges:

// Test the code above. What happened? Explain below: 
// Promise.all waits for all promises to resolve before it resolves.

// Add another Promise to the Array of promises (line 22)
// make your promise resolve in 10ms. Test your work. 
// How long did it take for all of the promises to resolve?
// it took 3 seconds becuase the longest promise took 3 seconds to resolve

// Make one of the Promises fail by calling reject. What happens? 
// The catch block is executed

// Add a catch() block to the end of `Promise.all().then()`. 
// Handle your error here.


// What happens when one Promise fails? 
// They all fail 
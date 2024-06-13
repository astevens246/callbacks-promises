const tortise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tortise Wins!");
  }, 1000);
});

const hare = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hare fails!");
  }, 2000);
});

const cheetah = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Cheetah fails!");
  }, 500);
});

const sloth = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sloth wins!");
  }, 1500);
});

Promise.race([tortise, hare, cheetah, sloth]).then(result => {
  console.log(result);
})
.catch(error => {
  console.error('An error occurred:', error);
});


// Challenge!

// Test the code above. Explain what happens below:
// It only waits for the first promise to resolve, which is the tortoise

// Add two more racers. Give one a time of 500 and the other a 
// time of 1500. Who wins now? 
// Cheetah wins becuase it has the shortest time



// Make Promise of the Hare reject. What happens? Who wins? 
// The cheetah still wins because it has the shortest time. It timed out before the hare rejected

// Make the fastest racer reject? What happens? 
// Throws the error and the cheetah fails 